<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home Redirect</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">


   
<ion-label>{{msg}}</ion-label>
</ion-content>
<ion-footer>
    <ion-button router-link="/test">test </ion-button>
    <ion-button router-link="/home">home </ion-button>
    <ion-button router-link="/camera">camera </ion-button>

</ion-footer>
</ion-page>
  </template>
  
  <script lang="ts">
import {IonButton,IonFooter,IonTitle,IonToolbar,IonHeader,IonContent,IonPage , IonLabel} from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {IonButton,IonFooter,IonTitle,IonToolbar,IonHeader,IonContent,IonPage,IonLabel},
       
    data(){
  return {
  msg :''
  };
},
methods: {
 
    },
    mounted: function(){
alert(typeof this.$route.query.data)
let  n = this.$route.query.data ;
let data :any  = JSON.parse(n as any);
this.msg = "matiere : "+data[0].matiere+" nom: "+data[0].nom+" spec :"+data[0].specialite
console.log(data)
}

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