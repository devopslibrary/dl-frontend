---
layout: post
title:  "CCJPE: Source Control Management"
date:   2016-4-27 12:00:00 -0500
categories: Jenkins
permalink: lessons/jenkins-scm
excerpt: "We’re going to show you how to integrate source control management with Jenkins."
weight: 4
difficulty: easy

---
{% include youtube.html id="3-BgaDa5B0g" %}

Introduction
------------
Welcome back!  This is Samantha with the DevOps Library, we’re glad you found yourself here.  In today’s lesson, we’re going to show you how to use source control within a Jenkins Job.  By now, you should already be familiar with how to set up a basic Jenkins job, and hopefully have at least a basic understanding of source control.  If not, feel free to watch our previous lessons, or visit [guides.github.com](http://guides.github.com) for some great tutorials on source control.  

Thank you to our supporters!
----------------------------
Before we get started though, we’d like to give a quick shout out to everyone supporting us on Patreon, thank you so much, we really couldn’t do it without your help!  We’ve decided to add a high scores list to the end of each episode, and for anyone else who’d like to donate, just visit [patreon.com/devopslibrary](http://patreon.com/devopslibrary/).  

Secondly, thank you to [Datadog](http://dtdg.co/devops-library) as well for sponsoring this video!  If you haven’t tried them out before, please take a few minutes and visit [dtdg.co/devops-library](http://dtdg.co/devops-library), they have some really fantastic monitoring tools.  

Lesson Overview
-----------------
Alright, let’s go ahead and get started!  We’re going to use [Github](http://www.github.com) to host our repository, as it’s currently by far the most popular repository hosting service, and it’s extremely easy to use.  If you’re not already using it, feel free to sign up at Github.com.

We’re going to use our **DevOpsLibrary** repository, which contains pretty much everything on our website.  We’ll pretend that we need to create a job for deploying the website to an Apache server. To do so, we’re going to create a Jenkins job that downloads everything from this repository, copies all of the files to */var/www/html*, and finally restarts the *Apache* service.

Don’t worry we don't “actually” host the website directly on a Jenkins server but hopefully this lesson will show you how easy it is to tie Jenkins into source control.

Installing Plugins
------------------
Alright, first up, we need to install a few plugins to integrate with Github easier.  Open up the **Jenkins Web UI**, then hit **“Manage Jenkins”**, followed by clicking **“Manage Plugins”** to get to the Plugin Manager.  Next click the **“Available”** tab.  Select the **“Github plugin”**, and click **“Download now and install after restart”**.  Jenkins will then start downloading the plugin, as well as any others that it depends on.

Make sure that you select **“Restart Jenkins when installation is complete and no jobs are running”**.  That way, once they finish downloading, Jenkins will automatically install them and restart.

SSH into the Jenkins Master
---------------------------
Well we’re almost ready to create our deployment job, but first we have a few things we need to do on the Jenkins server itself.  

SSH into the Jenkins master, then run:

{% highlight bash %}
sudo -i
{% endhighlight %}

to become root, followed by:

{% highlight bash %}
apt-get install git -y
{% endhighlight %}

Optional Steps
--------------
If you want to follow along exactly with our tutorial, you can run:

{% highlight bash %}
apt-get install apache2 -y
chown Jenkins /var/www/html –Rf
{% endhighlight %}

Then, use visudo to add the following:

{% highlight bash %}
Defaults:jenkins !requiretty,!lecture
jenkins ALL=NOPASSWD:/etc/init.d/apache2
{% endhighlight %}

Then go ahead and save and exit.

Doing all of this will ensure that apache is installed, that Jenkins has permissions to copy files to the web directory, and makes it so we can easily restart apache.  Feel free to skip these steps though if you’d like, as we’re only adding them to our Jenkins master for the tutorial.  In real life, Apache would be running on a completely separate server.  

Adding Github to Known Hosts
------------------------
Alright.  Once that finishes, go to your Github repository and copy the clone URL.  Switch back to the terminal and run the following:

{% highlight bash %}
su jenkins
cd ~
git clone FOLLOWED by the clone URL
{% endhighlight %}

You should see a message come up that says the authenticity of the host can’t be established, which is exactly why we’re doing this.  Type Yes, and Github will be added to the list of known hosts.  

The command won’t actually be able to clone the repository yet, because we haven’t set up a way to authenticate to it, but the important thing is that now Jenkins won’t have a problem verifying the authenticity of the Github host.

Adding SSH Key for Authentication to Github
-------------------------------------------
We do have one last thing that we need to do on the console before we switch back to the Jenkins WebUI.  We need to create an SSH keypair for authenticating to Github, then add the public key to our Github account.  

To do so, run:

{% highlight bash %}
ssh-keygen -t rsa -b 4096 -C "followed by your email address"
{% endhighlight %}

It will prompt you a few times, but just hit enter and accept the defaults.  Now let’s cat our public key so we can copy it to Github.  

Type:

{% highlight bash %}
cat ~/.ssh/id_rsa.pub
{% endhighlight %}

Perfect, now copy the ENTIRE thing to your clipboard.  Now switch back to Github.  

Click your profile, go to settings, “SSH and GPG Keys”, then hit “New SSH Key”.  Use whatever name you’d like, then paste in the key and hit “Add SSH Key”.  

Great job!!  If you were to run the git clone command in the terminal again, it would run fine this time, but let’s go ahead and go back to the Jenkins WebUI, it’s finally time to set up version control!  

Creating Jenkins Job + Source Control
-------------------------------------
Head to the main Jenkins dashboard, then click **“New Item”**.  Select **“FreeStyle Project”** as the job type, then name it whatever you’d like and hit ok.  Now for the fun part!

Under the **“Source Code Management”** section, select **“Git”**.  Now grab the clone URL from Github again, and paste it into the **“Repository URL”**.  Don’t worry about specifying credentials, we already took care of that part with the SSH keys.

Now scroll down to **“Build”**, hit **“Add Build Step”**, and select **“Execute Shell”**

For the command, type the following:

{% highlight bash %}
cp * /var/www/html/ -rf
sudo /etc/init.d/apache2 restart
{% endhighlight %}

That’s it!  Go ahead and save the job, then on the next page hit **“Build Now”**!  Once the job starts, click it, then click **"Console Output"**.  

Conclusion
----------
Perfect!!  Jenkins successfully connected to our Github repository, downloaded all of the latest files for our website, deployed them to the */var/www/html* directory, and restarted *Apache*, all in one glorious job!  Pretty neat isn’t it?  

While I know we did over simplify a few things, this should give you a pretty good idea of how to use source control with Jenkins!  

In our next episode, we’ll show you how to have Jenkins run the job automatically every time someone makes a new change to the repository using web hooks, as well as a few other neat tricks!  Thank you so much for watching, we’ll see you again soon!
