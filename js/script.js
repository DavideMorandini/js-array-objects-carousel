// Creo/dichiaro un array di oggetti
let images = [
    {
        image: "./img/01.webp",
    }, 
    {
        image: "./img/02.webp",
    }, 
    {
        image: "./img/03.webp",
    }, 
    {
        image: "./img/04.webp",
    }, 
    {
        image: "./img/05.webp",
    }
];

// Aggancio/seleziono gli elementi HTML presenti nel documento HTML
let mainContainerEl = document.getElementById("main-container");
let imgContainerEl = document.getElementById("img-container");
let playerContainerEl = document.getElementById("player-container");
let descriptionContainerEl = document.getElementById("description");
let upArrowEl = document.getElementById("up-arrow");
let downArrowEl = document.getElementById("down-arrow");

    // per ciascuno assegno i valori al contenitore dell'immagine
    images.forEach((element, i) => {
        let activeImage = document.createElement("img");

        activeImage.src = element.image;

        imgContainerEl.append(activeImage);

        activeImage.classList.add("imgBig");
   }) 

    // per ciascuno assegno le piccole immagini a lato
    images.forEach((smallImage) => {
        let activeImageSmall = document.createElement("img");

        let activeSmallContainer = document.createElement("div");

        activeSmallContainer.append(activeImageSmall);

        activeImageSmall.src = smallImage.image;

        playerContainerEl.append(activeImageSmall);
        
        activeImageSmall.classList.add("imgSmall");
   }) 

   let activeImageIndex = 0;
    upArrowEl.addEventListener("click", function() {
       activeImageIndex--;

       if (activeImageIndex < 0) {
            activeImageIndex = images.length - 1;
       }

       imgContainerEl.querySelector(".imgBig").src = images[activeImageIndex].image;

       descriptionContainerEl.querySelector("h2").textContent = images[activeImageIndex].title;

       descriptionContainerEl.querySelector("p").textContent = images[activeImageIndex].text;
    });

    downArrowEl.addEventListener("click", function() {
        activeImageIndex++;

        if (activeImageIndex >= images.length) {
          activeImageIndex = 0;
        }

        imgContainerEl.querySelector(".imgBig").src = images[activeImageIndex].image;

        descriptionContainerEl.querySelector("h2").textContent = images[activeImageIndex].title;
        
        descriptionContainerEl.querySelector("p").textContent = images[activeImageIndex].text;
    });

 



