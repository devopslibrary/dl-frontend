---
layout: post
title:  "Salt Targeting"
date:   2016-03-07 12:00:00 -0500
categories: SaltStack
permalink: lessons/salt-targeting
excerpt: "Today we're going to learn about SaltStack targeting!  We'll cover general, glob, list, regex, and compound matchers, let's go ahead and get started!"
weight: 5
difficulty: medium

---
{% include youtube.html id="nZjZvtrsLdU" %}

Introduction
------------
Welcome back to the DevOps Library, we're glad you found yourself here!  Once again this is Samantha and today we’re going to learn about SaltStack targeting.  

By now you’ve probably set up several salt minions, and may have even run some commands on them, but what if we want to invoke a command only on a certain group of them?  
Well that’s what targeting is for!  Let’s go ahead and SSH into our salt master and try it out.  

First up, let’s get a list of all of our minions.  Run:

`salt-run manage.status`

General Targeting
-----------------
This command gives the status of all of our minions, and while we don’t have a ton of them we do have plenty to explain targeting.
First, let’s start out by targeting all of our minions using an asterisk.  Type:

`salt * test.ping`

Great there we go!  But what if we just want to shut down the SQL server?  Let’s target the minion by it’s ID.  Go ahead and run:  

`salt sql.devopslibrary.com system.shutdown`

Great that's perfect, the SQL server has been shut down, pretty easy right?  Ok next up, let’s pretend something terrible has happened.  Suddenly our website isn’t responding and we’re hopeful that restarting IIS will fix it.

Glob Targeting
--------------
But what if we a ton of web servers, how on earth are we going to select them all?  It’s time to use **glob targeting**!  Go ahead and run:

`salt iis* cmd.run iisreset`

Awesome job so far!  **Globbing** is simply just a way of using wildcards to match minion names, so in our example, every minion whose ID starts with IIS would be targeted by the *iisreset*.

List Matching
-------------
Alright, now it’s time to try out List matching, which is exactly like it sounds.  Let’s go ahead and run a test ping against one of the IIS servers, as well as the MySQL server.
Go ahead and type:

`salt -L 'iis.devopslibrary.com,mysql.devopslibrary.com' test.ping`

Regex's
-------
Pretty cool right?  Well it’s time to step it up a bit!  For those of you that enjoy writing regex’s, you can do that too by passing **-E***.  This time let’s try targeting every minion except SQL, since we shut it down earlier.  Run:

`salt -E '(?!sql)' test.ping`

Targeting by IP/Subnet
----------------------
Hmm that was a lot, ok great don't worry we're actually almost finished, we only have a few more targeting methods left.  
Let’s try **targeting by IP**.  First, we need a list of our minion’s IP addresses so that we can use them for targeting.  
Run:

`salt * network.ip_addrs`

Wow that was helpful!  Now we can use `salt -S` to match by IP, or we can actually target an entire subnet.  Ours is *172.31.0.0/16*, let’s go ahead and try targeting the whole group.
Run:

`salt -S 172.31.0.0/16 test.ping`

Grains
------
Great job you're really getting the hang of it now!  But we do have two more methods left!  It’s now time to talk about **Salt Grains**.  **Grains** are just static variables that Salt collects about each minion, such as the total memory, serial number, operating system, and only a few million other things.  

They are actually SUPER helpful for targeting.  Imagine we wanted to run `ipconfig /flushdns`, but only on our windows servers.  To do so, you would just run:

`salt -G os:windows cmd.run 'ipconfig /flushdns'`

There are a TON of grains to use, and a lot more that you can do with them, but we’ll wait to go in depth in another lesson.  If you’d like to get a list of the grains available on your minions, just run:

`salt * grains.items`

Compound Matchers
-----------------
Well, we’ve learned quite a few methods for targeting, it’s time to put them all together for the final method, **“Compound Matchers”**.  As you may have guessed by the word compound, it really just means combining the previous methods for even more specific targeting.  Let’s try a **Compound Matcher** real quick, then we’ll explain how it all works.
Go ahead and run:

`salt -C 'iis* or E@mysql.devopslibrary.com' test.ping`

Don’t worry, it’s WAY simpler than it looks.  Let’s pull up the documentation on the Saltstack website.  First off, we passed **-C** to the salt command, letting it know that we’re using a **Compound Matcher**.  Next, we used a **Glob Matcher** to select our IIS servers.  **Glob matches** are the default, so we didn’t need to specify anything in front of it.

Next, we used the keyword **“or”** followed by *E@mysql.devopslibrary.com*.  If you look at the table, you’ll see that **E** signifies that we’re using the minion ID to match.  We could also use any of the other methods that we covered in this lesson, which makes **Compound Matchers** an incredibly powerful way to target minions.

You may have noticed that you can pass in **-I** to match pillar data, don’t worry we’ll talk about pillars soon enough!  

Conclusion
----------
For now, you've done a truly fantastic job, and hopefully you do feel a lot more comfortable with targeting.  As always, we're so grateful that you've tuned into our lessons, and if you do enjoy our lessons, please consider supporting us as we'd love to focus on making more videos with a quicker turnaround, or at the very least consider subscribing to our YouTube channel.  

Once again, thanks again for watching, and we'll see you again soon.
