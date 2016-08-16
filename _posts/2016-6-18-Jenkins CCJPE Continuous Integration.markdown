---
layout: post
title:  "CCJPE: Continuous Integration"
date:   2016-6-18 12:00:00 -0500
categories: Jenkins
permalink: lessons/ccjpe-continuous-integration
excerpt: "What is Continuous Integration and why is it important?"
weight: 8
image: 'continuousintegration.png'
difficulty: easy

---
{% include youtube.html id="MXqEvp-Jp-4" %}

Introduction
------------
Welcome to the DevOps Library!  This is Samantha, and in this lesson we're going to
talk about Continuous Integration.  While CI practices originated in the developer world, they can be extremely helpful for an Operations team as well.  Let's start out by pretending we have a group of
architects all working on blueprints for a house.

Before CI
---------
Each day, they work on the design of the house independently, then on Friday of each week they try to
build a new house after combining everything in the blueprints.

So far we have a nice little team working together, so what's the problem?
Well, let's say two of the architects, we'll call them Jody and Hodge, decide on Monday to
design the front of the house.  That Friday, Jody delivers his blueprint,
complete with two windows, a porch, and a red door right in the middle.  Unfortunately,
it turns out that Hodge designed the front of the house to have a single large window, and a huge garage.

At this point, it's pretty clear that Jody and Hodge have some pretty significant conflicts,
and regardless of what happens, someone has wasted a substantial amount of time.

Don't worry though!  We'll help our architect team out by implementing Continuous integration!

After CI
--------
This time, instead of waiting until every Friday, we're going to make sure everyone has to submit any changes made to the blueprint as soon as possible, at least daily.

Secondly, each time an architect adds something new, they'll also need to write up a test to verify that what they added is still ok, that way any future changes that break the design will be noticed immediately.  In order for any new blueprints to be approved, they'll first have to pass all of our testing.

Looking back at the example, let's fast forward to Tuesday afternoon.  Jody has just finished adding the two windows, and as part of his blueprint, has added a test that verifies both windows are intact, and only passes if they're on the house.  Instead of waiting until Friday, he sends his blueprint to everyone else on the team immediately.

At this point, Hodge has only started thinking about adding a garage, he hasn't wasted a week designing something that isn't going to fit.  This time, he knows exactly where and what he can change in order to fit in with Jody's Windows, and it'll have to pass each of the team’s automated tests before being accepted.

On Friday, instead of spending all day and all weekend trying to figure out how to merge two completely different blueprints, the team is able to build the house successfully, and because each new feature now has a test included, the team can build a house at just about any time during the process without worrying about having parts that don't go together.

This is really what continuous integration is about.  The primary goal of CI is for members of a team to integrate work as frequently as possible, usually at least daily, and to have automated testing to detect errors anytime someone tries to commit a change.  

While this lesson is more conceptual than most of our other lessons, when it comes to implementing continuous integration, it’s something that Jenkins truly excels at.

If you've been following along in our course, you should already have a pretty good idea of how to start implementing CI in Jenkins.  Most likely you'll want to create free style jobs that automatically test your code anytime someone commits a change.  If you're not sure how to do that, we cover how to set a job up to do exactly that in our episode on "Jenkins Polling and Webhooks".

You'll also want to make sure that Jenkins notifies the team anytime someone's commit "breaks the build", or at least notify the person who last committed a change to the code.  You can do that easily with post build actions, or even make it so that commits can't be merged to your master branch without passing automated testing.

Culture
-------
Continuous Delivery isn't just about using a tool for testing though, it really is something that a team has to decide to use and and work together on.  While initially you might feel you can develop faster without implementing CI, as projects grow it really does make a team more efficient, as issues are caught faster, confidence is higher for each build, and this usually leads to delivering software more efficiently.

If you'd like to read more about the topic, we've included some links below from some of the best known authors on Continuous Integration.  

Conclusion
---------
Thanks as always for watching, if you'd like to stay up to date on our videos feel free to subscribe to our channel below, or you can always follow our Twitter account "devopslibrary".

[Subscribe to our YouTube channel](https://www.youtube.com/channel/UCOnioSzUZS-ZqsRnf38V2nA?sub_confirmation=1) or follow [DevOpsLibrary on Twitter](https://twitter.com/intent/user?screen_name=devopslibrary).  

{% include subscribe.html %}

Thank again and see you soon.
