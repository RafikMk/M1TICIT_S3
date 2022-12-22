<template>
  <ion-app>
    
      <MenuPage></MenuPage>

  </ion-app>
</template>
<style src='./theme.css'></style>
<script lang="ts">
import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';
import MenuPage from './components/MenuPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    MenuPage,
    
  }
});
</script>