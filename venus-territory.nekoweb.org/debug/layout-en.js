const nesting = getNesting();

document.addEventListener("DOMContentLoaded", function () {
    loadLayoutByPetraPixel();
});

function loadLayoutByPetraPixel() {
    const mainEl = document.querySelector("main");
    if (!mainEl) return;
    mainEl.insertAdjacentHTML("beforebegin", headerHTML());
    mainEl.insertAdjacentHTML("afterend", footerHTML());
    giveActiveClassToLinks();
}

function headerHTML() {
    // ${nesting} outputs "./" or "../" depending on current page depth.
    // You can use it to refer to images etc.
    // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

    return `
    <header>
    <h1 align="center" id="headerH1"><img class="img-resize" src="/media/omanyte-2nd.png">Nautilus<img class="img-mirror" class="img-resize" src="/media/omanyte-2nd-shiny.png"></h1>
    <p align="center"><em id="headerEm">Answering the call from a new era.</em></p>
    </header>

    <aside class="left-sidebar" id="serif">

    <nav>
    <div class="sidebar-title"><img class="img-mirror" class="img-resize" src="/media/cloyster-2nd.png" alt="2nd gen Cloyster">Navigation</div>
    <ul>
    <li><a href="/index.html">Index</a></li>
    <li><a href="/en/landing.html">Home</a></li>
    <li><a href="/en/blog/blog-landing.html">Blog</a></li>

    <li>
    <details>
    <summary><a>My Projects</a></summary>
    <ul>
    <li><a href="/en/writing/writing-landing.html">My Writings</a></li>
    <li><a href="https://github.com/FlameSniper" target="_blank">Software</a></li>
    </ul>
    </details>
    </li>

    <li>
    <details>
    <summary><a>Web Friends</a></summary>
    <ul>
    <li><a href="https://archive-of-the-sealed-gods.neocities.org/" target="_blank">Archive of the Sealed Gods</a></li>
    <li><a href="https://geartoward.jp.net/main.html" target="_blank">Geartoward</a></li>
    <li><a href="http://leonarchive.org/" target="_blank">Leon Archive</a></li>
    <li><a href="https://pinky-cat.github.io/" target="_blank">Pinky Cat's Observatory</a></li>
    <li><a href="https://www.shaffy.fr/" target="_blank">Shaffy's Website</a></li>
    <li><a href="https://spacebanana.pt/" target="_blank">Space Banana Realm</a></li>
    </ul>
    </details>
    </li>

    <li>
    <details>
    <summary><a>About</a></summary>
    <ul>
    <li><a href="/en/about/about-me.html">About Me</a></li>
    <li><a href="/en/about/contact.html">Contact</a></li>
    <li><a href="https://nautilus.atabook.org/">Guestbook</a></li>
    <li><a href="/en/about/site-info.html">Site's Info</a></li>
    </ul>
    </details>
    </li>
    </ul>
    </nav>
    <div class="sidebar-section">
    <div class="sidebar-title">Blinkie Mayhem</div>
    <div align="center">
    <a href="https://nekoweb.org/" target="_blank" title="Nekoweb"><img class="img-resize" src="https://nekoweb.org/assets/buttons/button5.gif" alt="Nekoweb"></a>
    <a href="https://petrapixel.neocities.org/" target="_blank" title="Petrapixel"><img class="img-resize" src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="Petrapixel"></a>
    <a href="https://geartoward.jp.net/main.html" target="_blank" title="Geartoward"><img class="img-resize" src="/media/GTButton.png" alt="Geartoward"></a>
    <a href="https://www.gnu.org/" target="_blank" title="GNU"><img class="img-resize" src="/media/gnubanner-2.png" alt="GNU"></a>
    <a href="https://missdream.org/" target="_blank" title="Miss Dream"><img class="img-resize" src="/media/missdream.png" alt="Miss Dream"></a>
    <a href="https://tengu.space/" target="_blank" title="Tengu Space"><img class="img-resize" src="/media/devi.gif" alt="Tengu Space"></a>
    <a href="https://lain.guritchi.net/" target="_blank" title="Let's All Love Lain"><img class="img-resize" src="/media/lain.gif" alt="Let's All Love Lain"></a>
    <a href="https://youtu.be/vGAqYNFQdZ4?si=sQfMCOutZzP9uBiQ" target="_blank" title="Are you a sucker?"><img class="img-resize" src="/media/antinazi.gif" alt="Are you a sucker?"></a>
    <div align="center"><a href="http://sailorcrystal.net/guardians/" target="_blank" title="Protected by Sailor Neptune!"><img class="img-resize prettyguardians" src="/media/neptune.png" alt="Sailor Neptune"></a>
    <br>Protected by Sailor Neptune!</div>
    </div>
    <div align="center"><a href="https://nautilus.nekoweb.org/" target="_blank" title="Nautilus"><img class="img-resize img-border" src="/media/nautilus.png" alt="Nautilus"></a>
    <br>Link to me!</div>
    <div align="center"><p><img src='/media/leon.png' onmouseover="this.src='/media/leon-pet.gif';" ontouchmove="this.src='/media/leon-pet.gif';" onmouseout="this.src='/media/leon.png';" ontouchend="this.src='/media/leon.png';"/> <br>Requires JS thanks to this idiot. <br>(he wants to get pets)</div>
    </div>
    </div>
    </aside>

    `;
}

//<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>

function footerHTML() {
    // ${nesting} outputs "./" or "../" depending on current page depth.
    // You can use it to refer to images etc.
    // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

    return `
    <footer><div>© 2025 - All rights reserved | Based on <a href="https://petrapixel.neocities.org/coding/layout-generator.html" target="_blank">Petrapixel's layout generator</a>.</div></footer>`;
}

function getNesting() {
    const numberOfSlashes = window.location.pathname.split("/").length - 1;
    if (numberOfSlashes == 1) return "./";
    return "../".repeat(numberOfSlashes - 1);
}

function giveActiveClassToLinks() {
    const els = document.querySelectorAll("nav a");
    [...els].forEach((el) => {
        const href = el.getAttribute("href").replace(".html", "").replace("#", "");
        const pathname = window.location.pathname.replace("/public/", "");

        if (href == "/" || href == "/index.html") {
            if (window.location.href == "http://localhost:8080/" || pathname == "/") {
                el.classList.add("active");
            }
        } else {
            if (window.location.href.includes(href)) {
                el.classList.add("active");

                if (el.closest("summary")) {
                    el.closest("details").addAttribute("open");
                    el.closest("summary").classList.add("active");
                }
            }
        }
    });
}
