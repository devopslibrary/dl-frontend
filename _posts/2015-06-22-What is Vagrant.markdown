---
layout: post
title:  "What is Vagrant?"
date:   2015-06-22 12:00:00 -0500
categories: Vagrant
permalink: lessons/what-is-vagrant
excerpt: "Learn why we love Vagrant, and how to create reproducible development environments."
weight: 1
difficulty: easy

---
{% include youtube.html id="aUew6WauUsI" %}

Introduction
------------
Hello, this is Samantha with the DevOps Library, and today we’re going to begin our short course on Vagrant.  If you’ve already seen our previous video on vagrant feel free to skip ahead to the more advanced topics in the course.

Well let’s get started, what is Vagrant, and what is it good for?  Vagrant is an amazing open source tool created by Hashicorp, and it is most often used for creating reproducible development environments.

To understand why you would want to use it, let’s talk about the problems that it addresses.  Imagine your company develops a typical web application.  Each developer needs to have their own development environment, and that could mean needing to install and configure dozens of different services, such as IIS, EngineX, MySQL, Apache, Redis, and so on.

Without Vagrant, every developer is left to install and configure each of these on their own.  Because everything is configured by hand, each developer machine is going to look very different, and very rarely will the developers have the environment configured even remotely the same as production.  This leads to the common problem of “it works on my machine” but not in production, when in a perfect world the development environments should be identical to production.  Another problem is that multiple developers will often prefer to use a different operating systems, which makes it even more difficult to keep development environments in sync.

Vagrant solves all of these problems and more.  Instead of developers setting up everything by hand each time, Vagrant strongly encourages automation (whether that is through scripts or configuration management is completely up to you).  Instead of installing all of the software on each person’s local machine by hand, vagrant spins up fresh fully configured VMs, provisioned exactly the same way for development, operations, and production.

Tao of Vagrant
--------------
Hashicorp refers to this process at a high level as the “Tao of Vagrant”.  Essentially, all of your applications and their configurations are stored in version control.  When a developer wants to create a development environment, all they need to do is check out the repository, and run “vagrant up”.  At that point, vagrant then spins up all of the VMs that are needed, and provisions them, without the developer needing to configure anything.  This is also helpful for the operations team, as at any time they can spin up a replica of production as a sandbox for testing different automation scripts or software.  One of the best parts of this entire process is that if anyone wants to start over with a clean slate, all they need to do is run “vagrant destroy” to clean up and remove everything, followed by “vagrant up” again to bring up a brand new fully functioning environment.

When looking at Vagrant from a lower level, Vagrant is able to utilize nearly any hypervisor that your team could want for creating the VMs, whether that’s the Vagrant standard (and free) Virtualbox, VMware, Docker, HyperV, or even Amazon’s EC2, you can spin the VMs up anywhere.  For provisioning the actual applications themselves, you can use any operating system, fully configured with scripts, Chef, Ansible, Salt, Puppet, or any other configuration management tool you can think of.  We’ll talk about configuring these in later videos in the course, but for now just know that Vagrant is an extremely powerful and flexible tool.

Conclusion
----------
Hopefully that was enough to get you interested in Vagrant, in the rest of our course we’ll cover everything from modeling multi-machine clusters to advanced networking within Vagrant.  Thanks for watching, see you soon!
