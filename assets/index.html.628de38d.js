import{_ as r,r as l,o as d,c as u,a as e,b as o,d as n,w as s,e as a}from"./app.73411637.js";const h={},c=a('<p>This will take you through the process of saving blobs which are required if you wish to downgrade to an older, unsigned version of iOS or iPadOS. There are multiple methods below you can try. For unjailbroken devices, you will need to use the &quot;Computer&quot; method.</p><h2 id="saving-blobs-with-shshd" tabindex="-1"><a class="header-anchor" href="#saving-blobs-with-shshd" aria-hidden="true">#</a> Saving blobs with shshd</h2><p>shshd is a tweak used for automatic blob saving. Once you have it installed, you won&#39;t need to worry about manually saving blobs as it handles it all in the background. You must be jailbroken to use shshd. If you aren&#39;t jailbroken, follow <a href="#saving-blobs-with-tss-saver-website">Saving blobs with TSS Saver Website</a>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>shshd is only compatible with Procursus-based jailbreaks, such as Taurine, Odyssey, Chimera and Odysseyra1n. If you&#39;re using unc0ver or checkra1n, follow <a href="#saving-blobs-with-tss-saver-app">Saving blobs with TSS Saver App</a>.</p></div><ol><li>Open your package manager</li><li>Search for the <code>shshd</code> package</li><li>Download and install the package</li><li>Tap &quot;Done&quot; when prompted</li></ol>',5),b={href:"https://tsssaver.1conan.com/v2/",target:"_blank",rel:"noopener noreferrer"},p=a('<h3 id="running-shshd-manually" tabindex="-1"><a class="header-anchor" href="#running-shshd-manually" aria-hidden="true">#</a> Running shshd manually</h3><p>You shouldn&#39;t need to run shshd manually, but it can be run through a terminal.</p><ol><li>SSH into your device or download NewTerm 2</li><li>Type <code>sudo /usr/sbin/shshd</code> into the terminal <ul><li>If prompted for a password, enter in your root password (by default this is set to <code>alpine</code>)</li></ul></li></ol><h2 id="saving-blobs-with-tss-saver-app" tabindex="-1"><a class="header-anchor" href="#saving-blobs-with-tss-saver-app" aria-hidden="true">#</a> Saving blobs with TSS Saver App</h2><p>The TSS Saver app can be installed on jailbroken devices and allows you to save your blobs easily with the tap of a button. If you aren&#39;t jailbroken, follow <a href="#saving-blobs-with-tss-saver-website">Saving blobs with TSS Saver Website</a> instead.</p>',5),v={href:"https://repo.1conan.com/",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,[o("Download and install TSS Saver "),e("ul",null,[e("li",null,[o("If you're using unc0ver on iOS 14, also download and install "),e("code",null,"libkrw")]),e("li",null,[o("If you're using Taurine on iOS 14. also download and install "),e("code",null,"libkernrw")])])],-1),m=e("li",null,'Tap "Save Blobs"',-1),y=e("li",null,'Once you receive the confirmation message, tap "Open"',-1),f=a('<h2 id="saving-blobs-with-tss-saver-website" tabindex="-1"><a class="header-anchor" href="#saving-blobs-with-tss-saver-website" aria-hidden="true">#</a> Saving blobs with TSS Saver Website</h2><p>The TSS Saver website allows you to save your device&#39;s blobs by entering in some device-specific information. Once saved, you can then access the blobs by entering in that information again.</p><p>A12+ users must be jailbroken to use the TSS Saver Website, as it requires grabbing the ApNonce and Generator pair. If you aren&#39;t jailbroken, follow <a href="#saving-blobs-with-blobsaver">Saving blobs with blobsaver</a></p><h3 id="getting-generator-and-apnonce-jailbroken-a12-only" tabindex="-1"><a class="header-anchor" href="#getting-generator-and-apnonce-jailbroken-a12-only" aria-hidden="true">#</a> Getting Generator and ApNonce (Jailbroken A12+ only)</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you are using unc0ver or Taurine on iOS 14, install libkrw or libkernrw respectively.</p></div><ol><li>Open a Terminal app and run <code>sudo dimentio &gt; dimentio.txt</code><ul><li>Alternatively, you can get your Generator and ApNonce from the Generator tab in TSS Saver App</li></ul></li><li>Go to /var/mobile in Filza and open dimentio.txt</li><li>Copy the 0x number after <code>Current nonce is</code> at the bottom of the text file as well as the number that comes after <code>entangled nonce:</code>. The 0x number is your Generator, and the entangled nonce number is your ApNonce. Keep these safe somewhere, you&#39;ll need them later</li><li>Follow the rest of this guide</li></ol><h3 id="saving-blobs-all-devices" tabindex="-1"><a class="header-anchor" href="#saving-blobs-all-devices" aria-hidden="true">#</a> Saving blobs (All Devices)</h3>',7),w=e("li",null,"Connect your iOS Device to your Mac or PC",-1),_={href:"https://www.apple.com/itunes/",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,"Navigate to the device summary page",-1),k=e("li",null,[o("Click the Serial Number field twice "),e("ul",null,[e("li",null,"This should change to show your ECID number")])],-1),x=e("li",null,"Note down this ECID number somewhere where you can read it later",-1),O={href:"https://tsssaver.1conan.com/v2/",target:"_blank",rel:"noopener noreferrer"},T=e("li",null,"Input your device ECID",-1),q={href:"https://itunes.apple.com/us/app/ax-cpu/id1048174418?mt=8",target:"_blank",rel:"noopener noreferrer"},I=e("li",null,"A12+ users will need to input ApNonce and Generator pair",-1),A=e("li",null,"Click Submit",-1),D=e("h2",{id:"saving-blobs-with-blobsaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#saving-blobs-with-blobsaver","aria-hidden":"true"},"#"),o(" Saving blobs with blobsaver")],-1),C=e("p",null,"blobsaver is a cross-platform PC program, compatible with Windows, macOS and Linux, that allows you to easily save your blobs on any device, jailbroken or not. It's not as convenient as the other options, however it works with the most devices.",-1),N=e("h3",{id:"blobsaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#blobsaver","aria-hidden":"true"},"#"),o(" blobsaver")],-1),B={href:"https://github.com/airsquared/blobsaver/releases",target:"_blank",rel:"noopener noreferrer"},P=e("li",null,"Connect your iOS device to your computer and make sure it is unlocked",-1),E=e("li",null,'Click on the first "Read from device" button, which will fill your ECID and device information',-1),R=e("li",null,"If your iOS device is not A12 or higher, you are not required to get an APNonce and you may skip the next step",-1),G=a('<h3 id="get-your-device-specific-apnonce-and-generator" tabindex="-1"><a class="header-anchor" href="#get-your-device-specific-apnonce-and-generator" aria-hidden="true">#</a> Get your device-specific APNonce and generator</h3><p>Ensure your device is unlocked and connected to your computer throughout this process.</p><ol><li>Click on the second &quot;Read from device&quot; button next to the APNonce field</li><li>If you are jailbroken or have a generator/apnonce pair already set on your device you would like to keep, select &quot;Jailbroken&quot;. Otherwise, select &quot;Unjailbroken&quot;</li></ol><p>Your device will reboot into recovery mode multiple times. When you reboot into normal OS mode, unlock your iOS device.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you get stuck in recovery mode, try using the &quot;Exit Recovery Mode&quot; option from the &quot;Help&quot; menu in blobsaver.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>These values can be reused at any time to save blobs whether or not you&#39;re jailbroken.</p></div><h3 id="saving-blobs" tabindex="-1"><a class="header-anchor" href="#saving-blobs" aria-hidden="true">#</a> Saving blobs</h3><ol><li>Once you have filled out all the information, click &quot;Go&quot; to save blobs</li><li>You can also click &quot;Save Device&quot; to save your current device&#39;s information, so you can save blobs for it again later</li></ol><h3 id="saving-blobs-automatically-in-the-background" tabindex="-1"><a class="header-anchor" href="#saving-blobs-automatically-in-the-background" aria-hidden="true">#</a> Saving blobs automatically in the background</h3><ol><li>You can also optionally set up blobsaver to save blobs automatically in the background, without having to manually open blobsaver</li><li>Once you have one or more saved devices, click &quot;Background Settings&quot; to begin setting it up</li><li>Select which devices you would like to save automatically in the background, and blobsaver will first test them to ensure the device information is correct</li><li>You can then change the freqency interval blobs are saved at, using the &quot;Change Frequency&quot; button</li><li>Once you are ready, click &quot;Start Background&quot; to enable it</li><li>You may now close blobsaver, and blobs will automatically be saved in the background at the interval you set</li></ol><h2 id="saving-onboard-blobs" tabindex="-1"><a class="header-anchor" href="#saving-onboard-blobs" aria-hidden="true">#</a> Saving Onboard Blobs</h2><p>Saving Onboard Blobs is the process of saving your previous signature from when you last updated, and converting that into a usable blob. Because you updated while the version was still signed, you can re-use these blobs, and they will still be valid. However, the type of blobs that you save will depend on how you updated to your current version.</p><h3 id="ota-onboard-blobs" tabindex="-1"><a class="header-anchor" href="#ota-onboard-blobs" aria-hidden="true">#</a> OTA Onboard Blobs</h3><p>If you updated to the version you are saving Onboard Blobs on using the Settings app over-the-air, then the blobs will be &quot;OTA Blobs&quot;. These blobs require a <strong>bootrom exploit</strong> to be used, and <strong>only</strong> can be used with the <code>--use-pwndfu</code> argument in FutureRestore.</p><h3 id="itunes-onboard-blobs" tabindex="-1"><a class="header-anchor" href="#itunes-onboard-blobs" aria-hidden="true">#</a> iTunes Onboard Blobs</h3><p>If you updated/restored to the version you are saving Onboard Blobs on using iTunes / Finder, then the Onboard Blobs will be saved like normal blobs and you&#39;ll be able to use them. However, they differ according to whether you restored or updated using a computer.</p><p>If you <em>restored</em> using a computer, your blobs will be &quot;Erase&quot; blobs, and <strong>cannot</strong> be used with the &quot;Update (-u)&quot; option in FutureRestore.</p><p>If you <em>updated</em> using a computer, your blobs will be &quot;Update&quot; blobs, and <strong>can only</strong> be used with the &quot;Update (-u)&quot; option in FutureRestore.</p><h3 id="save-onboard-blobs" tabindex="-1"><a class="header-anchor" href="#save-onboard-blobs" aria-hidden="true">#</a> Save Onboard Blobs</h3><h3 id="using-deverser" tabindex="-1"><a class="header-anchor" href="#using-deverser" aria-hidden="true">#</a> Using Deverser</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>A Linux or macOS machine is required to use this method, and a jailbroken device with OpenSSH installed.</p><p>On checkra1n/odysseyra1n, you don&#39;t need OpenSSH, but it&#39;s recommended for beginners.</p></div>',21),j=a("<li>On your Linux or macOS machine, run <code>git clone https://github.com/joshuah345/deverser.git &amp;&amp; cd deverser</code> to grab the source of Deverser from GitHub <ul><li>If you already have done this, run <code>cd deverser</code> and <code>git pull</code> to get the latest changes</li></ul></li><li>Run <code>chmod +x deverser.sh</code> to allow it to be executed, then run <code>./deverser.sh</code> to start the script</li><li>Answer <code>Yes</code> if it asks to install img4tool <ul><li>img4tool converts the raw file to your usable SHSH blob</li></ul></li>",3),H=e("li",null,[o("On macOS, in another terminal window, install libimobiledevice with "),e("code",null,"brew install libimobiledevice libirecovery"),o(", then run "),e("code",null,"sudo iproxy 22 44")],-1),W={href:"https://cadoth.net/~nyuszika7h/ios-builds/libimobiledevice-static-linux.tar.gz",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,"To use OpenSSH, install it on your device, and get the device's IP address from Wi-Fi settings",-1),Y=e("li",null,[o("The script will then ask you to enter your device's root password twice "),e("ul",null,[e("li",null,[o("If you aren't sure, it's probably "),e("code",null,"alpine")])])],-1),U=e("p",null,[o("You can find your blob named "),e("code",null,"(YOUR ECID).dumped.shsh"),o(" in the directory you ran Deverser (usually ~/deverser).")],-1),L=e("h3",{id:"using-an-ssh-ramdisk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-an-ssh-ramdisk","aria-hidden":"true"},"#"),o(" Using an SSH Ramdisk")],-1),M=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"A Linux or macOS machine is required to use this method, and a checkm8 device on iOS 12+."),e("p",null,"This is a more advanced method and is not recommended for beginners.")],-1),z={href:"https://github.com/verygenericname/SSHRD_Script",target:"_blank",rel:"noopener noreferrer"},V=e("ul",null,[e("li",null,[o("Using "),e("code",null,"14.8"),o(" as the ramdisk version is recommended, but you can choose whatever")])],-1),J=e("li",null,[o("Run "),e("code",null,"./sshrd.sh dump-blobs")],-1),X=e("li",null,[o("Finally, run "),e("code",null,"./sshrd.sh ssh"),o(", then run "),e("code",null,"reboot"),o(" in the SSH session. "),e("ul",null,[e("li",null,"Force rebooting will work too")])],-1),K=e("p",null,[o("You can find your blob named "),e("code",null,"dumped.shsh"),o(" in the directory where you cloned the repo (usually ~/SSHRD_Script).")],-1),Z=e("h3",{id:"using-system-info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-system-info","aria-hidden":"true"},"#"),o(" Using System Info")],-1),Q=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"This method currently does not work and will fail to get your onboard blob.")],-1),$={href:"https://apt.arx8x.net",target:"_blank",rel:"noopener noreferrer"},ee=a('<li>Download the Tweak <code>System Info</code><img src="https://imgur.com/a/g8XZPrM" alt=""></li><li>After downloading System Info, open Settings and navigate to <code>General &gt; About</code></li><li>Scroll down to <code>ECID</code></li><li>Slide left on <code>ECID</code> and tap <code>APTicket</code></li><li>Tap <code>Submit</code></li>',5),oe={href:"https://shsh.host",target:"_blank",rel:"noopener noreferrer"},ne=e("h3",{id:"checking-blob-type",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#checking-blob-type","aria-hidden":"true"},"#"),o(" Checking Blob Type")],-1),te={href:"https://github.com/tihmstar/img4tool",target:"_blank",rel:"noopener noreferrer"},ae=e("ol",null,[e("li",null,[o("Download the IPSW and OTA zip from the internet, then extract the BuildManifest.plist from both of the iPSWs. "),e("ul",null,[e("li",null,"Google is your friend")])]),e("li",null,[o("Run "),e("code",null,"img4tool -v IPSW_BuildManifest.plist -s blob.shsh2 and img4tool -v OTA_BuildManifest.plist -s blob.shsh2")]),e("li",null,"Scrub through the output and check which BuildManifest img4tool reported a success with.")],-1);function ie(le,se){const t=l("ExternalLinkIcon"),i=l("router-link");return d(),u("div",null,[c,e("p",null,[o("Blobs will automatically be saved when you download shshd, every time you rejailbreak, and every week after that. The blobs are available at the "),e("a",b,[o("TSS saver website"),n(t)]),o('. To retrieve them, go to "retrieve" and enter your ECID.')]),p,e("ol",null,[e("li",null,[o("Add "),e("a",v,[o("repo.1conan.com"),n(t)]),o(" to your sources in your preferred "),n(i,{to:"/package-managers"},{default:s(()=>[o("package manager")]),_:1})]),g,m,y]),f,e("ol",null,[w,e("li",null,[o("Open iTunes or Finder "),e("ul",null,[e("li",null,[o("Windows users must download the "),e("a",_,[o("normal version"),n(t)]),o(", NOT the Windows Store version")])])]),S,k,x,e("li",null,[o("Open the "),e("a",O,[o("TSS Saver Website"),n(t)])]),T,e("li",null,[o("Select your Device "),e("ul",null,[e("li",null,[o("iPhone 6S, 6S Plus, and iPhone SE users will need to get their board configuration by downloading "),e("a",q,[o("AX-CPU"),n(t)]),o(" from the App Store")]),I])]),A]),D,C,N,e("ol",null,[e("li",null,[o("Download, install, and launch the latest version of "),e("a",B,[o("blobsaver"),n(t)])]),P,E,R]),G,e("ol",null,[j,e("li",null,[o("Enter the device's IP address "),e("ul",null,[e("li",null,[o("On checkra1n/odysseyra1n, you can run iproxy if you'd like. "),e("ul",null,[H,e("li",null,[o("On Linux, we recommend using OpenSSH on the iDevice, but if you'd like to manually install libimobiledevice, a link to the binaries are "),e("a",W,[o("here"),n(t)])])])]),F])]),Y]),U,L,M,e("ol",null,[e("li",null,[o("Navigate to "),e("a",z,[o("this link"),n(t)]),o(" and set up the ramdisk "),V]),J,X]),K,Z,Q,e("ol",null,[e("li",null,[o("Add the "),e("a",$,[o("https://apt.arx8x.net"),n(t)]),o(" repo to your preferred "),n(i,{to:"/package-managers"},{default:s(()=>[o("package manager")]),_:1})]),ee]),e("p",null,[o('A popup will appear with the message "APTicket Submitted" once finished. You can now access your blobs on '),e("a",oe,[o("shsh.host"),n(t)]),o(".")]),ne,e("p",null,[o("To check what type of blobs you have, use "),e("a",te,[o("img4tool"),n(t)])]),ae])}var de=r(h,[["render",ie],["__file","index.html.vue"]]);export{de as default};
