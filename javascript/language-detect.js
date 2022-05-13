function pageLoad() {
    var userLanguage = window.navigator.language;

    if (userLanguage.includes('ru')) {
        window.open('../html/index-ru.html', "_top");
        console.log(langRu);
        return 0;
    } else if (userLanguage.includes('en')) {
        window.open('../html/index-en.html', '_top');
        console.log(langEn);
        return 0;
    }
    return;
}