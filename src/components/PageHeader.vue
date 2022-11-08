<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="@/assets/images/other/logo.svg" alt="Логотип" />
      </div>
      <div class="header__menu">
        <div class="menu__body">
          <ul class="menu__list">
            <li class="menu__item">
              <a href="#" class="menu__link text-black" onclick="fadeInBurger()">Работы</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link text-black" id="fade-out_work-button"
                 onclick="fadeOutWork()">О себе</a>
            </li>
            <li class="menu__item">
              <a href="https://drive.google.com/file/d/1Uj3li3HEZPhysTWFRm8Pjlnl49S1TfCA/view?usp=sharing"
                 target="_blank" class="menu__link text-black">Резюме и контакты</a>
            </li>
            <li class="menu__item">
              <a href="/en/work" target="" class="menu__link text-black">Switch to English</a>
            </li>
          </ul>
        </div>
        <div class="burger-button">
          <a href="#" class="burger-button_link" onclick="fadeInBurger()">
            <span class="burger-button_line"></span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader"
}
</script>

<style scoped>
@import '@/assets/stylesheets/header.css';
</style>