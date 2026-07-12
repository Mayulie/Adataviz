import { describe, it, expect } from "vitest";
import { formaterDonnee } from "./utils";

describe("formaterDonnee", () => {
  it("doit retourner les informations utiles d'un jardin", () => {
    const jardin = {
      nom_ev: "JARDINIERE VERTICALE DU 53 RUE DES RONDEAUX",
      categorie: "Murs vegetalises",
      adresse_numero: 53,
      adresse_typevoie: "RUE",
      adresse_libellevoie: "DES RONDEAUX",
      adresse_codepostal: "75020",
      annee_ouverture: "2011"
    };

    const resultat = formaterDonnee(jardin);

    expect(resultat).toEqual({
      nom: "JARDINIERE VERTICALE DU 53 RUE DES RONDEAUX",
      categorie: "Murs vegetalises",
      adresse: "53 RUE DES RONDEAUX",
      codePostal: "75020",
      annee: "2011"
    });
  });
});