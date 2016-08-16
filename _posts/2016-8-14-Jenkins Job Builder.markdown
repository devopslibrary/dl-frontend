---
layout: post
title:  "CCJPE: Jenkins Job Builder"
date:   2016-8-14 12:00:00 -0500
categories: Jenkins
permalink: lessons/ccjpe-jjb
excerpt: "Generating Jenkins Jobs from YAML! :D"
weight: 11
image: 'jenkinscourse.png'
difficulty: hard

---
{% include youtube.html id="SoP05dLe5kA" %}
{% include hired2.html %}

Introduction
------------
Welcome to the DevOps Library!  This is Samantha, and in this lesson, we're
going to cover one of our all-time favorite Jenkins add-ons, **Jenkins Job
Builder**.  Up until now, you've probably been setting up each of your jobs by
hand through the Jenkins Web UI.  While that does work for a while, after a
dozen jobs or so it starts to become pretty tedious and error prone.

Additionally, there’s also a good chance that none of your Jenkins configuration
is version controlled, but all of that's about to change!

**Jenkins Job Builder**, or **JJB** for short, uses simple human readable YAML
or JSON files to generate Jenkins jobs.  This has several advantages; Jenkins
configuration stored as code, auditable version controlled jobs, and reusable
job templates and macros.  It's also very easy to use!

Thank you Hired.com
-------------------
Before we begin, we'd like to give a quick shout out to
[Hired.com](http://www.hired.com/devopslibrary) for being kind enough to sponsor
our Jenkins course. If you aren’t familiar with
[Hired](http://www.hired.com/devopslibrary), it’s a really cool company that
completely reverses the traditional job search, by having companies apply to
you, instead of you always doing the tedious work of applying.

Thousands of companies look to Hired to connect with the best of the best in our
field, like you!  OH and if you do end up signing up through our own personal
link, and landing a new job, Hired will give you a 2k bonus for being a loyal
supporter of the DevOps library!  

Getting Started
---------------
Alright, let’s go ahead and get started with **Jenkins Job builder**!
First, pull up the JJB documentation at the URL below.

[http://docs.openstack.org/infra/jenkins-job-builder/](http://docs.openstack.org/infra/jenkins-job-builder/)

You might be wondering why we're going to Openstack.org for Jenkins docs.  
The reason is because **Jenkins Job builder** was actually created as part of
Openstack.  Don't worry, you don't need to actually know anything about
Openstack, we just wanted to give you a little background information! :)

Installation
------------
Alright, in this lesson we're going to install **JJB** directly on our Jenkins
master, but you can easily run it remotely if you'd prefer.  Let's go ahead and
SSH into our master.  If you're using Ubuntu, you may be tempted to just install
**JJB** using apt-get.  Don't do it!  If you do, you'll be stuck on an ancient
version that doesn't work very well. Instead, let's install it using Pip!

First, run:

``` bash
apt-get install python-pip
```

Once pip finishes installing, type:

``` bash
pip install jenkins-job-builder
```

Configuration
-------------
There we go, that's it for the installation!  We're now ready to set up our
jenkins_jobs.ini file.  We do have a template that you can use, just copy
everything we have here to ***/etc/jenkins_jobs/jenkins_jobs.ini***.

``` ini
[jenkins]
user=admin
password=f73692e127531ecf26df9f1432701415
url=http://127.0.0.1:8080
query_plugins_info=False
```

Note, you WILL need to change the password to the API token for your Jenkins
admin account.  To find it, visit the URL to your Jenkins web interface:

http://jenkinsMasterURL/me/configure  

You don’t have to have the `query plugins info = false` line, but it does speed
**JJB** up a bit.

Creating a Job
------------------
Alright, we're finally ready to create our first job!  Make a "jobs" directory,
then create a new yaml file within that folder.  We'll name ours **test.yaml**.

We've prepared a little sample for you to use, you can download it below or just
type it exactly as it appears here.  If you're not familiar with YAML, it's very
picky, so make sure you don't miss anything!

``` yaml
- job:
    name: test_job
    description: 'Automatically generated test'
    project-type: freestyle
    builders:
      - shell: 'ls'
```

Let’s go through the file a bit so that it makes sense.  First, you’ll notice
we start out with `- job`.  If you’re familiar with YAML, you’ll know this means
we’re creating a job as part of an array.  That’s because **Jenkins Job builder**
actually merges all of your YAML files together, so even though we’ll end up
with a bunch of individual jobs, they’re all actually part of one big array fed
into JJB.

That also means you can have one giant YAML file with every job, template, and
configuration, or you can break it apart into individual YAML files to stay
organized.

Alright, back to this job.  We’re setting a name, description, the project type
to freestyle, and we’re even configuring a build step to run a shell command.
Let’s go ahead and save the file.  Now make sure you're in the parent directory
of the jobs folder, then run:

`jenkins-jobs update jobs`

It should finish almost immediately, once it does, switch to the Jenkins Web UI
and refresh the page.  Perfect!  There we go!  Let's take a look at the job
configuration.  See?  We just created a brand new job without ever even needing
to use the web interface.

On top of that, we can easily store our job YAML configuration files in a git
repository or some other form of source control.  We can even do some inception
level stuff and have a Jenkins job that runs **Jenkins Job builder** anytime
someone commits to the repository, thus having Jenkins manage Jenkins.

JJB Defaults
------------
Well, we're probably getting a little ahead of ourselves, we haven't even
learned how to set defaults for our jobs yet!  If you're like most Jenkins users,
you've probably noticed that many of your jobs have things in common with each
other.  That's what defaults are for.

If you set up a "default" configuration named global, it will automatically be
applied to any of our Jenkins jobs unless we specifically say not to use it.

Let's go ahead and create another yaml file in our jobs folder.  We’ll name it
**defaults.yaml.**  For now, feel free to copy everything we have here, unless
you know what settings you'd like to use.  

``` yaml
- defaults:
    name: global
    logrotate:
      daysToKeep: 30
      numToKeep: 5
      artifactDaysToKeep: -1
      artifactNumToKeep: -1
```

This configuration tells Jenkins that by default, we only want our jobs to keep
our last five builds, for a maximum of 30 days, and that we’d like to save all
artifacts indefinitely.

Go ahead and save the file, then rerun Jenkins-jobs update jobs.  
Now refresh the Web UI.  See?  Pretty cool huh!

Templating
----------
Alright, it's finally time to learn about templates!  Templates are sort of like
the defaults file we just created, in that they allow us to reuse parts of our
configuration.  But they're a lot more flexible, especially once you understand
how to use template variables.

Let's try it out.  Reopen our test.yaml file, we’ll convert it into a template.
Change "job" to "job-template".  We’ll also change the name from `test_job` to
`{name}_job`.  Lastly, let’s replace the shell command from `ls` to `{command}`.

``` yaml
- job-template:
    name: '{name}_job'
    description: 'Automatically generated test'
    project-type: freestyle
    builders:
      - shell: '{command}'
```

Save and close the file.

Now run:

``` bash
jenkins-jobs update --delete-old jobs
```

The `delete old` switch tells **JJB** to remove any jobs that were previously
managed by **Jenkins Job builder** that shouldn't exist anymore.  Because our
job is now a job template, **JJB** deleted it from our Jenkins master.  Don't
worry, we wanted to do that!

We're now going to take our template that we just created, and use it to create
a bunch of different jobs.  To do so, we have to create a "project".  A **JJB**
project is used to collect related jobs together, and lets us provide values for
template variables.

Projects
--------
Let’s make another yaml file, we'll name this one **projects.yaml**.  For the
configuration, just give the project a name, then we'll define an array of jobs.  
Let's create two, both of them using the `{name}_job` template that we just
created.  

Next, if you remember, we defined two variables within our template, `name` and
`command`.  We now need to define those values.  Feel free to use whatever you'd
like.  For our example, we'll make the first job retrieve free disk space, and
the second one will list everything under /etc.

That's it!  Save the file, then rerun our **JJB** update command.  Now let's
look one final time at Jenkins!

Great job!!  We now have two brand new jobs, both created from the same
template.  There's a ton more you can do with **Jenkins Job builder**, but
you're off to a great start!

Conclusion
----------
As always thanks for watching, and a special thanks goes to Hired for sponsoring
this course.  If you're into DevOps, there's a pretty good chance you've had to
deal with pushy recruiters and countless emails, as well as spent many hours on
your own searching for good DevOps opportunities.

The reason we love using Hired is because it completely reverses this situation
and puts the power back in your hands, by having companies send you interview
requests that you can choose to pursue.
(They even come with upfront salary and equity!)

By having you fill out information that is specific to what you’re looking for
and what you feel your individual strengths and talents are, it ensures that the
only companies you'll hear from will be a great fit for you. Plus, Hired is
completely free for you, and they’ll even give you a **$2,000** bonus after you
land a job, using the DevOps library link!

We highly recommend giving them a shot, they really do a fantastic job,
especially for the DevOps community.

Thanks again for watching today!  If you like our videos, please subscribe to
our YouTube channel!  If you love them and want to help support us, visit
patreon.com/devopslibrary, we’ll even list you on our high scores at the end of
each video.  Thanks again, see you again soon!

[Subscribe to our YouTube channel](https://www.youtube.com/channel/UCOnioSzUZS-ZqsRnf38V2nA?sub_confirmation=1) or follow [DevOpsLibrary on Twitter](https://twitter.com/intent/user?screen_name=devopslibrary).  

{% include subscribe.html %}
