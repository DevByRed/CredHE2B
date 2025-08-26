// netlify/functions/defre.js

// Fichier de base pour le campus Defré (HE2B)
// Même format que isek.js :
// - GET ?bachelor=<id> renvoie les UE/cours pour ce bachelor
// - sans param renvoie la liste des bachelors disponibles

export async function handler(event, context) {
  try {
    const { bachelor } = event.queryStringParameters || {};

    const data = {
      "educateur-specialise": [
        {
          id: "edu-eph-b1",
          name: "Education physique",
          ects: 3,
          quadri: "",
        },
        {
          id: "edu-exp-b1",
          name: "Approche Expression",
          ects: 6,
          quadri: "",
        },
        {
          id: "edu-aj-b1",
          name: "Approches institutionnelle et juridique",
          ects: 4,
          quadri: "",
        },
        {
          id: "edu-aes-b1",
          name: "Approche anatomique, ergonomique et à la santé",
          ects: 5,
          quadri: "",
        },
        {
          id: "edu-psy-b1",
          name: "Approche psychologique",
          ects: 6,
          quadri: "",
        },
        {
          id: "edu-eco-b1",
          name: "Expression corporelle",
          ects: 3,
          quadri: "",
        },
        {
          id: "edu-asp-b1",
          name: "Approches sociologique et philosophique",
          ects: 5,
          quadri: "",
        },
        {
          id: "edu-add-b1",
          name: "Approches de la différence et de la diversité culturelle",
          ects: 5,
          quadri: "",
        },
        {
          id: "edu-fra-b1",
          name: "Introduction au Français",
          ects: 6,
          quadri: "",
        },
        {
          id: "edu-mpr-b1",
          name: "Méthodologie de la profession",
          ects: 3,
          quadri: "",
        },
        {
          id: "edu-aip-b1",
          name: "Activités d'intégration professionnelle",
          ects: 14,
          quadri: "",
        },
      ], // <-- pour l'instant vide (à remplir si tu me donnes la grille)
    };

    if (bachelor) {
      return {
        statusCode: 200,
        body: JSON.stringify(data[bachelor] || []),
      };
    }

    // Liste des bachelors disponibles sur le campus Defré
    return {
      statusCode: 200,
      body: JSON.stringify([
        {
          id: "educateur-specialise",
          name: "BA Éducateur·rice spécialisé·e en accompagnement psycho-éducatif (Defré)",
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
