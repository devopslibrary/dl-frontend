---
layout: post
title:  "CCJPE: Jenkins Windows Slave"
date:   2015-10-13 12:00:00 -0500
categories: Jenkins
permalink: lessons/jenkins-slaves-powershell
excerpt: "We’ll be starting out with two servers, a Jenkins master, and a fresh Server 2012 R2 VM with the latest Java JDK and .NET 3.5 installed."
weight: 10
difficulty: easy

---
{% include youtube.html id="AN_uc9YqEC4" %}

[Download VagrantFile: http://devopslibrary.com/episode5-jenkins.zip ](http://devopslibrary.com/episode5-jenkins.zip)

Introduction
------------
Welcome to the Devops Library, this is episode 5.  Special shout out to Phil Porada for his suggestion of featuring a Jenkins tutorial, so today we’re going to talk about Jenkins slaves, and PowerShell jobs.  We’ll be starting out with two servers, a Jenkins master, and a fresh Server 2012 R2 VM with the latest Java JDK and .NET 3.5 installed.  If you’d like to get started quickly, download our Vagrant File or watch the previous Jenkins episode which should help you.

Alright let’s go. We find ourselves at a fresh Jenkins install, ready to create a job.  But this time, we want to run Powershell not Bash.  As our Jenkins master was installed on a Linux server, we can’t run Powershell directly from it, but we can run it on a Windows Jenkins Slave.  Keep in mind you can always install the Jenkins master on Windows, but we recommend using Linux unless you’re exclusively a Windows shop.  Now what is a Jenkins slave you ask?  A slave is just a server that you’ve set up within Jenkins that you can run your jobs from.  For performance, it’s actually better to never run the jobs themselves directly on the master, and to always use slaves.

Setting up a Windows Slave
--------------------------
Today, we’re going to start by setting up our first slave, a Windows server.  Start by clicking “manage Jenkins”, then head to “Manage Nodes”.  Here you should see a single node named “master”.  That’s our Jenkins master that’s also running the WebUI.  Let’s click “New Node”.  Select Dumb Slave, and give the slave a name, we’ll just name ours winslave01.  Click ok.

Go ahead and fill in a description if you’d like, now look at the number of executors.  The number of executors determines how many jobs can be ran simultaneously on this slave, so if you have 2 executors, and 5 jobs scheduled, 3 of them will be held until the first two finish.  If you haven’t gathered much performance data, a pretty safe method is to set this number to the amount of cores the slave server has.  Now for the remote directory, we’re going to type C:\jenkins.  Let’s go ahead and quickly RDP into our Windows server and create that folder.  If you don’t create the folder, Jenkins will fail to install on the slave.

Alright, now back to Jenkins.  On the line that says Labels, just type windows.  Labels are used when setting up jobs, they allow you to specify which slaves the job will be run on.  Now change the Launch method to “Launch slave agents via Java WebStart”.  If we were setting up a Linux slave, it’s easiest to launch via SSH, but trust us when we say to use webstart for Windows slaves.

Now hit save.  Jenkins should return you to the nodes page, and you’ll see that our windows slave has an X on it because it’s not connected, go ahead and click that now.  Right click the Launch button, and copy the shortcut.  Now switch to our Windows server and visit that URL.  Run the application, and you should see a little Jenkins butler window show up. At this point, the slave is live, but let’s do one more thing.  At the top left of the window, hit the File dropdown and click install as Windows Service.  That’s all you have to do, now we have a Windows slave.

Adding the PowerShell Plugin
----------------------------
Head back to the Jenkins homepage.  On the left hand side of the screen you should now see “master” and winslave01 under the build executors.  We have one last thing that we need to do to be able to run Powershell commands.  By default, when creating a job, Jenkins will only give you the option of running a shell or windows batch command.  We need to install a plugin to support Powershell.  Go back to manage Jenkins, then hit manage plugins.  Click the available tab, and feel free to browse the huge collection available.  We’re going to select the “Powershell Plugin”.  Check it, and hit Download now and install after restart.  Now check the box that says restart Jenkins when installation completes.  Jenkins will now wait until all jobs have finished running, install the plugin, and quickly restart.

Creating a Job
--------------
Now that we have the plugin, let’s create our first Powershell job.  Click new item, name the job, select freestyle project and hit ok.  First, let’s make sure that this job will only run on our Windows slaves.  Check the box that says “restrict where this project can run”, and type in the label we created earlier, “windows”.  Under Build, add a build step for Windows Powershell.  Type a powershell command, we’ll use “Get-Help”, then save the job.

Conclusion
----------
Now let’s run it.  Click build now, then go to the console output.  You should now see the output of your first Powershell job!  Congrats!  There is so much more that you can do with Jenkins, and remember you can always add more slaves, or design the jobs to run commands on remote servers using ssh or WinRM.  As always, please let us know what you’d like to see more of in the comments.
