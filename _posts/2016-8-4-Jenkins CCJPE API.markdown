---
layout: post
title:  "CCJPE: Jenkins API Tutorial"
date:   2016-8-5 12:00:00 -0500
categories: Jenkins
permalink: lessons/ccjpe-api
excerpt: "Don't worry, the Jenkins API is extremely easy to use!"
weight: 10
image: 'jenkinscourse.png'
difficulty: easy

---
{% include youtube.html id="ID1S2m9wtrk" %}
{% include hired.html %}

Introduction
------------
Welcome back to the DevOps Library! This is Samantha, we’re glad you found
yourself here!  In today's lesson, we're going to learn how to use the Jenkins
API.  Don't worry, the hardest part about using the API is just deciding what
you'd like to build with it.  Maybe you want to create a custom dashboard with
the status of recently triggered jobs…or even have a totally separate
application trigger a Jenkins build.  Whatever you decide, it's completely up
to you.

Thank you Hired.com!
--------------------
But before we begin, we’re excited to announce we have partnered with
[Hired.com](http://www.hired.com/devopslibrary),
who will be sponsoring the remaining videos in our Jenkins course! Because of
their generous support, we are now able to bring the rest of the course to you,
with quicker release time for each video.

In case you aren’t familiar with
Hired, it’s a really cool company that actually reverses the traditional job
search, by having companies apply to you, instead of you always doing the
tedious work of applying. Thousands of companies are looking to Hired to help
connect with the best of the best in our field, like you! Be sure to listen at
the end of this video for more information on how Hired works and how it could
become your go-to tool for finding your next job!

OH and if you do end up signing up through our own personal link, and landing a
new job too, Hired will give you a 2k bonus for being a loyal supporter of the
DevOps library!

Getting Started
---------------
Ok are you ready? Let’s go ahead and get started!

First, let us begin by pulling up the API documentation on our Jenkins server.  
To do so, open up a web browser and go to:


`http://jenkinsMasterURL/api`

![API](/images/api.png)

As you can see, the REST API provides three different ways to interact with it.  
You can use XML, JSON, or even directly access Python objects.

For this lesson, we'll focus on JSON, so go ahead and click the JSON-API link to
see some of the data that Jenkins returns.  If you look at the "jobs" array, you
should see the class, name, URL, and color of each job, with "blue" listed for
successful builds, and "red" for failures.  Pretty cool huh?

![API](/images/api2.png)

Using Curl
----------
So far we've been accessing the API directly through our browser, but typically you'll want to interact with it programmatically.  Let's try accessing the API using Curl.

Open up a terminal, and type:

`curl http://jenkinsMasterURL/api/json?pretty=true`

Oops!  If your Jenkins server requires authentication (and it SHOULD), you'll
see a message saying "*Authentication Required*".  The Jenkins API uses HTTP
BASIC authentication and requires a username as well as an API token to connect.

To obtain the token, we need to pull up our personal config page.  In your
browser, type:

`http://jenkinsMasterURL/me/configure`

Then click the box named "**Show API Token**", and copy the token to your
clipboard.

Alright, we should be good to go now.  Switch back to your terminal, and type:

`curl -u username:apiToken "http://jenkinsMasterURL/api/json?pretty=true"`

Perfect!! There we go!  Now that we've figured out how to authenticate, let's
try to do something a little more advanced.

Filtering Jenkins API Data
--------------------------
What if, instead of returning everything, we only want to see the name and color
of our jobs?  First, let's start out with the last command that we ran.  

We do need to add a **-g** this time to disable **globbing**.  Next, at the end
of the URL, we'll use what's called a "**tree**" query to filter what's
returned.  

Add:

`tree=jobs[name,color]`

to the end of our URL.

This tells Jenkins that we only want to return the data for our jobs, and
specifically only the name and color properties of the object.  If you'd like to
limit the number of jobs returned, you can always use braces for range
specifiers.  For example a 2,5 within braces would only return the 2nd through
fifth elements in the jobs array, or a 3 within braces would only return the 3rd
element.

Editing a Job using the API
---------------------------
Neat huh?  For our last example, let's try to do something really fancy.  We're
going to download the config.xml from a job that's been failing, fix the
configuration, then push the changes back to Jenkins, all using only the API!

The Jenkins job that we need to fix is called failingjob01. First, let's
download the **config.xml** file.  Run:

`curl -u username:apiToken http://jenkinsMasterURL/job/failingjob.01/config.xml`

Quick exam tip, make sure you note down the path to download a job
**config.xml**.  It will always be your JenkinsURL/job/nameOfJob/config.xml.   
There's a good chance you'll see a question like that on the test!

Alright, back to what we were doing.  Open up the **config.xml** file that we
just downloaded, make any changes that you'd like.   Then once you're finished
we have one final command to run.

Type:
`curl -X POST -u username:apiToken "http://jenkins/job/failingjob.01/config.xml" -d "@config.xml"`

Now refresh the page to see the changes we just made to our Jenkins job.  

Perfect!!  You now know how to authenticate, filter results, and even edit jobs all through the Jenkins API!  Great job!

About Hired
-----------
As always thanks for watching, and special thanks goes to Hired for sponsoring
this course. As I mentioned earlier, if you're into DevOps, there's a pretty
good chance you've had to deal with pushy recruiters and countless emails, as
well as spent many hours on your own searching for good DevOps opportunities,
even applying to a few along the way.

The reason we love using Hired is because it completely reverses this situation
and puts the power back in your hands, by having companies send you interview
requests that you can choose to pursue. (They even come with upfront salary
and equity!)

By having you fill out information that is specific to what you’re looking for
and what you feel your individual strengths and talents are, it ensures that the
only companies you'll hear from will be a great fit for you. Plus, Hired is
completely free for you, and they’ll even give you a $2,000 bonus after you
land a job, using the DevOps library link!

By the way, you’re never on your own during your job search when using Hired,
they provide an unbiased talent advocate to help you present your talents in
the right way to the right employer.

Ok, so if you are wondering how to sign up, just head to
[hired.com/devopslibrary](http://www.hired.com/devopslibrary).  Type in your
email, then hit "Get Job Offers.”  On the next page, just fill in your name and
password, then you're ready to complete the talent profile. As you can see, the
whole process is extremely easy and straightforward.

Ok, so now you’re in the system, look around the site a bit, and see what Hired
can offer you. We highly recommend giving them a shot, they really do a
fantastic job, especially for our DevOps community.

Thanks again for watching today, we'll see you again soon!

[Subscribe to our YouTube channel](https://www.youtube.com/channel/UCOnioSzUZS-ZqsRnf38V2nA?sub_confirmation=1) or follow [DevOpsLibrary on Twitter](https://twitter.com/intent/user?screen_name=devopslibrary).  

{% include subscribe.html %}
