export const formaterDonnee = (jardin) => {
  return {
    nom: jardin.nom_ev,
    categorie: jardin.categorie,
    adresse: `${jardin.adresse_numero} ${jardin.adresse_typevoie} ${jardin.adresse_libellevoie}`,
    codePostal: jardin.adresse_codepostal,
    annee: jardin.annee_ouverture
  };
};