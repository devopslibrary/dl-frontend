---
layout: post
title:  "Tool Selection for a Startup"
date:   2021-01-02 12:00:00 -0500
category: Adde
permalink: lessons/saas-tooling-selection
excerpt: "We need to choose our CI/CD, version control, ticket management and more."
weight: 2
difficulty: easy
coverart: tools.png

---
`youtube:https://youtu.be/HHFp25_oH5I`

Tool Selection for a Startup
----------------------------
Welcome to the DevOps Library; we're glad you found yourself here!  In today's episode, the second in our "Building a SaaS from Scratch" course, we're going to choose the tools needed for managing our infrastructure.  If you're joining us from watching our first episode, the only thing we've decided on so far is to use [AWS](https://aws.amazon.com/) for our hosting platform.  This time we're going to cover everything from version control, CI/CD, infrastructure as code tools, and more.  If you have not seen our first episode yet, we recommend you watching that one quickly first.

[Introduction Video](https://devopslibrary.com/lessons/saas-introduction)

While we'll do our best to explain why we went with each tool, keep in mind our project is completely greenfield.  For example, a large enterprise with hundreds of developers building new features for an existing legacy application will likely have very different needs.  While our tooling choices won't necessarily be the same ones you end up making, we'll be solving a lot of the same challenges, just in a slightly different way.

Version Control
---------------
Alright, let's get started!  First up, we need a place to store our code.  We'll be using [git](https://git-scm.com/) as our version control system along with everyone else.  There are quite a few options for hosting the repositories themselves, everything from [Github](https://github.com/), [Gitlab](https://about.gitlab.com/), [Bitbucket](https://bitbucket.org/), [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/), [CodeCommit](https://aws.amazon.com/codecommit/), or even hosting a git server ourselves. 

In our case, the decision is pretty easy, as Adde, the SaaS tool we're building, is designed to integrate with Github repositories, so it wouldn't make much sense to use something else.  We chose [Github](https://github.com/) to begin with because it's by far the most popular, it has an excellent interface, and we want Adde to be useful for as many people as possible. 

CICD
----
Next up is [CICD](https://en.wikipedia.org/wiki/CI/CD); we need a tool for building, testing, and deploying our code.  Our long-time viewers are probably assuming we're going to go with [Jenkins](https://www.jenkins.io/), given how many videos we've made on it.  However, if you remember from our first episode, one of our goals is to minimize operational overhead.  Setting up a Jenkins master, managing the nodes, securing it properly, none of those things add business value for our service.  That doesn't mean Jenkins isn't a good option; it just isn't for us in this case.  Instead of Jenkins, we're going with [Github Actions](https://github.com/features/actions).  It's relatively similar to Gitlab and very similar to [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/) for obvious reasons (hint, Microsoft owns both).  Most importantly, though, it means we won't need to add another tool.

Issue Management
----------------
We also need a place to track issues, features, bugs, and do overall project management.   At first, we were leaning toward [Jira](https://www.atlassian.com/software/jira), as we've had many good experiences with it in the past, but it's a little overkill for a startup.  Another option we love is [Trello](https://trello.com/) for smaller projects.  It's great when we want a simple kanban and aren't tracking epics and stories.  In our case, though, we're going to see if we can get by with Github for issue management as well.  We can always migrate later on if it doesn't meet our needs, but there's no reason to add another tool if we don't need to.

Infrastructure as Code Tools
----------------------------
Now for our favorite part!  We're going to pick out the DevOps tooling for managing our infrastructure as code.  While technically we could spin everything up directly from the AWS console, that doesn't scale well, and it doesn't fit our core requirement of pushing changes safely while minimizing customer impact.  It's tough to rollback changes quickly when you're not managing things as code.  Trust me; if we do things the right way now, it's going to save us a lot of time down the road.  

The main IAC (infrastructure as code) tool we're going to use is [Terraform](https://www.terraform.io/).  There's plenty of other options in this space; everything from [CloudFormation](https://aws.amazon.com/cloudformation/), [AWS CDK](https://aws.amazon.com/cdk/), Pulumi, and [Terraform CDK](https://learn.hashicorp.com/tutorials/terraform/cdktf).  Still, we keep coming back to Terraform for its excellent state management and the simplicity of writing HCL.  We'll use it to bring up our underlying Kubernetes cluster and to manage stateful services like databases.

Once we get our Kubernetes cluster in place, we'll introduce several more tools, but we'll get to them a few episodes from now :).  If you can't wait and want to start googling, check out [Helm](https://helm.sh/), [Prometheus](https://prometheus.io/), [Grafana](https://grafana.com/), and [Flagger](https://www.weave.works/oss/flagger/) to preview where we'll be heading soon.

Conclusion
----------
Lastly, we've decided to open everything up so you can follow along while we're building Adde.  Keep in mind everything is a work in progress, but you can view our project board here, talk to us live on Discord, and even view the source code so far here!  Thanks again to all of our supporters. It wouldn't be possible without you.  If you're not a supporter yet but would like to help the library continue making episodes and get early access to Adde, [here's a link to contribute](https://www.patreon.com/bePatron?u=2724847); every little bit helps us tremendously.  Thanks for watching, we'll see you again soon!