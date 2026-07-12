
const getData = async () => {
  try {
    const data = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/espaces_verts/records?limit=100")
    const jsonData = await data.json()


    const nomsChoisis = [
      "JARDINIERE VERTICALE DU 53 RUE DES RONDEAUX",
      "JARDINET DE LA RUE ALPHONSE BAUDIN",
      "JARDINIERES DE LA RUE DE BELLEVUE",
      "JARDINIERES DE LA RUE DE LA CONCERTATION",
      "JARDINIERE VERTICALE DU SQUARE SAINT-LAMBERT 1"
    ];

    const mesParcs = jsonData.results.filter((jardin) =>
      nomsChoisis.includes(jardin.nom_ev)
    );

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