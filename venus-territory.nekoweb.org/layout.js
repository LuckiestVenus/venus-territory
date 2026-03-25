document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    loadLayoutByPetraPixel();

    // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
    const mainEl = document.querySelector("main");
    if (!mainEl) return;
    mainEl.insertAdjacentHTML("beforebegin", headerHTML());
    mainEl.insertAdjacentHTML("afterend", footerHTML());
    const visitorMap = document.getElementById("mapmyvisitors");
    if (visitorMap) {
        const newVisitorMap = document.createElement("script");
        newVisitorMap.type = "text/javascript";
        newVisitorMap.id = "mapmyvisitors";
        newVisitorMap.src = visitorMap.src;
        visitorMap.parentNode.replaceChild(newVisitorMap, visitorMap);
    }

    const lastfmScript = document.getElementById("lastfm-widget");
    if (lastfmScript) {
        const newLastfmScript = document.createElement("script");
        newLastfmScript.type = "text/javascript";
        newLastfmScript.id = "lastfm-widget";
        newLastfmScript.textContent = lastfmScript.textContent;
        lastfmScript.parentNode.replaceChild(newLastfmScript, lastfmScript);
    }

    const aeroDiv = document.getElementById("aero-ring");
    if (aeroDiv) {
        const aeroScript = document.createElement("script");
        aeroScript.type = "text/javascript";
        aeroScript.src = "https://frutigeraeroarchive.org/javascript/aero-webring.js";
        aeroDiv.appendChild(aeroScript);
    }

    giveActiveClassToCurrentPage();    
}

const nesting = getNesting();

function headerHTML() {
    // ${nesting} outputs "./" or "../" depending on current page depth.
    // You can use it to refer to images etc.
    // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

    return `
<!-- =============================================== -->
<!-- HEADER -->
<!-- =============================================== -->
<header>
  <div class="header-content" id="serif">
    <div>
      <h1 align="center" id="headerH1">Venus Territory<img class="img-mirror" class="img-resize" src="/media/venus750.gif"></h1>
      <p align="center"><em id="headerEm">Good things come to those who stay!</em></p>
    </div>
    <!-- NAVIGATION -->
    <nav>
      <ul>
        <li><a href="/index.html">Index</a></li>
        <li>
          <strong>About</strong>
          <ul>
            <li><a href="/about/about.html">About Me</a></li>
            <li><a href="/about/socials.html">Socials</a></li>
          </ul>
        </li>
        <li>
          <strong>Misc</strong>
          <ul>
            <li><a href="/misc/internet-friends.html">Internet Friends</a></li>
            <li><a href="/misc/yume-nikki/dream-land.html">Yume Nikki</a></li>
          </ul>
        </li>
        <li>
          <strong>Projects</strong>
          <ul>
            <li><a href="/projects/articles/articles-landing.html">Articles</a></li>
            <li><a href="/projects/blog/blog-landing.html">Blog</a></li>
            <li><a href="/projects/resources.html">Resources</a></li>
          </ul>
        </li>
        <li>
          <strong>Site</strong>
          <ul>
            <li><a href="https://venus-territory.atabook.org/">Guestbook</a></li>
            <li><a href="/index.html">Index</a></li>
            <li><a href="/site/sitemap.html">Sitemap</a></li>
            <li><a href="/site/site-information.html">Site Information</a></li>
            <li><a href="/site/updates.html">Updates</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</header>
<!-- =============================================== -->
<!-- RIGHT SIDEBAR -->
<!-- =============================================== -->
<aside class="right-sidebar" id="serif">
  <div id="listening"></div>
    <script id="lastfm-widget" type="text/javascript">
      const USERNAME = "LuckiestVenus";

      const BASE_URL = "https://lastfm-last-played.biancarosa.com.br/" + USERNAME + "/latest-song";

      const getTrack = async () => {
          try {
              const request = await fetch(BASE_URL);
              const json = await request.json();
              const track = json.track;

              const isPlaying = track['@attr']?.nowplaying || false;
              const statusText = isPlaying ? "Luckiest Venus is listening:" : "Luckiest Venus last listened:";

              document.getElementById("listening").innerHTML =
                  '<img src="' + track.image[1]['#text'] + '" style="max-width:100%; border-radius:8px; display:block; margin-bottom:8px;">' +
                  '<div id="trackInfo" style="margin-top:8px;">' +
                      '<small style="opacity:0.7; display:block; margin-bottom:4px;">' + statusText + '</small>' +
                      '<h3 id="trackName" style="margin:0; font-size:1.2em;">' + track.name + '</h3>' +
                      '<p id="artistName" style="margin:0; opacity:0.9;">' + track.artist['#text'] + '</p>' +
                  '</div>';
          } catch (e) {
              document.getElementById("listening").innerHTML = '<p style="opacity:0.7; font-size:1.0em;">No recent tracks yet...</p>';
          }
      };

      getTrack();
      setInterval(getTrack, 10000);
    </script><br>
  <div class="sidebar-section">
    <div class="sidebar-title">About<img class="img-resize" src="/media/pearto64.png"></div>
    <ul>
      <h4>
        <li><a href="/about/about.html">About Me</a></li>
        <br>
        <li><a href="/about/socials.html">Socials</a></li>
        <br>
    </ul>
    </h4>  
  </div>
  <div class="sidebar-section">
    <div class="sidebar-title">Misc<img class="img-resize" src="/media/tetorange64.png"></div>
    <ul>
      <h4>
        <li><a href="/misc/internet-friends.html">Internet Friends</a></li>
        <br>
        <li><a href="/misc/yume-nikki/dream-land.html">Yume Nikki</a></li>
        <br>
    </ul>
    </h4>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-title">Projects<img class="img-resize" src="/media/tetostrawberry64.png"></div>
    <ul>
      <h4>
        <li><a href="/projects/articles/articles-landing.html">Articles</a></li>
        <br>
        <li><a href="/projects/blog/blog-landing.html">Blog</a></li>
        <br>
        <li><a href="/projects/resources.html">Resources</a></li>
        <br>  
        <li><a href="https://github.com/LuckiestVenus">Software</a></li>
        <br>
    </ul>
    </h4>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-title">Site<img class="img-resize" src="/media/tetoblueberry64.png"></div>
    <ul>
      <h4>
        <li><a href="https://venus-territory.atabook.org/">Guestbook</a></li>
        <br>
        <li><a href="/index.html">Index</a></li>
        <br>
        <li><a href="/site/sitemap.html">Sitemap</a></li>
        <br>
        <li><a href="/site/site-information.html">Site Information</a></li>
        <br>
        <li><a href="/site/updates.html">Updates</a></li>
        <br>
    </ul>
    </h4>
  </div>
  <div class="sidebar-section">
  <div class="sidebar-title">Link Me!<img class="img-resize" src="/media/tetobanana64.png"></div>
  <div align="center">
    <h4><a href="https://venus-territory.nekoweb.org/" target="_blank" title="Venus Territory"><img src="/media/venus-territory-rose.png" alt="Venus Territory"></a></h4>
    <br>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-title">Fun<img class="img-resize" src="/media/tetolime64.png"></div>
    <div align="center">
      <h4><a href="https://petrapixel.neocities.org/" target="_blank" title="petrapixel"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        <a href="https://www.gnu.org/" target="_blank" title="GNU"><img class="img-resize" src="/media/gnubanner-2.png" alt="GNU"></a>
        <a href="https://missdream.org/" target="_blank" title="Miss Dream"><img class="img-resize" src="/media/missdream.png" alt="Miss Dream"></a>
        <a title="Sailor Venus Rules!"><img class="img-resize" src="/media/perfectsoldier2.gif" alt="Sailor Venus Rules!"></a>
        <a title="Watch or read Sailor Moon!"><img class="img-resize" src="/media/pinkusagi.gif" alt="Watch or read Sailor Moon!"></a>
        <a href="https://routevenus.net/" target="_blank" title="Route Venus"><img class="img-resize" src="/media/routevenusbutton5.png" alt="Route Venus"></a>
        <a href="https://mizunotic.neocities.org/" target="_blank" title="Mizunotic"><img class="img-resize" src="/media/mizunotic.png" alt="Mizunotic"></a>
        <a href="https://v.tenoh.org/" target="_blank" title="Sailor V Fanlisting"><img class="img-resize" src="/media/nemi-88-6.png" alt="Sailor V Fanlisting"></a>
        <a href="https://routevenus.net/moonies/" target="_blank" title="🌙 Still A Moonie"><img class="img-resize" src="/media/mooniebutton19.png" alt="🌙 Still A Moonie"></a>
        <a href="https://minako.route-venus.org/" target="_blank" title="Morning Star"><img class="img-resize" src="/media/ms_button04.png" alt="Morning Star"></a>
        <a title="Watch Madoka Magica!"><img class="img-resize" src="/media/madoka.gif" alt="Watch Madoka Magica!"></a>
        <a href="https://lain.guritchi.net/" target="_blank" title="Let's All Love Lain"><img class="img-resize" src="/media/lain.gif" alt="Let's All Love Lain"></a>
        <a href="https://half-life.com/" target="_blank" title="Play Half Life!"><img class="img-resize" src="/media/freeman.gif" alt="Play Half Life!"></a>
        <a href="https://doujinstyle.com/?p=home" target="_blank" title="Play Touhou!"><img class="img-resize" src="/media/2hu.gif" alt="Play Touhou!"></a>
        <a href="https://uboachan.net/" target="_blank" title="Play Yume Nikki!"><img class="img-resize" src="/media/yumenikki2.gif" alt="Play Yume Nikki!"></a>
        <a href="https://www.playbalatro.com/" target="_blank" title="Play Balatro!"><img class="img-resize" src="/media/balatro.png" alt="Play Balatro!"></a>
        <a href="https://prismlauncher.org/" target="_blank" title="Play Minecraft!"><img class="img-resize" src="/media/minecraft.gif" alt="Play Minecraft!"></a>
        <a href="https://scottgames.com/" target="_blank" title="Play FNAF!"><img class="img-resize" src="/media/scottgames.gif" alt="Play FNAF!"></a>
        <a title="Listen to Kasane Teto!"><img class="img-resize" src="/media/funny.gif" alt="Listen to Kasane Teto!"></a>
        <a title="Listen to Kasane Teto!"><img class="img-resize" src="/media/bimpy.gif" alt="Listen to Kasane Teto!"></a>
        <a href="https://linktr.ee/macross8299 target="_blank" title="Macross 82-99"><img class="img-resize" src="/media/ma.gif" alt="Macross 82-99"></a>
        <a href="https://linktr.ee/macroblank_" target="_blank" title="Macroblank"><img class="img-resize" src="/media/hm.png" alt="Macroblank"></a>
        <a href="https://youtu.be/vGAqYNFQdZ4?si=sQfMCOutZzP9uBiQ" target="_blank" title="Are you a sucker?"><img class="img-resize" src="/media/antinazi.gif" alt="Are you a sucker?"></a>
        <a title="This site is Anti AI!"><img class="img-resize" src="/media/anti-ai.gif" alt="This site is Anti AI!"></a>
        <a href="https://ublockorigin.com/" target="_blank" title="Use uBlock Origin now!"><img class="img-resize" src="/media/ublock_now.png" alt="Use uBlock Origin now!"></a>
        <a href="https://linuxmint.com/" target="_blank" title="Linux Mint"><img class="img-resize" src="/media/linux_mint.gif" alt="Linux Mint"></a>
        <a href="https://endeavouros.com/" target="_blank" title="EndeavourOS Now!"><img class="img-resize" src="/media/endeavour.jpg" alt="EndeavourOS Now!"></a>
        <a href="https://www.haiku-os.org/" target="_blank" title="Haiku Now!"><img class="img-resize" src="/media/haiku-now.gif" alt="Haiku Now!"></a>
        <a title="CSS Is Awesome!"><img class="img-resize" src="/media/css.png" alt="CSS Is Awesome!"></a>
        <a title="Made For Dark Mode!"><img class="img-resize" src="/media/dark-mode.gif" alt="Made For Dark Mode!"></a>
        <a href="https://www.youtube.com/watch?v=cut0wnqiR_k" target="_blank" title="Piracy Now!"><img class="img-resize" src="/media/piracy.gif" alt="Piracy Now!"></a>
        <a href="https://archive.org/" target="_blank" title="Internet Archive"><img class="img-resize" src="/media/ia.gif" alt="Internet Archive"></a>
        <a title="Right to Repair FTW!"><img class="img-resize" src="/media/righttorepair.jpg" alt="Right to Repair FTW!"></a>
        <a href="https://java.com/" target="_blank" title="3 Billion Devices Run Java"><img class="img-resize" src="/media/javanow.gif" alt="3 Billion Devices Run Java"></a>
        <a href="https://keepassxc.org/" target="_blank" title="Cross-platform Password Manager"><img class="img-resize" src="/media/keepassxc.png" alt="Cross-platform Password Manager"></a>
        <a title="Best viewed with Open Eyes"><img class="img-resize" src="/media/bestview.gif" alt="Best viewed with Open Eyes"></a>
        <a title="Emulate Now!"><img class="img-resize" src="/media/emulate.gif" alt="Emulate Now!"></a>
        <a title="Responsive Website"><img class="img-resize" src="/media/responsivesite.jpg" alt="Responsive Site"></a>
        <a title="Made with Visual Studio Code"><img class="img-resize" src="/media/vsbutton.png" alt="Made with Visual Studio Code"></a>
        <a title="This site is MIKU APPROVED"><img class="img-resize" src="/media/miku.gif" alt="This site is MIKU APPROVED"></a>
        <a href="https://forum.agoraroad.com/index.php" target="_blank" title="Agora Road"><img class="img-resize" src="/media/180.gif" alt="Agora Road"></a>
        <a href="https://wapchan.org/" target="_blank" title="Wapchan"><img class="img-resize" src="/media/wap8831simple-small.gif" alt="Wapchan"></a>
        <a href="https://kissu.moe/" target="_blank" title="KISSU.MOE"><img class="img-resize" src="/media/kissu-88.gif" alt="KISSU.MOE"></a>
        <a href="https://yuentp.neocities.org/" target="_blank" title="Yuentp"><img class="img-resize" src="/media/yuebutton.gif" alt="Yuentp"></a>
        <a href="https://wrender.neocities.org/" target="_blank" title="Wrender"><img class="img-resize" src="/media/wrender.gif" alt="Wrender"></a>
        <a href="https://moonpr1sm.com/" target="_blank" title="Moonpr1sm"><img class="img-resize" src="/media/moonpr1sm.png" alt="Moonpr1sm"></a>
        <a href="https://snails.town/" target="_blank" title="Snails"><img class="img-resize" src="/media/snails.png" alt="Snails"></a>
        <a href="https://chimerathing.neocities.org/" target="_blank" title="chimerathing"><img class="img-resize" src="/media/chimerathing.png" alt="chimerathing"></a>
        <a href="https://newlambda.neocities.org/" target="_blank" title=":/newlambda"><img class="img-resize" src="/media/nlbutton1.gif" alt=":/newlambda"></a>
        <a href="https://sephlow.net/" target="_blank" title="fh102"><img class="img-resize" src="/media/Sephlow88x31Button.png" alt="fh102"></a>
        <a href="https://hikari3.ch" target="_blank" title="A very comfy imageboard for people that like to take it easy."><img class="img-resize" src="/media/hikari3-88-2.gif" alt="A very comfy imageboard for people that like to take it easy."></a>
        <a href="https://lucida.to" target="_blank" title="Music at internet speed."><img class="img-resize" src="/media/lucida01.gif" alt="Music at internet speed."></a>
        <a href="https://39chan.moe" target="_blank" title="Anonymous English-language web forum for fans of Vocaloid."><img class="img-resize" src="/media/39ch.png" alt="Anonymous English-language web forum for fans of Vocaloid."></a>
        <a href="https://uboachan.net/" target="_blank" title="Play Yume Nikki!"><img class="img-resize" src="/media/yumenikki5.gif" alt="Play Yume Nikki!"></a>
        <a title="Bring BACK! The Headphone JACK!"><img class="img-resize" src="/media/bring-back-the-headphone-jack.gif" alt="Bring BACK! The Headphone JACK!"></a>
        <a href="https://catppuccin.com/" target="_blank" title="Soothing pastel theme for the high-spirited!"><img class="img-resize" src="/media/catppuccin.gif" alt="Soothing pastel theme for the high-spirited!"></a>
        <a href="https://ransei.neocities.org/" target="_blank" title="Ransei's Void"><img class="img-resize" src="/media/ransei.gif" alt="Ransei's Void"></a>
        <a href="https://status.cafe/" target="_blank" title="Status Cafe"><img class="img-resize" src="/media/status-cafe.png" alt="Status Cafe"></a>
        <a href="https://reduxflakes.neocities.org/" target="_blank" title="ReduxFlakes"><img class="img-resize" src="/media/reduc_anim.gif" alt="ReduxFlakes"></a>
        <a href="https://00s.neocities.org/" target="_blank" title="00s"><img class="img-resize" src="/media/00s.gif" alt="00s"></a>
        <a href="https://discopotato2.neocities.org/" target="_blank" title="DiscoPotato On-Line"><img class="img-resize" src="/media/dp2button.png" alt="DiscoPotato On-Line"></a>
        <a title="This site is powered by imagination (and templates)"><img class="img-resize" src="/media/imagination.gif" alt="This site is powered by imagination (and templates)"></a>
        <a href="https://tsunderetion.neocities.org/" target="_blank" title="Tsunderetion"><img class="img-resize" src="/media/ver1en.png" alt="Tsunderetion"></a>
        <a href="https://loa2k.neocities.org/" target="_blank" title="All your favorite vaporwave albums are back from the DEAD!"><img class="img-resize" src="/media/+a.png" alt="All your favorite vaporwave albums are back from the DEAD!"></a>
        <a href="https://yukki.dev/" target="_blank" title="yukki.dev button"><img class="img-resize" src="/media/yukkidev_button.gif" alt="yukki.dev button"></a>
        <a href="https://wiredcollective.neocities.org/" title="WIRED COLLECTIVE WEBRING"><img src="https://wiredcollective.neocities.org/webringimages/wiredcollectivebutton.png" alt="WIRED COLLECTIVE WEBRING"></a>
        <a href="https://ynoproject.net/" target="_blank" title="Yume Nikki Online Project"><img class="img-resize" src="/media/ynobutton.png" alt="Yume Nikki Online Project"></a>
        <a title="Know your Idols"><img class="img-resize" src="/media/jobsritchie.gif" alt="Know your Idols"></a>
        <a href="https://samsolarsystem.neocities.org/" target="_blank" title="Sam Solar System button"><img class="img-resize" src="/media/samsolarsystem.gif" alt="Sam Solar System button"></a>
        <a href="https://netdrifter2000.neocities.org/" target="_blank" title="NetDrifter2000"><img class="img-resize" src="/media/netdrifter.png" alt="NetDrifter2000"></a>
        <a href="https://frutigeraeroarchive.org/" target="_blank" title="Frutiger Aero Archive"><img class="img-resize" src="/media/frutigeraeroarchive_button_2.png" alt="Frutiger Aero Archive"></a>
        <a href="https://accessible-webmastery.neocities.org/" target="_blank" title="Accessible Webmastery"><img class="img-resize" src="/media/accessible-webmastery-button.svg" alt="Accessible Webmastery"></a>
        <a href="https://matrix.org/" target="_blank" title="Use Matrix!"><img class="img-resize" src="/media/mundomatrix_01.gif" alt="Use Matrix!"></a>
        <a href="https://github.com/doomemacs/doomemacs" target="_blank" title="Emacs Now!"><img class="img-resize" src="/media/EmacsNow.gif" alt="Emacs Now!"></a>
        <a target="_blank" title="Godzilla Free!"><img class="img-resize" src="/media/Puretek.jpg" alt="Godzilla Free!"></a>
        <a href="https://strawberry-gashes.neocities.org/" target="_blank" title="Strawberry Gashes"><img class="img-resize" src="/media/strawberry.gif" alt="Strawberry Gashes"></a>
        <a href="https://kimberlygb.nekoweb.org/" target="_blank" title="Kim's Blog"><img class="img-resize" src="/media/kimberly.png" alt="Kim's Blog"></a>
        <a href="https://sidethoughts.neocities.org/" target="_blank" title="sidethoughts"><img class="img-resize" src="/media/sidethoughts_6.png" alt="sidethoughts"></a>

        <a href="https://retro-haven.neocities.org/" target="_blank" title="Retro Haven"><img class="img-resize" src="/media/retro-haven.gif" alt="Retro Haven"></a>
        <a href="https://saturnserkel.neocities.org/" target="_blank" title="Saturn Serkel"><img class="img-resize" src="/media/ssbutton.png" alt="Saturn Serkel"></a>

        <a href="https://www.youtube.com/watch?v=19y8YTbvri8" target="_blank" title="Mesmerizer!"><img class="img-resize" src="/media/mikum.gif" alt="Mesmerizer!"></a>
        <a href="https://www.youtube.com/watch?v=19y8YTbvri8" target="_blank" title="Mesmerizer!"><img class="img-resize" src="/media/tetom.gif" alt="Mesmerizer!"></a>
        <a href="https://neocities.org/" target="_blank" title="THE WEB IS STILL YOURS"><img class="img-resize" src="/media/neocities-vaporwave.gif" alt="THE WEB IS STILL YOURS"></a>
        <a href="https://laingame.net/" target="_blank" title="Powered by NAVI!"><img class="img-resize" src="/media/powernavibadge.jpg" alt="Powered by NAVI!"></a>
      </h4>

      <div id="aero-ring"></div><br>

      <script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=CM88vp0PHGj7Seob8zZ9h0hZkXljPsbtLskTVns1aTM&cl=ffffff&w=a"></script>
    </div>
  </div>
</aside>
      `;
}

function footerHTML() {
    // ${nesting} outputs "./" or "../" depending on current page depth.
    // You can use it to refer to images etc.
    // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

    return `
<!-- =============================================== -->
<!-- FOOTER -->
<!-- =============================================== -->
<footer>
  <div>
    <a href="#">Back to top.</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html" target="_blank">petrapixel's layout generator</a>. See the <a href="/site/sitemap.html">Sitemap</a> for more!
  </div>
</footer>
      `;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
    const els = document.querySelectorAll("nav a");
    [...els].forEach((el) => {
        const href = el.getAttribute("href").replace(".html", "").replace("#", "");
        const pathname = window.location.pathname.replace("/public/", "");
        const currentHref = window.location.href.replace(".html", "") + "END";

        /* Homepage */
        if (href == "/" || href == "/index.html") {
            if (pathname == "/") {
                el.classList.add("active");
            }
        } else {
            /* Other pages */
            if (currentHref.includes(href + "END")) {
                el.classList.add("active");

                /* Subnavigation: */

                if (el.closest("details")) {
                    el.closest("details").setAttribute("open", "open");
                    el.closest("details").classList.add("active");
                }

                if (el.closest("ul")) {
                    if (el.closest("ul").closest("ul")) {
                        el.closest("ul").closest("ul").classList.add("active");
                    }
                }
            }
        }
    });
}

function getNesting() {
    const numberOfSlashes = window.location.pathname.split("/").length - 1;
    if (numberOfSlashes == 1) return "./";
    return "../".repeat(numberOfSlashes - 1);
}

