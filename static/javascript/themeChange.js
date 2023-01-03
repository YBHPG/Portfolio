const headerLogoContainer = document.getElementsByClassName("header__logo")[0];
// const themeChangeButton = document.getElementById("switch-theme-button");

function activateDarkMode() {
    const showedLogo = document.querySelector(".logo");
    if (showedLogo) {
      headerLogoContainer.removeChild(showedLogo);
    }

    const logoImage = new Image();
    logoImage.src = "/static/images/other/logo_dark_theme.svg";
    logoImage.classList.add("logo");

    headerLogoContainer.appendChild(logoImage);
}
function activateLightMode() {
  const showedLogo = document.querySelector(".logo");
    if (showedLogo) {
      headerLogoContainer.removeChild(showedLogo);
    }

    const logoImage = new Image();
    logoImage.src = "/static/images/other/logo_light_theme.svg";
    logoImage.classList.add("logo");

    headerLogoContainer.appendChild(logoImage);
}

function setColorScheme() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
  const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches
  const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

  window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && activateDarkMode())
  window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && activateLightMode())

  if(isDarkMode) activateDarkMode()
  if(isLightMode) activateLightMode()
  if(isNotSpecified || hasNoSupport) {
    console.log('You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.')
    now = new Date();
    hour = now.getHours();
    if (hour < 4 || hour >= 16) {
      activateDarkMode();
    }
  }
}

window.addEventListener("load", setColorScheme());