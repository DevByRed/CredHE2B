// netlify/functions/iessid.js

export async function handler(event, context) {
  try {
    const url = new URL(event.rawUrl);
    const bachelor = url.searchParams.get("bachelor");

    // Définition des cours par bachelier
    const BACHELIERS = {
      accueil: [
        {
          id: "aeje1ue1",
          name: "Identité et posture professionnelles",
          ects: 6,
          quadri: "Q1",
        },
        {
          id: "aeje1ue2",
          name: "Sciences humaines et sociales I",
          ects: 5,
          quadri: "Q1",
        },
        {
          id: "aeje1ue3",
          name: "Communication (I) : approche centrée sur la langue française",
          ects: 5,
          quadri: "Q1",
        },
        {
          id: "aeje1ue4",
          name: "Méthodologie de l’observation",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "aeje1ue5",
          name: "Approche paramédicale : formation à la santé",
          ects: 8,
          quadri: "Q1",
        },
        {
          id: "aeje1ue6",
          name: "AEJE : formation psycho-éducative",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "aeje1ue7",
          name: "Sciences humaines et sociales II",
          ects: 5,
          quadri: "Q2",
        },
        {
          id: "aeje1ue8",
          name: "Communication (II) : approche centrée sur les bénéficiaires",
          ects: 5,
          quadri: "Q2",
        },
        {
          id: "aeje1ue9",
          name: "AEJE : fondements théoriques et méthodologiques",
          ects: 9,
          quadri: "Q2",
        },
        {
          id: "aeje1ue10",
          name: "AIP (Stage d’insertion pratique réflexive)",
          ects: 10,
          quadri: "Q1,Q2",
        },
      ],

      assistant: [
        {
          id: "as1ue1",
          name: "Activités d’intégration professionnelle",
          ects: 15,
          quadri: "Q1,Q2",
        },
        {
          id: "as1ue2",
          name: "Introduction à l’intervention en travail social",
          ects: 8,
          quadri: "Q1",
        },
        {
          id: "as1ue3",
          name: "Approche de la recherche sociale",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "as1ue4",
          name: "Approche des réalités économiques",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "as1ue5",
          name: "Approche historique",
          ects: 5,
          quadri: "Q1",
        },
        {
          id: "as1ue6",
          name: "Approche des sciences psycho-médico-sociales",
          ects: 4,
          quadri: "Q1,Q2",
        },
        {
          id: "as1ue7",
          name: "Approches psychologiques I",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "as1ue8",
          name: "Droit public belge",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "as1ue9",
          name: "Approches juridiques de la personne",
          ects: 6,
          quadri: "Q1,Q2",
        },
        {
          id: "as1ue10",
          name: "Approches des réalités sociales",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "as1ue11",
          name: "Introduction à la sociologie",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "as1ue12",
          name: "Analyse documentaire",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "as1ue13",
          name: "Maîtrise de la langue orale et écrite",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "as1ue14",
          name: "Digitalisation et travail social",
          ects: 2,
          quadri: "Q2",
        },
      ],

      bibliothecaire: [
        {
          id: "bd1ue1",
          name: "Stage d’immersion professionnelle en bibliothèque publique",
          ects: 8,
          quadri: "Q2",
        },
        {
          id: "bd1ue2",
          name: "Fondements de la recherche documentaire",
          ects: 8,
          quadri: "Q1",
        },
        {
          id: "bd1ue3",
          name: "La lecture publique en Fédération Wallonie-Bruxelles",
          ects: 11,
          quadri: "Q1",
        },
        {
          id: "bd1ue4",
          name: "A la découverte d'autres services documentaires",
          ects: 12,
          quadri: "Q2",
        },
        {
          id: "bd1ue5",
          name: "Rapport à l’usager : médiation, animation et formation",
          ects: 9,
          quadri: "Q2",
        },
        {
          id: "bd1ue6",
          name: "L'anglais au service de l'information-documentation",
          ects: 6,
          quadri: "Q1,Q2", // au lieu de dupliquer
        },
        {
          id: "bd1ue7",
          name: "Le néerlandais au service de l'information-documentation",
          ects: 6,
          quadri: "Q1,Q2",
        },
      ],
    };

    // Si aucun bachelier demandé → renvoyer la liste des bacheliers
    if (!bachelor) {
      return {
        statusCode: 200,
        body: JSON.stringify([
          { id: "accueil", name: "Accueil et éducation du jeune enfant" },
          { id: "assistant", name: "Assistant social" },
          { id: "bibliothecaire", name: "Bibliothécaire - Documentaliste" },
        ]),
      };
    }

    // Sinon renvoyer les cours du bachelier choisi
    if (BACHELIERS[bachelor]) {
      return {
        statusCode: 200,
        body: JSON.stringify(BACHELIERS[bachelor]),
      };
    }

    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Bachelier inconnu" }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
