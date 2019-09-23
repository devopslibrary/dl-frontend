---
layout: post
title:  "DevOps for Beginners Introduction"
date:   2016-7-28 12:00:00 -0500
categories: DevOps
permalink: lessons/devops-introduction
excerpt: "Introduction to the course, and our imaginary webapp company: Montonomy.com."
weight: 1
image: 'DevOps.png'
difficulty: easy

---
{% include youtube.html id="v7ZcZfGBFcU" %}

Introduction
------------
This is Samantha with the DevOps Library, and today I'd like to welcome you to
our new DevOps for Beginners Course!  This course is going to be a little bit
different from our normal videos.  We're going to use a story to illustrate how
to solve real world problems using DevOps tooling and concepts.

Imagine you've just started working for a web based company that's desperately
trying to scale.  We'll start out with the basics, but by the end of this
course, you'll be ready to deploy, monitor, and scale applications in the real
world.

Thank you Datadog
-----------------
Before we begin, we'd like to give a quick shout out to
[Datadog](http://dtdg.co/devops-library) for sponsoring this video.  With their
help, we're able to keep our videos free, and we even use them personally for
our servers.  By using [Datadog's](http://dtdg.co/devops-library) cloud-scale
monitoring, you can easily track your dynamic infrastructure.  

If you haven't tried them out, visit
[dtdg.co/devops-library](http://dtdg.co/devops-library), you'll even get a 14
day free trial!

Alright, back to our lesson

Day 1
-----
You’ve spent most of the day so far just getting to know the team.  Kevin, one
of the guys from the build team, volunteers to teach you and Ron how to set up
the Montonomy webapp.  Well, as soon as he finishes an email to QA about the
last night's release that is.

Emergency
---------
Suddenly everything changes.  Your boss Steve, begins shouting across the room

> "OMG CHECK the homepage, CHECK the homepage!".

![Error](/images/408.jpg)

Before you've even opened up your browser, 3 people have already screamed
"408!!!".  Seconds later the roar has died down as everyone scrambles to figure
out what's causing the website to timeout.

An unspoken awareness of thousands of angry customers falls over you, and
permeates the room.  You quickly SSH into one of the web servers, and after a
few dead ends, decide to run 'top'.

Good God, the server's CPU is pegged at 100%.

Quickly you run over to let Steve know.  Without even saying a word, the look of
sadness and fear on his face tells you the solution isn't going to be easy.

Using sorcery, or as Steve calls it Perl, the status of each web server pops up
on the screen.  Every single one is maxed out.

Steve then proceeds to address the team:  

> "I need 2 more Web Servers ASAP!

Justin, Chris, move as fast as you can, and can someone look into why we're
being hit so hard?!".
Seems like a pretty easy fix right? A few minutes later it dawns on you why
everyone is still panicking.  

...the servers are being configured by hand.

Day 2
-----
Flashing forward to Day 2.  

Things have been going quite a bit better, the website's up, and Justin even
brought in donuts.  Steve is currently out explaining to the marketing team why
sending a 50% off coupon to 1.5 million members without a heads up was a bad
idea, and Kevin is finally going to show you and Ron how to set up the company's
app.

Cloning the App
---------------
> "So the first thing you guys need to do is to clone our main app repository,
> which is hosted on Github.  Are you both pretty comfortable with git?"

You and Ron both nod, although you suspect Ron is lying.

[https://github.com/devopslibrary/devops-demo](https://github.com/devopslibrary/devops-demo)

> "Awesome!  Well, we only need two files from the repo, the devops-demo.sql
> script, which we'll use to set up the database, and the devops-demo.tar.gz file,
> which goes on the webserver."

Before Kevin can continue, Ron stands up and says

>"I get it"

then wanders off.  Kevin sighs

> "He doesn't get it, he hasn't gotten anything.  Of everyone, he
> should definitely be listening.  Let's put it this way, he's like a human
> [chaos monkey](http://techblog.netflix.com/2012/07/chaos-monkey-released-into-wild.html)".

Unsure of what to say, you ask what to do next.  

> "Ah sorry, he's not that bad.  
> Anyway, login to AWS with the creds I emailed you earlier.  I went ahead and
> already spun up two Ubuntu 14.04 instances.  We'll use one as a MySQL server
> for the Montonomy backend, and the second for the frontend.”

After SSHing into both servers, Kevin has you pull up an [Evernote](http://www.evernote.com/l/AnvdBaIF3MpERJT4bOdzuQA6ZIC_ZHn2AJA/) with each
of the steps listed.  

> Alright, so when you're doing these steps, make sure
> you're running as root.  I also like to do an apt-get update before doing
> anything else.  Now install MySQL.  Type:

```
apt-get install mysql-server
```

Before you can continue, MySQL pops up asking for a password.

> "At this point, you'll want to use our standard password or you'll have to edit
> the SQL script, let me find it real quick".

Kevin then opens up **Keepass** on his laptop, and after a minute or two tells
you to type in "**devpass**".

> "Perfect!" Kevin says, "Now you just need to run a few lines to configure MySQL.  
> They're pretty long, do you want me to type them real quick?"

You nod, then Kevin types:

```
mysql -uroot -pdevpass -e "create database devopsdb"
```

> "Alright, so that line creates the database, now I just need to upload the SQL
> script from the repo and run it, one moment".

*Kevin SCPs the SQL script to the server*, then runs:

```
mysql -uroot -pdevpass devopsdb < devops-demo-1.0.sql
```

> "Alright, we're just about set on this server, but you still need to set the
> bind address to allow any host, otherwise the webserver won't be able to
> connect.  Are you pretty familiar with MySQL?"

You nod, and pull up **/etc/mysql/my.cnf** in VIM.  After commenting out the
bind address, you run **service mysql restart** to apply the changes.

Kevin smiles, then says

>"Thank the gods, you don't use nano, I knew we hired the right person.".

You don't mention it, but you were using **nano** up until a few months ago
until after you spent a day playing [VIM Adventures](http://www.vim-adventures.com).

> "Now onto the last part, we still need to set up the webserver.  
> Unfortunately, I have a meeting with Todd I need to go to.  I'm trying to get
> him onboard with using Jenkins, but he's been pretty much against changing
> anything.  If you have time, just follow the rest of the Evernote and let me
> know later if you have any questions.  Oh yeah, and make sure you note down
> the IP address of the SQL server, you'll need it for the config.ini file on
> the app."

Kevin walks off and for the first time today you're on your own.  You pull up
[Evernote](http://www.evernote.com/l/AnvdBaIF3MpERJT4bOdzuQA6ZIC_ZHn2AJA/)
alongside the web server terminal and start running through the steps.

1. Do an apt-get update then run: ```apt-get install apache2 php5 php5-mysql```
2. Delete everything from /var/www/html.
3. Upload the devops-demo-1.0.tar.gz file to the server, once it finishes,
extract the files to /var/www/html.
4. Open up a web browser and go to the public IP of the server, verify that the
page comes up.

After opening up the page, you notice that it DOES come up, however the database
connection fails.  Unfortunately, that's the last step in the [Evernote](http://www.evernote.com/l/AnvdBaIF3MpERJT4bOdzuQA6ZIC_ZHn2AJA/).  

Thankfully, Max doesn't look too busy so you ask him for help.

> "Ahhh... we really need to update that guide, you're good to go on the
> infrastructure part, but you still need to set the config variables.  Open up
> **/var/www/html/config.ini.**
> Replace DBHost with the IP of whatever database you set up, SQLUser with
> "**root**", and SQLPassword with **devpass** unless Kevin had you use something else.  
> For the SQL DB Name, set it to **devopsdb**."

"What do I use for ENV?" you ask Max.  

> "Ah, make sure you use DEV, that way the app doesn't point to any of our
> production stuff.  That should be it, refresh the page to make sure"

![Overview](/images/overview.png)

Success!  Thanks to Max and Kevin's help, you've just learned how to set up the
app!  While we know setting the app up by hand was painful, don't worry, in the
next episode we'll automate the process.  I know this style is quite a bit
different from what we normally do, please let us know in the comments if you
like it or would prefer us to focus on our normal videos.

If you have a real world problem you'd like us to address in the story, let us
know and we'll do our best to add it!  If you like our videos, please subscribe
to our [YouTube channel](https://www.youtube.com/channel/UCOnioSzUZS-ZqsRnf38V2nA?sub_confirmation=1)!  

[Subscribe to our YouTube channel](https://www.youtube.com/channel/UCOnioSzUZS-ZqsRnf38V2nA?sub_confirmation=1) or follow [DevOpsLibrary on Twitter](https://twitter.com/intent/user?screen_name=devopslibrary).  

{% include subscribe.html %}

Thank again and see you soon.
