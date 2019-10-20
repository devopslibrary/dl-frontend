---
layout: post
title:  "Should I use Kubernetes?"
date:   2019-10-19 12:00:00 -0500
category: Kubernetes
permalink: lessons/should-i-use-kubernetes
excerpt: "We're going to tackle a question that's been on a lot of engineer's minds lately.  Should I be using Kubernetes, and if not, why?  We'll start by diving into what is Kubernetes at a high level?"
weight: 1
difficulty: easy
coverart: should-you-use-kubernetes.png
---

# Kubernetes, should you begin the journey?
Welcome back to the DevOps Library, we're glad you found yourself here!  Today we're going to tackle a question that's 
been on a lot of engineer's minds lately.  Should I be using [Kubernetes](https://kubernetes.io/), and if not, why?  

If you've been following our tutorials at the DevOps Library for the last few years, you may wonder why we're pivoting 
our focus to Kubernetes.  Its shown significant growth in its popularity, and out of all the containerization platforms, 
it's becoming the clear winner.   In many cases, it provides tremendous value in how it streamlines onboarding and 
scaling applications.  But, this lesson is about understanding when Kubernetes makes the most sense, as for every 
company moving to K8, there's 10 that shouldn't be.

So let's start by diving into what is Kubernetes at a high level!

## Kubernetes TLDR
Kubernetes, or K8S for short, is an open-source container platform founded by 
[Google](https://queue.acm.org/detail.cfm?id=2898444).  If you're familiar with [Docker](https://www.docker.com/), you 
can look at Kubernetes as a pool of Docker hosts with fantastic tooling.  You can run it on-prem or on public cloud, 
with varying degrees of complexity depending on your choices.   

At a high level, Kubernetes makes on-boarding and scaling new applications easier, at a cost of increased complexity.  
With that in mind, it can be hard to see the next bright and shiny thing and not immediately jump to it.  Kubernetes is 
definitely shiny, but shiny does not always mean business value.  For some organizations, you'll wonder how you ever 
lived without it.  In others, it can lead to outages that no one on the team knows how to troubleshoot, with no 
perceptible benefits.

You need to ask yourself, what are the top problems at MY company is, and will Kubernetes solve those problems or 
create more?

## Why Kubernetes?
Kubernetes solves a variety of problems related to hosting containerized workloads.  While deploying, and managing 
containers IS doable without Kubernetes, it becomes increasingly difficult to manage as you scale.  A good question to 
think about is, **how many containerized apps do you expect to manage over the next year?**  If you only have a couple 
and don't expect that number to grow soon, then Kubernetes is NOT the answer.  If you're containerizing a few apps a 
month, then Kubernetes is going to save you time and work in the long run.

## Complexity
Another thing to keep in mind is that Kubernetes can be extremely complex.  It's not quite as bad as say... OpenStack, 
but certainly more difficult than what your teams may be used to managing.  Ask yourself honestly, **what's the skill 
level of my teams?**  If you choose to go the Kubernetes route, the skill level required to operate it is quite high, 
especially if you choose to stand up an on-prem cluster.  You will almost certainly need several people with prior 
Kubernetes experience to be successful within your own datacenter.  Unless you have a hard requirement, in most cases 
we recommend using a managed K8S cluster such as Google's GKE or Amazon's EKS.  

Kubernetes, even when using a managed option means learning an entirely new set of vocabulary and tools.  Pods, 
namespaces, clusters, etcd, helm, ingresses, deployments, and so on.  There are a LOT of moving parts.  Have an app 
that hasn't changed in the last 5 years running on VMware, and can't use public cloud?  Leave it on VMware, even though 
it's not exciting it's most likely the right answer.  Or maybe you have some autoscaling groups on AWS, with a full 
CI/CD deployment pipeline you set up 2 years ago.  The only thing migrating that to Kubernetes is going to do for you 
is make troubleshooting a LOT more complex.  **Don't make more work for your team unless it makes sense.**

## Crossing the Kubernetes Valley
On the positive side, once you've crossed the Kubernetes valley, some things do become easier.  That pipeline you 
built 2 years ago?  In Kubernetes, everything you do is usually reusable for ALL your applications.  CI/CD, cert 
management, monitoring, logging, and so on all become problems that you only need to solve once.  Say you decide to 
use Lets Encrypt to automatically manage certs?  It's a bit of work ONE time, followed by never even having to think 
about it again for every new app.  Need to patching hosts without downtime?  You can do it anytime you'd like now, 
just cordon off the node.

Being able to solve big problems once brings up another great question.  **How often are new features & services being 
added?**  Are you at a point where you're trying to empower your devs to create and deploy micro-services?  That's pretty 
much the perfect use case for Kubernetes.  Conversely, migrating a bunch of legacy apps that are rarely ever even 
deployed to rarely makes sense.  

## Are your apps ready?
You need to think about the majority of your applications, **are your apps actually ready to run on Kubernetes?**  Do 
you know if they can even run within a container?  **Many people wrongly assume that any app can be containerized.**  
Let's say you're working at an old Windows .NET shop.  Without a massive refactor, your app may only run on Windows 
2008 R2 due to some ancient dependency.

Should refactoring it be a priority?  Absolutely, you'll solve a bunch of security and performance issues just by moving 
that app to a modern version of .NET core.   All of that has to happen though before you can even consider looking at 
Kubernetes, and it could take YEARS.  Speaking of Windows, running Windows containers is a whole different issue.  It's 
a very specific niche use-case that in almost all cases isn't going to make sense.  You'll face even more issues with 
the disadvantage of not having others experience to rely on.  **It's not impossible, and we'd love to be proven wrong, 
but Kubernetes for now is best suited for Linux containers.**  Yes, there are preview options available on Azure, but at 
this point in time no matter what the Kubernetes control plane has to run on Linux.

With that said, just because your apps are running on Linux doesn't mean they're a good fit.  **Do your apps already 
follow the 12-factor app methodology?**   If you aren't familiar with it, it's a set of 12 rules for building modern 
applications.  They also make a great checklist before deciding an application is ready to run on a K8S cluster.  
**Convincing your devs to build 12-factor apps is required for Kubernetes, and will likely solve more problems than 
Kubernetes will.**

## Portability
Now that we've covered what's needed at an application level, let's go back to infrastructure.  **Is being multi-cloud 
important?**  We've talked with quite a few execs who say they want to do multi-cloud for XY & Z.  Very rarely have those 
reasons ever actually been realistic or worth the effort.  If you do have a real multi-cloud use case, moving to 
Kubernetes has several advantages.  You can get to the point where your entire deployment process is identical for an 
on-prem cluster and one hosted on AWS.  Want a DR site ready to go in a different region?  You can use tools like 
[Velero](https://velero.io/) to easily back up and restore your entire cluster.

[Velero](https://velero.io/) is just one example of tons of new tools all being built around the Kubernetes ecosystem.  
Most of the tooling is very new, and while exciting, many competing with no clear winner yet.  It'll be interesting 
to see which ones come out on top in the next few years.

## Conclusion
Well, hopefully, this lesson has helped you decide if Kubernetes is a good fit for you!  Always remember to factor in 
the costs of increasing the cognitive load on your team when introducing a new tool, regardless of what it is.  
If you're still on the fence and want some advice, feel free to reach out to us in the comments.  And also keep in 
mind, Kubernetes is evolving very quickly.  Don't be surprised if in a year or two this article starts to look a little 
dated!   

Thanks for watching, we'll see you again soon!

