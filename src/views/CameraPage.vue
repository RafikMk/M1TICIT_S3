<template>
    
      <ion-page>
    <ion-header>
 
      <ion-toolbar color="Light">
        <ion-buttons slot="start">
        <ion-back-button >
        </ion-back-button>
      </ion-buttons>
        <ion-title color="light"></ion-title>
      </ion-toolbar>
      <ion-breadcrumbs >
  <ion-breadcrumb href="#">Camera</ion-breadcrumb>
 
</ion-breadcrumbs>
    </ion-header>

        <ion-content :fullscreen="true">

    <ion-fab vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button @click="takePhoto('',null)">
        <ion-icon :icon="camera"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-grid>
      <ion-row>
        <ion-col size="6" :key="photo.webviewPath" v-for="photo in photos">
          <ion-img :src="photo.webviewPath"></ion-img>
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-grid>
      <ion-row> 
    
      <ion-row>
  <ion-col size="6" :key="photo" v-for="photo in Images">
          <ion-img :src="'http://localhost:8081/get/image/'+photo.name"></ion-img>
          <ion-button @click="takePhoto('update',photo)" >Edit <ion-icon :icon="camera"></ion-icon>
          </ion-button>
          <ion-button @click="Delete(photo.id)"  color="danger">Delete <ion-icon :icon="trash"></ion-icon>
</ion-button>

        </ion-col>
      </ion-row>
      </ion-row>

    </ion-grid>
    <!-- <ion-fab> markup  -->
 <!--<ion-tab-button tab="tab2" href="/tabs/tab2">
    <ion-icon :icon="images" />
    <ion-label>Photos</ion-label>
  </ion-tab-button>--> 
  </ion-content>
  <ion-footer>
      <!--  <ion-button router-link="/test">test </ion-button>
    <ion-button router-link="/home">home </ion-button>
    <ion-button router-link="/camera">camera </ion-button>
--> 
</ion-footer>
</ion-page>

    </template>
    
    <script lang="ts">
    import { Checkbox } from '@ionic/core/dist/types/components/checkbox/checkbox';
  import { IonButtons,IonBackButton,IonBreadcrumbs,IonBreadcrumb,IonButton,toastController,IonFooter,IonTitle,IonToolbar,IonHeader,IonPage,IonGrid,IonImg, IonFabButton, IonIcon,IonFab,IonContent ,IonCol,IonRow } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import OneSignal from 'onesignal-cordova-plugin';
    import { usePhotoGallery,UserPhoto } from '@/composables/usePhotoGallery';
    import { camera, trash, close, map ,arrowBack} from 'ionicons/icons';
    import { images, square, triangle } from 'ionicons/icons';
    import axios from 'axios'
  import { globe } from 'ionicons/icons';
    export default defineComponent({
      components: {IonButtons,IonBackButton,IonBreadcrumbs,IonBreadcrumb,IonButton,IonFooter,IonTitle,IonToolbar,IonHeader,IonPage,IonGrid,IonImg,IonFabButton, IonIcon,IonFab,IonContent ,IonCol,IonRow  },
      setup() {
      const { photos ,takePhoto } = usePhotoGallery();
      return {  
        photos,
        images,
        square,
        triangle,
        takePhoto,
        camera, trash, close,arrowBack
      }
    },
      data(){
    return {
      Image :"" ,
Images : []  as any
    };
  },
  methods: {
    async presentToast(message :any ) {
        const toast = await toastController.create({
          message: message,
          duration: 1500,
          icon: globe
        });

        await toast.present();

        const { role } = await toast.onDidDismiss();
        //this.roleMessage = `Dismissed with role: ${role}`;
      },
    
    Delete(id :any )
    {
     
      axios.delete(`http://localhost:8081/delete/image/${id}`).then((response) => {
        console.log(response.data)
         this.presentToast(response.data.message)
      })
      .catch((error) => {
                console.log(error)
            })
    },
    getList() {
      axios.get("http://localhost:8081/get/image/Image_N_0").then((response) => {
        console.log(response.data)
        this.Image = response.data

      })
      .catch((error) => {
                console.log(error)
            }) },

    
      },
      mounted: function(){
     //  alert('hh)')
  //this.OneSignalInit()
  axios.get("http://localhost:8081/Images").then((response) => {
        console.log(response.data)
        this.Images = response.data

      })
      .catch((error) => {
                console.log(error)
            }) 
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