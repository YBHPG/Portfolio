<template>
  <main>
    <section class="block-1">
      <div class="block-1__container">
        <div class="block-1__content">
          <h1 class="block-1__title text__main-title text__italic">
            Привет, я Влад!
          </h1>
          <div class="block-1__text">
            <p class="text__text text-center">Дизайнер, студент, программист.</p>
            <p class="text__text text-center">
              Обучаюсь САПР и веб разработке в МГТУ им. Баумана.
            </p>
            <p class="text__text text-center">
              Работал над iOS приложением
              <a class="text__link"
                 href="https://www.behance.net/gallery/143770851/Dicty-App-translator-and-dictionary">Dicty</a>
              и этим
              сайтом.
            </p>
          </div>
        </div>
      </div>
    </section>
  <ProjectsDiv></ProjectsDiv>
    <TopButton @click="topFunction"></TopButton>
  </main>
</template>

<script>
import ProjectsDiv from "@/components/WorkPage/ProjectsDiv";
import TopButton from "@/components/TopButton";

export default {
  name: "MainWorkView",
  components: {
    ProjectsDiv,
    TopButton
  },
  created () {
    window.addEventListener('scroll', this.scrollFunction);
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollFunction);
  },
  methods: {
    scrollFunction() {
      let myButtonLight = document.getElementById("top_button");
      if (window.target = myButtonLight) {
        if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
          myButtonLight.classList.add("appear");
        } else {
          myButtonLight.classList.remove("appear");
        }
      }
    },
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
}
</script>

<style scoped>
@import '@/assets/stylesheets/block-1.css';
</style>