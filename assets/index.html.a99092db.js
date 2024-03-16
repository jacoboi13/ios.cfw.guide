import{_ as n,r as s,o as l,c as h,a as t,b as e,d as o,w as r,e as a}from"./app.73411637.js";const d={},c=a('<h2 id="general-questions" tabindex="-1"><a class="header-anchor" href="#general-questions" aria-hidden="true">#</a> General Questions</h2><h3 id="what-is-jailbreaking" tabindex="-1"><a class="header-anchor" href="#what-is-jailbreaking" aria-hidden="true">#</a> What is jailbreaking?</h3><p>Jailbreaking is a term used to describe the process that allows you to truly unlock the potential of your iOS device. Apple&#39;s mobile operating system is known for its security and that&#39;s partly because of how locked-down it is. Jailbreaking your device will allow you to break those restrictions and customize your device to how you like it.</p><p>Jailbreaking gives you the ability to install custom applications and &quot;tweaks&quot; (modifications) from a package manager to customize and enhance the user experience. Jailbreaking is free and easy on most devices.</p><h3 id="is-jailbreaking-legal" tabindex="-1"><a class="header-anchor" href="#is-jailbreaking-legal" aria-hidden="true">#</a> Is jailbreaking legal?</h3><p>Jailbreaking in the US is perfectly legal. In 2010, the US Copyright Office declared jailbreaking to be an exception to the Digital Millennium Copyright Act.</p><p>You may want to check in your country whether it is legal there or not before proceeding, however in most countries it should be fine.</p><h3 id="what-is-a-package-manager" tabindex="-1"><a class="header-anchor" href="#what-is-a-package-manager" aria-hidden="true">#</a> What is a package manager?</h3><p>Package managers are used to install, uninstall and modify official or community-made software to customize your device. Sileo is an example of a package manager.</p><p>They can be considered similar to the iOS App Store, where you can install both free and paid software.</p><h3 id="what-s-a-repo" tabindex="-1"><a class="header-anchor" href="#what-s-a-repo" aria-hidden="true">#</a> What&#39;s a repo?</h3><p>These are essentially databases that contain lots of tweaks for you to install. When you add repos to your package manager, you will be able to install the tweaks contained on it, and look for them using the search function.</p><h3 id="what-are-tweaks" tabindex="-1"><a class="header-anchor" href="#what-are-tweaks" aria-hidden="true">#</a> What are tweaks?</h3><p>Tweaks are small modifications that can be installed change the look and/or feel of your device.</p><p>Unlike apps, tweaks usually don&#39;t come with an app icon, but rather instead an area in the Settings app to change how the tweak acts. Some simpler tweaks might not even have this.</p><h3 id="what-is-respringing-or-restarting-springboard" tabindex="-1"><a class="header-anchor" href="#what-is-respringing-or-restarting-springboard" aria-hidden="true">#</a> What is &quot;respringing&quot; or &quot;Restarting Springboard&quot;?</h3><p>Respringing is essentially restarting the home screen and the iOS UI. Most of the time, you can install a tweak and respring to apply it, without fully rebooting.</p><p>You won&#39;t have to reinstall an exploit after respringing, however, and you can remain jailbroken.</p><h3 id="what-is-recovery-mode" tabindex="-1"><a class="header-anchor" href="#what-is-recovery-mode" aria-hidden="true">#</a> What is Recovery Mode?</h3><p>Recovery Mode is a protection built-in to your device that allows the user to completely start over with a fresh install of iOS. This is especially useful if the installed OS is damaged and cannot start properly, which can happen during jailbreaks, although rare. Entering recovery mode can be done on device and through a computer, and iTunes/Finder utilise recovery mode during normal upgrades and restores.</p><h3 id="what-is-dfu-mode" tabindex="-1"><a class="header-anchor" href="#what-is-dfu-mode" aria-hidden="true">#</a> What is DFU mode?</h3>',21),u=a('<h3 id="what-can-i-do-once-jailbroken" tabindex="-1"><a class="header-anchor" href="#what-can-i-do-once-jailbroken" aria-hidden="true">#</a> What can I do once jailbroken?</h3><ul><li>Gain full access to your device&#39;s OS</li><li>Get access to a package manager, such as Sileo or Zebra</li><li>Install themes to change the look and feel of your device</li><li>Install tweaks to change how iOS behaves</li></ul><h3 id="what-should-i-know-before-starting" tabindex="-1"><a class="header-anchor" href="#what-should-i-know-before-starting" aria-hidden="true">#</a> What should I know before starting?</h3><ul><li>It is <strong>strongly</strong> recommended to backup your device to iCloud, iTunes, or Finder (on macOS Catalina or newer) in case of data loss</li><li>If no issues occur during installation, you will be jailbroken without any data loss</li><li>Keep the device plugged into to a power source or keep the battery fairly charged, so that any unexpected power off can be prevented</li><li>Jailbreaking allows you to unlock your system but can lead to data loss if you damage the OS</li><li>You may be vulnerable to more malware and other security issues after jailbreaking compared to if you were in a non-jailbroken state</li><li>Your device warranty will become void after jailbreaking until it is restored to an un-jailbroken state, which is easy to do</li></ul><h2 id="blob-questions" tabindex="-1"><a class="header-anchor" href="#blob-questions" aria-hidden="true">#</a> Blob questions</h2><h3 id="what-is-a-blob" tabindex="-1"><a class="header-anchor" href="#what-is-a-blob" aria-hidden="true">#</a> What is a blob?</h3><p>A blob is a file containing a special key specifically for that one device to allow downgrading to a specific firmware.</p><p>Blobs are like golden tickets, but instead a digital signature made by Apple that was saved at the time when the signing window was open. If you possess one (or many), keep them safe.</p><h3 id="how-do-blobs-work" tabindex="-1"><a class="header-anchor" href="#how-do-blobs-work" aria-hidden="true">#</a> How do blobs work?</h3><p>Blobs can be used in a program named <code>futurerestore</code>, to restore to a firmware, provided the SEP (Secure Enclave Processor) firmware and the Baseband firmware are compatible with the target iOS version.</p><p>Even though blobs may become incompatible for use of restoring at the current time, it is still advised to save them, in case an opportunity is made available which allows for their usage.</p><h3 id="can-i-save-them-now" tabindex="-1"><a class="header-anchor" href="#can-i-save-them-now" aria-hidden="true">#</a> Can I save them now?</h3><p>There are two sets of blobs which can be saved at the current time:</p><ul><li>Versions currently signed by Apple</li><li>The version you are currently on</li></ul><p>Note that saving blobs for the version you are currently on is dependent on whether or not you have a jailbreak, and may or may not be usable depending on the device you have and how you got to the version you are on at that time.</p>',15),g=a('<h2 id="tweak-related-questions" tabindex="-1"><a class="header-anchor" href="#tweak-related-questions" aria-hidden="true">#</a> Tweak related questions</h2><h3 id="should-i-use-tweaks-such-as-batchomatic-or-iamlazy" tabindex="-1"><a class="header-anchor" href="#should-i-use-tweaks-such-as-batchomatic-or-iamlazy" aria-hidden="true">#</a> Should I use tweaks such as Batchomatic or IAmLazy</h3><p>You should <strong>not</strong> use these tweaks, due to the fact that they tend to cause issues and instability within your jailbreaking setup. Instead, if you&#39;re switching between jailbreaks or updating to a newer iOS version, make a text based tweaklist and then manually reinstall them.</p><h2 id="other-questions" tabindex="-1"><a class="header-anchor" href="#other-questions" aria-hidden="true">#</a> Other questions</h2><h3 id="what-is-the-latest-ios-version-with-a-jailbreak-for-my-64-bit-device" tabindex="-1"><a class="header-anchor" href="#what-is-the-latest-ios-version-with-a-jailbreak-for-my-64-bit-device" aria-hidden="true">#</a> What is the latest iOS version with a jailbreak for my 64-bit device</h3>',5),p=a("<ul><li><strong>A7 iPads</strong>: iOS 12.5.7 (via Odysseyra1n or Chimera)</li><li><strong>A7/A8 iPhones</strong>: iOS 12.5.7 (via Odysseyra1n or Chimera)</li><li><strong>iPod Touch (6th Generation)</strong>: iOS 12.5.7 (via Odysseyra1n or Chimera)</li><li><strong>A8(X) iPads</strong>: iPadOS 15.8.2 (via meowbrek2 or palera1n)</li><li><strong>iPod Touch (7th Generation)</strong>: iOS 15.8.2 (via Dopamine, meowbrek2, or palera1n)</li><li><strong>A9/A10 iPhones</strong>: iOS 15.8.2 (via Dopamine, meowbrek2, or palera1n)</li><li><strong>A9(X) iPads</strong>: iPadOS 16.7.6 (via palera1n)</li><li><strong>A10(X) iPads</strong>: iPadOS 17.3.1 (via palera1n)</li><li><strong>A11 iPhones</strong>: iOS 16.7.6 (via palera1n)</li><li><strong>A12-A14 iPhones</strong>: iOS 16.5.1 (via Dopamine)</li><li><strong>A12-A14/M1 iPads</strong>: iPadOS 16.5.1 (via Dopamine)</li><li><strong>A15/A16 iPhones</strong>: iOS 16.5 (via Dopamine)</li><li><strong>A15/M2 iPads</strong>: iPadOS 16.5 (via Dopamine)</li></ul><p>Note that A12 and newer devices running iOS 16.6 or newer do not have a jailbreak, which also inherently means no A17 device has a jailbreak currently.</p>",2);function b(w,m){const i=s("router-link");return l(),h("div",null,[c,t("p",null,[e("DFU mode is a way you can interact with your iOS device without loading the operating system or boot loader. It stands for Device Firmware Upgrade. It's functionally different from recovery mode and is generally intended as a last resort in case things seriously go wrong on your device, however we can use it with "),o(i,{to:"/installing-odysseyra1n"},{default:r(()=>[e("Odysseyra1n")]),_:1}),e(" to jailbreak your device instead. Entering DFU mode can only be done on device as it is part of the phone itself.")]),u,t("p",null,[e("To see all the possible methods of saving blobs, follow the "),o(i,{to:"/saving-blobs"},{default:r(()=>[e("Saving Blobs")]),_:1}),e(" guide.")]),g,t("p",null,[e("While this can be easily figured out by checking "),o(i,{to:"/get-started"},{default:r(()=>[e("Get Started")]),_:1}),e(", in case you don't want to go through get started, here is the following information:")]),p])}var f=n(d,[["render",b],["__file","index.html.vue"]]);export{f as default};
