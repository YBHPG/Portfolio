function pageLoad() {
    var userLanguage = window.navigator.language;
    console.log(userLanguage);

    if (userLanguage.includes('ru')) {
        window.location.href = '/ru/work';
        console.log('langRu');
        return 0;
    } else if (userLanguage.includes('en')) {
        window.location.href = '/en/work';
        console.log('langEn');
        return 0;
    }
    return;
}