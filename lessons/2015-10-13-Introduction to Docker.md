---
layout: post
title:  "Introduction to Docker"
date:   2015-10-13 12:00:00 -0500
categories: Docker
permalink: lessons/docker-beginner-tutorial
excerpt: "Docker is one of those things that people tend to get a pretty strong opinion one way or another very quickly, but we promise you, that if you use Linux at all in your organization, you’ll probably end up eventually loving it. Even if you’re a windows shop you might end up loving it too."
difficulty: easy

---
{% include youtube.html id="cxveLKw6BVw" %}

Introduction
------------
Hello again this is Samantha with the DevOps library episode 7.  We’re glad you found yourself here.  Today is an exciting day as we’ll be going over docker.  Docker is one of those things that people tend to get a pretty strong opinion one way or another very quickly, but we promise you, that if you use Linux at all in your organization, you’ll probably end up eventually loving it.  Even if you’re a windows shop you might end up loving it too.

Anyway, let’s get started. I’m going to assume that most of the people watching this video are familiar with virtualization and spinning up VMs.  It doesn’t matter what HyperVisor you’re used to, whether it’s HyperV, VMware, KVM and so on.  The process is pretty much the same.  You create the VM which has it’s own totally separate OS, libraries, and so on.  This process takes at least a few minutes if not a half hour.  Then you need to load the applications to the VM, which takes even more time.  When you use Docker, you basically get to skip this entire process.  It’s really cool.

What are Containers?
--------------------
Docker doesn’t create VMs, it creates containers, which actually share resources with the host, so there’s no overhead for the hypervisor or VM.  While containers do feel like VMs in terms of how isolated they are, spinning a new one up literally takes seconds.  If you’re wondering about application deployment, or how they’re different vs. a VM, that’s another awesome thing about Docker, it’s extremely portable.  You can create a docker container on your local workstation, install all the application software and dependencies that you need, then commit the container to the Docker repository.  At that point it’s just a quick pull on your production server and your application is completely deployed.  Also, if you build something in Docker on Ubuntu, then wander off to a Redhat server, the container will run EXACTLY the same way.  Well, I guess I should stop talking so that you can get started doing the tutorial.

Setting up Docker
-----------------
Today we’re going to start out with just a standard Ubuntu 14.04 server, with nothing extra installed.

Now let’s go ahead and install Docker.  To get the latest version, run:

`curl –sSL https://get.docker.com/ubuntu/ | sudo sh`

Spinning up a Container
-----------------------
Now let’s go ahead and create our first container.  Think of the container as a VM.  Now type.

`docker run -i -t ubuntu /bin/bash`

Let’s look at the command, `docker run` creates a new container, the dash I runs the shell interactively, so that when you exit from the shell the container stops, the -T creates a pseudo-tty, or in other words makes it so you see a prompt.    We’re also specifying Ubuntu as the image to pull from.  Docker will pull this image from the Docker repository automatically.  Lastly, we specify /bin/bash, so that Docker automatically starts bash on the container.  This could easily be a specific service like apache for instance.

Once Docker finishes downloading the Ubuntu image, you should almost immediately land inside the new docker container.

Looks like our container is finally up, I’ll just create a quick file on the root, exit from the container shell, and do an LS so that you can see we now have a totally new environment to play around with.

Managing Containers
-------------------
Alright, now that we’re back on our host, how to we see what containers we currently have set up?  Just run docker ps.

Notice we don’t see the container that we created listed, the reason is because we exited bash, and since that’s the only thing the container was running, the container automatically stopped.  Go ahead and run `docker ps –a` to see all containers, including those that have stopped.

There’s our container!  Now to start it back up, we can run either docker start followed by the long container ID, or we can use the nickname that docker automatically gave it.  Go ahead and do that now.

The container is now running, but we haven’t attached to it.  To do so, run docker attach followed by the name of the container.

Awesome we’re back in.  However, one of the best parts of Docker is seeing how fast the new containers come up, so let’s go ahead and exit the container one more time.

Let’s delete our container too, run `docker rm` then the name of the container.

Now run `docker images`.  You should see a list of images.  These are the images that we’ve already downloaded, and they’re basically cached by docker.    Let’s go ahead and create a brand new container, running the same command that we did before.

`docker run -i -t ubuntu /bin/bash`

The container should start almost immediately.  It’s like having a perfect brand new VM to play around with, but with no waiting time.  That’s just one tiny part of Docker though.  Let’s try one last feature before we wrap up the video.  Install Apache on the container.

Now click CTRL-P, followed by CTRL-Q.  That detaches us from the Docker container without stopping it.  While it doesn’t matter if it’s stopped or not for what we’re about to do next, it’s a nice trick to know.  Now let’s run docker ps to get the name of our container.  Then run

Docker commit followed by the container name, then a name for a new image.  We’ll name ours apacheimage

Now run docker images to see our list of images again, you should see apacheimage in the list.  Lastly, let’s do one final command.

`docker run –I –t apacheimage /bin/bash`

Conclusion
----------
This is exactly like the command we’ve been running to create our Ubuntu containers, but this time, our container already has apache installed.  While we’ve only shown you a couple of Docker’s features, I hope that’s enough to get you started.  There is so much more that you can do with it, and we’ll be covering those features soon.  Thanks again for watching, please like our video if you enjoyed it!
