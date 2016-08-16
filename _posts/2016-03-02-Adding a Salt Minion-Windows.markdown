---
layout: post
title:  "Adding a Windows Salt Minion"
date:   2016-02-25 12:00:00 -0500
categories: SaltStack
permalink: lessons/adding-a-salt-minion-windows
excerpt: "We're going to show you how to add a Windows minion to our Salt Master."
weight: 4
difficulty: easy

---
{% include youtube.html id="VPZe1JDZrGs" %}

Introduction
------------
Welcome! This is Samantha with the DevOps Library, and in this short lesson we’re going to show you how to add a Windows minion to our salt master.  It’s really easy so let’s go ahead and get started!

We’re going to start out with a new Server 2012 R2 instance on AWS.  Since you’re probably pretty comfortable spinning up new VMs by now, we skipped ahead and are now RDPed into the instance.

Installation
------------
First up, we need to make sure we can resolve the salt master.  Open up a PowerShell window with administrative privileges, and run:

`ping salt`

Ah, well that didn’t work so well.  Just like on our Linux salt minion episode, the right way to fix this would be to add an entry for Salt to our DNS server, but for now, let’s just add the IP address of our master to the hosts file.  Run:

`Add-Content C:\Windows\system32\drivers\etc\hosts IPofSaltMaster salt`

Perfect, we didn’t even need to open up notepad.  Go ahead and rerun `ping salt`.

Methods to Install
------------------
There we go!  We’re now ready to install the salt minion service!  Before we do that though, let’s briefly talk about the different ways we can install the minion.  
One way, is to download the setup file from repo.saltstack.com, and run the installation manually.  We’re not going to do it that way, but if we were, we could run it silently by passing three parameters to the exe.  `/S` for silent, `/master=the name of our master`, and `/minion-name=the name of our minion`.

A second way that we could install the minion is to use something called Salt Cloud, which could actually do everything, including the provisioning of the instance itself.  That is QUITE a bit more advanced than what we’re going to cover here, but don’t worry we will certainly cover it in a later, longer episode!

Lastly, we can bootstrap the server with a single line of PowerShell, which so far is our favorite method.  Let’s go ahead and try it now!  Run:
`Invoke-Expression ((new-object net.webclient).DownloadString('https://www.devopslibrary.com/bootstrap-salt.ps1'))`
`
Wow that was painful to type, but that’s it, a single command and we’re good to go!  You may be wondering why the URL to the bootstrap is at our website and not at Saltstack.  The reason is because we modified the Windows bootstrap code with a few extra changes.  The biggest difference is our script allows you to call it via Invoke-Expression, and additionally, it automatically locates the latest saltstack installer, instead of hardcoding an older version in the script.  Don’t worry we do have a pull request in and it should be updated soon, but in the meantime feel free to use our script!

Conclusion
----------
Alright, back to the lesson!  We’re just about finished, but remember, we do still need to accept the minion’s key.  SSH into the master, then run `salt-key –A` to accept the key.  Perfect!! That’s it!!  We now officially have a windows minion being controlled by our master!  Great job so far!  In the next few lessons, we’re going to really get to do some amazing things with salt.  

Thank you as always for watching, and if you enjoy our videos, please consider supporting us on Patreon!!  You may even get early access to our new videos!
