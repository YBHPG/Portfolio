<template>
  <div class="cursor"></div>
  <PageHeader></PageHeader>
  <MainWorkView></MainWorkView>
  <PageFooter></PageFooter>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import MainWorkView from "@/components/WorkPage/MainWorkView";
import PageFooter from "@/components/PageFooter";

export default {
  name: "WorkView",
  components: {
    MainWorkView,
    PageHeader,
    PageFooter
  },
  mounted() {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = (e.clientY - 22) + "px";
    });

    let links = Array.from(document.querySelectorAll('a'));
    console.log(links)
    links.forEach((link) => {
      link.addEventListener('mouseover', () => {
        cursor.classList.add('grow');
      });
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
      });
    })
  }
}
</script>

<style scoped>
@import '@/assets/stylesheets/cursor.css';
</style>