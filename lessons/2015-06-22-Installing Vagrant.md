---
layout: post
title:  "Installing Vagrant"
date:   2015-06-22 12:00:00 -0500
categories: Vagrant
permalink: lessons/installing-vagrant
excerpt: "Installing Vagrant is extremely easy, we'll show you how :)."
weight: 2
difficulty: easy

---
{% include youtube.html id="8-brcyUKHNo" %}

Introduction
------------
Welcome to the second episode in our Vagrant course.  Today we’re going to cover installation of Vagrant.
As we mentioned in our last video, Vagrant spins up fresh VMs for you, but those VMs must run on what Vagrant refers to as a “Provider”.  

The provider could be anything from *VMware*, *HyperV*, *Docker*, *AWS* and more, but for most of our tutorials we’ll stick with the default of *Virtualbox*.  There are many advantages and disadvantages to each, but Virtualbox is freely available and runs on nearly every major operating system.  If you are interested in using a different provider, we’ll be covering them in a later episode.

Virtualbox
----------
Well let’s get started.  First you’ll need to download *Virtualbox* from [VirtualBox.org](http://VirtualBox.org), or you can obtain it from Oracle’s Virtualbox website.  At the time this video was made, you’ll want to choose the latest 4.0 version, as the *Virtualbox* 5.0 Beta isn’t supported by Vagrant yet.  If you’re using Linux or OSX, the process will be slightly different but for the most part very similar to what we’re doing now.

The installation for *Virtualbox* is very easy and straightforward.  Don’t worry about restarting yet though, we’ll do that after we finish installing Vagrant.  Now that *Virtualbox* is ready, we just need to head to vagrantup.com/downloads.html to download the latest version, which at the time of this tutorial was 1.7.2.  .

Vagrant
-------
Like *Virtualbox*, the installation of Vagrant is pretty easy, and by default will install to `C:\Hashicorp\Vagrant`.  After the installation completes, we strongly recommend restarting to ensure that *Virtualbox* comes up cleanly and because Vagrant updates your environment PATH.  After you’ve restarted, go ahead and open up a command prompt.  Now type `vagrant version`.  You should see something similar to what we see here if everything went well.  If you don’t, verify that the path to vagrant was successfully added to your environment PATH variable.  If you’ve made it this far, well done, you’re finally ready to start using Vagrant.  In our next episode we’ll cover spinning up your first Vagrant machine.  Thanks for watching, see you again soon!
