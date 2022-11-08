<template>
  <section class="block-2">
    <div class="block-2__container">
      <div class="block-2__content">
        <div class="block-2__separator"></div>
        <p class="block-2__text text__header">Мои работы</p>
        <div class="block-2__filter-buttons__overflow">
          <div class="block-2__filter-buttons__container">
            <a href="#!" class="block-2__filter-buttons" @click="dataSort('all')" @mouseover="filterColors">Все
              работы</a>
            <a href="#!" class="block-2__filter-buttons" @click="dataSort('design')">Дизайн</a>
            <a href="#!" class="block-2__filter-buttons"
               @click="dataSort('programming')">Программирование</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="work-blocks__container" id="work-blocks">
    <ProjectComponent>

    </ProjectComponent>
  </div>
</template>

<script>
import ProjectComponent from "@/components/WorkPage/ProjectComponent";

export default {
  name: "ProjectsDiv",
  components: {
    ProjectComponent
  },
  methods: {
    dataSort(sortType) {
      const dataContainer = document.getElementById('work-blocks');
      const dataCard = document.getElementsByClassName('work-block-test');

      if (!dataContainer.classList.contains('is_changed')) {
        dataContainer.classList.add('is_changed');
      }

      setTimeout(() => {
        for (let index = 0; index < dataCard.length; index++) {
          dataCard[index].classList.add('is_visible');
          dataCard[index].classList.remove('is_hidden');

          if (dataCard[index].dataset.sort !== sortType && dataCard[index].dataset.sort !== 'all') {
            dataCard[index].classList.add('is_hidden');
            dataCard[index].classList.remove('is_visible');
          }

          if (sortType === 'all') {
            dataCard[index].classList.remove('is_hidden');
            dataCard[index].classList.add('is_visible');
          }
        }
      }, 500);

      setTimeout(() => {
        dataContainer.classList.remove('is_changed');
      }, 1000);
    },

    filterColors() {
      const filterButtonsContainer = document.getElementsByClassName('block-2__filter-buttons__container')[0];
      filterButtonsContainer.addEventListener('mouseover', (event) => {
        const colorArray = ['rgba(124, 244, 221, 1)', 'rgba(124, 201, 244, 1)'];
        const filterButtons = document.getElementsByClassName('block-2__filter-buttons');
        for (let i = 0; i < filterButtons.length; i++) {
          if (filterButtons[i].matches(':hover')) {
            filterButtons[i].style.backgroundColor = `${colorArray[(Math.floor(Math.random() * 2))]}`;
          }
        }
      });

      filterButtonsContainer.addEventListener('mouseout', (event) => {
        const filterButtons = document.getElementsByClassName('block-2__filter-buttons');
        for (let i = 0; i < filterButtons.length; i++) {
          filterButtons[i].style.background = '#e8e8e8';
        }
      })
    }
  }
}
</script>

<style scoped>

</style>