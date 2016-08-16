---
layout: post
title:  "Salt States"
date:   2015-10-13 12:00:00 -0500
categories: SaltStack
permalink: lessons/salt-states
excerpt: "The core of the Salt State system is the SLS, or Salt State file. The SLS is a representation of the state in which a system should be in, and is set up to contain this data in a simple format."
weight: 7
difficulty: medium

---
{% include youtube.html id="AsvVp-ldT2Q" %}

Introduction
------------
What if we want to write a script that does multiple things, or ensure several packages are installed? We just need to create a salt state file. Hopefully if you’re watching this you’re already a little familiar with Salt, if not feel free to watch our SaltStack tutorial first.

Today we're going to start with 3 Ubuntu VMs, one acting as a master, and two salt minions.
One will be named prodminion, and the other devminion.  

Salt States
-----------
First, we're going to talk about Salt States.  If you remember from before, we were able to run a command on all minions by running:
`salt '*' cmd.run 'ifconfig'`

But what if we want to write a script that does multiple things, or ensure that a bunch of packages are installed?  We just need to create a Salt State file.  To do so, log into the master and go to /srv/salt.  If that directory doesn't exist, create it, then create a file named apache.sls.  All Salt State files have the extension SLS, and are typically in YAML format.  Now in the file, type:

{% highlight yaml %}
apache2:
  pkg:
    - installed
{% endhighlight %}

What this file is saying, is that anytime it is called by Salt, ensure that Apache2 is installed.  Go ahead and save the file, now run the following command:
`salt '*' state.sls apache`

Salt will now automatically install Apache on both of the minions.  After the command finishes, go ahead and run it one more time.  This time, Salt is just verifying that Apache is still installed, if it isn't it will reinstall it.  For now, you should just see two messages saying that the package is installed.

Organizing
----------
Now let's look at organizing things a bit.  Create folder named Apache, and move the apache.sls file within the directory.  You can now create as many SLS files as you'd like in that directory, and to reference them, just use the name of the folder followed by a period, followed by the name of the SLS file without the extension.  

For example, let's run our apache.sls file now that we've moved it, run:

`salt '*' state.sls apache.apache`

Now let's CD into the apache directory, and rename apache.sls to init.sls.

init.sls is called by Salt if we don't reference the file directly, so now we can go back to calling Apache by the name directly.

That should be enough to get you going on creating states, but let's create one more real quick.

Managing Bashrc with a Salt State File
--------------------------------------
Create a second folder under /srv/salt named bashrc.  Now copy the .bashrc file to this folder:

`cp /root/.bashrc /srv/salt/bashrc/bashrc`

Notice we left the period off intentionally, that way it doesn't hide the file by default.  Now create a new file under /srv/salt/bashrc named init.sls.  We're just going to add a few lines to ensure that the .bashrc file is managed on our minions.

{% highlight yaml %}
/root/.bashrc
  file.managed:
    - user: root
    - group: root
    - mode: 0644
    - source: salt://bashrc/bashrc
{% endhighlight %}

Now open up /srv/salt/bashrc/bashrc.

Scroll down and enable force_color_prompt.  If we run `salt '*' state.sls bashrc` right now, it would ensure that all of our minions have exactly the same bashrc file, with the color text prompt enabled. Don't worry about running it right now though, we're about to cover Salt Highstate functionality.

High States
-----------
Salt by default looks for a file named top.sls under /srv/salt.  Let's create that file now.


~~~
base:
  '*':
    - bashrc
  'prodminion':
    - apache
~~~

Now run `salt '*' state.highstate`

Salt will now go through the top.sls file and apply the states that we mentioned above to each of the minions.  Both minions will have their bashrc file updated, and prodminion will also check to ensure that Apache is installed.

The power of using Highstate is that at any time we can tell all of our servers to configure themselves exactly how we want them to be in the top.sls file.  You can also run state.highstate on a single minion, a group of minions, or targeting with grains.  

Scheduling Highstate
--------------------
For one final trick, hop on one of our minions, then run `crontab -e`.  We're going to add two lines to the crontab file:

~~~
@reboot salt-call state.highstate
00 00 * * * salt-call state.highstate
~~~

Conclusion
----------
From now on, anytime the server is restarted, the salt state.highstate will be called, and will also be triggered every midnight.  Well that's plenty for now, hopefully you're starting to see how easy it is to manage servers with Salt.  Look for our videos in the future, as we'll be covering pillars, grains, salt mines and more.  Thanks for watching, see you again soon!
