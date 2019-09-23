---
layout: post
title:  "Adding a Linux Salt Minion"
date:   2016-02-25 12:00:00 -0500
categories: SaltStack
permalink: lessons/adding-a-salt-minion-linux
excerpt: "Learn how to add a Linux minion to our Salt Master!"
weight: 3
difficulty: easy

---
{% include youtube.html id="xqCJkF0lzAU" %}

Introduction
------------
Welcome back!  This is Samantha with the DevOps Library, and today we’re going to add a Linux minion to our Salt master!  If you’re wondering what a “minion” is, don’t worry, it’s just SaltStack terminology for a server that can be controlled by the master.  

Alright, let’s go ahead and get started!  First, spin up an Ubuntu 14.04 instance on AWS!  You should be able to stick with the default settings for everything, but DO make sure that its placed in a security group & network that has access to our Salt master.  We’re actually going to use a little Cloud Init script to change the hostname to LinuxMinion, but we’ll stick with the defaults for everything else.  

Installation
------------
Once it finishes starting, go ahead and SSH into the instance.  Now all that we need to do is to install the salt minion service, but first let’s make sure this minion can resolve the master.  Run ```ping salt```.

Ouch, that didn’t work.  If we were doing this in a real production environment, we’d make sure our DNS server had an entry for Salt, pointing to the IP of our master.  But for now, let’s just add the IP of the master to our hosts file.
Open up ```/etc/hosts```.

Type the IP of the master, followed by the host name “salt”, then save and close the file.
Alright, let’s go ahead and try to ping the master one more time.
```ping salt```

Perfect!  There we go!!  We’re now ready to install the salt minion service!!  Run
```curl -L https://bootstrap.saltstack.com | sudo sh```

Alright, that is it.  No for real, that’s seriously the only thing that we needed to do on our Linux minion, it really is that easy!!  
We do still need to accept the cert though on our salt master, so let’s do that now.  SSH into the master, run ```sudo -i``` to become root, then run ```salt-key -A``` to accept the cert.

Conclusion
----------
Great job!!!  You did it!!  Just for the fun of it, let’s run

```salt '*' cmd.run 'ifconfig'```

Look!  We just ran ifconfig on both of our minions, and didn’t even need to SSH in to do it!  Isn’t that awesome??  In our next lesson, we’ll show you how to set up a Windows minion.  Thanks for watching, and if you enjoy our videos please consider supporting us, even if it’s a tiny amount every bit helps!  We love making our videos and hope to keep them free forever!  See you again soon!
