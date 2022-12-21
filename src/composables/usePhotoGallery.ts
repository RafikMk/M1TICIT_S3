import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import axios from 'axios'
import { Directory, Filesystem } from '@capacitor/filesystem';
import { IonButton, toastController } from '@ionic/vue';
import { globe } from 'ionicons/icons';
  export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
    idImage :any
  }
export function usePhotoGallery() {
      const photos = ref<UserPhoto[]>([]);
      let  idImage :any = undefined;
    const takePhoto = async (update :any,ob :any ) => {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
     
   /*  const picture = 'data:image/jpg;base64,' + photo;
      console.log(picture)

      fetch(picture)
.then(res => res.blob())
.then(blob => {
  const fd = new FormData()
  fd.append('image', blob, 'filename')
  
  console.log(blob)
})
  // Upload
  // fetch('upload', {method: 'POST', body: fd})

  const response = await fetch(picture);
  const blob = await response.blob();
  const formData = new FormData();
  formData.append('file', blob, picture);
 
  axios.post("http://localhost:8081/upload/image").then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
                console.log(error)
            }) 

      
console.log(picture) ;
*/

      const fileName = new Date().getTime() + '.jpeg';
     // const savedFileImage = { filepath: fileName, webviewPath: photo.webPath, };
  
 const savedFileImage = await savePicture(update,ob,photo, fileName);
 // photos.value = [savedFileImage, ...photos.value];
    idImage =savedFileImage.idImage ;
  //  idImageFunction() 

    };
   const idImageFunction = ()=>
    {
      console.log("work ")
      return idImage ;
    } 
    return {
      idImageFunction,
    photos ,
      takePhoto,
    };
  }
  const convertBlobToBase64 = (blob: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
 const presentToast = async (message :any ) => {
    const toast = await toastController.create({
      message: message,
      duration: 1500,
      icon: globe
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    //this.roleMessage = `Dismissed with role: ${role}`;
  }
  const savePicture = async (update : any,ob :any ,photo: Photo, fileName: string): Promise<UserPhoto> => {
    let base64Data: string;
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    let idImage = undefined;
    let post
   // console.log(blob)
    const fd = new FormData()
    //fd.append('image', blob, 'llll')
    if (update == "update")
    {   
   //   let Img = response.data.toString();
      const Img = ob.name+"Updated" ;
      fd.append('image', blob, Img)
      axios.post(`http://localhost:8081/update/image/${ob.id}`,fd).then((response) => {
        //console.log(response.data)
        presentToast(response.data.message)
      })
      .catch((error) => {
                console.log(error)
            })
    }
    else {
      let Img = await fetch('http://localhost:8081/get/imageNumbers', { method: 'GET' });
       Img = await Img.json() ;
      fd.append('image', blob, "Image_N_"+Img)
      post = axios.post("http://localhost:8081/upload/image",fd).then((response) => {
        console.log(response.data)
        presentToast(response.data.message)
         idImage = response.data.idImage
      })
 
    .catch((error) => {
              console.log(error)
          })
        }
        await post ;

  //  base64Data = (await convertBlobToBase64(blob)) as string;
  
  //  const savedFile = await Filesystem.writeFile({
  //    path: fileName,
   //   data: base64Data,
   //   directory: Directory.Data,
   // });
  
    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
      idImage :idImage
    };
  };
