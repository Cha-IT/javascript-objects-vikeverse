// Oppgave 1
let programfag = {
  navn: "Informasjonsteknologi",
  timetall: 5,
  elevantall: 20,
  likerFaget: false,
  sprak: ["HTML", "CSS"]
};

// 1a - Legg til JavaScript
programfag.sprak.push("JavaScript");

// 1b - Juster elevantall
programfag.elevantall = 15;

// 1c - Sett likerFaget til true
programfag.likerFaget = true;

// 1d - Fjern timetall
delete programfag.timetall;

// 1e - Skriv ut alle språk
for (let s of programfag.sprak) {
  console.log("Språk:", s);
}

// 1f - Skriv ut alle egenskapene (keys)
for (let key in programfag) {
  console.log("Egenskap:", key);
}

// 1g - Skriv ut alle verdiene
for (let key in programfag) {
  console.log("Verdi:", programfag[key]);
}
