---
layout: post
title:  "Vagrant Provisioning"
date:   2015-06-22 12:00:00 -0500
categories: Vagrant
permalink: lessons/vagrant-provisioning
excerpt: "Creating an entire environment all the way down to the application stack fully configured with Vagrant."
weight: 4
difficulty: easy

---
{% include youtube.html id="5tPykQsuMfE" %}

[Download Example Code: https://github.com/devopslibrary/IntroductionToVagrant/tree/master/Vagrant%20Provisioning](https://github.com/devopslibrary/IntroductionToVagrant/tree/master/Vagrant%20Provisioning)

Introduction
------------
This is Samantha with the DevOps Library, and welcome to the fourth episode in our Vagrant course!  Today we’ll talk about Vagrant Provisioning, which will allow us to run "vagrant up", and have the entire environment all the way down to the application stack fully configured.

Benefits of Provisioning
------------------------
First though, you may be wondering what the benefits of automated provisioning are, since it DOES add some extra work up front.  The most obvious benefit of course is ease of use, once you fully automate an environment, every person on the team can bring up a full copy by running a single line.  Even more important than that though is the f and reproducibility that automation brings with it, as every single deploy becomes identical.  You’ll finally get to stop hearing "Well it works on my machine", and it also makes it so much easier to reproduce production problems in development for troubleshooting.  You’ll even be able to (and should) use the same scripts for spinning up a development environment as you do for spinning up production servers–making it extremely easy to test infrastructure changes.  This is commonly referred to as "Infrastructure as Code", and at its best can lead to what is referred to as "Immutable Infrastructure".  If you’re not familiar with that term, it essentially means that instead of SSHing or RDPing into your servers to fix them or deploy a new application, you simply destroy and spinup a brand new server, all completely automated.  While we could spend several episodes on each of these topics alone, just know that the upfront time expense of setting up automated provisioning is more than worth it.

Manual Provisoning
---------------
Well let’s go ahead and get started.  Today we’re going to pretend that we have a simple website that needs to be hosted with Apache.  Hopefully if you’ve been following along so far, you’ve already set up an Ubuntu vagrant VM, and have a VagrantFile that looks similar to this.  If you don’t, just CD to an empty directory and create a file named "VagrantFile" with the same code.  Because it’s pretty hard to automate something without knowing how to do it manually, we’ll install Apache by hand first.  Before we run "Vagrant Up" however, we do need to add one more line to the VagrantFile:

`config.vm.network "forwarded_port", guest: 80, host: 8080`

What this line does is automatically forward all traffic from port 80 on the VM to our host on port 8080. That way once we install Apache, we can access the website at http://localhost:8080 without needing to be within the VM.  Alright, go ahead and run Vagrant Up, followed by Vagrant SSH.  If the VM was already running before you added the line above, make sure you run Vagrant Destroy first so that it’s recreated from scratch.

Alright, you should now be SSH’d into our vanilla Ubuntu VM.  First let’s run

`sudo –i`

to become root.  Now run ```apt-get install apache2``` to install Apache.  After that completes, on our host computer, let’s try to visit localhost:8080 from a web browser.

Look there’s the default apache page!  That’s awesome!  But we are obviously going to want to replace the default index.html with our own page.  If you’re familiar with running Apache on Ubuntu, you know we could just upload all of our website files to /var/www/html, but doesn’t uploading them every time we recreate the VM sound frustrating?  

Shared Folders
--------------
Thankfully Vagrant has something called "Shared Folders" between the host and the VM.  To see what we’re talking about, run:

```rm –rf /var/www/html```
followed by

```ln –fs /vagrant /var/www/html```
Now visit localhost:8080 again, what do you see now?  A VagrantFile?  What just happened?  The first line we ran simply deleted /var/www/html, as we don’t need it, and the second line created a symlink pointing /var/www/html to the /vagrant directory.  That directory is automatically shared between the host and the Vagrant VM, and is simply the folder that the VagrantFile resides in on the host.  Now you may be wondering, why is this useful?  Well, instead of using VI on our VM, go ahead and just create an index.html within our Vagrant folder from the host.  You can now edit it with any tools that you’d like, and the moment that you save it, we can immediately see the changes at localhost:8080.  While we’re just hosting a simple web page in this example, you can easily do the same thing with more complex applications, it’s all up to you.

Well we finally have our website configured, but we did have to do quite a few things by hand.  It’s time to finally get to automated provisioning!

Automated Provisioning
----------------------
Vagrant has a wide variety of "Provisioners" to choose from.  You can use anything from a simple shell script, to Puppet, Chef, Ansible, Salt, or even Docker for provisioning.  We’re going to go ahead and just use a shell script for now so that we can get going quickly.  Go ahead and run "Vagrant Destroy" to kill off our VM, then create a new file named webserver.sh.

Webserver.sh is going to be the shell script that we use to provision the server from start to finish, and to start things off, we just need to add one line to the top to specify the type of shell to use.  We’re using bash, so type

```#!/usr/bin/env bash```
.  Now we need to add all of the manual steps we ran to configure the VM.  Add

```apt-get install apache2 –y```
.  Notice we had to add a dash Y, the reason is because we aren’t going to be able to type yes during the provisioning, so the dash Y just tells apt-get to go ahead and install Apache without confirmation.  If you’d like to throw in an apt-get update and an apt-get upgrade, feel free to do so as well, that way we have the latest versions of all the packages.  The last step was to link /var/www/html to /vagrant, so go ahead and add the two lines we ran for that, then save the script.

We’re almost finished, we just need to add final line to our VagrantFile.  Type:

```config.vm.provision "shell", path: "webserver.sh"```
This line is pretty simple, we’re just telling Vagrant to use shell as our provisioner, and giving it the path to our shell script.  You could just as easily use Chef, Puppet, or a handful of other options as well.  You can even use multiple provisioners, Vagrant will just run them in the order that they’re listed.  Well, let’s save our VagrantFile.  We’re finally ready to run "Vagrant Up"

Let’s watch the output as Vagrant spins up our new VM.  We can actually see it running each of the steps, and once it finally finishes, don’t even worry about SSHing into it.  Let’s just test it by opening up a web browser again and visiting localhost:8080 again.  Look!  There’s our website, completely configured from scratch without us even needing to login to the VM!!  

Conclusion
----------
While I know our example was extremely simple, deep down it really is the same process for any environment.  In a real life scenario, you’ll probably end up having Vagrant spin up multiple VMs, each with a different application and configuration, but overall it’s pretty simple.  I hope you’re starting to see the power of Vagrant, but there’s still so much more it can do.  In the next few episodes, we’ll be introducing advanced networking and how to model complex multi-machine environments.  Thank you so much for watching, see you again soon!
