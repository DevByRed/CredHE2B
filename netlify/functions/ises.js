// netlify/functions/ises.js

export async function handler(event, context) {
  try {
    const { bachelor } = event.queryStringParameters;

    const data = {
      commerce: [
        {
          id: "ced1ue1",
          name: "Support et intégration professionnelle 1",
          ects: 6,
          quadri: "Q1,Q2",
        },
        {
          id: "ced1ue2",
          name: "Langue étrangère (Néerlandais 1 ou Allemand 1)",
          ects: 9,
          quadri: "Q1,Q2",
        },
        {
          id: "ced1ue3",
          name: "Langue étrangère (Anglais 1)",
          ects: 9,
          quadri: "Q1,Q2",
        },
        {
          id: "ced1ue4",
          name: "Support et intégration professionnelle 2",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "ced1ue5",
          name: "Économie et gestion 1",
          ects: 5,
          quadri: "Q1",
        },
        {
          id: "ced1ue6",
          name: "Économie et gestion 2",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "ced1ue7",
          name: "Économie et gestion 3",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "ced1ue8",
          name: "Développement durable et gestion B1 de la transition 1",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "ced1ue9",
          name: "Langue étrangère (Espagnol 1)",
          ects: 5,
          quadri: "Q2",
        },
        {
          id: "ced1ue10",
          name: "Développement durable et gestion de la transition 2",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "ced1ue11",
          name: "Économie et gestion 4",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "ced1ue12",
          name: "Droit 1",
          ects: 4,
          quadri: "Q2",
        },
        {
          id: "ced1ue13",
          name: "Économie et gestion 5",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "ced1ue14",
          name: "Support et intégration professionnelle 3",
          ects: 1,
          quadri: "Q2",
        },
      ],

      droit: [
        {
          id: "dr1ue1",
          name: "Expression française (orale et écrite) 1",
          ects: 9,
          quadri: "Q1,Q2",
        },
        {
          id: "dr1ue2",
          name: "Langue étrangère 1 (Anglais ou Néerlandais 1)",
          ects: 8,
          quadri: "Q1,Q2",
        },
        {
          id: "dr1ue3",
          name: "Droit privé 1",
          ects: 5,
          quadri: "Q1",
        },
        {
          id: "dr1ue4",
          name: "Droit public 1 (épreuve intégrée)",
          ects: 6,
          quadri: "Q1",
        },
        {
          id: "dr1ue5",
          name: "Droit judiciaire 1",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dr1ue6",
          name: "Psychologie 1",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dr1ue7",
          name: "Traitement de l’information 1",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "dr1ue8",
          name: "Droit de l’entreprise",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "dr1ue9",
          name: "Droit du travail 1",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dr1ue10",
          name: "Droit judiciaire 2",
          ects: 4,
          quadri: "Q2",
        },
        {
          id: "dr1ue11",
          name: "Droit pénal",
          ects: 5,
          quadri: "Q2",
        },
        {
          id: "dr1ue12",
          name: "Économie",
          ects: 5,
          quadri: "Q2",
        },
        {
          id: "dr1ue13",
          name: "Comptabilité 1",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dr1ue14",
          name: "Droit européen 1",
          ects: 3,
          quadri: "Q2",
        },
      ],

      medical: [
        {
          id: "med1ue1",
          name: "Correspondance et communication en français 1",
          ects: 10,
          quadri: "Q1,Q2",
        },
        {
          id: "med1ue2",
          name: "Néerlandais 1",
          ects: 7,
          quadri: "Q1,Q2",
        },
        {
          id: "med1ue3",
          name: "Anglais 1",
          ects: 8,
          quadri: "Q1,Q2",
        },
        {
          id: "med1ue4",
          name: "Économie 1",
          ects: 5,
          quadri: "Q1",
        },
        {
          id: "med1ue5",
          name: "Traitement de l’information 1 (épreuve intégrée)",
          ects: 6,
          quadri: "Q1",
        },
        {
          id: "med1ue6",
          name: "Gestion des relations humaines",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "med1ue7",
          name: "Activités d’intégration professionnelle 1",
          ects: 2,
          quadri: "Q1,Q2",
        },
        {
          id: "med1ue8",
          name: "Pratique de la langue Néerlandais 1",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "med1ue9",
          name: "Traitement de l’information 2",
          ects: 4,
          quadri: "Q2",
        },
        {
          id: "med1ue10",
          name: "Éléments de statistiques et labo",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "med1ue11",
          name: "Marketing 1",
          ects: 4,
          quadri: "Q2",
        },
        {
          id: "med1ue12",
          name: "Comptabilité",
          ects: 4,
          quadri: "Q2",
        },
        {
          id: "med1ue13",
          name: "Droit 1",
          ects: 3,
          quadri: "Q2",
        },
      ],
      immobilier: [
        {
          id: "imm1ue1",
          name: "Patrimoine urbain et rural",
          ects: 4,
          quadri: "Q1,Q2",
        },
        {
          id: "imm1ue2",
          name: "Biens immobiliers : locations",
          ects: 4,
          quadri: "Q1,Q2",
        },
        {
          id: "imm1ue3",
          name: "Anglais 1",
          ects: 6,
          quadri: "Q1,Q2",
        },
        {
          id: "imm1ue4",
          name: "Néerlandais 1",
          ects: 5,
          quadri: "Q1,Q2",
        },
        {
          id: "imm1ue5",
          name: "Économie générale",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "imm1ue6",
          name: "Éléments de géographie socio-économique",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "imm1ue7",
          name: "Français 1",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "imm1ue8",
          name: "Propédeutique",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "imm1ue9",
          name: "Outils cartographiques",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "imm1ue10",
          name: "Droit civil 1",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "imm1ue11",
          name: "Droit judiciaire",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "imm1ue12",
          name: "Technologies de l’information et de la communication",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "imm1ue13",
          name: "Bureautique",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "imm1ue14",
          name: "Droit de l’entreprise 1",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "imm1ue15",
          name: "Assurances",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "imm1ue16",
          name: "Droit administratif",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "imm1ue17",
          name: "Informatique 1",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "imm1ue18",
          name: "Comptabilité 1",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "imm1ue19",
          name: "Français 2",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "imm1ue20",
          name: "Biens immobiliers : aspects techniques 1",
          ects: 6,
          quadri: "Q2",
        },
      ],

      langues: [
        {
          id: "lg1ue1",
          name: "Correspondance et communication en français 1",
          ects: 10,
          quadri: "Q1,Q2",
        },
        {
          id: "lg1ue2",
          name: "Néerlandais 1",
          ects: 7,
          quadri: "Q1,Q2",
        },
        {
          id: "lg1ue3",
          name: "Anglais 1",
          ects: 8,
          quadri: "Q1,Q2",
        },
        {
          id: "lg1ue4",
          name: "Économie 1",
          ects: 5,
          quadri: "Q1",
        },
        {
          id: "lg1ue5",
          name: "Traitement de l’information 1 (épreuve intégrée)",
          ects: 6,
          quadri: "Q1",
        },
        {
          id: "lg1ue6",
          name: "Gestion des relations humaines",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "lg1ue7",
          name: "Activités d’intégration professionnelle 1",
          ects: 2,
          quadri: "Q1,Q2",
        },
        {
          id: "lg1ue8",
          name: "Pratique de la langue Néerlandais 1",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "lg1ue9",
          name: "Traitement de l’information 2",
          ects: 4,
          quadri: "Q2",
        },
        {
          id: "lg1ue10",
          name: "Éléments de statistiques et labo",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "lg1ue11",
          name: "Marketing 1",
          ects: 4,
          quadri: "Q2",
        },
        {
          id: "lg1ue12",
          name: "Comptabilité",
          ects: 4,
          quadri: "Q2",
        },
        {
          id: "lg1ue13",
          name: "Droit 1",
          ects: 3,
          quadri: "Q2",
        },
      ],
    };

    if (bachelor) {
      return {
        statusCode: 200,
        body: JSON.stringify(data[bachelor] || []),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify([
        { id: "commerce", name: "Bachelier en commerce et développement" },
        { id: "droit", name: "Bachelier en droit" },
        { id: "medical", name: "Assistant de direction médical" },
        { id: "immobilier", name: "Gestion immobilière" },
        {
          id: "langues",
          name: "Assistant de direction en langues et gestion",
        },
      ]),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
