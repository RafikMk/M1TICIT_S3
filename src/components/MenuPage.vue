<template>
  <ion-menu content-id="main-content">
 
    <ion-content class="ion-padding">   <ion-list>
      <ion-list-header>
        Navigate
      </ion-list-header>
      <ion-menu-toggle auto-hide="false" v-for="p in appPages" :key="p.title">
        <ion-item button @click="navigate(p.url,p.title)">
          <ion-icon slot="start" :icon="p.icon"></ion-icon>

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
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-router-outlet />

      </ion-content>
  </ion-page>
</template>

<script lang="ts">
    import { clipboardOutline, camera, map,contractOutline } from 'ionicons/icons';
    import { IonApp, IonRouterOutlet,IonSplitPane } from '@ionic/vue';

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
      IonRouterOutlet,

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
    title :'Page 1' as any ,
    appPages : [
      {
        title: 'Contrat',
        url: '/Contrat',
        icon: clipboardOutline
      },
      {
        title: 'Camera',
        url: '/Camera',
        icon: camera
      },
      {
        title: 'Map',
        url: '/map',
        icon: map
      },
      {
        title: 'Page 1',
        url: '/test',
        icon: contractOutline
      }
    ],
  };
},
methods: {


  navigate(url: string,titre :string){
      // this.$router.directionOverride = 0;
      this.$router.push(url)
this.title =titre 
    }
    },
    mounted: function(){
      this.title = this.$route.name;

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