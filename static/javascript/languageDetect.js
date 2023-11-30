function pageLoad() {
  var userLang = navigator.language || navigator.userLanguage;
  console.log("navigator")

  if (document.cookie.length > 0) {
    console.log("return")
    window.location.href = "./work";
    console.log("return 200 OK")
    return;
  } else {
    console.log("cookie create")
    document.cookie = `userLang=${userLang}; max-age=${365 * 24 * 60 * 60}; path=/; secure`;
    console.log("cookie")
    window.location.href = "./work";
    return;
  }

  /* var userLanguage = window.navigator.language;
  console.log(userLanguage);

  if (userLanguage.includes("ru")) {
    window.location.href = "./ru/work";
    console.log("langRu");
    return 0;
  } else if (userLanguage.includes("en")) {
    window.location.href = "./en/work";
    console.log("langEn");
    return 0;
  }
  return; */
}
