---
layout: post
title:  "Jenkins & GitHub + Powershell Params"
date:   2015-10-13 12:00:00 -0500
categories: Jenkins
permalink: lessons/jenkins-github-powershell-params
excerpt: "In this lesson, we're going to integrate Jenkins and Github for version control.  We'll start off with a Jenkins master running on Ubuntu, with a Server"
weight: 15
difficulty: medium

---
{% include youtube.html id="RuWMoVb_Ji0" %}

Introduction
------------
Hello! This is Samantha with the DevOpsLibrary Episode 8, today we’ll talk about how to integrate Jenkins & Github for version control. Today we’re going to start off with a Jenkins master running on Ubuntu, with a Server 2012 R2 slave. If you’ve seen our earlier videos on Jenkins you should already have a pretty good grasp on how to create jobs, but today we’ll expand on how to tie them in with version control. Let’s go ahead and get started.

Installing Plugins
------------------
First, go to manage Jenkins, then manage plugins.
Go to available, then search for “git plugin”. Go ahead and install the plugin, and check the box to restart Jenkins when the installation is complete. Note, you should also have already installed the *Powershell* plugin if you’ve been following our previous videos, if you haven’t, go ahead and do that now as well.

Now that the installation is complete, we’re going to make sure you don’t run into a bug with the Matrix project plugin like we did. Go back to manage Jenkins, then manage plugins. If you see a note at the top of the page saying that several plugins have been disabled due to cyclic dependencies, then we’ll have to downgrade the Matrix plugin. If you don’t see any errors, you’re fine.

For those who need to downgrade, just click the installed tab, and look for Matrix Project. If the version says 1.4.1, hit Downgrade, then restart Jenkins.
Alright, now we’re finally ready to set up our first version controlled job. If you’re not familiar with Github or version control, let us know in the comments and we’ll create a video covering it. For now, at least make sure you have signed up for an account on Github.com, as well as created a repository.

Installing Git
--------------
The last thing that we need to do before creating our job is ensuring the Git is installed on the master as well as our Windows Slave. On the master, just run apt-get install git.

For the WinSlave, just head to [git-scm.com](http://www.git-scm.com), then download and run the installer. Note. During the install, ensure that you select “Use Git from the Windows Command Prompt”, as we want Git to be added to our path. If you want to verify that git was installed successfully, just open up a command prompt and run git. Lastly, the Jenkins Slave service must be restarted so that it can pick up git. We’ll do that now. You could also just reboot the Windows Slave.

Creating a Job
--------------
Looks like we’re ready to finally create our job!

Now go ahead and switch back to Jenkins. Click Add New Job. We’ll name ours Github Test.
Make sure it’s a freestyle job, then hit ok. We’ll restrict the job to run on our Windows slave since we’re running Powershell, but if you’re a Linux shop feel free to follow along and use Bash.

Now under Source Code Management, select Git.

For the repository URL, use https://github.com/Username/nameOfRepo.git. We’re just going to use our DevOpsLibrary repository. Now for credentials, click Add, and enter your Github Username and Password, then hit ok.

Now click “Additional Behaviors”, then select “Check Out to a Sub-Directory”. Go ahead and leave the actual directory blank, as Jenkins will default to checking out to the job’s workspace, which is what we want.

Finally, add a build step to run Windows Powershell. Type in ./githubtest.ps1, and hit save.

Creating the PowerShell File
----------------------------
Now before we run the job, we need to actually create the githubtest.ps1 file. Go to your repository and create a new file named githubtest.ps1

Edit the file, and type in:
`Write-Host “Followed by hello world or whatever you’d like the script to say”`, then hit save.
Now commit the changes.
And sync back to github.

Testing the Job
---------------
We are finally ready to kick off our job! Go ahead and build the GitHubTest job! Now check the console output. You should see something very similar to what we’re looking at now, with Git automatically pulling our repository from Github, then running our script. There it is, our Write Host message! Great job!
We’re going to do one last thing though to show you how easy it is to update our job, as well as to add parameters. Go back to your text editor, we’re going to edit the githubtest.ps1 file. At the very top, add param($variabletest)
On the second line, add $variabletest somewhere within the Write Host line.

Now commit the changes, and sync back to Github.

Adding a Parameter
------------------
Let’s go back to Jenkins now, but before we kick the job back off, go to configure, we’re going to add a parameter in Jenkins. It’ll make sense trust me.

Look for a box that says “This build is parameterized” and check it. Click Add Parameter, and select Choice. For the name, type jenkinsvariabletest.

Now type in a couple of choices, whatever you’d like. Next, scroll all the way back down to our build step. We’re going to add –variabletest at the end, which tells Powershell what param we’re targeting. Note, you don’t HAVE to have that, but it does help for readability, as well as when you start adding more parameters. Right after that, type $env:jenkinsvariabletest test.
What this will do is grab the variable that’s set when the Jenkins job is ran (from the parameter that we set above). It’ll make sense in a second trust me, just go ahead and save the job.

Now hit build.

Notice this time, instead of building immediately, Jenkins is now presenting us with the options that we specified. Go ahead and select one, then hit build. Now view the console.

Conclusion
----------
There’s our variable! Jenkins passed it to our Powershell script, which was automatically updated by pulling from Github! You’re off to a great start on creating Jenkins jobs for operations! While we’re finished for now, we encourage you to check out the other parameter types when creating a new job. Thank you for watching!
