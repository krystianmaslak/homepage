const firstName = "MR. ROBOT";
const age = 0;

console.log(`Siemano, z tej strony ${firstName} i mam ${age} lata.`);

// Zdefiniowanie funkcji
function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  return myNumber * 7;
}
// Wywołanie funkcji
const myResult = calculate(2);
// Wyświetlenie wyniku
console.log(myResult);

function greetOld(age, firstName) {
  console.log(`Siemano, z tej strony ${firstName} i mam ${age} lat/a.`);
}

greetOld(18, "Tadzio");

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content; // podmiana contentu - zawartości w HTML
}

const ccalculate = (myNumber) => {
  myNumber = myNumber + 3;
  console.log(myNumber);
  return myNumber * 7;
};

ccalculate(2);

const greet = (age, firstName) => {
  console.log(`Siemano, z tej strony ${firstName} i mam ${age} lat/a.`);
};

greet(100, "Karol");

const welcome = (firstName, age) => {
  const heading = document.querySelector(".main__heading--js");

  heading.innerHTML = `Siemano, z tej strony ${firstName} i mam ${age} lat.`;
};
welcome("MR. ROBOT", 100);

// (Fat) arrow functions =>
const calfculate = (myNumber) => myNumber * 7;
console.log(calfculate(7));

const humanOne = {
  name: "Krystian",
  age: 32,
  address: {
    //obiekt
    street: "Unii Brzeskiej",
    city: "Lesko",
  },
};

const humanTwo = {
  name: "Łukasz",
  age: 35,
  address: humanOne.address,
  city: "Stefkowa",
};

humanOne.address.street = "Lipowa";

console.log(humanOne);
console.log(humanTwo);

if ("Java" != "JavaScript") {
  console.log("Java to JavaScript");
}
if (!("JavaScript" == "Java")) {
  //ten kod się wykona
}

const myNumber = 7;

switch (myNumber) {
  case 7:
    console.log("jestem siódemką");
    break;
  case 9:
    console.log("jestem dziewiątką");
    break;
  default:
    console.log("jestem czymś innym");
}

32 > 20 ? console.log("to prawda") : console.log("to nie prawda");

// const buttons = document.querySelector('.action--js');

// const myClick = () => {
//   // console.log('kliknąłęś');
//   const desc = document.querySelector('.main__description--js');
//   desc.innerHTML = "Zaktualizowany opis po wciśnięciu przycika";
//   desc.classList.toggle('class-js');
// };

// buttons.addEventListener('click', myClick);

/*

LUB


button.addEventListener('click', () => {
    const desc = document.querySelector('.main__description--js');
    desc.innerHTML = 'Zaktualizowany opis po wciśnięciu przycika';

 });

 

 */





 const hamburger = document.querySelector('.hamburger--js'); // pobieramy przycisk hamburgera za pomoca queryselectora

 hamburger.addEventListener('click', () => { // do tego hamburgera przypisujemy clicknecie ktore wywola funkcje
     const nav = document.querySelector('.navigation--js'); // funkcja polega na tym ze pobieramy za pomoca queryselectora nawigacje
     nav.classList.toggle('navigation--open'); // zmienamy mu klase na open

 });