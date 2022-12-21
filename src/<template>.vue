<template>
    
    <ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>Contrat Pzge</ion-title>
    </ion-toolbar>
  </ion-header>

      <ion-content :fullscreen="true">

</ion-content>
<ion-footer>
Footer

</ion-footer>
</ion-page>

  </template>
  
  <script lang="ts">
import { IonFooter,IonTitle,IonToolbar,IonHeader,IonPage,IonContent  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  import axios from 'axios'

  export default defineComponent({
    components: {IonFooter,IonTitle,IonToolbar,IonHeader,IonPage,IonContent   },
  
    data(){
  return {


  };
},
methods: {


    },
    mounted: function(){
   //  alert('hh)')
//this.OneSignalInit()
},

});

  
  </script> <style scoped>
  ion-radio {
    --border-radius: 4px;
    --inner-border-radius: 4px;

    --color: #ddd;
    --color-checked: #6815ec;
  }

  ion-radio.ios {
    width: 20px;
    height: 20px;

    border: 2px solid #ddd;
    border-radius: 4px;
  }

  .radio-checked.ios {
    border-color: #6815ec;
  }
</style>