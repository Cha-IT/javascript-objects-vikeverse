// Oppgave 4
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { a: 1, b: 2, c: 3 };
let obj3 = { a: 1, b: 2, d: 4 };

// 4a - sjekke om objekter er like
function erLike(o1, o2) {
  let keys1 = Object.keys(o1);
  let keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (o1[key] !== o2[key]) return false;
  }
  return true;
}

console.log("obj1 og obj2 like?", erLike(obj1, obj2));
console.log("obj1 og obj3 like?", erLike(obj1, obj3));

// 4b - returner nytt objekt med like egenskaper
function fellesEgenskaper(o1, o2) {
  let felles = {};
  for (let key in o1) {
    if (o2.hasOwnProperty(key) && o1[key] === o2[key]) {
      felles[key] = o1[key];
    }
  }
  return felles;
}

console.log("Felles for obj1 og obj2:", fellesEgenskaper(obj1, obj2));
console.log("Felles for obj1 og obj3:", fellesEgenskaper(obj1, obj3));
