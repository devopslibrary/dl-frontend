---
layout: post
title:  "CCJPE: Polling & Webhooks"
date:   2016-5-15 12:00:00 -0500
categories: Jenkins
permalink: lessons/jenkins-webhooks
excerpt: "How to automatically trigger a Jenkins job anytime a change is pushed to a repository"
weight: 5
difficulty: medium

---
{% include youtube.html id="uVXO95syoEg" %}

Introduction
------------
Welcome to the DevOps Library!  This is Samantha, and in this lesson we’re going to show you how to automatically trigger a Jenkins job anytime a change is pushed to a repository.  If you’ve been following along, you should already be familiar with how to use source control within a job, if not, please watch our previous lesson named “Source Control Management”.  

Quickstart
----------
Also, if you don’t have a Jenkins server set up yet and would like to get up and going quickly, we do have a cloud-config file you can download below.  
Just use that on an Ubuntu 14.04 instance on Amazon, and you’ll have a Jenkins server ready within minutes.  Please note, we do have authentication enabled as part of the script, to login just use "admin" followed by "password" for the password.

[Jenkins Cloud Config Download](http://www.devopslibrary.com/jenkinscloud.txt)

Create Test Job
---------------
Alright, let’s go ahead and get started!  First, begin by creating a new freestyle job.  We’ll name ours **automated.website.test**.  

Next, on the job configuration page, scroll down to **Source Code management** and select **Git**.  We’re going to use the same repository that we used in the last lesson.

Now let’s write a simple little test.  Scroll down to the **Build** section, hit **Add Build Step** then Select **Execute Shell**.

Sample Test Script
------------------
Now at this point, in real life you’d probably be using a tool like *Selenium*, *CasperJS*, or any of the millions of other testing tools.  For this lesson though, we’re going to make an extremely simple test.  

{% highlight bash %}
if grep -q error test.html; then
    echo Error Found
    exit 1
else
    echo No errors!
    exit 0
fi
{% endhighlight %}

We went ahead and made one, which you can copy and paste if you’d like to follow along, but feel free to make a test that makes sense for your environment.

Ours simply checks a file named test.html within our repository, and reports success unless the file contains the word “error”.  

This is the latest version of the file in our repository, and as you can tell it’s currently perfect, with no errors!

{% highlight html %}
<sample>I don't contain any issues...yet.</sample>
{% endhighlight %}

Notifications
-------------
Alright, back to the job configuration.  Let’s also add a “Post-Build action”.  
Select email notification, type in an email address, and check the box that says “Send separate e-mails to individuals who broke the build”. That way, we can let our team know if the test fails, as well as the last person to make a change.  

Now go ahead and save the job.

Click “Build Now”, that way we can verify that the automated test passes successfully.  

Perfect, just like we expected, no errors and no emails!

Pretty useful huh?  But wouldn’t it be nicer if this job ran automatically every time a change is made to the repository, instead of us needing to kick it off by hand?  That’s what polling and web hooks are for!  

Polling
-------
First, let’s talk about polling.  Go back to the job configuration, and scroll back down to “Build Triggers” section.  A build trigger is simply something used to automatically start a build when something happens.  Check the box that says “Poll SCM”.

Now in the schedule box, type H/15 followed by four stars.

What this does, is it tells Jenkins to poll, or check our repository for changes every 15 minutes.  If a change is found, Jenkins will run trigger our **automated.website.test** job.  While polling IS very handy, and extremely easy to set up, it does have some drawbacks.  First off, we now have the overhead of Jenkins checking the repository every 15 minutes.

While that isn’t much in itself, imagine if we had several hundred or even thousand tests checking back in with our repository periodically.  Secondly, let’s say you just committed a change and want to know if it passed testing successfully.  Depending on when Jenkins last polled the repo, you may be left waiting another 10 minutes or more before the test even starts.

Webhooks
--------
Don’t worry though, **Webhooks** solve all of these problems!  

Let’s go ahead and uncheck the **Poll SCM**, as we don’t want to use polling.  

Save the job

Go to manage Jenkins, followed by manage plugins.

Now select the available tab, then search for and install the **Github plugin**.

As always, you’ll need to wait for **Jenkins** to restart, but it’s worth it, as this plugin is SUPER useful for setting up web hooks.  

Configure Webhook Authentication
--------------------------------
Alright, let’s go to **Manage Jenkins** again, but this time click **Configure System**.

Scroll down to the **Github** section which is usually around the middle of the page.  

Right under the **Add GitHub Server**, clicked the **Advanced** button.

Now click **Manage additional Github Actions**, then select **Convert Login and Password to Token**.  

Next select **From Login and Password**.

Type your Github username and password, followed by **Create Token Credentials**.

Well done!  If you’re wondering, Jenkins just created a personal access token on Github, which will be used for authenticating with Github!
We just have one more step left on this page.  

Click **Add Github Server**, then click the **Credentials** drop down.  Go ahead and select the token that we just generated, then hit **Save** at the bottom of the page.

Configure Job for Webhooks
--------------------------
Now head back to the configuration page for our automated test job.  
Near the top of the page, check the box named **Github Project**.  Now copy and paste the URL of your repository into the project URL box.  
Next scroll down to the **Build Triggers** section again, but this time select **Build when a change is pushed to Github**.

Before you hit save though, we have one final step left.  

Configure Github for Webhooks
-----------------------------
Let’s switch from Jenkins to Github.com for moment.

We need to go to the **Settings** for our Github repository, go ahead and click the **Settings** button now.

Next, Click **WebHooks and Services**

Now click the **Add service** button.

Type **Jenkins**, then select the **Jenkins (Github Plugin)**. Now we just need to paste in the URL to our Jenkins server’s webhook.  
By default, it’s going to be http:// followed by the name or IP of your Jenkins server, slash github dash webhook.  Make sure active is selected, then hit **Add Service**.

If you’d like, you can now hit **edit** and **test** the service, which we recommend, but it’s completely optional.

Now switch back to Jenkins and save our job!  From now on, anytime we create a job using Github, and select **Build when a change is pushed to Github**, a Webhook will automatically be created for us!  

Fantastic job!!  Well we’re not going to leave you hanging, let’s try out the webhook!!  Make sure you’re on the main Jenkins dashboard, and that auto refresh is enabled.  We’re now going to add an “error” into our test.html file.  Next, let’s commit the change, and push to our repository.  Let’s watch!!!

There we go!!! The job ran automatically, and look! It failed!! That means our team just received an email letting them know that our code needs to be fixed, and you just learned how to use Webhooks!

Conclusion
----------
I hope you enjoyed today’s lesson!  If you like our videos, please subscribe to our channel! If you’d like to help us make even more videos, please consider donating even a tiny amount at [patreon.com/devopslibrary](http://patreon.com/devopslibrary/), every dollar helps tremendously, plus you’ll end up on our high scores list at the end of each video!  Thanks again for watching, we’ll see you again soon!
