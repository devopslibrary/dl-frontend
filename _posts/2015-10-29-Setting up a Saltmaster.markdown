---
layout: post
title:  "Setting up a Saltmaster"
date:   2015-10-29 12:00:00 -0500
categories: SaltStack
permalink: lessons/setting-up-a-saltmaster
excerpt: "In this episode, we're going to go over how to set up a Salt Master."
weight: 2
difficulty: easy

---
{% include youtube.html id="Fl6hXk-jpUM" %}

Introduction
------------
Welcome to the Devops Library.  This is Samantha, and today we'll be setting up
a Salt master.  We're going to start out with a fresh Ubuntu 14.04 VM on
Amazon's AWS.  If you'd prefer to learn Salt on a local VM, we do have a
Vagrantfile you can use.  Alright, let's go ahead and get started.  

Installing SaltStack
--------------------
First, become root by running `sudo -i`.  Next, make sure that your server's
hostname is set to salt, if it isn't, we can easily rename the server in two
steps.  First run `hostname salt`, then we need to edit the /etc/hosts file.  

Add one line to the file:

`127.0.0.1 salt`

Now log out of the server and back in.  Perfect!  While you don't have to name
your Saltmaster salt, it will makes things easier, as the minions will look for
that hostname by default.  If you're coming from the Windows world and haven't
learned VIM yet, visit vim-adventures.com

The next thing that we need to add is the Saltstack repository, that way we know
we're getting the latest version.  Type:

`add-apt-repository ppa:saltstack/salt`

Then run:

`apt-get update`

Alright, we're finally ready to install the master, run:

`apt-get install salt-master -y`

Alright, believe it or not, after that, we're finished!  As you can see, even
setting up a salt master from scratch is very simple.  

Great job!  In our next two lessons we're going to cover how to add both Linux
and Windows minions.  If you enjoy our videos and would like to
support us, please visit http://www.patreon.com/devopslibrary.  

Thank you!
