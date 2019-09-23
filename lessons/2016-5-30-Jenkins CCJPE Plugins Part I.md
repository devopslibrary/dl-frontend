---
layout: post
title:  "CCJPE: Plugins Part I"
date:   2016-5-30 12:00:00 -0500
categories: Jenkins
permalink: lessons/jenkins-plugins-1
excerpt: "In this lesson we’re going to cover the first half of the open source Jenkins plugins on the CCJPE"
weight: 6
difficulty: easy

---
{% include youtube.html id="IdvqNRTgId4" %}

Introduction
------------
Welcome to the DevOps Library!  This is Samantha, and in this lesson we’re going to cover the first half of the open source Jenkins plugins on the CCJPE.  We aren’t going to go too in depth because you only need a basic familiarity for the exam, and some of these plugins could take up an entire lesson on their own.  Even if you aren’t taking the test we guarantee you’ll want to use at least a couple of these plugins by the end of the lesson.  

If you’d like to follow along with a preconfigured Jenkins master, we have an AWS cloud config file below with all of the plugins preinstalled.

[Jenkins Cloud Config Download](http://www.devopslibrary.com/jenkinscloud.txt)

Alright, let’s go ahead and get started!

Amazon EC2 Plugin
-----------------
First up, we have the **Amazon EC2** plugin.  This plugin is used to automatically spin up new Jenkins slaves primarily on *Amazon's EC2*, but you can also use it with *Eucalyptus* or *Docker* as well.  While it does take a little bit of work to get configured, the benefits can be tremendous.  

Let’s imagine we have a set of jobs that collectively take forever to run.  
With this plugin, we could configure Jenkins to automatically spin up new slaves on AWS, run the jobs on them, and if the nodes are left unused for a bit, automatically terminate the instances as well, that way we don’t waste any extra money on Amazon.

Build Pipeline Plugin
---------------------
Next we have the “Build Pipeline Plugin”, which is used to create a view of a basic pipeline, which tends to consist of several upstream and downstream jobs.  It also adds functionality to create manual triggers for jobs that require intervention before execution.  Sound confusing?  Don’t worry it’s not at all!  Let’s take a look at our example!  

Here we have a build pipeline view consisting of three jobs.  First we have the “Deploy Dev” job, which has a downstream job of “Deploy QA”, which in turn has a downstream job of “Deploy Production”.  A job is considered “downstream” when it’s triggered by another job.  The job doing the triggering is called the “upstream” job, and as you can see, the build pipeline plugin is able to automatically create a nice, albeit somewhat ugly view for us.
While this plugin is certainly useful, make sure you don’t confuse the “Build Pipeline Plugin” on the exam with the newer and much more impressive “Pipeline Plugin” that we’ll be covering later.

Cloudbees Docker Build and Publish Plugin  
-----------------------------------------
Alright, next up is the “Cloudbees Docker Build and Publish Plugin”.  This plugin does almost exactly what it sounds like it does.  Basically, you just provide a Dockerfile to the build job, and specify a Docker registry, and then Jenkins will create and publish the container automatically to the registry for you.  When taking the exam, make sure you do NOT confuse this plugin with the “Docker Plugin”, which is used for dynamically provisioning Jenkins slaves with docker.

Also, if you’d like to use the Docker Build and Publish Plugin to publish to the Docker hub registry, make sure you use the URL we have listed here, along with credentials with permission to the registry.

Cloudbees Folders Plugin
------------------------
Now onto the Cloudbees Folders Plugin.  This plugin simply gives you the ability to create folders for organizing jobs and views.  You can also nest folders within folders if you’d like, and even use a custom icon if you’d like.  This plugin is essentially the barebones free equivalent of the enterprise only “Folders Plus Plugin”, which provides quite a bit more functionality.  Don’t worry, we’ll cover the enterprise plugins in another lesson!

Copy Artifact Plugin
--------------------
Next we have the “Copy Artifact Plugin”.  While simple, this plugin can be quite useful.  It simply adds a “Build Step” you can use to copy build artifacts from one build to another.  You can choose which build you’d like to pull from, and even filter which files are copied.  Each artifact that’s copied is also automatically fingerprinted for you.  Here let’s go ahead and take a look at how it works.

First, we have our “Copy Artifact Source Job”, which essentially just creates a text file artifact named “facts.txt”.  Then in our “Copy Artifact Destination Job”, you can see we have a build step used to copy the artifacts from the other job to this one’s workspace.  Let’s go ahead and run the job now:

Perfect!  See?  Pretty simple, but handy nonetheless, especially when you’re creating jobs for code packaging or deployments!

Credentials Plugin
------------------
Alright, we’re now onto one of the plugins pretty much everyone should use.  The “Credentials Plugin” makes it so that we can securely store credentials and other secrets within Jenkins.  This plugin is used by quite a few others, and there’s a good chance you already have it installed.  In our demo job, we’re simply using it along with the “Credentials Binding” plugin to provide a username and password to our shell script build step.  
While you certainly wouldn’t want to echo out credentials, we went ahead and did that here, that way we can see that Jenkins did pass our username and password in to the job.

Disk Usage Plugin
-----------------
Now onto another useful Jenkins add-on.  The “Disk Usage Plugin” adds a page under “Manage Jenkins” that provides an overview of disk usage updated hourly.  Additionally, you can view the disk usage of each job directly on its project page.  While this plugin may not seem too important at first, as your builds start to grow, it can be very helpful for figuring out where all of your free space is going.

Docker Plugin
-------------
Next we the “Docker Plugin”.  As we mentioned a little bit earlier, this plugin is used for dynamically creating new Jenkins slaves, running a single build, then tearing down the slave.  You can also optionally save the container, which can come in handy for QA purposes.  While it is a bit of a pain to set this plugin up, it has several benefits, including clean, reproducible builds, and the containers themselves are very light weight.  If using Docker is an option, you’ll probably want to use this plugin, just make sure you don’t confuse it with the Docker Build and Publish Plugin on the exam!

Email-Ext Plugin
----------------
Alright, next is the Email-Ext Plugin.  This plugin adds a post build action named “Editable Email Notification”, which we’ll go ahead and take a quick look at now.  First, as you can see, we have the normal built-in Jenkins Email Notification, and as you can see, we really don’t have many options.  On the other hand, let’s take a look at the Editable Email Notification option.  We’re now able to specify pretty much everything, from the subject of the email, the exact content, attachments, and so on.  You can even use custom groovy scripts to make even more changes if you’d like, it’s a very powerful plugin.  If you’re planning on customizing the emails that Jenkins sends out at all, we highly recommend installing this plugin.

Fingerprint Plugin
------------------
Next up, the Fingerprint Plugin.  This plugin simply adds a build step for generating fingerprints instead of needing to wait for a job to complete before being fingerprinted.  If you’re not familiar with fingerprints, you’ll definitely want to be before you take the CCJPE!  Essentially a fingerprint is just Jenkins terminology for a MD5 checksum of an artifact, and also contains usage information, that way Jenkins can track when and where an artifact from a build has been used.  To generate fingerprints, simply check the box named “Fingerprint all archived artifacts” under the advanced button on an “Archive the artifacts” build step.  Or, now that you have this plugin, you can also generate fingerprints by using the “Fingerprint Files” build step.  

If you’re ever trying to make sure that the files you’re using in one job are definitely the same files from another build, fingerprints are definitely the way to go.  Don’t try to McGyver something by creating a versions file or anything like that.  The only real way for Jenkins to figure out dependencies is by using fingerprints, so make sure you remember that for the exam!  

Git Plugin
----------
Alright, let’s try to get one last plugin in before we call it a lesson.  The “Git Plugin” should already be pretty familiar to you if you’ve been following along, but if not don’t worry!  It simply adds Git as an option for source code management.  One thing to note however is that this plugin depends on Git being installed on the node running the job, so make sure you have it installed on your master and any slave nodes that will be pulling from a Git repository.

Conclusion
----------
Well that’s it for today!  Thank you so much for watching, we’ll see you again soon!  If you like our videos and want to help us to continue making them, please consider supporting us on Patreon!  We’ll even add you to the high scores list at the end of each video!  Thanks again, see you again soon!
