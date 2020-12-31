---
layout: post
title:  "Building a SaaS from Scratch Introduction"
date:   2020-12-31 12:00:00 -0500
category: Adde
permalink: lessons/saas-introduction
excerpt: "Building an entire SaaS from scratch, live."
weight: 3
difficulty: hard
coverart: saas.png

---
`youtube:https://youtu.be/KQFnsfmTy6Q`


Introduction to the Course 
------------ 
Welcome to the DevOps Library; we're glad you found yourself here!  It's been a long time, but we have some exciting news to announce!  We've been developing a new tool for the DevOps community that we've code-named Adde, short for automated declarative data engine.  Adde, when installed on a Github repository containing JSON or YAML, will automatically generate fully documented REST and GraphQL APIs, as well as PowerShell modules for interacting with the data.  It also automatically detects the schema, helping you enforce consistency with validation checks on every pull request.

It's perfect for making the data that's not a great fit for configuration management easily-accessible and version controlled.  Think about the information your teams typically share by passing around a spreadsheet or JIRA tickets.  We really think it can help teams save time by automating things they usually wouldn't be able to.  

To fund Adde's development and infrastructure while still keeping it accessible, we've decided to make it available for any of our supporters that pledge $10 or more a month.  Thank you so much for your ongoing support; we couldn't do it without you.

Now the fun part.  When we were getting ready to set up Adde's production infrastructure, we suddenly had an idea.  What better way to learn DevOps than to see how to deploy an entire SAAS service from scratch?  And that's how this course came about.  We're going to literally set up EVERYTHING, live, with you. The planning, architecture, CI/CD pipelines, deployments, automated testing, all of it!  At the end of this course, we'll deploy safely multiple times per day, to a secure Kubernetes cluster, including monitoring, instrumentation, and more!  Not only that, but Adde will also be production-ready!  We've set up a discord server here at the link below, and while we won't have time to be active 100% of the time, we'll try to respond when we can.  Who knows, maybe we'll even live-stream some of it!

[Discord Channel](https://discord.gg/xZGgMXAAQ8)

Well, what do you think?  Let's get started!  

## Business Requirements

The first thing we need to do is figure out our technical and business requirements; that way, we can use them as a guide during decision making.  On the technical side, both the front and backend applications for Adde are all written in Typescript.  They're stateless, but because the back end takes a while to start and cache repositories, it's not an ideal fit for serverless.  From a business standpoint, here are our top priorities:

- We want to be able to deploy safely multiple times per day, to add business value quickly without customer impact.
- Minimize operational overhead, as we don't have the budget for a dedicated SRE team.
- Minimize expenses while being able to scale if needed.
- Go above and beyond security best practices.  While security should be a core focus for any company, it is crucial for us, given that Adde will be used to create APIs for customers to access their own data. 

## Where are we going to host it?

Given that we want to deploy multiple times per day and that our applications are already containerized, we've decided that Kubernetes would be the best fit.  While it is more complex to configure up front, it will significantly simplify our deployments.  

That brings us to our next question, where should we host our Kubernetes cluster?  We know we can rule out deploying on-prem or to a co-location, as the operational overhead is far too high.  

That leaves the cloud.   We could use Amazon's EKS, Azure's AKS, Google's GKE, Digital Ocean, or spin up our own cluster from scratch using KOPS, Kubespray, or something similar.  Given our team has the most experience with AWS, we narrowed down our choice to AWS or Digital Ocean.  

When looking at pricing, at the time of this video, Amazon charges $72 per month for the EKS control plane, vs. Digital Ocean starting at $10.  While DO's pricing is substantially lower, we decided to go with EKS for a few reasons.

- One, our expertise is much higher with AWS; we know which tools and services we want to use and can move faster by leveraging that knowledge.
- Secondly, we want to make this course relevant to as many of you watching as possible, and at this point in time, Digital Ocean's market share is unfortunately minimal.
- Lastly, we want the flexibility of utilizing Amazon's other services and aren't interested in adding the complexity of a hybrid cloud strategy.

Well, we've decided where we're going to host it, but we still have so many other decisions to make!  In our next episode, we're going to decide on our tooling for CI/CD, ticket management, version control, and more!  Let us know in the comments if you have any questions or suggestions, as well as what you'd like to see next.  Thank you so much for watching and supporting us!   We'll see you again soon! 