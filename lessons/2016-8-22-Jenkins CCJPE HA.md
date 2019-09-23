---
layout: post
title:  "CCJPE: Jenkins High Availability"
date:   2016-8-22 12:00:00 -0500
categories: Jenkins
permalink: lessons/jenkins-ha
excerpt: "Learn how to set up Jenkins HA!"
weight: 11
image: 'jenkinscourse.png'
difficulty: hard

---
{% include youtube.html id="zHavme2iaFA" %}
{% include hired3.html %}

1. Table of Contents
{:title="Table of Contents"}
{:toc}

Introduction
------------
Welcome to the DevOps Library!  This is Samantha, and today we're going to set
up the Enterprise edition of Jenkins!  Up until now, we've only been using the
open-source version, but for the rest of this course, we'll mainly be focusing
on enterprise functionality.

Additionally, we're going to set up Jenkins the RIGHT way, in full HA mode,
with two masters sitting behind a load balancer.

Before we begin, we'd like to give a quick shout out to
[Hired.com](http://www.hired.com/devopslibrary) for being kind enough to sponsor
our Jenkins course. If you aren’t familiar with Hired, it’s a great company that
completely reverses the traditional job search, by having companies apply to
you, instead of you always doing the tedious work of applying.

Thousands of companies look to Hired to connect with the best of the best in our
field, like you!  OH.  And if you do end up signing up through our [personal  link](http://www.hired.com/devopslibrary), and landing a new job, Hired will give you a 2k bonus for being a loyal
supporter of the DevOps Library!

Getting Started
---------------
Alright, let’s go ahead and get started.  First, we're going to spin up two
Ubuntu 14.04 instances on AWS.  We recommend spinning them up in two different
availability zones, that way Jenkins can survive an entire Amazon zone being
unavailable.

To speed up the process, we have two cloud config files that you can use below,
the only difference between them is the hostname.

[https://www.devopslibrary.com/scripts/jenkins01.yaml](https://www.devopslibrary.com/scripts/jenkins01.yaml)
[https://www.devopslibrary.com/scripts/jenkins02.yaml](https://www.devopslibrary.com/scripts/jenkins02.yaml)

``` yaml
#cloud-config
hostname: jenkins01
fqdn: jenkins01
manage_etc_hosts: true
runcmd:
  - add-apt-repository ppa:webupd8team/java -y
  - echo 'deb http://nectar-downloads.cloudbees.com/nectar/debian binary/' >> /etc/apt/sources.list
  - echo debconf shared/accepted-oracle-license-v1-1 select true | debconf-set-selections
  - echo debconf shared/accepted-oracle-license-v1-1 seen true | debconf-set-selections
  - wget -q -O - http://nectar-downloads.cloudbees.com/nectar/debian/cloudbees.com.key | sudo apt-key add -
  - apt-get update
  - apt-get install oracle-java8-installer nfs-common -y
```

Configuration
-------------
If you'd prefer to configure both instances manually, the only thing we're doing
in the cloud config is installing Java 8, NFS support, and adding the Jenkins
enterprise repositories.  Make sure you don't install Jenkins yet as we do need
to configure shared storage.

Jenkins High Availability requires that both masters share an identical
"$JENKINS_HOME" folder.  Technically that means that you could MacGyver
something using rsync or some other method, but we HIGHLY recommend using shared
storage.

Setting up Shared Storage
-------------------------
Since we're on AWS, we'll use Amazon's EFS service to create a new NFS
shared file system.  We do need to make sure we have the right availability
zones and security groups selected, but overall it's very easy to set up.

After the EFS share comes up, click the "DNS Names" link. You should see a DNS
entry for each availability zone, we'll use these to mount the storage to our instances.

Alright, let's go ahead and SSH into both Jenkins VMs.

Run:

``` bash
mkdir /var/lib/jenkins
```

That will create a directory for our Jenkins home.  Next, open up your
`/etc/fstab` file and add the following line:

``` bash
us-west-2.amazonaws.com:/ /var/lib/jenkins nfs4 rw,hard,intr 0 2
```

This is the line where we'll need to make sure we use the right DNS name for
each zone, but other than that it's pretty easy.  Alright, go ahead and save the
file, then run "mount -a" to mount the storage, or you can just restart the
instance.

You can also run `df -h` if you'd like to double check that the NFS share
mounted correctly.  If it is, you'll see it listed like we do here.

Installing Cloudbees Jenkins Platform
-------------------------------------
Ok, at this point, make sure you've got our NFS share mounted on both instances,
then run an `apt-get install jenkins` on **jenkins01**.  Once the install
completes, you can access the Jenkins web UI on port 8080.

Since this is the enterprise version of Jenkins, you will need to request a
trial license before you can do anything else.  After you complete the
registration, go ahead and do a Jenkins install on the second AWS instance.

Jenkins High Availability Overview
----------------------------------
While that's installing, let's talk a little more in depth about what Jenkins
High Availability is, and what it is not.  Essentially, the Enterprise Jenkins
HA plugin uses Jgroups to configure active/passive high availability when it
detects that two masters are sharing the same Jenkins home.

Because we installed Jenkins on the **Jenkins01** instance first, it'll start
out as our "primary" instance.

If you try to access **Jenkins02** on port 8080 on the other hand, you'll see a
message letting you know that the node is standing by in case the primary
instance fails.  Effectively, a Jenkins fail-over results in the shutting down
of the current Jenkins master, followed by it starting up on a second server.

Failover Overview
-----------------
Because both masters share the same *$JENKINS_HOME*, a failover has the
following characteristics.  The following will all survive a failover event:

* Jenkins Settings
* Configuration of Jobs & Users
* Fingerprints
* Records of Builds
* Artifacts
* Test Reports

However, by default, any builds that were in-progress won't survive.  Don't worry--
Cloudbees has released two plugins to address this issue.  The [Restart Aborted Builds](https://www.cloudbees.com/products/cloudbees-jenkins-platform/enterprise-edition/features/restart-aborted-builds-plugin) plugin makes it easy to kick off any jobs that were
running during a restart or failover event.

Or, by using the [Long-Running Build](https://www.cloudbees.com/products/cloudbees-jenkins-platform/enterprise-edition/features/long-running-build-plugin) plugin, you can create jobs that survive master restarts, although
you'll have to change your jobs project type from FreeStyle to "Long Running
Projects".

HA Health Checks
----------------
Alright, at this point, you should have two masters configured.  Visit both of
the Jenkins master URLs in your web browser, followed by **/ha/health-check**.

**Jenkins01** should return *Running as primary*, and **Jenkins02** should
return *Running as standby*.  Excellent job!!  If we were to shut down or have
**Jenkins01** crash, **Jenkins02** would automatically take its place as primary.
The problem though is that our users would still have to change URLs after any
failover.  That's why we still have one final step; we need to set up a load
balancer!

Setting up a Load Balancer
--------------------------
If you're not using AWS, your best bet is probably going to be something like
[HAproxy](http://www.haproxy.org/), or even an [F5](https://f5.com/products/big-ip)
if you have the budget.  Thankfully for us, we can quickly set up an [Amazon ELB](https://aws.amazon.com/elasticloadbalancing/), or "Elastic Load Balancer".
Let's go ahead and do that now.

On your AWS console, click "Load Balancers", then "Create Load Balancer".
Select "Classic Load Balancer", as we'll need to route both HTTP for the web
interface, as well as a TCP port for JNLP.

Feel free to name the balancer whatever you'd like, then use port 80 for the
listener port, and port 8080 on the instances.  That way any traffic that comes
in on port 80 to the load balancer will automatically be redirected to port 80
on the primary instance.  You'll also want to add a TCP port for JNLP.
We like to use 10001, but it doesn't matter what you use as long as it matches
what you configure under your Global Security settings.

Configure ELB Health Check
--------------------------
Next, after you select a security group, we need to set up a health check.
This is how Amazon determines to which instance traffic should flow.  Remember
that **/ha/health-check** URL we went to earlier?  Use that for the ping path.
That way, the only instance that AWS will see as healthy is the one currently
running as primary.

You'll also want to lower the response timeout, interval, and healthy threshold.
If you copy the settings we have here, and the primary master goes down, you
should only experience a minute or two of downtime in the event of a failover,
give or take depending on how many plugins and jobs you're using.

Alright, add the two instances, then finish creating the load balancer.
Within a few minutes, the status of the load balancer should show one of two
instances as healthy.  Once you see that, go ahead and pull up the load balancer
DNS name up in your browser.

There we go!!! Great job!!  You've successfully set up the Cloudbees Enterprise
Jenkins platform, and not only that, we're running it in full high availability
mode!!!  Aside from a few performance and security tweaks, these guys are ready
for production use!!  Right now we should be running off of **Jenkins01**.

Testing Failover
----------------
If you'd like to test a failover, go ahead and crash that VM or power it off,
then refresh the URL to our load balancer.  Within a few minutes, the secondary
master should automatically take over as the primary, and our ELB will now point
us to the new master.  There we go!!  Cool huh?  You've done a fantastic job in
this episode, thank you for watching!

Conclusion & Shoutout
---------------------------------
We'd like to give another special shout out to [Hired.com](http://www.hired.com/devopslibrary) for
sponsoring this course.  If you're into DevOps, there's a pretty good chance
you've had to deal with pushy recruiters and countless emails, as well as spent
many hours searching for DevOps opportunities.

The reason we love using [Hired.com](http://www.hired.com/devopslibrary) is that
it completely reverses this situation and puts the power back in your hands, by
having companies send you interview requests that you can choose to pursue.
(They even come with upfront salary and equity!)

By having you fill out information that is specific to what you’re looking for
and your individual strengths and talents, it ensures that the only companies
you'll hear from will be a great fit for you.  Plus, Hired is entirely free, and
they’ll even give you a $2,000 bonus after you land a job, using our DevOps
Library link!

We highly recommend giving them a shot, they do a fantastic job, especially for
the DevOps community.

Thanks for Watching!
--------------------
[Subscribe to our YouTube channel](https://www.youtube.com/channel/UCOnioSzUZS-ZqsRnf38V2nA?sub_confirmation=1) or follow [DevOpsLibrary on Twitter](https://twitter.com/intent/user?screen_name=devopslibrary).

{% include subscribe.html %}
