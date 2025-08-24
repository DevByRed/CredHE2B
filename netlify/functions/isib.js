// netlify/functions/isib.js
import fetch from "node-fetch";
import PDFParser from "pdf2json";

export async function handler() {
  try {
    const pdfUrl =
      "https://he2b.be/wp-content/uploads/2024/09/ISIB-BAPSIE-Programmes-etudes-2024-2025.pdf";

    // Télécharger le PDF
    const pdfRes = await fetch(pdfUrl);
    if (!pdfRes.ok)
      throw new Error(`Erreur téléchargement PDF ${pdfRes.status}`);
    const buffer = Buffer.from(await pdfRes.arrayBuffer());

    // Parser avec pdf2json
    const pdfParser = new PDFParser();

    const text = await new Promise((resolve, reject) => {
      pdfParser.on("pdfParser_dataError", (err) => reject(err.parserError));
      pdfParser.on("pdfParser_dataReady", (pdfData) => {
        const raw = pdfData.Pages.map((page) =>
          page.Texts.map((t) =>
            decodeURIComponent(t.R.map((r) => r.T).join(" "))
          ).join(" ")
        ).join("\n");
        resolve(raw);
      });

      pdfParser.parseBuffer(buffer);
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ raw: text }, null, 2),
      headers: { "Content-Type": "application/json" },
    };
  } catch (err) {
    console.error("Erreur ISIB:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
