---
layout: post
title:  "Writing Quality Reusable PowerShell"
date:   2015-10-13 12:00:00 -0500
categories: PowerShell
permalink: lessons/writing-quality-reusable-powershell
excerpt: "Today we're going to talk about writing high quality, reuseable PowerShell code.  We will start out by looking at a typical PowerShell script that we found"
difficulty: easy

---
{% include youtube.html id="7jU15_7pPkY" %}

Introduction
------------
Today we're going to talk about writing high quality, reusable PowerShell code.  We will start out by looking at a typical PowerShell script that we found in the wild–and by rewriting it we'll cover how and why to write commandlets instead of scripts.  We'll also cover a few advanced topics such as Hashmaps, Splatting, and creating modules from scratch.

Let's get started.  Here we have a short typical PowerShell script we found on Technet named CheckFreeDiskSpace.ps1.  Before we examine it, let's just try to run it first.

{% highlight powershell %}
clear
$cre = get-Credential # This user account should be Adminstrator
$file = get-Content D:\PowerShell\computers.txt  # Replace it with your TXT file which contain Name of Computers

foreach ( $args in $file) {
get-WmiObject win32_logicaldisk -Credential $cre -ComputerName $args -Filter "Drivetype=3"  |
ft SystemName,DeviceID,VolumeName,@{Label="Total SIze";Expression={$_.Size / 1gb -as [int] }},@{Label="Free Size";Expression={$_.freespace / 1gb -as [int] }} -autosize
}
{% endhighlight %}

(***sigh***) It's asking for credentials, and can't find a file named computers.txt on our D drive.

While it wouldn't be that much work to revise this script for our own use, what if the script were more complex?  By the time we figure out what needs to be changed, we may as well have started from scratch.

Unfortunately this type of code is what a lot of sysadmins end with before moving on to writing their next script.  However, if you follow along we'll show you how to write code that's more useful for others to use, as well as yourself when you're trying to build off of old scripts.

Before we get started–Let's do some organizing and create an area to store our future PowerShell modules.

Organizing
----------
First create and clone a repository.  Our code should be in version control, as it allows for easily reverting when something breaks and simplifies sharing with a team.  If you don't have a repository, we highly recommend setting one up for free on Github.com.

Inside of our repository, create a new folder named modules.  This where we'll store any PowerShell modules that we create.

Let's create our first one–make a new directory, we'll call ours DevOpsLibrary.

Inside, add a file named DevOpsLibrary.psm1. It's important that the name of this file match the name of the folder, as PowerShell will automatically look for this file when we call Import-Module.  It only needs to contain the line seen here:

It's a little trick we use that just “dot sources” every ps1 file within the same folder as the module.  In other words, when we type import-module DevopsLibrary later on, PowerShell will load every function that we save with the extension .ps1 in our module's folder.

PowerShell will also look for an optional file with the extension psd1, known as the manifest.  We won't worry about it in this episode as it's primarily used for adding supplemental information.

We have one more thing that we need to do before rewriting the script.  If we try to run Import-Module, PowerShell isn't going to know where our module is located.  By default, PowerShell looks for modules in two places, one under:

`C:\Windows\System32\WindowsPowerShell\v1.0\Modules`

and the second under:

`%userprofile%\documents\WindowsPowerShell`

While we could move our module, we would prefer to keep it where it is so that our code is version controlled.  We just need to add our modules folder path to the PSModulePath variable in System.  Once we have done that, make sure that you close and reopen PowerShell.  Now we're finally ready to rewrite the script.

Let's begin by renaming the file to something that fits in with the standard PowerShell convention of Verb-Noun.  To see a list of suggested verbs, just run “Get-Verb”.  Since our script is retrieving information on disk space, let's use “Get” for the verb, and “DiskSpace” for the noun.  Save the file as *Get-DiskSpace*.ps1 under our DevOpsLibrary module folder.

Now let's go ahead and wrap the entire script under a function named *Get-DiskSpace*.  It's important that you give the function the same name as the file name, otherwise it'll become difficult to locate your functions later on.

Alright, that looks slightly better, but we still have two major problems.  One is that the list of computer names is hardcoded, and second, the script requires user interaction because we're using “Get-Credential”.  Let's break those out of the script by turning them into parameters.  Delete the “clear” line as well.  You should never use anything like “clear”, or “Write-Host”, as they make it frustrating for someone trying to reuse your code.  Instead, use commands like Write-Verbose or Write-Debug for testing.

Let's go ahead and delete the “file = Get-Content” line as well.  That line currently forces anyone that uses our script to supply a list of servers as text file.  That doesn't make sense, they might want to pipe a list of hostnames, or pass them in as an array.  You should always write your code to be as concise, flexible, and simple as possible.  We'll also replace the foreach with our own shorthand version.  If you haven't seen the pipe percent combination before, it's the same as a saying foreach, but instead of each item having a name, we reference them using dollar underscore.  In our example that means for every hostname in the variable ServerName, do Get-WMIObject, with the hostname being referenced by dollar underscore.

Speaking of Get-WMIObject, discard everything after the pipe as well.  All of that formatting is useless.  While it may look more pleasing when the command is ran by hand, it's about the worst thing we could do for reusability.  Let's say someone else utilizes are script and wants to divide the returned number, do you think it's easier to divide 500 or 500MB?  Remember to always separate logic from presentation.

Before we go too much further, let's make our function a real commandlet.  Add “Commandlet Binding” to the top of our function.  Then move our parameters out of the function signature to right after our commandlet binding call.

What does this black magic do you ask?  It tells PowerShell that this is a real commandlet, which gives us many benefits.  One of which is advanced parameters, allowing us to create different sets of parameters, make some mandatory or optional, use cool commands like Write-Verbose and Write-Debug, as well as a couple of other tricks including easy documentation.

Documentation
-------------
Speaking of documentation, that's something we recommend writing BEFORE you code a script, not after.  If we clearly outline what our function is going to do, what parameters it's going to take, and possibly even include an example or two, it'll be easy for us to stay focused on what our code should be doing.  Let's go ahead and write our documentation now.

At the top of the function, we're going to add a comment block formatted in a special way so that PowerShell recognizes it.  By using five special keywords, dot Synopsis, dot Description, dot Parameter, dot Example, and dot Notes, we can add meaningful documentation to our commandlet.  Yes this does take a little extra time, but the time it saves you and your team is more than worth it, not to mention the benefits of planning what you code.

Let's start with the synopsis.

*Get-DiskSpace* doesn't imply what it returns, so let's say that the function will return the total amount of disk space, and optionally the amount free or percentage free.

Now onto the description.  The description can just be a slightly more in depth description of the synopsis.  Let's also mention that the user can optionally pass in a set of credentials for running the command on a list of remote servers.  We'll actually make it optional later on.

For the Parameters, just type the name of each parameter, and on the next line just quickly describe what the parameter is used for.

We're going to go ahead and type two examples as well, one showing how to use our *Get-DiskSpace* command by piping a list of servers to it, as well as how to just return the percent of disk space free on the local server.  If you're not ready to write the example documentation until you finish the script, that's completely o-k, but please remember to come back to it!

Lastly, we can add some notes.  Notes can be anything that you'd like.  Some people like to add the author of the script here, or just helpful information for the user.

An important point to remember is that once you have documented the parameters of a function, and what it should return, you should stick with them once the code has been shared.  The reason is because you, or others on your team may now be depending on your function.  That doesn't mean you can't improve the code, or change HOW the commandlet does something, but everyone should be able to count on the parameters and what is returned to remain the same.

Well at least we're finally done with our documentation!  Want to see something neat? Hit F5 to run our partially completed commandlet.  Nothing happened of course as everything is wrapped in a function, which is exactly what we wanted.  Now type:

`Get-Help Get-DiskSpace`

See, it was worth it, look at how nice that looks!  Now when someone tries to use our code, instead of having to open up the script and look at it, they can just type Get-Help to see exactly how to use our commandlet!  Nice job!

We still have quite a bit left to do however before we're finished though.  Let's try some of our new advanced parameter tricks.  First, let's make it so that our function can be used in the pipeline.  Why is it important to be able to pipe to our function?  Because right now, to use our command someone would have to type:

`Get-DiskSpace –ServerName ‘Hostname'``

But they should also be able to use our command by typing:

`$arrayOfHostNames | Get-DiskSpace`

While that doesn't work yet, It's easy to implement.  All we need to do is add a special option called ValueFromPipeline = True in front of our ServerName parameter.  Let's do that now.

We can also make any of the parameters mandatory if we'd like by adding mandatory=true, but we don't need to do that for this script.

Alright, let's add three more parameters, one named free, one named total, and one named percent.  In front of each of these, add “Switch”.  Switch turns parameters into special Boolean switches, that way we can call:

“Get-DiskSpace -free” for example to return the amount of disk space available.

Before we actually implement those switches, let's create an array right before the foreach loop.   Now add array += in front of our Get-WMIObject call.  Now at the end of our script, we'll return the array.  Make sure every function that you write returns something, even if it's just a True for success.

If you haven't ran the script for a little while, now might be a good time to look at it again to see our current output.  First type $credentials = Get-Credential, and fill in some credentials for a remote server.  Then type:

`Get-DiskSpace -PSCredential $credential -ServerName` followed by the IP of the server.

Your output should look similar to ours, and as you can see, we already have the necessary information to implement the switches for total space, free space, and percent.  Let's edit our script RIGHT before the return array at the end.  We're going to use a “Switch” instead of a bunch of ugly if statements, and we'll use a variable named PSBoundParameters.Keys

This magical variable actually provides a list of all of the parameters that have been set when the function is called.  It's extremely helpful, especially for what we're about to do.

The code for our free, total, and percent switches will all look nearly identical, they consist of iterating through our array, and returning a new array with the specific values we care about.  Percent is a little unique in that we divide the amount of free space by the total size of the disk.  Feel free to pause briefly to examine how our code is doing the work here.

Splatting
---------
Alright, we are going to introduce one final concept before concluding the video, and that concept is called “Splatting”.  Splatting is just a technique for providing parameters to function by using a Hashtable, instead of outright specifying them.  Why would we want to use splatting in this function?  Because earlier we decided that specifying credentials or the server name should be optional.  Right now if you call Get-DiskSpace without any parameters, the command will fail.

We COULD solve that by making a few ugly sets of if statements, like:

“if credentials are supplied, call Get-WMIObject with credentials, else call it without credentials” and so on, but it would look messy.  Instead, we'll splat.

Let's look at our current Get-WMIObject call.  What parameters are we going to call no matter what is supplied?  For our function, we're always going to want to specify the class as Win32 LogicalDisk, and we always want the filter to be set as DriveType=3.  So let's create a hash table containing these values before our foreach.  Type:

`parms = @{class=Win32LogicalDisk; filter=DriveType3}`

If you're not used to PowerShell Hashmaps, go ahead and run this line, then type parms to look at the object.  Just think of Hashmaps as an array of keys that are mapped to values.

Alright, on the line right after we set up the Hashmap, add the following line:

—

This line is fairly simple, it is just saying, if someone runs this command with the PSCredential variable set, then add it to our parameter hash map.  Now we're going to add a relatively similar line at the top of our foreach, go ahead and add this:

—

This line just says that if the name of the server is set, then we want to add the ComputerName parameter to our hashmap along with the name of the server.  We have to have it in the foreach loop, because we want this to work even if the person running it supplies a list of servers.

Now to finally apply the splatting.  Completely remove all the parameters currently attached to Get-WMIObject, and replace them with `@parms`.  You may be thinking, why an @ sign?  Don't we need a $ sign? No, when calling a function, the @ sign actually tells PowerShell to splat the variables, just trust us.

Conclusion
----------
Believe it or not, our script is finally done.  Go ahead and commit the code to your repository, that way everyone else on the team can use it.  Now how do we call it?  Go ahead and close out of PowerShell ISE and just open up a fresh PowerShell window for the demonstration.

Type Import-Module DevOpsLibrary

then hit enter

Alright, our module has now been imported.  Now type Get-Help Get-DiskSpace to see our beautiful documentation again!

You can now call the function any way that you'd like, you can do

“Get-DiskSpace dash percent” to return the percentage free of our local machine, or pipe in a list of servers if you'd like.  Our script went from being difficult to use to completely reusable!  If we want to add more functions to our PowerShell Module, just save each function as functionName.ps1 in your module's directory.  Your team will love being able to just call import module to reuse your code, and if the video helped you feel free to send it to your teammates as well.  Thank you so much for watching!
