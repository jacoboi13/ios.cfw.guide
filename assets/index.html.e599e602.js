import{_ as s}from"./sideloadly_win.6263388d.js";import{_ as c,r as n,o as u,c as d,a as i,b as e,d as a,w as l,e as r}from"./app.73411637.js";const p={},v=i("p",null,"Questo tool \xE8 in grado di eseguire il Jailbreak su quasi tutti i dispositivi iOS su una versione del firmware che va da 11.0 a 14.8 (escluso iOS 12.5.6), tuttavia, lo utilizzeremo solo per eseguire il jailbreak dei dispositivi il quale non \xE8 disponibile un'opzione pi\xF9 semplice.",-1),h=i("p",null,"Utilizzeremo Sideloadly per installare l'app di unc0ver sul tuo dispositivo iOS nello step successivo.",-1),_={class:"custom-container tip"},m=i("p",{class:"custom-container-title"},"TIP",-1),g={class:"custom-container warning"},f=i("p",{class:"custom-container-title"},"WARNING",-1),b=r('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>unc0ver su versioni del firmware 14.6-14.8 supporta solo iPhone A12 e A13.</p></div><h2 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> Download</h2><div class="custom-container tip" id="ifJailbreaksAppSigned"><p> unc0ver \xE8 attualmente firmato su <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> per una installazione pi\xF9 facile che non richiede un computer. </p></div>',3),z={href:"https://unc0ver.dev/downloads/5.3.1/72004596b31ba3eae886ac6cc781725879d3b7a4/unc0ver_5.3.1.ipa",target:"_blank",rel:"noopener noreferrer"},k={href:"https://unc0ver.dev/downloads/6.1.1/decf7c36cc08118dc83ba455f8ca42e0e3cf354c/unc0ver_Release_6.1.1.ipa",target:"_blank",rel:"noopener noreferrer"},A={href:"https://unc0ver.dev/downloads/7.0.2/11c3f7b0eea806ba3cac975f74dcc2cc4e916bac/unc0ver_Release_7.0.2.ipa",target:"_blank",rel:"noopener noreferrer"},S={href:"https://unc0ver.dev",target:"_blank",rel:"noopener noreferrer"},w={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},x=r('<p><img src="'+s+'" alt="Uno screenshot dell\u2019applicazione di Sideloadly (Windows)"></p><h2 id="installazione" tabindex="-1"><a class="header-anchor" href="#installazione" aria-hidden="true">#</a> Installazione</h2><ol><li>Apri Sideloadly</li><li>Connetti il tuo dispositivo iOS al computer tramite cavo <ul><li>Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo</li></ul></li><li>Trascina il file <code>.ipa</code> di unc0ver su Sideloadly</li><li>Inserisci il tuo Apple ID</li><li>Inserisci la tua password <ul><li>Sideloadly deve fare una richiesta ai suoi server per funzionare con gli account sviluppatore gratuiti. Se non sei d\u2019accordo con ci\xF2, puoi sempre usare un Apple ID alternativo.</li></ul></li></ol><p>L\u2019app verr\xE0 adesso installata sul tuo dispositivo iOS.</p><h2 id="autorizzare-l-applicazione" tabindex="-1"><a class="header-anchor" href="#autorizzare-l-applicazione" aria-hidden="true">#</a> Autorizzare l\u2019applicazione</h2><ol><li>Vai in <code>Impostazioni</code>-&gt; <code>Generali</code> -&gt; <code>Gestione Dispositivo</code> -&gt; <code>&lt;Il tuo Apple ID&gt;</code><ul><li>A seconda del tuo utilizzo, <code>Gestione dispositivo</code> potrebbe apparire come <code>Gestione Profili e Dispositivo</code></li></ul></li><li>Clicca su <code>Autorizza &quot;&lt;Il tuo Apple ID&gt;&quot;</code></li></ol><p>L\u2019applicazione di unc0ver adesso pu\xF2 essere aperta dalla home screen.</p><h2 id="eseguire-unc0ver" tabindex="-1"><a class="header-anchor" href="#eseguire-unc0ver" aria-hidden="true">#</a> Eseguire unc0ver</h2><ol><li>Riavvia il tuo dispositivo <ul><li>Questo passaggio non \xE8 necessario ma consigliato</li></ul></li><li>Apri l\u2019applicazione di unc0ver dalla home screen appena dopo il riavvio <ul><li>Se unc0ver da l\u2019avviso \u201Cthe app has been tampered with\u201D, reinstalla unc0ver tramite Sideloadly</li></ul></li><li>Apri il men\xF9 delle impostazioni e disabilita la voce <code>Disable Auto Updates</code><ul><li>unc0ver di default disabilita gli aggiornamenti \u201COver-The-Air\u201D, comunque \xE8 consigliato disabilitare questa feature perch\xE9 potrebbe causare problemi durante un aggiornamento manuale</li></ul></li><li>Clicca su \u201CDone\u201D</li><li>Clicca su \u201CJailbreak\u201D</li><li>Quando richiesto, riavvia il dispositivo</li><li>Apri l\u2019applicazione di unc0ver dalla home screen subito dopo aver eseguito il riavvio</li><li>Clicca su \u201CJailbreak\u201D</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se sul dispositivo l\u2019app, crasha/si riavvia inaspettatamente ed il jailbreak non viene installato, prova a riavviare il dispositivo e far partire l\u2019exploit di nuovo finch\xE9 non funziona.</p></div>',10),T={class:"custom-container warning"},y=i("p",{class:"custom-container-title"},"WARNING",-1),O=i("code",null,"rootFS already mounted, elimina l\u2019aggiornamento OTA",-1),j={class:"custom-container tip"},N=i("p",{class:"custom-container-title"},"TIP",-1),C=i("p",null,"Se si desidera utilizzare un gestore di pacchetti pi\xF9 moderno, continua a seconda della versione di iOS:",-1);function D(P,q){const o=n("router-link"),t=n("ExternalLinkIcon");return u(),d("div",null,[i("p",null,[e("unc0ver \xE8 un "),a(o,{to:"/it_IT/types-of-jailbreak/#semi-untethered-jailbreaks"},{default:l(()=>[e("jailbreak semi-untethered")]),_:1}),e(", richiede l'utilizzo di un'app per ri-eseguire l'exploit dopo un riavvio.")]),v,i("p",null,[e("A causa di come funzionano i jailbreak semi-untethered, l'app avr\xE0 bisogno di essere "),a(o,{to:"/it_IT/resigning-apps"},{default:l(()=>[e("ri-firmata")]),_:1}),e(" ogni 7 giorni.")]),h,i("div",_,[m,i("p",null,[e("Se stai cercando una guida per usare unc0ver su dispositivi A12+ con una versione di iOS 14.4-14.5.1, continua con "),a(o,{to:"/it_IT/installing-unc0ver-fugu14"},{default:l(()=>[e("unc0ver (Fugu14)")]),_:1})])]),i("div",g,[f,i("p",null,[e("Se attualmente hai eseguito il jailbreak tramite un altro tool, assicurati di "),a(o,{to:"/it_IT/restoring-rootfs"},{default:l(()=>[e("rimuoverlo correttamente")]),_:1}),e(" prima di proseguire.")])]),b,i("ul",null,[i("li",null,[e("Versione 5.3.1 di "),i("a",z,[e("unc0ver"),a(t)]),i("ul",null,[i("li",null,[e("Agli utenti con una versione del firmware 12.4.9 - 12.5.4, 13.5.1 - 14.3 \xE8 consigliato invece di scaricare la versione 6.1.1 di "),i("a",k,[e("unc0ver"),a(t)])]),i("li",null,[e("Agli utenti con una versione del firmware 12.5.5 \xE8 consigliato invece di scaricare la versiobe 7.0.2 di "),i("a",A,[e("unc0ver"),a(t)])]),i("li",null,[e("Agli utenti con una versione del firmware 12.5.5 o con un iPhone A12 o A13 \xE8 consigliato invece di scaricare l'ultima versione "),i("a",S,[e("unc0ver"),a(t)])])])]),i("li",null,[e("L'ultima versione di "),i("a",w,[e("Sideloadly"),a(t)])]),i("li",null,[e("L'ultima versione di "),i("a",I,[e("iTunes"),a(t)]),e(" se sei su Windows")])]),x,i("div",T,[y,i("p",null,[e("Se ricevi l\u2019errore "),O,e(", leggi la "),a(o,{to:"/it_IT/troubleshooting/#rootfs-already-mounted"},{default:l(()=>[e("Pagina di")]),_:1}),e(" Troubleshooting")])]),i("p",null,[e("Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare "),a(o,{to:"/it_IT/faq/#what-are-tweaks"},{default:l(()=>[e("tweak")]),_:1}),e(", temi e altro.")]),i("div",j,[N,C,i("ul",null,[i("li",null,[e("Se si \xE8 su iOS 12 o successivi, continua com "),a(o,{to:"/installing-sileo"},{default:l(()=>[e("Installare Sileo")]),_:1})]),i("li",null,[e("Se si \xE8 su iOS 11 o successivi, continua con "),a(o,{to:"/installing-zebra"},{default:l(()=>[e("Installare Zebra")]),_:1})])])])])}var R=c(p,[["render",D],["__file","index.html.vue"]]);export{R as default};
