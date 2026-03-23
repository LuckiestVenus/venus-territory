function updateSchemeText() {
    const iframe = document.getElementById('schemeText');
    if (!iframe) return;

    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;


    const lightURL = 'https://petrapixel.neocities.org/widgets/statuscafe?&center=0&marquee=0&font-family=Verdana&font-size=18px&color=#575279&linkColor=#56949f&username=luckiest_venus&hideUsername=0&timeColor=#56949f';

    const darkURL = 'https://petrapixel.neocities.org/widgets/statuscafe?&center=0&marquee=0&font-family=Verdana&font-size=18px&color=#e0def4&linkColor=#9ccfd8&username=luckiest_venus&hideUsername=0&timeColor=#9ccfd8';



    iframe.src = isDark ? darkURL : lightURL;


    document.documentElement.setAttribute('data-color-scheme', isDark ? 'dark' : 'light');
}


const mq = window.matchMedia('(prefers-color-scheme: dark)');
if (mq.addEventListener) {
    mq.addEventListener('change', updateSchemeText);
} else if (mq.addListener) {
    mq.addListener(updateSchemeText);
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateSchemeText);
} else {
    updateSchemeText();
}