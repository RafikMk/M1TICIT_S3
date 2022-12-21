import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import OneSignal from 'onesignal-cordova-plugin';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import VueGoogleMaps from "@fawmi/vue-google-maps";

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(VueGoogleMaps, {
    load: {

    //  key: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
  //  key: 'AIzaSyBw834lTlc-gq-XDeBV8jSk3cleQl0i_j0', 
  //  version: 'weekly',
  version :'weekly',
   // libraries: "visualization"
   libraries: "places",
   key: 'AIzaSyCNdpXcuLDb26QUSLCkqW2kBs7aEO9u1dM',
    },
}).mount('#app')

router.isReady().then(() => {
  document.addEventListener("deviceready", OneSignalInit, false);

 // app.mount('#app');
});
document.addEventListener("deviceready", OneSignalInit, false);
defineCustomElements(window);

function OneSignalInit(): void {
  alert("rrr")
  // Uncomment to set OneSignal device logging to VERBOSE  
  // OneSignal.setLogLevel(6, 0);

  // NOTE: Update the setAppId value below with your OneSignal AppId.
  OneSignal.setAppId("444c7145-3dc0-430f-8c53-b21a288fbed9");
  OneSignal.setNotificationOpenedHandler(function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  });

  // Prompts the user for notification permissions.
  //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
  OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
  });
}

