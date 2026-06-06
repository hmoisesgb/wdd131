const mainNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');


hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Quetzaltenango Guatemala",
    location: "Quetzaltenango, Guatemala",
    dedicated: "2011, December, 11",
    area: 21085,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quetzaltenango-guatemala/800x500/quetzaltenango-guatemala-temple-art-lds-640706-wallpaper.jpg"
  },
  {
    templeName: "Guatemala City Guatemala",
    location: "Guatemala City, Guatemala",
    dedicated: "1984, December, 144",
    area: 11610,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/800x1280/guatemala-lds-temple-82739-wallpaper.jpg"
  },
  {
    templeName: "Coban Guatemala",
    location: "Coban, Alta Verapaz, Guatemala",
    dedicated: "2024, June, 9",
    area: 8772,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/4b129a33b4b311ee9c99eeeeac1e820ae5a7a3bb/full/500%2C/0/default"
  }
];

const templeGridContainer = document.querySelector('.temple-grid-container');

function displayTempleCards(temples){
    templeGridContainer.innerHTML = "";

    temples.forEach(temple => {
       const figure = document.createElement("figure");
       const img = document.createElement("img");
       img.src = temple.imageUrl;
       img.alt = temple.templeName;
       img.loading = "lazy";

       const figcaption = document.createElement("figcaption");
       figcaption.innerHTML=`
            <h2>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area.toLocaleString()} sq ft</p>
       `;

       figure.append(img,figcaption);
       templeGridContainer.appendChild(figure);
    });
}

//First display
displayTempleCards(temples);

// Filters

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const title = document.getElementById("title");

homeLink.addEventListener("click", () => {
    title.innerHTML = "Home"
    displayTempleCards(temples);
});

oldLink.addEventListener("click", () => {
    title.innerHTML = "Old"
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    displayTempleCards(oldTemples);
});

newLink.addEventListener("click", () => {
    title.innerHTML = "New"
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    displayTempleCards(newTemples);
});

largeLink.addEventListener("click", () => {
    title.innerHTML = "Large"
    const largeTemples = temples.filter(temple => {
        return temple.area > 90000;
    });
    displayTempleCards(largeTemples);
});

smallLink.addEventListener("click", () => {
    title.innerHTML = "Small"
    const smallTemples = temples.filter(temple => {
        return temple.area < 10000;
    });
    displayTempleCards(smallTemples);
});

