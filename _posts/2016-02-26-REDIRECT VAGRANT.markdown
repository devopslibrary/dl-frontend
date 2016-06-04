---
layout: post
title:  "Getting Started with Vagrant"
date:   2015-06-22 12:00:00 -0500
permalink: /courses/vagrantintroduction/
excerpt: "Welcome to the third episode in our Vagrant course, today we're going to bring up our first Vagrant Machine, and explain VagrantFiles."

---
{% include youtube.html id="QfyBWmzCdc0" %}

Introduction
------------
Welcome to the third episode in our Vagrant course.  Today we’re going to bring up our first Vagrant Machine, and explain the basics of editing a *VagrantFile*.  You should already have Vagrant installed, if you don’t, feel free to watch our previous episode on installing Vagrant.

Alright let’s get started.  First we need a place to store our vagrant machines.  Because we’re planning on having multiple Vagrant machines, we’ll make a folder named "Vagrant".  Within our Vagrant folder, we’ll create a new directory for each machine we plan on bringing up. For our first VM, let’s go ahead and make it an Ubuntu box.  You’ll need to create a folder for it, then go ahead and CD into it.

Now run:

~~~
vagrant init Ubuntu/trusty64
~~~

All this command does is create a VagrantFile within the current directory, with the Vagrant Box configured to use Ubuntu 14.04.  You’re now ready to run ```vagrant up```. Go ahead and do that now.  Vagrant will now automatically download the Ubuntu "box", configure a VM, and bring it up for you.  

Boxes
-----
While it’s downloading, let’s talk about boxes.  You may be wondering where vagrant is pulling Ubuntu from, and how we knew to use **Ubuntu/trusty64**.  The answer is that Vagrant automatically searches Hashicorp's Atlas (which can be found at [atlas.hashicorp.com/boxes/search](atlas.hashicorp.com/boxes/search)).  

Atlas has a wide variety of boxes to choose from, and you can even create and upload your own.  Each box is essentially just a base image configured specifically for Vagrant.  If you’re interested in creating your own boxes from scratch, we’ll cover that in a later episode, but for now we’ll stick with our **Ubuntu/Trusty64** image.  If you’d prefer to download a Windows image, just search for Server 2012, there are plenty to choose from.

Interacting with Vagrant Machine
--------------------------------
Well it looks like Vagrant finally finished downloading the Ubuntu image, and has brought up our first Vagrant machine.  You now have a fully isolated Ubuntu VM that you can use for anything that you’d like.  To SSH into it, all that you need to run is “vagrant SSH”.  Go ahead and try that now.  Feel free to look around, install some packages, and do anything that you’d like.  Once you’re finished playing around, just type exit to return to the command prompt.  You can always SSH back in, but what if you want to start the VM over from scratch?  All that you need to do is run ```vagrant destroy```.  Vagrant will then cleanup and completely remove the VM, so that the next time you run Vagrant Up, everything will be completely fresh and new.

That was easy!  Alright now that we understand how to bring a new VM up and destroy it, let’s try looking at the VagrantFile that vagrant automatically created when we typed ```vagrant init```.  Just open it up in any text editor, we strongly recommend Sublime Text, or Notepad++.

It may look daunting at first, but it’s not trust me.  Go ahead and remove every line that’s commented out and you’ll see what I mean.  It’s exactly three lines, that’s it!  Essentially all we’re doing right now is telling Vagrant what box we’d like to use for the VM.  While each VagrantFile is actually just Ruby code, you should be able to configure nearly everything without ever needing to learn Ruby.  If you do happen to know Ruby, you should feel at home.

The only thing that the VagrantFile needs for launching a VM is a box, and thankfully once you’ve downloaded a box once, Vagrant will save it for future usage.  You can see in our VagrantFile that our box is set to ***Ubuntu/Trusty64***, because that’s what we passed in when we ran ```vagrant init```.  Later on if you decide you’d like to change the OS, this is the only line that you’ll need to change.  When you run ```vagrant up```, vagrant will automatically check to see if there is a newer version of the boxes you’re currently using, if there is, just run ```vagrant box update``` to download the latest version.

You can create as many vagrant machines as you want from each box, because Vagrant only uses the box as a base image to clone from.  Also, you can use boxes that aren’t hosted on Atlas by specifying a URL directly to them, with ```vagrant box add```.  To see a list of all the boxes you currently have installed, just run ```vagrant box list```.  If you decide you no longer want a box on your system, just type ```vagrant box remove``` followed by the name of the box.

Conclusion
----------
One of the best things about vagrant is how easy it makes it to store all of your VM configurations in version control.  We recommend storing all of your VagrantFiles within something like Git, that way anyone else on the team can simply clone the repository and run ```vagrant up``` to have exactly the same environment set up.  You can go ahead and ignore the dot vagrant directory within each folder, as that is just used to keep track of temporary things like guest machine IDs and so on.

Well that’s plenty of work so far!  If you can’t remember what VMs you have running, you can also run “vagrant status” to see a list of all of the VMs.  If you want to stop a VM (but not destroy it), just run ```vagrant halt``` to shut it down, or ```vagrant suspend``` to pause it.  Great job so far!  In our next episode, we’ll cover provisioning the VMs automatically.  Thank you for watching, let us know if you have any questions in the comments!
