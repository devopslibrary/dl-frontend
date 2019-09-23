---
layout: post
title:  "Jenkins for Operations"
date:   2015-10-13 12:00:00 -0500
permalink: /courses/jenkins/
excerpt: "If you haven't heard of Jenkins, it's something that your developer friends have probably been using for several years, but it can help tremendously"

---
{% include youtube.html id="OfptBK8AB_c" %}

Introduction
------------
If you haven’t heard of Jenkins, it’s something that your developer friends have probably been using for several years, but it can help tremendously on the operations side as well. Jenkins is an open source continuous integration and build server, what this basically means for operations is that it provides a great place to run things over and over reliably, and connects easily to a variety of other tools such as source control.

An even simpler explanation is that if you have a bunch of scripts that your team runs regularly, Jenkins will give you the perfect interface for running those scripts on any and as many servers as you’d like, while also tracking who ran what and when.

Let me go ahead and show you a little bit about what we’re talking about.  Once you’ve installed Jenkins, this is exactly what the interface is going to look like.  
*Note–If you need help installing Jenkins, just visit wiki.jenkins-ci.org or use our Vagrant file to get started immediately.*

Creating a Job
--------------
Now back to Jenkins.  Jenkins uses the word job to refer to any process that consists of a step, or multiple steps to run.  We’re going to begin by creating a job that’s runs a short bash script.  Click “create new job”, name the job, and select “Freestyle Project” and hit ok.  Now you should see the job creation screen.  Type in a description of the job if you’d like, then scroll down to Build.  Click Add build step, select “Execute Shell”, then type in a bash command or script that you’d like to run.  Now hit save.

You should now see the summary page for the job.  You can hit Build Now to run the job, go ahead and try that now.  You should see a little blue ball show up under build history, for some reason Jenkins defaults to blue being the color of success, but you can change that to green easily, anyway click that link.

Now go to “Console Output”, you’ll see the output of the command exactly as if you had ran the script yourself on the server.  You’ll also see who started the job, which will default to anonymous until you set up authentication.  On that note, Jenkins supports LDAP, and a variety of other authentication schemes, with a ton of options for setting permissions.  You could have one team that makes jobs, and another that can only run them for instance.

Parameterized Job
-----------------
Now let’s try making a slightly more complicated job.  Let’s say you want to run a script that creates a folder, but you want to specify the name of the folder.  Go back to the Jenkins home page, create a new job, but this time, check the box that says “This build is parameterized” on the job configuration page.  The click add parameter, and choose string parameter.  Go ahead and give the string a name, a default value if you’d like, and a description.

Now add a build step, this time type <pre>mkdir ${NameOfString}</pre> on the first line, hit enter, then type <pre>ls</pre>.

Go ahead and look at the Post-Build actions while you’re here, you’ll see that you can automatically send out an email when a job fails, trigger other jobs, and a handful of other options.  Don’t worry about adding any right now, but later on they’ll come in handy.

Now hit save.  Try to build the job, you will see that it now asks you to fill in a parameter.  Type in whatever you would like the name of the folder to be and hit build.  Run it one more time, this time using a different name for the folder, then view the console output.  You should now see that both folders have been created using the name that you specified.

Conclusion
----------
While this is just a tiny fraction of what you can do with Jenkins, once you get the hang of it, your team can set up jobs for just about any task you can imagine, using Bash, Powershell, Github for version control, automated testing to verify that jobs have completed, and pretty much anything else you can think of.  Thanks for watching, let us know if you have any questions!
