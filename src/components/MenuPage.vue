<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">   <ion-list>
      <ion-list-header>
        Navigate
      </ion-list-header>
      <ion-menu-toggle auto-hide="false" v-for="p in appPages" :key="p.title">
        <ion-item button @click="navigate(p.url)">
          <ion-icon slot="start" :name="p.icon"></ion-icon>
          <ion-label>
            {{p.title}}
          </ion-label>
        </ion-item>

      </ion-menu-toggle>
    </ion-list> </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonList,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonMenuToggle,
    IonLabel,IonItem,IonIcon
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonIcon,
      IonList,
      IonMenuToggle,
    IonLabel,IonItem,    
      IonButtons,
      IonContent,
      IonHeader,
      IonMenu,
      IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar
    },
    data(){
  return {

    appPages : [
      {
        title: 'Schedule',
        url: '/tabs/schedule',
        name: 'tabs.schedule',
        icon: 'calendar'
      },
      {
        title: 'Speakers',
        url: '/tabs/speakers',
        icon: 'contacts'
      },
      {
        title: 'Map',
        url: '/tabs/map',
        icon: 'map'
      },
      {
        title: 'About',
        url: '/tabs/about',
        icon: 'information-circle'
      }
    ],
  };
},
methods: {


  navigate(url: string){
      // this.$router.directionOverride = 0;
      this.$router.push(url)
    }
    },
    mounted: function(){
   //  alert('hh)')
//this.OneSignalInit()
},
  });
</script>

<style scoped>
  ion-menu::part(backdrop) {
    background-color: rgba(255, 0, 255, 0.5);
  }

  ion-menu::part(container) {
    border-radius: 0 20px 20px 0;

    box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
  }
</style>