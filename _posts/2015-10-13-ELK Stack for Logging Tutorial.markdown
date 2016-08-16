---
layout: post
title:  "ELK Stack for Logging Tutorial"
date:   2015-10-13 12:00:00 -0500
categories: ELK
permalink: lessons/elk-stack-for-logging-tutorial
excerpt: "ELK is an amazing open source logging system, and we'll show you how to set it up!"
difficulty: medium

---
{% include youtube.html id="2-Bzm25dLRQ" %}

Introduction
------------
Hello and welcome to the DevOps Library, this is Samantha with Episode 9, the ELK stack.  Before we get started, let me quickly explain what the ELK stack is.  ELK is an amazing Open Source logging system, and we have yet to find a single company that would not benefit tremendously by setting it up.  If you’ve heard of Splunk, or might even be using Splunk now, one thing that you need to keep in mind is that Splunk is insanely and incredibly expensive.  ELK will provide with just as much if not more than Splunk when set up properly, and has a huge price tag of exactly zero.  Almost every company we’ve been to usually starts out using Splunk, they end up loving it, a few months later they realize they can’t spend a couple hundred thousand just on logging, and that’s when they realize everything they’ve come to love can be done for free.

Well, now that we’ve angered the Splunk gods, and hopefully made you interested in ELK, let’s get started.

What is ELK?
------------
ELK stands for three separate pieces.  The E stands for ElasticSearch, which is where we’ll be storing all of our logs.  The L stands for LogStash, which we can use for both shipping the logs from servers, as well as processing and dumping them into ElasticSearch.  And lastly is the K which stands for Kibana.  Kibana is a gorgeous web interface, which has traditionally been hosted through Nginx or Apache, but as of Kibana 4 is now a standalone application.

Today we’re going to keep it simple, and install all of these on a single fresh 14.04 Ubuntu Server.  NOTE, ELK does require a bit more memory and CPU power than most of tutorials, please ensure that the VM you’re using has at least 2GB of memory, and preferably 2 CPUs (which our VagrantFile includes automatically for VirtualBox).  Please keep in mind that the architecture we’re setting up today is NOT how we would set it up for a large enterprise.  ELK does scale extremely well, but properly setting up horizontal scaling will be covered in a later video.

Installation
------------
Alright, let’s begin!  First, let’s begin by adding the apt key and repository for ElasticSearch.  Run:

`wget -qO – https://packages.elasticsearch.org/GPG-KEY-elasticsearch | sudo apt-key add –`

Followed by:

`sudo add-apt-repository “deb http://packages.elasticsearch.org/elasticsearch/1.4/debian stable main”`

Now we just need to call apt-get update.

ElasticSearch
-------------
Alright let’s install some packages, do:

{% highlight bash %}
sudo apt-get update && sudo apt-get install default-jdk elasticsearch -y
{% endhighlight %}

We’ll need to start ElasticSearch after it installs, to do that let’s just run:

`service elasticsearch start`

Logstash
--------
Now we need to install Logstash.  The best way to install it is actually to grab the latest debian packages, so let’s do:

{% highlight bash %}
wget https://download.elasticsearch.org/logstash/logstash/packages/debian/logstash_1.4.2-1-2c0f5a1_all.deb
{% endhighlight %}

Go ahead and install that using:

`dpkg -i logstash_1.4.2-1-2c0f5a1_all.deb`

We also want the contributed community plugins for Logstash as well, so one more long wget.  This time:

`wget https://download.elasticsearch.org/logstash/logstash/packages/debian/logstash-contrib_1.4.2-1-efd53ef_all.deb`

Alright, let’s install that as well.

`dpkg -i logstash-contrib_1.4.2-1-efd53ef_all.deb`

We don’t need to start Logstash quite yet as we still need to make a configuration file for it.  Let’s go ahead and do that now.  Head to /etc/logstash/conf.d

Configuring Logstash
--------------------
Once there, create a new file, we’ll name ours logstash.conf

Now just follow along.  Logstash configurations generally consists of some inputs, some filters, and some outputs.  We won’t worry about filtering today, so let’s start with setting up an input.  Type Input followed by a pair of braces.  Now inside of those, we’ll add two types of input.  For the first one, type stdin followed by another pair of braces.  Stdin will make it so that we can pipe standard input directly into Logstash, or in other words anything we type while running Logstash in the foreground will get piped straight to our output that we’ll set up shortly.

Alright let’s add one final input, type:

~~~
input {
  stdin {}
  file {
    type => syslog
    path => "/var/log/*"
    start_position => beginning
  }
}
~~~

This input will automatically pipe anything that goes to our system logs, like our syslog for example, straight to our output.  Also notice that we specified that we’d like our start position to be at the beginning.  Normally, Logstash starts out by tailing any files that we specify, but because we want some extra data to play around with, we’re starting at the beginning, so that Logstash parses everything that’s already in our var logs folder.

Well that’s enough inputs, let’s set up two outputs for our data.

Setting up Outputs
------------------
Type:

{% highlight ruby %}
output {
  stdout {
    codec => rubydebug
  }
  elasticsearch {
  }
}
{% endhighlight %}

This one just outputs everything Logstash receives to standard out when Logstash is ran in the Foreground.  For our second output, type elasticsearch, host goes to localhost then close your braces.  This second output dumps everything into elasticsearch, so that our logs have a place to stay.  Double check your file and make sure it looks like ours, then save it.



Alright.  While we could start the logstash service now by doing service logstash start, let’s run it in the foreground to make sure everything is working properly.  Logstash lives in opt, so run

`/opt/logstash/bin/logstash -f logstash.conf`

You should start getting blasted by a ton of events from Logstash.  All of those are also pouring straight into ElasticSearch.  Once it calms down (probably in a minute or two depending on how old the instance you’re using is), go ahead and try typing a few messages and pressing enter.  They’ll get saved in ElasticSearch as well, since you added the standard-in line to the Logstash inputs.

Alright, once you’ve finished dumping some messages in, go ahead and hit CTRL-Z to suspend the process, then type bg ENTER to let Logstash keep running in the background.  You can always type fg to bring it back to the foreground, or kill it completely using CTRL-C.  When you aren’t testing, it makes a lot more sense to just run Logstash as a service, but we’re just exploring right now.

Now that Logstash and ElasticSearch are finished, we have one last piece that we need to install.  Let’s go ahead and download Kibana.  Do:

Kibana
------
wget https://download.elasticsearch.org/kibana/kibana/kibana-4.0.1-linux-x64.tar.gz

Alright, we’ll untar that to opt, run:

`tar -xvf kibana-4.0.1-linux-x64.tar.gz -C /opt`

Now go to that directory.  We’re going to just quickly rename the folder to kibana, then run:

`/opt/kibana/bin/kibana`

Believe it or not you’re finally finished and can begin playing with the stack!  You can access Kibana using a web browser on port 5601.  If you’re using our VagrantFile, just visit 192.168.5.10:5601.

When you first access Kibana, make sure you set the Time-Field name to `@timestamp.  Once that’s saved, go ahead to the discover tab and select a recent date range.  We’ll add the host, message, and type of message for now.  Note that you can zoom in on a timeframe by selecting the range on the graph.

Conclusion
----------
We highly recommend spending some time getting to know Kibana.  Here’s a couple of screenshots of different ways you can use it to visualize data.  Soon we will be releasing several more videos, covering each part of the ELK stack in depth, but hopefully that’s enough to get you going!  Thank you so much for watching!
