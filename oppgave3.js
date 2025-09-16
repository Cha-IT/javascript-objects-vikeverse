// Oppgave 3
let elev = {
  navn: "Ken",
  alder: 69,
  klasse: "2IT",
  skole: "Charlottenlund VGS",

  // 3b - metode som skriver ut keys
  skrivEgenskaper: function () {
    for (let key in this) {
      if (typeof this[key] !== "function") {
        console.log("Egenskap:", key);
      }
    }
  },

  // 3c - egenskaper + verdier
  skrivAlt: function () {
    for (let key in this) {
      if (typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`);
      }
    }
  },

  // 3d - antall egenskaper
  antallEgenskaper: function () {
    return Object.keys(this).length - 3; // trekker fra metodene
  }
};

// 3a - skriv ut alt manuelt
console.log(elev);

// Test metodene
elev.skrivEgenskaper();
elev.skrivAlt();
console.log("Antall egenskaper:", elev.antallEgenskaper());
