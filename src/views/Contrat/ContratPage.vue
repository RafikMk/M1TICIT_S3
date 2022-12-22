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
      
      <h1>kjkj {{idimgs}}</h1>
<ion-list>
  <ion-item v-for="contrat in Contrats" :key="contrat">  
    <ion-item>

    <ion-label>{{ contrat.numContrat }}</ion-label>
    <ion-label>{{ contrat.dureecontrat }}</ion-label>
    <ion-label>{{ contrat.optionContrat }}</ion-label>
    <ion-label>{{ contrat.taciteContrat }}</ion-label>
    <ion-label>{{ contrat.valideité }}</ion-label></ion-item>
    <ion-item>
    <ion-label v-for="photo in contrat.image" :key="photo">   
      <ion-img class="image" :src="'http://localhost:8081/get/image/Image_N_3'"></ion-img>
        <ion-icon :icon="camera" @click="takePhoto('',null)"></ion-icon>
<ion-icon :icon="trash"></ion-icon>
  </ion-label></ion-item>

    <ion-row>
   <ion-button @click='getByid(contrat.numContrat)'>Modifier</ion-button>

  </ion-row>
  </ion-item>
</ion-list>
      <ion-grid>
  <ion-row>
    <ion-col size="6"> 
      <ion-item>
    <ion-label>Title</ion-label>
    <ion-input type="text" v-model="Contrat.taciteContrat"></ion-input>
  </ion-item>
</ion-col>
    <ion-col size="6">  <ion-item>
  <ion-select @ionChange='DureeContratOption($event.target.value)' v-model="Contrat.dureecontrat" placeholder="Dureé Contrat" >
    <ion-select-option v-for="dureecontrat in DureeContrat" :value="dureecontrat" :key="dureecontrat" >{{ dureecontrat }}</ion-select-option>

  </ion-select>
</ion-item></ion-col>
  </ion-row>
  <ion-row>
    <ion-item    v-for="(value, key, index) in OptionContrat" :key="index" >
<ion-checkbox slot="start" :value="value.name"  id="key" v-model="OptionContrat[key].check"></ion-checkbox>
<ion-label>{{ value.name }}   </ion-label>
</ion-item>
<ion-item> 
      <ion-fab-button @click="TakePhotoAndGetId('photoOfContrat',null)">
        <ion-icon :icon="camera"></ion-icon>
      </ion-fab-button>
</ion-item>
  </ion-row>
  <ion-row>
    <ion-button  :color="colorBtn" @click='save()'>{{ ajouter_modifier }}</ion-button>
 <!--   <ion-button :style="{ color: 'black', fontSize: 100 + 'px' }"  @click='save()'>{{ ajouter_modifier }}</ion-button>-->

  </ion-row>
</ion-grid>

</ion-content>
<ion-footer>
Footer

</ion-footer>
</ion-page>

</template>

<script lang="ts">
import {IonBackButton,IonButtons,IonFabButton,IonIcon, IonButton,IonList,IonSelect,IonCheckbox,IonSelectOption,IonItem,IonInput,IonLabel,IonGrid,IonCol,IonRow,IonFooter,IonTitle,IonToolbar,IonHeader,IonPage,IonContent  } from '@ionic/vue';
import { defineComponent } from 'vue';
import ContratService from '@/services/ContratService';
import { usePhotoGallery,UserPhoto } from '@/composables/usePhotoGallery';
    import { camera, trash, close ,arrowBack} from 'ionicons/icons';
    import { images, square, triangle } from 'ionicons/icons';
import axios from 'axios'

export default defineComponent({
  components: {IonBackButton,IonButtons,IonFabButton,IonIcon,IonButton,IonList,IonSelect,IonCheckbox,IonSelectOption, IonItem,IonInput,IonLabel,IonGrid,IonCol,IonRow,IonFooter,IonTitle,IonToolbar,IonHeader,IonPage,IonContent   },
  setup() {
      const { photos ,takePhoto ,idImageFunction} = usePhotoGallery();
      return { 
        idImageFunction,
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
  idimgs :[] as any,
  DureeContrat : ['6 mois','3 mois'],
  OptionContrat :[{ name:'tous risque',check:true },{ name:'responsabilité civile',check:true },{ name:'bris de glace',check:false }] ,
  Contrats : [] as any ,
  Contrat :{
    image :[],
    taciteContrat :"",
    dureecontrat:"",
    optionContrat :[],
    valideité :false
    },
    baseURL:  "http://localhost:8081/Contrat",
    ajouter_modifier :"Ajouter" ,
    colorBtn:"success" ,
    numcontrat : 0 as number
};
},
methods: {
  async TakePhotoAndGetId (update :any,ob :any ) 
  {
await this.takePhoto(update,ob)
 const idimg =  {id :this.idImageFunction() }
 this.idimgs.push(idimg)
console.log("hjhbnbvj"+this.idimgs)
  } ,
  getByid(numcontrat :any) {
    this.numcontrat =numcontrat
    axios.get(`${this.baseURL}/${numcontrat}`).then(response => {
        this.Contrat=response.data ;
        this.ajouter_modifier ="Modifier" ,

        this.colorBtn="warning"
        this.OptionContrat.forEach((value, index) => {
if (response.data.optionContrat.includes(value.name) )  {
  console.log(value.name)
value.check =true 
}
else  {
value.check =false 
}
  
})
      })
      .catch(e => {
        console.log(e);
      });      },

DureeContratOption(event :any ) {
  this.Contrat.dureecontrat = event
          //console.log(event)
      },
      save() {
          this.Contrat.optionContrat  = []
        this.OptionContrat.forEach((value, index) => {
if (value.check)  {
  let OptionContrat = this.Contrat.optionContrat
   //this.Contrat.optionContrat =OptionContrat+ value.name
   const a =this.Contrat.optionContrat as any
   a.push(value.name) ;

} 
});
if (this.ajouter_modifier == "Ajouter")
        {
       
          this.Contrat.image=  this.idimgs
                 axios.post(`${this.baseURL}`, this.Contrat
).then(response => {
        console.log(response.data);
        this.Contrats.push(this.Contrat)
      })
      .catch(e => {
        console.log(e);
      });
    }
    else if (this.ajouter_modifier == "Modifier")
        {
          axios.put(`${this.baseURL}/${this.numcontrat}`, this.Contrat).then(response => {
        console.log(response.data);
        const result = this.Contrats.map((item : any) => {
          if (item.numContrat === this.numcontrat) {
            console.log(item)
            return { taciteContrat: 'Alfred'};
  }
})
      //  this.Contrats.push(this.Contrat)
      })
      .catch(e => {
        console.log(e);
      });
        }
},

//getByid(numcontrat) {

//} ,
/*
edit() {
        this.OptionContrat.forEach((value, index) => {
if (value.check)  {
  let OptionContrat = this.Contrat.optionContrat
  this.Contrat.optionContrat =OptionContrat+ value.name
}
  
});
        axios.put(`${this.baseURL}/${id}`, this.Contrat).then(response => {
        console.log(response.data);
        this.Contrats.push(this.Contrat)
      })
      .catch(e => {
        console.log(e);
      });
 

},*/
},
  mounted: function(){
 
   axios.get(this.baseURL).then(response => {
        this.Contrats=response.data ;
      })
      .catch(e => {
        console.log(e);
      });
    
},

});


</script> <style scoped>

.image {
  width: 100%;
  height: auto;
}
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