---
layout: post
title:  "CCJPE: Jenkins Jobs"
date:   2016-4-14 12:00:00 -0500
categories: Jenkins
permalink: lessons/jenkins-jobs
excerpt: "A jenkins job is just something that we want our Jenkins server to do, which can really be anything."  
weight: 3
difficulty: easy

---
{% include youtube.html id="mxztjoJX2LU" %}

Introduction
------------
Welcome to the DevOps Library!  This is Samantha, and today we’re going to cover Jenkins Jobs!  What is a job you ask? Essentially it’s just something that we want our Jenkins server to do, which can really be anything.  You could set up a job that pulls application code from git, and compiles it.  Or a job that deploys the code to a bunch of servers, and some to run automated tests after the app has been deployed.  

Or maybe you’re not on a dev or build team, maybe you’re a system admin or on an operations team.  You could have a job set up to run once a day that simply updates a VMware template.  The point is, Jenkins Jobs are incredibly flexible, and it’s really up to you on what you want them to do for you.

Getting Started
---------------
For now, though, let’s pretend we want to do something really simple.  We’re going to create a job that simply tells us how much free space we have left on our Jenkins server.  

First, go to your Jenkins Web UI.  If you don’t already have a Jenkins master set up, feel free to watch our last lesson then come back once you’re ready.

Next, click “New Item” at the top left menu, OR click the “create new jobs” link in the middle of the screen, both of them will take you to the New Item page.

Alright, now on this page, you’ll see that we have 4 different types of jobs to choose from, also commonly referred to as projects.  The first type of job is called a **"FreeStyle Software Project"**, which is by far the most flexible and commonly used.  If someone mentions a **"Basic"** Jenkins job, this is the type of job that they’re talking about.  

Next up we have **"Maven Projects"**.  This type of job is specifically designed for Maven Projects, and tells Jenkins to look for a *pom.xml* file to make it easier to set up the project.  

Third, we have **"External"** jobs.  An external job is exactly what it sounds like, it’s just a way for you to use Jenkins to monitor processes outside of Jenkins.  While not commonly used, they can come in handy in some unique scenarios.

Lastly, we have the **"Multi-Configuration Project"** job type.  These are extremely powerful, and are often used when you need to run a job with different combinations of parameters.

Creating a FreeStyle job
------------------------
In this lesson, we’re going to focus on creating a **"FreeStyle Project Job"**, so go ahead and select that now, name the job, then click Ok.  Don’t worry, we will be covering the other types of jobs in later lessons, but for now let’s stick with the basics!

Alright, let’s go through all of the options on our configuration page.  And, by the way, feel free to click on the blue question marks next to each item if you’d like more information on that section.  

First up, we have the Project Name, and description, which should both be pretty self-explanatory.  

Next, we have *"Discard Old Builds"*.  Go ahead and check this box, then type 10 in the *"Max Number of Builds to Keep"*.  A *"build"* is simply the result of a job run, so each time Jenkins runs a job, it saves the output.  By checking the box, we’re telling Jenkins that we want to throw out old runs, and by setting the max number of builds to keep to 10, we’ll still have the history of the 10 most recent times our job has been run.
It’s completely your preference, but we do recommend setting a limit!

Next up, if you’d like the user to be prompted with a choice, or be required to provide a parameter when the job is being started, select the *"This build is parameterized"* box.  We’ll go far more in depth on Jenkins parameters in a later lesson, as you can do some pretty amazing stuff with them.

Next, *"Disable Build"* simply disables the build, which may be useful if you want to prevent someone from using a job that you haven’t finished yet.
*"Execute Concurrent Builds if Necessary"* should only be used when it’s O-K to have the same job running multiple times simultaneously, otherwise Jenkins will wait for the first run to complete before letting the next one start.

Alright, go ahead and click the *"Advanced*"" button.  Under here we have a few less commonly used options.  A *"quiet period"* is simply used to make the job sleep for a given amount of time before it’s built.  

If you have a job that’s unreliable, you can use the *"Retry Count"* option to automatically rerun a failed job as many times as you’d like.
The *"Block build when upstream project is building"* is used when this job is triggered by another job.  If the upstream job is currently running, this job will be blocked from running until it completes if this is selected.  

The *"Block build when downstream project is building"* does the exactly the opposite.  If we select it, any jobs that are triggered from this job will be blocked if this one is currently running.

The *"custom workspace"* option is used to override where the Jenkins job is being ran, and should be avoided if possible.

By default, the name we gave the Jenkins job is the one that’s displayed.  If you’d like to give it a different display name you can, but we HIGHLY recommend against doing so, as it tends to just make things confusing.

Finally, the last advanced option, *"Keep Build Logs of Dependencies"*, protects any builds that are referenced from this project by other jobs from being deleted, that way you can always tag your complete dependencies.

Almost finished, just a few more to go through left!

The *"Source Code Management"* section will be covered in depth in a later lesson, but essentially it’s used to have Jenkins pull code from a repository.  It’s VERY useful, trust me!

Now onto *"Build Triggers"*.  Normally, in order for a Jenkins job to run, someone has to start it, or in Jenkins terminology, *"build the job"*.  Build triggers are used to automatically trigger a build, whether that’s when a previous job has run, if you want to run the job on a periodic schedule, or when someone commits something new to source control is completely up to you!

Lastly, we have build steps and Post-Build actions.  A build step is the actual thing that we want our job to do, and a Post-Build action is usually used for notifications, or triggering another job to run.

Let’s go ahead and add a *"Build Step"* now.

Select *"Execute Shell"*, then in the command window, type ```df –h```.  Now click *"Save"* at the bottom of the page.

Wow, that took a while, but we finally have our first job!  Go ahead and click “Build Now” to start the job.  Now over in the build history, click the build, then on the next page click *"Console Output"*.

Conclusion
----------
Behold!  There’s the output from our free space command!!!  You’ve done a great job so far!!  While our job is pretty simple, you should have a pretty good understanding of Jenkins jobs now!  Thank you so much for watching, we’ll see you again soon!
