// netlify/functions/isek.js

export async function handler(event, context) {
  try {
    const { bachelor } = event.queryStringParameters;

    const data = {
      "aide-mobilite": [
        {
          id: "dto-anatloco",
          name: "Anatomie locomotrice",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-physio1",
          name: "Physiologie des systèmes 1",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-patho-gen1",
          name: "Pathologie générale 1",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-meca",
          name: "Mécanique",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-psy1",
          name: "Introduction aux sciences psychologiques",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-handipsy",
          name: "Psychologie de la personne en situation de handicap",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-droit",
          name: "Notions générales en droit civil, droit médical et social",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "dto-hygiene",
          name: "Hygiène",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-reed",
          name: "Rééducation",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-tag-th",
          name: "Technologie d’atelier Théorie 1",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-tag-tp1",
          name: "Technologie d’atelier TP 1",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-stages",
          name: "Stages (Q1)",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-anat-tp",
          name: "Anatomie palpatoire et biométrie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-neuroanat",
          name: "Neuroanatomie",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-physio2",
          name: "Physiologie des systèmes 2",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-patho-gen2",
          name: "Pathologie générale 2",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-patho-rhu",
          name: "Pathologie rhumatologique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-patho-spe1",
          name: "Pathologies spécialisées 1",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-pcdm",
          name: "Propriétés et chimie des matériaux",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "dto-psychopatho",
          name: "Psychopathologie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-neuropsy",
          name: "Neuropsychologie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-info",
          name: "Informatique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-rechi",
          name: "Introduction à la recherche scientifique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-deonto",
          name: "Déontologie-éthique et nomenclature",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-biomeca",
          name: "Biomécanique et pathomécanique",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "dto-tag-tp2",
          name: "Technologie d’atelier TP 2",
          ects: 7,
          quadri: "Q2",
        },
        {
          id: "dto-lv1",
          name: "Langues vivantes 1",
          ects: 1,
          quadri: "Q2",
        },
      ],

      prothesiologie: [
        {
          id: "dto-anatloco",
          name: "Anatomie locomotrice",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-physio1",
          name: "Physiologie des systèmes 1",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-patho-gen1",
          name: "Pathologie générale 1",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-meca",
          name: "Mécanique",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-psy1",
          name: "Introduction aux sciences psychologiques",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-handipsy",
          name: "Psychologie de la personne en situation de handicap",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-droit",
          name: "Notions générales en droit civil, droit médical et social",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "dto-hygiene",
          name: "Hygiène",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-reed",
          name: "Rééducation",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-tag-th",
          name: "Technologie d’atelier Théorie",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-tag-tp1",
          name: "Technologie d’atelier TP 1",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-stages",
          name: "Stages (Q1)",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-anat-tp",
          name: "Anatomie palpatoire et biométrie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-neuroanat",
          name: "Neuroanatomie",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-physio2",
          name: "Physiologie des systèmes 2",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-patho-gen2",
          name: "Pathologie générale 2",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-patho-rhu",
          name: "Pathologie rhumatologique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-patho-spe1",
          name: "Pathologies spécialisées 1",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-pcdm",
          name: "Propriétés et chimie des matériaux",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "dto-psychopatho",
          name: "Psychopathologie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-neuropsy",
          name: "Neuropsychologie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-info",
          name: "Informatique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-rechi",
          name: "Introduction à la recherche scientifique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-deonto",
          name: "Déontologie-éthique et nomenclature",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-biomeca",
          name: "Biomécanique et pathomécanique",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "dto-tag-tp2",
          name: "Technologie d’atelier TP 2",
          ects: 7,
          quadri: "Q2",
        },
        {
          id: "dto-lv1",
          name: "Langues vivantes 1",
          ects: 1,
          quadri: "Q2",
        },
      ],

      chaussure: [
        {
          id: "dto-anatloco",
          name: "Anatomie locomotrice",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-physio1",
          name: "Physiologie des systèmes 1",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-patho-gen1",
          name: "Pathologie générale 1",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-meca",
          name: "Mécanique",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-psy1",
          name: "Introduction aux sciences psychologiques",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-handipsy",
          name: "Psychologie de la personne en situation de handicap",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-droit",
          name: "Notions générales en droit civil, droit médical et social",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "dto-hygiene",
          name: "Hygiène",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-reed",
          name: "Rééducation",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-tag-th",
          name: "Technologie d’atelier Théorie",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-tag-tp1",
          name: "Technologie d’atelier TP 1",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-stages",
          name: "Stages (Q1)",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-anat-tp",
          name: "Anatomie palpatoire et biométrie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-neuroanat",
          name: "Neuroanatomie",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-physio2",
          name: "Physiologie des systèmes 2",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-patho-gen2",
          name: "Pathologie générale 2",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-patho-rhu",
          name: "Pathologie rhumatologique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-patho-spe1",
          name: "Pathologies spécialisées 1",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-pcdm",
          name: "Propriétés et chimie des matériaux",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "dto-psychopatho",
          name: "Psychopathologie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-neuropsy",
          name: "Neuropsychologie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-info",
          name: "Informatique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-rechi",
          name: "Introduction à la recherche scientifique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-deonto",
          name: "Déontologie-éthique et nomenclature",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-biomeca",
          name: "Biomécanique et pathomécanique",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "dto-tag-tp2",
          name: "Technologie d’atelier TP 2",
          ects: 7,
          quadri: "Q2",
        },
        {
          id: "dto-lv1",
          name: "Langues vivantes 1",
          ects: 1,
          quadri: "Q2",
        },
      ],

      bandagisterie: [
        {
          id: "dto-anatloco",
          name: "Anatomie locomotrice",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-physio1",
          name: "Physiologie des systèmes 1",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-patho-gen1",
          name: "Pathologie générale 1",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-meca",
          name: "Mécanique",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-psy1",
          name: "Introduction aux sciences psychologiques",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-handipsy",
          name: "Psychologie de la personne en situation de handicap",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-droit",
          name: "Notions générales en droit civil, droit médical et social",
          ects: 3,
          quadri: "Q1",
        },
        {
          id: "dto-hygiene",
          name: "Hygiène",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-reed",
          name: "Rééducation",
          ects: 1,
          quadri: "Q1",
        },
        {
          id: "dto-tag-th",
          name: "Technologie d’atelier Théorie",
          ects: 2,
          quadri: "Q1",
        },
        {
          id: "dto-tag-tp1",
          name: "Technologie d’atelier TP 1",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-stages",
          name: "Stages (Q1)",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "dto-anat-tp",
          name: "Anatomie palpatoire et biométrie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-neuroanat",
          name: "Neuroanatomie",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-physio2",
          name: "Physiologie des systèmes 2",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-patho-gen2",
          name: "Pathologie générale 2",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-patho-rhu",
          name: "Pathologie rhumatologique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-patho-spe1",
          name: "Pathologies spécialisées 1",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-pcdm",
          name: "Propriétés et chimie des matériaux",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "dto-psychopatho",
          name: "Psychopathologie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-neuropsy",
          name: "Neuropsychologie",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-info",
          name: "Informatique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-rechi",
          name: "Introduction à la recherche scientifique",
          ects: 1,
          quadri: "Q2",
        },
        {
          id: "dto-deonto",
          name: "Déontologie-éthique et nomenclature",
          ects: 2,
          quadri: "Q2",
        },
        {
          id: "dto-biomeca",
          name: "Biomécanique et pathomécanique",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "dto-tag-tp2",
          name: "Technologie d’atelier TP 2",
          ects: 7,
          quadri: "Q2",
        },
        {
          id: "dto-lv1",
          name: "Langues vivantes 1",
          ects: 1,
          quadri: "Q2",
        },
      ],

      ergo: [
        // Quadri 1
        {
          id: "ue1-1",
          name: "Fondements de l’ergothérapie",
          ects: 5,
          quadri: "Q1",
        },
        {
          id: "ue1-2",
          name: "Introduction au PEO dans l’intervention ergothérapeutique",
          ects: 5,
          quadri: "Q1",
        },
        {
          id: "ue1-3",
          name: "Accompagnement en ergothérapie",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "ue1-4",
          name: "Fonctions - Dysfonctions (1)",
          ects: 5,
          quadri: "Q1",
        },
        {
          id: "ue1-5",
          name: "Sciences du vivant (1)",
          ects: 4,
          quadri: "Q1",
        },
        {
          id: "ue1-6",
          name: "Recherche en ergothérapie (1)",
          ects: 5,
          quadri: "Q1",
        },
        {
          id: "ue1-7",
          name: "Psychologie et sociologie",
          ects: 3,
          quadri: "Q1",
        },

        // Quadri 2
        {
          id: "ue2-1",
          name: "Dimensions sociales et représentations",
          ects: 3,
          quadri: "Q2",
        },
        {
          id: "ue2-2",
          name: "Ergothérapie et éléments d’ergonomie",
          ects: 5,
          quadri: "Q2",
        },
        {
          id: "ue2-3",
          name: "Recherche en ergothérapie (2)",
          ects: 5,
          quadri: "Q2",
        },
        {
          id: "ue2-4",
          name: "Fonctions - Dysfonctions (2)",
          ects: 5,
          quadri: "Q2",
        },
        {
          id: "ue2-5",
          name: "Sciences du vivant (2)",
          ects: 4,
          quadri: "Q2",
        },
        {
          id: "ue2-6",
          name: "Concepts et dimensions de la santé",
          ects: 3,
          quadri: "Q2",
        },

        // Quadri 1 & 2
        {
          id: "ue12-1",
          name: "Activité d’intégration professionnelle (séminaire spécialisé)",
          ects: 4,
          quadri: "Q1,Q2",
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
        {
          id: "aide-mobilite",
          name: "Technologue orthopédique en aide à la mobilité",
        },
        {
          id: "prothesiologie",
          name: "Technologue orthopédique en Prothésiologie",
        },
        {
          id: "chaussure",
          name: "Technologue orthopédique en technologie de la chaussure",
        },
        {
          id: "bandagisterie",
          name: "Technologue orthopédique en bandagisterie et orthésiologie",
        },
        { id: "ergo", name: "Ergothérapeute" },
      ]),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
