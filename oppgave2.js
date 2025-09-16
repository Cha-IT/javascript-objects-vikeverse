// Oppgave 2
let filmer = [
  { tittel: "Inception", regissor: "Christopher Nolan", sett: true },
  { tittel: "Interstellar", regissor: "Christopher Nolan", sett: true },
  { tittel: "The Matrix", regissor: "Lana & Lilly Wachowski", sett: true },
  { tittel: "Parasite", regissor: "Bong Joon-ho", sett: true },
  { tittel: "Whiplash", regissor: "Damien Chazelle", sett: true },
  { tittel: "Titanic", regissor: "James Cameron", sett: false },
  { tittel: "Avatar", regissor: "James Cameron", sett: false },
  { tittel: "Frozen", regissor: "Chris Buck & Jennifer Lee", sett: false },
  { tittel: "Joker", regissor: "Todd Phillips", sett: false },
  { tittel: "Fight Club", regissor: "David Fincher", sett: false }
];

// 2b - Skriv tittel og regissør
for (let film of filmer) {
  console.log(`${film.tittel} - regissert av ${film.regissor}`);
}

// 2c - Sorter etter tittel
filmer.sort((a, b) => a.tittel.localeCompare(b.tittel));
console.log("Sorter etter tittel:");
for (let film of filmer) {
  console.log(`${film.tittel} - ${film.regissor}`);
}

// 2d - Legg til tekst om sett eller ikke
for (let film of filmer) {
  let status = film.sett ? "✅ Sett" : "❌ Ikke sett";
  console.log(`${status}: ${film.tittel} (${film.regissor})`);
}
