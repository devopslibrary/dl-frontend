---
layout: post
title:  "Salted Chocolatey Windows"
date:   2015-10-13 12:00:00 -0500
categories: SaltStack
permalink: lessons/salted-chocolatey-windows
excerpt: "Today we're going to talk about Salt, Window, and Chocolatey all in one episode!  If you're unfamiliar with Saltstack, you may want to watch our earlier"
weight: 8
difficulty: easy

---
{% include youtube.html id="WYxXUQCTVWw" %}

Introduction
------------
Hello, this is Samantha again with the Devops Library, and today we’re going to talk about Salt, Windows, and Chocolatey all in one episode!  If you’re unfamiliar with the SaltStack, you may want to watch our earlier episodes.  Today we’re going to get started with one saltmaster named salt, and a fresh Server 2012 R2 Server named winminion.  We already have the Saltmaster set up, so now just need to install the minion service on our Windows server.  First download the installation files from the SaltStack website.  We’ll use the GUI to install the service, but you can always do a silent install using /S /master=nameOfMaster /minion-name=nameOfMinion.

Now during the install, make sure that the minion can resolve the hostname for the salt master.  When naming the minion, we generally just use the hostname, but feel free to use whatever you’d like.

Well that was easy, let’s switch to our Salt master.  All we need to do now is accept the cert using

`salt-key –A`


Controlling Windows with Salt
-----------------------------
Now we’re set!  You can now begin running commands on your Windows minion using salt, let’s try that now.  Run

`Salt ‘*’ test.ping`

You should see winMinion return true.  If it doesn’t, run the command one more time, sometimes it takes a little too long on the very first run.  Now let’s check out some of the grains available, do a

`Salt ‘*’ grains.items`

You can use any of these items when targeting a server with Salt.  So let’s say you have a bunch of Windows &amp; Linux salt minions, but you only want to run a command on the 2012 VMs, all you would need to run is:

`Salt –G ‘OSrelease:2012Server’ cmd.run followed by the Name Of The Command`

Now what if the command you’re wanting to run is Powershell, not batch?  Just run

`Salt ‘*’ cmd.run theNameOfTheCommand followed by shell=powershell`

You can do that with a ton of languages by the way, pretty much any shell that you’d like.

Chocolatey
----------
Well that was all easy, let’s try adding a little Chocolatey to the mix.  Chocolatey is to Windows what Apt-Get is to Ubuntu.  It’s a wonderful package manager that makes installing new software on windows extremely easy.  It’s also extremely easy to install, and combines really well with configuration management tools.  Let’s go ahead and install it now through Salt.

First, let’s visit [Chocolatey.org](http://www.chocolatey.org) to find the install command.  Next, let’s use salt to run it in Powershell on our Windows minion.

`Salt ‘*’ cmd.run followed by the download string, and shell=powershell`

That’s it, Chocolatey is now installed.  If we had a hundred windows minions, it would now be installed on all 100.

Now time to call Chocolatey.  Think of a Windows package that you like, and search for it on the Chocolatey repository.  The odds are extremely high that a package has already been made.  We’ll search for Sublime, because it’s one of our favorite editors on Windows.

There it is, Sublime Text 3.  And if you look, you can see that for installing a package with chocolatey, all that you have to do is call

Choco install then the name of the package

We COULD just run `choco install sublimetext3` directly on our windows box, but let’s pretend we have a few hundred minions.  Run

`Salt ‘*’ cmd.run ‘choco install sublimetext3’ shell=powershell`

Conclusion
----------
That’s it!  No matter how many windows minions we have, they would now all of sublime text installed!  Now while you probably aren’t going to be comfortable just running commands on all of your production servers simultaneously, it’s very easy to set up a salt state SLS file that has all of the packages you want installed.  Once you’ve tested it on your dev servers, THEN you can roll it out to your production servers doing just a salt state.highstate

Well that’s plenty for today, thank you for watching and be sure to like our videos if you like them!  Let us know what else you’d like to see!
