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

function resumeLink() {
    const userLang = getCookie('userLang');
    if (userLang.includes('en')) {
        window.open('https://drive.google.com/file/d/1_VcdNftFEpfdRJQkow040KL7gblfO4UE/view?usp=share_link', '_blank');
    } else if (userLang.includes('ru')) {
        window.open('https://drive.google.com/file/d/14nk-URMaCb9GHfnNgpOPo5901SUDkLfy/view?usp=share_link', '_blank');
    }
}