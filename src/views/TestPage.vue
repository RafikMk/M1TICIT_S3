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
    <ion-content class="ion-padding">


    <ion-item>
      <ion-label position="floating">Floating Label</ion-label>
      <ion-input v-model="nom"></ion-input>
    </ion-item>
  
  <ion-item>
    <ion-select @ionChange='CiviliteOption($event.target.value)' placeholder="Select civilité" >
      <ion-select-option v-for="civilite in ArrCivilite" :value="civilite" :key="civilite" >{{ civilite }}</ion-select-option>
 
    </ion-select>
  </ion-item>
  <ion-radio-group @ionChange='specialite($event.target.value)'  v-model="btnradio" value="custom-checked">
    <ion-row>
      <ion-col
        v-for="specialite in Arrspecialite"
        :key="specialite"
      >
        <ion-item>
      
    <ion-label>{{ specialite }}</ion-label>
    <ion-radio :value="specialite"></ion-radio>
  </ion-item>
      </ion-col>
    </ion-row>

  </ion-radio-group>
  <ion-item    v-for="(value, key, index) in ArrMatiere" :key="index" >
  <ion-checkbox slot="start" :value="value.name"  id="key" v-model="ArrMatiere[key].check"></ion-checkbox>
  <ion-label>{{ value.name }}   </ion-label>
  </ion-item>
  
   <ion-label>Bonjour {{ nom }} {{ selected }} {{ btnradio }}  </ion-label> 
   <ion-label v-for="(value, key) in ArrMatiere" :key="key">
   <ion-label v-if="value.check"> &nbsp;{{ value.name }}  </ion-label> 
   </ion-label>
<IonLabel>{{msg}}</IonLabel><br/>
   <ion-button @click='send()'>Envoyer</ion-button>
  </ion-content>
  <ion-footer>
 
</ion-footer>
</ion-page>
  </template>
  
  <script lang="ts">
import { IonBackButton,IonButtons,IonFooter,IonTitle,IonToolbar,IonHeader,IonContent,IonPage,IonLabel, IonInput, IonItem,IonSelect,IonCol,IonRow, IonButton,IonSelectOption,IonRadio, IonRadioGroup ,IonCheckbox} from '@ionic/vue';
  import { defineComponent } from 'vue';
 
  import { arrowBack} from 'ionicons/icons';

  export default defineComponent({
    components: {IonBackButton,IonButtons,IonFooter,IonTitle,IonToolbar, IonHeader,IonContent, IonPage ,IonCol,IonRow , IonLabel, IonInput,IonButton, IonItem ,IonSelect,IonSelectOption,IonRadio, IonRadioGroup ,IonCheckbox},
    setup() {
      return {  
 arrowBack
      }
    },
    data(){
  return {
    ArrMatiere :[{ name:'phy',check:true },{ name:'algo',check:true },{ name:'info',check:false }] ,
     CheckboxMatier : '',
    btnradio :'' ,
    nom: '' ,
    selected :'',
    civilite : 'hhc',
    ArrCivilite : ['mme','mr'],
    Arrspecialite: ['info','math'],
    msg :''

  };
},
methods: {
 
  send() {
    let nom_prenom = this.civilite=" "+this.nom ;
    let mat :any =''
    this.ArrMatiere.forEach((value, index) => {
  if (value.check)  {
mat =mat+ value.name
  }
});
this.msg = nom_prenom+`pécialité : ` +this.btnradio+" matière : "+mat
let data :any = [{nom :nom_prenom,matiere:mat,specialite :this.btnradio}]

this.$router.push({
    name: "Home",
    query: { data: JSON.stringify(data) }
  });
}
,
  CiviliteOption(event :any ) {
    this.selected = event
            console.log(event)
        },
        specialite(event :any ) {
   /* this.btnradio = event
            console.log(event)*/
        },
    },
    mounted: function(){
   //  alert('hh)')
//this.OneSignalInit()
},

});

  
  </script> <style scoped>
    ion-toolbar {
    --background: transparent;
    --border-color: transparent;
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