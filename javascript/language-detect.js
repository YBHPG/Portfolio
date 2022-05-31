function pageLoad() {
    var userLanguage = window.navigator.language;
    console.log(userLanguage);

    if (userLanguage.includes('ru')) {
        window.location.href = './html/index-ru.html';
        console.log('langRu');
        return 0;
    } else if (userLanguage.includes('en')) {
        window.location.href = './html/index-en.html';
        console.log('langEn');
        return 0;
    }
    return;
}