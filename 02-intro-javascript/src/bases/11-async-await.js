//const getImagenPromesa = () => new Promise((resolve)=>resolve('https://asdkjsakjd.com'));
//getImagenPromesa().then(console.log);

//Igual al anterior pero con async
// const getImagen = async() =>{
//     return 'https://sakjdkjsadjk.com';
// }
// getImagen().then(console.log);

const getImagen = async () => {
    try {
      const apiKey = "9atZkyQyMAtymjZQa3SIgUfrSWbuxFdX";
  
      const resp = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      );
  
      const { data } = await resp.json();
  
      const { url } = data.images.original;
      const img = document.createElement("img");
      img.src = url;
      document.body.append(img);
    } catch (error) {
      //manejo del error
      console.error(error);
    }
  };
  
  getImagen();
  