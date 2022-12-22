<template>
    
    <ion-page>
  <ion-header>
    <ion-toolbar color="Light">
      <ion-buttons slot="start">
        <ion-back-button >
        </ion-back-button>
      </ion-buttons>
      <ion-title></ion-title>
    </ion-toolbar>
  </ion-header>

      <ion-content :fullscreen="true">
        <GMapAutocomplete
       placeholder="This is a placeholder"
       :options="{
            bounds: {north: 1.4, south: 1.2, east: 104, west: 102},

            strictBounds: true
       }"  
                           @place_changed="setPlace"
         >
  </GMapAutocomplete> 
        <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"
  >
  
  <GMapMarker
  :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    />
    
  </GMapMap>

</ion-content>
<ion-footer>
    <ion-button size="small" @click="drawMarkers">Ma Position</ion-button>
  <ion-button size="small" @click="clearMap">Vider la carte</ion-button>
Footer

</ion-footer>
</ion-page>

  </template>
  
  <script lang="ts">
  
import {IonBackButton,IonButton, IonButtons,IonFooter,IonTitle,IonToolbar,IonHeader,IonPage,IonContent  } from '@ionic/vue';
  import { defineComponent } from 'vue';
  declare var google :any;
  import { arrowBack} from 'ionicons/icons';
  export default defineComponent({
    components: {IonBackButton,IonButtons, IonFooter,IonTitle,IonToolbar,IonHeader,IonPage,IonContent   },
    setup() {
      return {  
 arrowBack
      }
    },
    data(){
  return {

    center: {lat: 51.093048, lng: 6.842120},
    markers: [
        {
          id: 'dfsldjl3r',
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
      ]
  };
},
methods: {
  setPlace(place :any ){
    console.log(place) ;
                this.center = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                }
                this.drawMarkers()

            },
  getAddressData (addressData :any) {
        console.log(addressData)
    },
    setLocationLatLng () {
      //  google.maps.LatLng({lat: 52.2985593, lng: 104.2455337})

        navigator.geolocation.getCurrentPosition(geolocation => {
          this.center = {
            lat: geolocation.coords.latitude,
            lng: geolocation.coords.longitude
          };
         // console.log(geolocation)

          this.drawMarkers()

        });
    },

    drawMarkers(){
      this.markers = [
        {
            id: 'dfsldjl3r',

          position: this.center
        },
      ]
    },

    clearMap(){
      this.markers = [];
    },

    },
    mounted: function(){
   //  alert('hh)')
//this.OneSignalInit()
this.setLocationLatLng();

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