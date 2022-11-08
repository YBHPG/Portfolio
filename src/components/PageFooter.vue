<template>
  <footer>
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__main-block">
          <div class="footer__greetings">
            <p class="text__text">Спасибо за ознакомление с моими работами!</p>
            <p class="text__text">
              Если у тебя есть предложение работы, можешь написать мне на
              <a class="text__link" href="mailto:hello@vladl.space">почту</a>! Или
              связаться со мной в социальных сетях.
            </p>
          </div>
          <div class="footer__copyrights text__text">2022, Владислав Ледащев</div>
        </div>
        <div class="footer__socials">
          <ul class="footer__socials-list">
            <li class="footer__socials socials-variant">
              <a href="https://t.me/ybhpg" class="social_link" target="_blank">Telegram</a>
            </li>
            <li class="socials-variant">
              <p class="text__text">|</p>
            </li>
            <li class="socials-variant">
              <a href="https://www.instagram.com/bulbadyshka/" class="social_link"
                 target="_blank">Instagram</a>
            </li>
            <li class="socials-variant">
              <p class="text__text">|</p>
            </li>
            <li class="socials-variant">
              <a href="https://twitter.com/ybhpg57/" class="social_link" target="_blank">Twitter</a>
            </li>
            <li class="socials-variant">
              <p class="text__text">|</p>
            </li>
            <li class="socials-variant">
              <a href="https://www.linkedin.com/mwlite/in/ybhpg" class="social_link"
                 target="_blank">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter"
}
</script>

<style scoped>
@import '@/assets/stylesheets/footer.css';
</style>