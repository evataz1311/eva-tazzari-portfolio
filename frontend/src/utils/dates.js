// Parse "DD/MM/YYYY" -> Date, oppure ISO/US come fallback
export function parseDate(input) {
  if (!input) return null;

  // accetta anche " 05/11/2023 " ecc.
  const s = String(input).trim();

  // DD/MM/YYYY
  const m = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/.exec(s);
  if (m) {
    const [_, dd, mm, yyyy] = m;
    // mesi 0-based in JS
    return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  }

  // fallback: prova a lasciare fare al parser di JS (ISO ecc.)
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}

// Rende "DD/MM/YYYY" per IT/EN (restiamo europei anche in EN)
export function formatDateEU(input) {
  const d = parseDate(input);
  if (!d) return String(input ?? "");
  // stampa sempre 2 cifre per giorno/mese
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}
