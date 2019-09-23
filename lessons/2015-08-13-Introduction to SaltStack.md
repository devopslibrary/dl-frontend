---
layout: post
title:  "Introduction to SaltStack"
date:   2015-08-13 12:00:00 -0500
categories: SaltStack
permalink: lessons/saltstack-beginner-tutorial
excerpt: "By the end of this lesson, we’ll have a Salt master running as well as our first minion."
weight: 1
difficulty: easy

---
{% include youtube.html id="TQjE2I8CrzQ" %}

Introduction
------------

Welcome to the DevOps Library episode 2, today we’ll quickly cover how to get up and running with Salt for configuration management.  Well let’s get started.  First make sure you have two blank Ubuntu 14.04 VMs ready to go—we’ve already have a Vagrant file ready, so if you’d like to start at the same place, just download the Vagrant zip for Episode 2 on the website.  If you’re not familiar with Vagrant, just watch our video on how to get started with it.

Now to begin.  We have two blank VMs, one is named salt which will be used as the salt master, and one named minion that is the VM that will be controlled by salt.  Please note that it’s extremely important that the hostname of the master IS actually salt, and the reason is that is the salt-minion service defaults to looking for that name.  You can change this but it’s much easier if you just name your salt server salt, trust me.

Installing Salt
---------------
Now we need to make sure that we have the latest salt repository added to both the salt master and salt minion.  Run ```add-apt-repository ppa:saltstack/salt``` on both VMs, and hit enter to finish adding the key.  Next run an ```apt-get update``` on both VMs. This step is extremely important as this will ensure you have the latest version of salt, which runs MUCH better than the one that Ubuntu defaults to.

Now we’re ready to install salt.  On the minion, run ```apt-get install salt-minion```.

Now switch to the salt-master and run ```apt-get install salt-master``` followed by ```apt-get install salt-minion```.

While you don’t have to install the minion service on the server, we’re going to so that you can see how easy it is to control multiple servers through the salt command line.

High-level Overview
-------------------
While we’re waiting for those to install, let me just give you a quick overview of how the Saltstack works.  You’re probably already familiar with SSH, but if you think about trying to SSH into hundreds or thousands of servers, it’s impossible to scale.  That’s why Salt uses a service called ZeroMQ in the background for messaging.  If you’re not familiar with an AMPQ broker like ZeroMQ or RabbitMQ, it’s an extremely fast messaging bus that allows you to scale very, very easily.  Additionally, because Salt initiates everything from the client side, it is much easier to get going in highly locked down environments.

Now that the install is finished, the salt minion service on both VMs is going to provide the salt-master service with a public key.  We can’t control anything until those keys are accepted – and yes you can set salt up to automatically accept new keys if you’d like.

Accepting the Salt Key
----------------------
Run ```salt-key -L``` to see a list of keys, here you can see that the two keys are waiting for us to accept them.  To do so, run ```salt-key –A```, and hit Yes.

Now if you run `salt-key –L` you can see both keys listed under accepted.

Now we can finally see how to control as many servers as you want using salt.

First, from the master, run `salt '*' test.ping`

If you look at the command, the asterisk means run this on all servers reporting to salt, while the test.ping command is built-in to see if the minions are responding.  You should see both nodes now reporting true.

Next run `salt '*nion’ cmd.run 'ifconfig'`.  This is going to run ifconfig on the minion, because it’s the only server that matches the target string ```*nion```.

You can use any type of wildcard that you want, now let’s run one last command
{% highlight bash %}
salt * cmd.run 'df -h'
{% endhighlight %}

Notice we now can see the free space on both servers, as salt ran df –h on both servers.  

Conclusion
----------
I hope you can see how easy it was to get going.  Now keep in mind this is just a tiny fraction of what salt can do, we haven’t covered pillars, grains, states, or any of the other amazing features of salt, but I hope that’s enough to get you started.  Thanks for watching!
