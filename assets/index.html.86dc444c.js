import{_ as c}from"./checkra1n.ace0089d.js";import{_ as u,r as l,o as d,c as h,a as e,b as n,d as t,w as o,e as p}from"./app.73411637.js";const _={},m={class:"custom-container danger"},y=e("p",{class:"custom-container-title"},"DANGER",-1),f=p('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.</p></div><h2 id="requirements-linux" tabindex="-1"><a class="header-anchor" href="#requirements-linux" aria-hidden="true">#</a> Requirements (Linux)</h2>',3),b={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,"An Apple TV Siri remote (any generation)",-1),k=e("li",null,[n("If you have an Apple TV 4K, you will also need two cables: "),e("ul",null,[e("li",null,"A GoldenEye or Foxlink X892 cable"),e("li",null,"An Alex DCSD cable"),e("li",null,"It is recommended to purchase these from AliExpress for the best prices. Note that they typically take about a month to arrive.")])],-1),g=e("p",null,[e("img",{src:c,alt:"A screenshot of the checkra1n application"})],-1),v=e("h2",{id:"installing-checkra1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-checkra1n","aria-hidden":"true"},"#"),n(" Installing checkra1n")],-1),A={class:"custom-container tip"},x=e("p",{class:"custom-container-title"},"TIP",-1),V={href:"https://checkra.in/linux",target:"_blank",rel:"noopener noreferrer"},T=e("li",null,[n("Run the "),e("code",null,"checkra1n"),n(" binary in the terminal using "),e("code",null,"./checkra1n"),e("ul",null,[e("li",null,[n("You may need to run "),e("code",null,"sudo chmod a+x ./checkra1n"),n(" if the binary doesn't run")]),e("li",null,[n("If you're on tvOS 14.6 or later, you will need to head into "),e("code",null,"Options"),n(", then enable the "),e("code",null,"Allow Untested Versions"),n(" option once it runs")])])],-1),I=e("li",null,"Plug your Apple TV device into your computer",-1),S=e("li",null,[n("Click "),e("code",null,"Start"),n(" -> "),e("code",null,"Next"),n(" on checkra1n "),e("ul",null,[e("li",null,[n("If you're on tvOS 14.6 or later, you will need to head into "),e("code",null,"Options"),n(", then enable the "),e("code",null,"Allow Untested Versions"),n(" option before clicking Start")]),e("li",null,"Your device will be put into recovery mode automatically")])],-1),U=e("code",null,"Start",-1),C=e("ul",null,[e("li",null,"Follow the instructions until your device shows a black screen")],-1),N=e("li",null,"After this, checkra1n should automatically install to your Apple TV",-1),B=e("ol",null,[e("li",null,"Connect the GoldenEye to your Apple TV's Ethernet port"),e("li",null,'The Alex cable will have text that says "Bacon Side Up" on it; orient this to face towards the side of the Lightning port farthest from the edge of the GoldenEye, then connect the two'),e("li",null,[n("Connect the other end of the Alex cable to your computer, and then power cycle the Apple TV "),e("ul",null,[e("li",null,"You can do this by unplugging the power cord or by holding the Menu and TV buttons")])]),e("li",null,"The Apple TV should automatically enter DFU."),e("li",null,[n("Run the "),e("code",null,"checkra1n"),n(" binary in the terminal using "),e("code",null,"./checkra1n -c"),e("ul",null,[e("li",null,[n("You may need to run "),e("code",null,"sudo chmod a+x ./checkra1n"),n(" if the binary doesn't run")]),e("li",null,[n("If you're on tvOS 14.6 or later, you will need to head into "),e("code",null,"Options"),n(", then enable the "),e("code",null,"Allow Untested Versions"),n(" option once it runs")])])]),e("li",null,"After this, checkra1n should automatically install.")],-1),D=e("p",null,"Your Apple TV device should now reboot.",-1),E=e("p",null,"You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.",-1);function Y(O,R){const i=l("router-link"),a=l("ExternalLinkIcon"),s=l("Tab"),r=l("Tabs");return d(),h("div",null,[e("div",m,[y,e("p",null,[n("If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc.) this guide will not work, and you should follow "),t(i,{to:"/using-odysseyn1x"},{default:o(()=>[n("Using Odysseyn1x")]),_:1}),n(" instead.")])]),f,e("ul",null,[e("li",null,[n("The latest release of "),e("a",b,[n("checkra1n"),t(a)])]),w,k]),g,v,t(r,{tabs:""},{default:o(()=>[t(s,{tab:"",name:"Apple TV HD",default:!0},{default:o(()=>[e("div",A,[x,e("p",null,[n("checkra1n provides native support to machines running a Debian-based distro (e.g Ubuntu). It's recommended that you follow "),e("a",V,[n("specific instructions"),t(a)]),n(" provided by the checkra1n team themselves.")])]),e("ol",null,[T,I,S,e("li",null,[n("You will now be presented with instructions in how to reboot your device into "),t(i,{to:"/faq/#what-is-dfu-mode"},{default:o(()=>[n("DFU mode")]),_:1}),n(", click "),U,n(" to begin "),C]),N])]),_:1}),t(s,{tab:"",name:"Apple TV 4K (1st generation)",default:!1},{default:o(()=>[B]),_:1})]),_:1}),D,E])}var L=u(_,[["render",Y],["__file","index.html.vue"]]);export{L as default};
