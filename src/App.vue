<template>
  <ion-app>
    <ion-split-pane>
      <MenuPage></MenuPage>
      <ion-router-outlet />

</ion-split-pane>
  </ion-app>
</template>
<style src='./theme.css'></style>
<script lang="ts">
import { IonApp, IonRouterOutlet,IonSplitPane } from '@ionic/vue';
import { defineComponent } from 'vue';
import MenuPage from './components/MenuPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    MenuPage,
    IonSplitPane
  }
});
</script>