---
layout: post
title:  "Joining Ubuntu to Active Directory"
date:   2015-10-13 12:00:00 -0500
categories: Linux
permalink: lessons/joining-ubuntu-to-active-directory
excerpt: "Today we're going to cover how to join a Linux Server to Active Directory (Ubuntu Specifically).  We're going to start out with two servers, a Windows"
difficulty: hard

---
{% include youtube.html id="ZQD0rLZMNho" %}

Welcome to the DevOpsLibrary, this is Samantha with Episode 11 and today we’re going to cover how to join a Linux server to Active Directory (Ubuntu specifically).  Why are we devoting an entire video to what sounds like such a simple task?  For two reasons.  One is that we’ve seen countless companies use Active Directory for all of their windows servers, only to resort to using local accounts on their Linux servers.  And secondly, once you look into joining a Linux server to AD, you’ll realize there are dozens of ways of doing so, but none of them are intuitive.

We’re going to start out with two servers, a Windows 2012 VM serving as a domain controller, DNS server, and fileserver, as well as a fresh 14.04 Ubuntu VM.

The Ubuntu server must be able to resolve the domain controller, so make sure that you can ping the name of your domain successfully from the Ubuntu VM.  Don’t worry if the ping fails to resolve, all you need to do is add the Windows server to the Ubuntu VM’s list of nameservers.  To do so, run:

```echo ‘prepend domain-name-servers 172.31.19.187;’ >> /etc/dhcp/dhclient.conf```

followed by:

```ifdown eth0 && ifup eth0```

Now go ahead and try to ping your domain name, it should resolve successfully.  You may be wondering why we didn’t just add the nameserver to the interfaces file or resolv.conf.  The reason is because in some environments (especially AWS), the DHCP server will hand out the nameservers.  This is normally fine, but in order to join the domain, the domain DNS server MUST be the first entry, and the only way to do that is to prepend it in the dhclient.conf file (unless of course your DHCP server is already handing out the correct domain DNS servers!).

Next, we need to download the open source PowerBroker Identity Services package.  You can run the same command we’re running now to retrieve the latest 64bit version as of April of 2015, or you can visit BeyondTrust.com to look for the package yourself.

```wget http://download.beyondtrust.com/PBISO/8.2.2/linux.deb.x64/pbis-open-8.2.2.2993.linux.x86_64.deb.sh```

If you’re wondering why we’re using PowerBroker (formerly known as Likewise Open), instead of one of the dozens of other ways of joining AD, it’s because out of all of the methods we’ve tried, it’s been the easiest and most reliable way of doing it, while remaining Open Source and free.  If you’d like, you can join Ubuntu by hand using the built in Winbind, but it’s much easier to let PowerBroker do the work for you.  Realm D is another option, but at the time of the tutorial it still had quite a few bugs.

Well, Now that the package has downloaded, let’s make it executable by running:

```chmod a+x pbis-open-8.2.2.2993.linux.x86_64.deb.sh```

Next, let’s install the package by running SH, followed by the name of the package, and install.

```sh ./pbis-open-8.2.2.2993.linux.x86_64.deb.sh install```

Now you can finally join the domain, just run:

```domainjoin-cli join``` followed by the name of your domain and an active directory username and password with permission to join the domain.

```domainjoin-cli join devopslibrary.com ken Password```

You should now be able to SSH in by using username @ domainname for your credentials.  Let’s try that now.

It worked!  But we can’t sudo obviously, and wouldn’t it be nicer if bash came up automatically?  Let’s fix that now.  Log back in with a user with root privileges and run:

```echo ‘%domain^admins ALL=(ALL) ALL’ >> /etc/sudoers```

That line just gives any domain admin account sudoers access, you could also add it by using visudo.

Next, let’s make it so you can login by just typing the domain username, without needing to specify the domain.  Run:

```/opt/pbis/bin/config AssumeDefaultDomain True```

Lastly, let’s make any domain user default to bin bash at login.  Run:

```/opt/pbis/bin/config LoginShellTemplate /bin/bash # Set default to bash```

Pause:

Go ahead and try to login again now with a domain admin account, you should be able to sudo.

Well done!  But don’t stop there!  Let’s set up home directories!  To do so, we’re going to need a network share to store them first.  While a DFS share is recommended for redundancy, we’ll show you how to quickly get going by creating a shared folder on our domain controller.

All that you need to do is create a folder, we’ll name ours UserProfiles.

Now make sure you share the folder, giving authenticated users rights to “Change” and “Read”.

Lastly, we need to go to the advanced permissions settings.  For authenticated users, ensure they have “Trave Folder”, “List Folder”, “Read Attributes”, “Create folders”, and “Read Permissions” enabled.  Also add “CREATOR OWNER”, with Full Control to our folder.  What these settings will do is make it so that any domain user can create a new folder within UserProfiles (which we’ll do automatically in a few minutes) and have full access to everything within their own folder, but no access to anyone else’s (Unless they’re a domain admin of course).

Alright, we’re ready to go back to our Ubuntu VM.  Let’s install the CIFS Utilities and Libpam.  Run:

```apt-get install cifs-utils libpam-mount –y```

We’re using PAM because it’s able to use our login credentials to automatically mount a network share at login, and CIFS is the type of share we’re connecting to.

We need to edit the PAM mount configuration.  To do so, you could just edit it with VI directly at

/etc/security/pam_mount.conf.xml, but we’ll make it easier on you.  Run the following block of code to fill out the configuration, replacing dc01.devopslibrary.com with the name of your fileserver, and the mountpoint will need to be “home local your domainname”.  We’ve pasted the block into this video’s summary, that way you can copy and paste it instead of typing it out.  It’s extremely important that you make the configuration identical to this, unless you really know what you’re doing.  The first part of it is just saying what volume to mount, and we tell it to use our domain user credentials to mount it.  The sec=krb5i part is essential for mounting Windows shares correctly, and the MK mountpoint line automatically un mounts the share when you logoff.

```cat >/etc/security/pam_mount.conf.xml <<EOL
<pam_mount>
<volume fstype=”cifs” server=”dc01.devopslibrary.com”
path=”UserProfiles” mountpoint=”/home/local/DEVOPSLIBRARY”
options=”sec=krb5i,user=%(DOMAIN_USER)@%(DOMAIN_NAME),uid=%(USERUID),gid=%(USERGID),cruid=%(USERUID),nodev,nosuid,file_mode=0700,dir_mode=0700″>
<and><not><user></user></not></and>
</volume>
<mkmountpoint enable=”1″ remove=”true” />
</pam_mount>
EOL
```
Alright, we’re almost finished.  If you were to login right now, as long as a folder matching your username is present under the UserProfiles share, your home directory will mount successfully.  However, we don’t want to have to set up each user’s folder, so we’ll use a tool that’s part of PAM to do it.  Let’s edit:

/etc/pam.d/common-session.  At the very end of this file, add the following line:

```session    required   pam_mkhomedir.so skel=/etc/skel/ umask=0022 >> /etc/pam.d/common-session```

What this line does it make it so that the pam_mkhomedir script will automatically create a home directory for each user under UserProfile if it doesn’t already exist.  You might be wondering what etsy skel is for.  Etsy skel is known as the skeleton directory, if you’re from the windows world it’s very similar to the “Default User” concept.  Anything that you add to that directory will be added by default to anyone home folder the first time they login.

If you’re interested in seeing the skeleton folder in action, run the following two lines:

sed -i ‘/#force_color_prompt=yes/c\force_color_prompt=yes’ /root/.bashrc

cp /root/.bashrc /etc/skel/.profile # Skeleton

This will copy the root bashRC file as the default profile file for new users, and as an added bonus we’ve enabled colored prompts, because everything looks better in color.

Well, it’s finally time to see if our hard work paid off.  Go ahead and log off and back on, using a domain account that’s never logged into our Linux VM before.  You should see it automatically create a new folder in our file share for the user, and look, our prompt has color!  Any file we add now to our home directory will be immediately available to any other Linux VMs that we tie in to AD.  If we try to access the files of another user you’ll see that we can’t, unless we’re a domain admin.

If you’d like to lock your Linux machines down further you can always run

Opt PBIS bin config RequireMemberShipOf followed by the group and usernames that you want to have access to SSH in, everyone else will be blocked.

Hopefully everything worked out great!  If you ran into any problems, be sure to tail “var log auth.log”, it helps a lot with troubleshooting, and feel free to leave us a message in the comments.  Thank you for watching!
