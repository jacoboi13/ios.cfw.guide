import{_ as u,r as a,o as c,c as d,a as e,b as n,d as l,w as o,e as h}from"./app.73411637.js";const p={},g={class:"custom-container danger"},m=e("p",{class:"custom-container-title"},"DANGER",-1),f=e("p",null,"This guide only exists as an archive - we won't be making noticeable changes to this guide in the future if anything happens.",-1),_=e("p",null,"Regardless, if you choose to install or continue to use rootful palera1n, do note that there will likely be less and less support over time given, and that newer tweaks will be less and less likely to support this setup of palera1n.",-1),y=e("p",null,"palera1n is a work-in-progress jailbreak that patches the kernel so you can use Sileo and install tweaks. Currently, palera1n is compatible with A11 (iPhone X) and earlier devices on iOS 15 and later, with some major caveats.",-1),w=e("p",null,[n("On A11 devices, you "),e("strong",null,"must disable your passcode"),n(" and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.")],-1),v=e("p",null,[n("Additionally, if your device is an A11 device on iOS 16 and you've set a passcode before, you will need to "),e("strong",null,"erase all content and settings"),n(" in order to be able to jailbreak.")],-1),b={class:"custom-container warning"},S=e("p",{class:"custom-container-title"},"WARNING",-1),k={class:"custom-container tip"},I=e("p",{class:"custom-container-title"},"TIP",-1),x=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),n(" Downloads")],-1),B={href:"https://github.com/palera1n/palera1n/releases",target:"_blank",rel:"noopener noreferrer"},O=h('<ul><li>macOS users should generally get <code>palera1n-macos-universal</code></li><li>Linux users should get whichever version corresponds to the architecture of the computer you&#39;re using <ul><li>This will be usually <code>palera1n-linux-x86_64</code>. Choose this one if you&#39;re unsure.</li><li>If you&#39;re using a 32-bit computer, choose <code>palera1n-linux-x86</code>.</li><li>If you&#39;re using an ARM computer (e.g. a Raspberry Pi), choose <code>palera1n-linux-armel</code> for 32-bit and <code>palera1n-linux-arm64</code> for 64-bit.</li></ul></li></ul><h2 id="installing-the-jailbreak" tabindex="-1"><a class="header-anchor" href="#installing-the-jailbreak" aria-hidden="true">#</a> Installing the jailbreak</h2><p>Please select your operating system:</p>',3),R=e("h3",{id:"installing-palera1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-palera1n","aria-hidden":"true"},"#"),n(" Installing palera1n")],-1),A=e("ol",null,[e("li",null,[e("p",null,"Enable Full Disk Access for Terminal (this only has to be done once)"),e("ul",null,[e("li",null,"macOS Monterey and below: System Preferences \u2192 Security & Privacy \u2192 Privacy \u2192 Full Disk Access"),e("li",null,"macOS Ventura and above: System Settings \u2192 Privacy & Security \u2192 Full Disk Access")]),e("p",null,"If Terminal does not show up in the list, click the plus icon and select it from Applications \u2192 Utilities.")]),e("li",null,[e("p",null,"If you are on macOS Monterey 12.2.1 or below, run the following commands (this only has to be done once):"),e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`sudo python -m ensurepip
sudo python -m pip install setuptools xattr==0.6.4
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])])]),e("li",null,[e("p",null,[n("Open a terminal window and "),e("code",null,"cd"),n(" to the directory that palera1n was downloaded to (usually "),e("code",null,"cd ~/Downloads"),n(").")])]),e("li",null,[e("p",null,[n("Run "),e("code",null,"sudo mkdir -p /usr/local/bin")])]),e("li",null,[e("p",null,[n("Run "),e("code",null,"sudo mv ./palera1n-macos-universal /usr/local/bin/palera1n")]),e("ul",null,[e("li",null,[n("Replace "),e("code",null,"./palera1n-macos-universal"),n(" with whatever version you downloaded")])])]),e("li",null,[e("p",null,[n("Run "),e("code",null,"sudo xattr -c /usr/local/bin/palera1n")])]),e("li",null,[e("p",null,[n("Run "),e("code",null,"sudo chmod +x /usr/local/bin/palera1n")])])],-1),G=e("h3",{id:"running-palera1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-palera1n","aria-hidden":"true"},"#"),n(" Running palera1n")],-1),F=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode"),e("p",null,"If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.")],-1),T=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[n("If you're using an Apple Silicon Mac and using a USB-C port to plug your cable/adapter into, you'll need to unplug and replug the device after "),e("code",null,"Checkmate!"),n(" appears in the logs.")])],-1),D=e("ol",null,[e("li",null,[n("Run "),e("code",null,"palera1n <insert arguments here>"),e("ul",null,[e("li",null,[n("16GB devices should use "),e("code",null,"palera1n -B -f"),n(" - note that you'll need to have 2-3GB of storage space free.")]),e("li",null,[n("Devices with more than 2-3GB of storage space free but with less than 10-15GB of storage space free also can use "),e("code",null,"palera1n -B -f"),n(", but only if they're on iOS 15.")]),e("li",null,[n("Devices which have iOS 16 or have more than 10-15GB of storage space free should use "),e("code",null,"palera1n -c -f")]),e("li",null,"Make sure your device is plugged in when entering this command")])])],-1),N={class:"custom-container warning"},P=e("p",{class:"custom-container-title"},"WARNING",-1),U=e("p",null,"If your device is either:",-1),C=e("ul",null,[e("li",null,"On iOS 15 and does not have at least 2-3GB of storage space free"),e("li",null,"On iOS 16 and does not have at least 10-15GB of storage space free")],-1),j=e("p",null,"You won't be able to continue following this guide.",-1),W={start:"2"},E=e("code",null,"Enter",-1),M=e("p",null,"Your device should begin to create the FakeFS or BindFS (depending on which command you ran).",-1),L=e("ol",{start:"3"},[e("li",null,[n("Once your device is done creating the FakeFS or BindFS, run "),e("code",null,"palera1n -f")])],-1),V=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:"),e("ol",null,[e("li",null,[n("In the terminal window, press "),e("code",null,"Control"),n(" + "),e("code",null,"C"),n(" on your keyboard")]),e("li",null,"Rerun the command that you just ran")]),e("p",null,"You'll need to do this every time you rejailbreak your device as well.")],-1),Y=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide.")],-1),X=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.")],-1),q=e("h3",{id:"installing-palera1n-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-palera1n-1","aria-hidden":"true"},"#"),n(" Installing palera1n")],-1),z=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode"),e("p",null,"If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.")],-1),H=e("ol",null,[e("li",null,"Open up a terminal window"),e("li",null,[n("Run "),e("code",null,"sudo systemctl stop usbmuxd")]),e("li",null,[n("Run "),e("code",null,"sudo usbmuxd -f -p")]),e("li",null,[n("Open up a new terminal window and "),e("code",null,"cd"),n(" to the directory that palera1n was downloaded to (usually "),e("code",null,"cd ~/Downloads"),n(").")]),e("li",null,[n("Run "),e("code",null,"sudo mv ./palera1n-linux-* /usr/bin/palera1n")]),e("li",null,[n("Run "),e("code",null,"sudo chmod +x /usr/bin/palera1n")])],-1),J=e("h3",{id:"running-palera1n-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-palera1n-1","aria-hidden":"true"},"#"),n(" Running palera1n")],-1),K=e("ol",null,[e("li",null,[n("Run "),e("code",null,"sudo palera1n <insert arguments here>"),e("ul",null,[e("li",null,[n("16GB devices should use "),e("code",null,"sudo palera1n -B -f"),n(" - note that you'll need to have 2-3GB of storage space free.")]),e("li",null,[n("Devices with more than 2-3GB of storage space free but with less than 10-15GB of storage space free also can use "),e("code",null,"sudo palera1n -B -f"),n(", but only if they're on iOS 15.")]),e("li",null,[n("Devices which have iOS 16 or have more than 10-15GB of storage space free should use "),e("code",null,"sudo palera1n -c -f")]),e("li",null,"Make sure your device is plugged in when entering this command")])])],-1),Q={class:"custom-container warning"},Z=e("p",{class:"custom-container-title"},"WARNING",-1),$=e("p",null,"If your device is either:",-1),ee=e("ul",null,[e("li",null,"On iOS 15 and does not have at least 2-3GB of storage space free"),e("li",null,"On iOS 16 and does not have at least 10-15GB of storage space free")],-1),ne=e("p",null,"You won't be able to continue following this guide.",-1),le={start:"2"},oe=e("code",null,"Enter",-1),te=e("p",null,"Your device should begin to create the FakeFS or BindFS (depending on the command you ran).",-1),ae=e("ol",{start:"3"},[e("li",null,[n("Once your device is done creating the FakeFS or BindFS, run "),e("code",null,"sudo palera1n -f")])],-1),se=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:"),e("ol",null,[e("li",null,[n("In the terminal window, press "),e("code",null,"Control"),n(" + "),e("code",null,"C"),n(" on your keyboard")]),e("li",null,"Rerun the command that you just ran")]),e("p",null,"You'll need to do this every time you rejailbreak your device as well.")],-1),ie=e("p",null,[n("Once the device boots up, open the palera1n loader app and tap "),e("code",null,"Install"),n(". After a bit of time, you'll be prompted to respring and "),e("code",null,"Sileo"),n(" should be on your home screen.")],-1),re=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[n("To rejailbreak your device, no matter what command you ran above, simply run "),e("code",null,"palera1n -f"),n(" and then repeat any other applicable steps.")])],-1),ue=e("br",null,null,-1);function ce(de,he){const t=a("router-link"),i=a("ExternalLinkIcon"),s=a("Tab"),r=a("Tabs");return c(),d("div",null,[e("div",g,[m,f,e("p",null,[n("For users who are looking for a maintained palera1n guide - we generally recommend following the normal "),l(t,{to:"/installing-palera1n"},{default:o(()=>[n("Installing palera1n")]),_:1}),n(" guide instead, as it will provide an overall better experience in almost every way compared to using rootful palera1n, and is the general direction that most developers are prioritizing tweak support towards.")]),e("p",null,[n("If you currently use rootful palera1n, we recommend following this guide to "),l(t,{to:"/removing-palera1n"},{default:o(()=>[n("remove rootful palera1n")]),_:1}),n(" and then "),l(t,{to:"/installing-palera1n"},{default:o(()=>[n("Install rootless palera1n")]),_:1})]),_]),y,w,v,e("div",b,[S,e("p",null,[n("If you are using an old version of palera1n that was tethered, you'll need to "),l(t,{to:"/removing-palera1n"},{default:o(()=>[n("remove palera1n")]),_:1}),n(" before continuing.")])]),e("div",k,[I,e("p",null,[n("If you are using Windows, you should follow "),l(t,{to:"/archived-palen1x-rootful"},{default:o(()=>[n("Using palen1x-rootful")]),_:1}),n(" instead.")])]),x,e("p",null,[n("The version of "),e("a",B,[n("palera1n"),l(i)]),n(" for your OS.")]),O,l(r,{tabs:""},{default:o(()=>[l(s,{tab:"",name:"macOS",default:!0},{default:o(()=>[R,A,G,F,T,D,e("div",N,[P,U,C,j,e("p",null,[n("If you cannot free up enough storage to follow this, you can alternatively use rootless palera1n by following "),l(t,{to:"/installing-palera1n-rootless"},{default:o(()=>[n("Installing palera1n (Rootless)")]),_:1}),n(" instead.")])]),e("ol",W,[e("li",null,[n("When ready, press "),E,n(" and follow the on screen instructions to enter "),l(t,{to:"/faq/#what-is-dfu-mode"},{default:o(()=>[n("DFU mode")]),_:1}),n(".")])]),M,L,V]),_:1}),l(s,{tab:"",name:"Linux"},{default:o(()=>[Y,X,q,z,H,J,K,e("div",Q,[Z,$,ee,ne,e("p",null,[n("If you cannot free up enough storage to follow this, you should instead use rootless palera1n by following "),l(t,{to:"/installing-palera1n"},{default:o(()=>[n("Installing palera1n")]),_:1}),n(" instead.")])]),e("ol",le,[e("li",null,[n("When ready, press "),oe,n(" and follow the on screen instructions to enter "),l(t,{to:"/faq/#what-is-dfu-mode"},{default:o(()=>[n("DFU mode")]),_:1}),n(".")])]),te,ae,se]),_:1})]),_:1}),ie,re,ue,n(" To revert the jailbreak, follow "),l(t,{to:"/removing-palera1n/"},{default:o(()=>[n("Removing palera1n")]),_:1}),n(". ")])}var ge=u(p,[["render",ce],["__file","index.html.vue"]]);export{ge as default};
