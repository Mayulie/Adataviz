
const getData = async () => {
  try {
    const data = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/espaces_verts/records?limit=20")
    const jsonData = await data.json()

    const mesParcs = [
      jsonData.results[11],
      jsonData.results[13],
      jsonData.results[15],
      jsonData.results[16],
      jsonData.results[17]
    ];

const liste = document.querySelector("#liste-jardins");

mesParcs.forEach((jardin) => {

const carte = document.createElement("article");
carte.classList.add("fiches");

const nom = document.createElement("h3");
nom.textContent = jardin.nom_ev;

const categorie = document.createElement("p");
categorie.textContent = `🌳 ${jardin.categorie}`;

const adresse = document.createElement("p");
adresse.textContent = `📍 ${jardin.adresse_numero} ${jardin.adresse_typevoie} ${jardin.adresse_libellevoie}`;

const codePostal = document.createElement("p");
codePostal.textContent = `📮 ${jardin.adresse_codepostal}`;

const annee = document.createElement("p");
annee.textContent = `📅 Année d'ouverture : ${jardin.annee_ouverture}`;

carte.appendChild(nom);
carte.appendChild(categorie);
carte.appendChild(adresse);
carte.appendChild(codePostal);
carte.appendChild(annee);

liste.appendChild(carte);

});

  } catch (error) {
    console.error(error)
  }
  finally {
    console.log("Terminé");
  }
}

getData()







//const getData = async () => {
//try {
//const data = await  fetch ("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/espaces_verts/records?limit=20")
//const jsonData = await data.json()
//console.log(jsonData)
//}
//catch (error) {
//console.error (error)
//}
//finally {
//console.log("Terminé");
//}
//}
//getData()

//fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/espaces_verts/records?limit=20")







//-------------------
//fetch("")
  //.then((data) => data.json())
  //.then((response) => console.log(response))
  //.catch((error) => console.error(error));
//--------------------

//const getData = async () => {
  //try {
   // const data = await fetch("")
    //const response = await response.json
    //console.log(jsonData)

  //}

  //catch {
    //(error)
    //console.error(error)
  //}

  //finally {
    //console.log("Terminé");
  //}
  
//}
//getData()


// const charger= async () => {
//   try {
//     const data = await fetch ("/data.json")
//     const results = await res.json ()
//     console.log (`${data.length} elements`)
//   }
//   catch {
//     const error = (error)
//     console.error
//   }

//   finally {
//    console.log (Terminé)
//   }
// }

// charger()


//const getData = async () => {
//   try {
//     const data = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/espaces_verts/records?limit=20")
//     const jsonData = await data.json()

//     const mesParcs = [
//       jsonData.results[11],
//       jsonData.results[13],
//       jsonData.results[15],
//       jsonData.results[16],
//       jsonData.results[17]
//     ];

// const cartes = document.querySelectorAll(".fiches");

// mesParcs.forEach((jardin, index) => {
//   cartes[index].innerHTML = `
//     <h3>${jardin.nom_ev}</h3>
//     <p>🌳 ${jardin.categorie}</p>
//     <p>📍 ${jardin.adresse_numero} ${jardin.adresse_typevoie} ${jardin.adresse_libellevoie}</p>
//     <p>📮 ${jardin.adresse_codepostal}</p>
//     <p>📅 Année d'ouverture : ${jardin.annee_ouverture}</p>
//   `;
// });

//   } catch (error) {
//     console.error(error)
//   }
//   finally {
//     console.log("Terminé");
//   }
// }

// getData()



