function changeLanguage(name) {
    const userLang = getCookie(name);

    /* alert("The language is: " + userLang); */

    if (userLang.includes('en')) {
        document.cookie = `userLang=ru; max-age=${365 * 24 * 60 * 60}; path=/; secure`;
    } else if (userLang.includes('ru')) {
        document.cookie = `userLang=en; max-age=${365 * 24 * 60 * 60}; path=/; secure`;
    }

    window.location.reload();
};

function getCookie(name) {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim().split('=')
        if (c[0] === name) {
            return decodeURIComponent(c[1])
        }
    }
    return ''
}