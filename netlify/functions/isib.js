export async function handler(event, context) {
  try {
    const bachelors = [
      {
        id: "isib-prev",
        name: "Conseiller en prévention, sécurité industrielle et environnement",
      },
    ];

    // Si pas de paramètre → on renvoie juste la liste des bacheliers
    const bachelor = event.queryStringParameters?.bachelor;
    if (!bachelor) {
      return {
        statusCode: 200,
        body: JSON.stringify(bachelors),
      };
    }

    // Sinon → on renvoie les cours du bachelier choisi
    if (bachelor === "isib-prev") {
      const courses = [
        {
          code: "1SE0100",
          name: "Anatomie, physiologie humaine et ergonomie",
          ects: 4,
          quadri: "Q1",
        },
        {
          code: "1SE0200",
          name: "Mathématiques et informatique",
          ects: 6,
          quadri: "Q1",
        },
        {
          code: "1SE0300",
          name: "Sciences fondamentales et appliquées 1",
          ects: 6,
          quadri: "Q1",
        },
        {
          code: "1SE0400",
          name: "Sciences fondamentales et appliquées 2",
          ects: 6,
          quadri: "Q1",
        },
        {
          code: "1SE0500",
          name: "Sciences humaines, sociales et gestion 1",
          ects: 8,
          quadri: "Q1",
        },
        {
          code: "1SE1600",
          name: "Communication et langues 1",
          ects: 1,
          quadri: "Q1",
        },
        {
          code: "1SE0600",
          name: "Sciences fondamentales et appliquées 3",
          ects: 4,
          quadri: "Q2",
        },
        { code: "1SE0700", name: "Chimie", ects: 6, quadri: "Q2" },
        {
          code: "1SE0900",
          name: "Mécanique et résistance des matériaux",
          ects: 4,
          quadri: "Q2",
        },
        {
          code: "1SE1000",
          name: "Sciences humaines, sociales et de gestion 2",
          ects: 2,
          quadri: "Q2",
        },
        {
          code: "1SE1300",
          name: "Droit et environnement",
          ects: 4,
          quadri: "Q2",
        },
        {
          code: "1SE1700",
          name: "Communication et langues 2",
          ects: 6,
          quadri: "Q2",
        },
        {
          code: "1SE1800",
          name: "Visites d’entreprise et séminaires de sécurité",
          ects: 3,
          quadri: "Q2",
        },
      ];
      return {
        statusCode: 200,
        body: JSON.stringify(courses),
      };
    }

    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Bachelier non trouvé" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
