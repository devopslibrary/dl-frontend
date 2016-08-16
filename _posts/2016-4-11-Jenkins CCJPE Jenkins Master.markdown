---
layout: post
title:  "CCJPE: Setting up a Jenkins Master"
date:   2016-4-10 12:00:00 -0500
categories: Jenkins
permalink: lessons/jenkins-master
excerpt: "In this short lesson, we’re going to set up a Jenkins master from scratch."  
weight: 2
difficulty: easy

---
{% include youtube.html id="aon3rohDEos" %}

Introduction
------------
Welcome to the DevOps Library!  This is Samantha, and in this short lesson, we’re going to set up Jenkins from scratch.  If you don’t know what Jenkins is, please feel free to watch our Introduction video, or visit “Jenkins.io”.  While this video IS relatively easy, some of the commands are fairly long, so feel free to copy and paste from our summary if you don’t want to type them by hand!

Installing Jenkins
------------------
Alright let’s go ahead and get started.  First, spin up a fresh Ubuntu 14.04 server.  
Once you’ve logged in, first make sure you run `sudo –i` to become root.  
Next, we need to add the Jenkins key to apt-get.  Run:

{% highlight bash %}
wget -q -O - http://pkg.jenkins-ci.org/debian/jenkins-ci.org.key | apt-key add -
{% endhighlight %}

Alright, now we need to add an entry to our sources list.  Run:

{% highlight bash %}
echo "deb http://pkg.jenkins-ci.org/debian binary/" | tee -a /etc/apt/sources.list
{% endhighlight %}

Wow that was rough!  We’re almost ready to install Jenkins, but first let’s install Java JDK 8.  By default, if Java isn’t already installed, the Jenkins installer will add JDK 7.  While you can certainly do that, Cloudbees recommends using Java 8, as it does have substantial performance and stability improvements over Java 7.
Let’s add the Java 8 repository first, run:

{% highlight bash %}
add-apt-repository ppa:webupd8team/java -y
{% endhighlight %}

Next, run `apt-get update`.  
Then, once that finishes, type:

{% highlight bash %}
apt-get install oracle-java8-installer -y
{% endhighlight %}

Perfect!  It will take a little while for Java to install, and because we’re using the Java 8 distribution from Oracle, we will need to accept a license
agreement before the setup completes.  If you’d rather use OpenJDK it works just as well!
Alright, now we’re finally ready to install Jenkins!  Type:

{% highlight bash %}
apt-get install jenkins –y
{% endhighlight %}

That’s it!  It shouldn’t take too long to finish, and once it completes we’ll be able to connect to the Jenkins Web UI on port 8080.  
Let’s go ahead and try that now, just open up a web browser, and type in the IP or hostname of your Jenkins server, followed by colon 8080.  There we go!  Great job!!  We’re now ready to go for the rest of the course.

Redirect Port 80 to 8080
------------------------
As a final note, if you’d like to reach Jenkins on the standard HTTP port 80 instead of needing to type 8080 everytime, we can easily do so using IP Tables.  Be warned the line is relatively long, but it’ll make it much easier for your users to remember the Jenkins URL!  Run:

{% highlight bash %}
iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
{% endhighlight %}

Alright, that command will automatically forward any TCP packets coming in to our server on port 80 to our internal port 8080, which means we can now access the Jenkins web interface without specifying the port!  However, let’s run one final command.  Type:

{% highlight bash %}
apt-get install iptables-persistent –y
{% endhighlight %}

Once the installation completes, tell it to save our current IPTables.  That way when we restart, we won’t lose our IPtables settings!

Conclusion
----------
Well, that’s it for this lesson!  Thank you so much for watching, we’ll see you again soon!
