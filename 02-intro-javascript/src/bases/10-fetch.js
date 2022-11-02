const apiKey = "9atZkyQyMAtymjZQa3SIgUfrSWbuxFdX";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

/*Código dificil de matener
peticion.then(resp=>{
    resp.json().then(data=>{
        console.log(data);
    });
})
.catch(console.warn);
*/

peticion
  .then((resp) => resp.json())
  .then(({data}) => { //con la destructuración obtenemos la data.data
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
