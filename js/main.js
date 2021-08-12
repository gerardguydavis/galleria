const paintings = [];
const slides = [];
const thumbnailGallery = document.getElementById("thumbnail-gallery");
const tabletWidth = window.matchMedia("(min-width: 768px)");
let mobile;
const getPaintings = async function () {
    const res = await fetch("https://gist.githubusercontent.com/gerardguydavis/d088caebf622a2120676e2b6369a2fd5/raw/f134888bb43ce5e08be06ea5e918bc138d389a11/data.json");
    const paintingsData = await res.json();
    for (let painting of paintingsData) {
        paintings.push(painting);
    }
    showPaintings(paintings);
}

function checkWidth(tabletWidth) {
    if (tabletWidth.matches) {
        mobile = false;
    } else {
        mobile = true;
    }
}

function showPaintings(paintings) {
    for (let painting of (paintings)) {
        const slide = document.createElement('div');
        const largeNames = document.createElement('div');
        const smallNames = document.createElement('div');
        const info = document.createElement('div');
        const paintingName = document.createElement('h2');
        const largeName = document.createElement('h1');
        const smallName = document.createElement('h3');
        const year = document.createElement('span');
        const description = document.createElement('p');
        const source = document.createElement('a');
        const viewImage = document.createElement('button');
        const artistName = document.createElement('h5');
        const artistNameLarge = document.createElement('h4');
        const artistNameSmall = document.createElement('h5');
        const artistImage = document.createElement('figure');
        const thumbnail = document.createElement('div');
        const smallHero = document.createElement('figure');
        const largeHero = document.createElement('figure');
        const galleryImage = document.createElement('figure');

        slide.className = 'slide';
        largeNames.className = 'large-names';
        smallNames.className = 'small-names';
        info.className = 'painting-info';
        paintingName.className = 'painting-name';
        largeName.className = 'painting-name-l';
        smallName.className = 'painting-name-s';
        year.className = 'year';
        description.className = 'description';
        source.className = 'source';
        viewImage.className = 'view-image';
        artistName.className = 'artist-name';
        artistNameLarge.className = 'artist-name-l';
        artistNameSmall.className = 'artist-name-s';
        artistImage.className = 'artist-image';
        thumbnail.className = 'thumbnail';
        smallHero.className = 'small-hero';
        largeHero.className = 'large-hero';
        galleryImage.className = 'gallery-image';

        paintingName.innerText = `${painting.name}`;
        largeName.innerText = `${painting.name}`;
        smallName.innerText = `${painting.name}`;
        year.innerText = `${painting.year}`;
        description.innerText = `${painting.description}`;
        source.innerText = `Go to source`;
        source.setAttribute("target", "_blank");
        source.setAttribute("href", `${painting.source}`);
        artistName.innerText = `${painting.artist.name}`;
        artistNameLarge.innerText = `${painting.artist.name}`;
        artistNameSmall.innerText = `${painting.artist.name}`;
        artistImage.innerHTML = `<img src='${painting.artist.image}' alt='${painting.artist.name} portrait' />`;
        thumbnail.style.background = `url(${painting.images.thumbnail})`;
        smallHero.innerHTML = `<img src='${painting.images.hero.small}' alt='${painting.name} by ${painting.artist.name}' />`
        largeHero.innerHTML = `<img src='${painting.images.hero.large}' alt='${painting.name} by ${painting.artist.name}' />`
        galleryImage.innerHTML = `<img src='${painting.images.gallery}' alt='${painting.name} by ${painting.artist.name}' />`

        thumbnail.append(paintingName, artistName);
        thumbnailGallery.append(thumbnail);
        info.append(year, description, source);
        largeNames.append(largeName, artistNameLarge);
        smallNames.append(smallName, artistNameSmall);
        largeHero.append(viewImage);
        smallHero.append(viewImage);
        //checkWidth(tabletWidth);
        slide.append(largeNames, artistImage, info);
        slides.push(slide);
    }
}

getPaintings();
console.log(slides);
document.onresize = checkWidth(tabletWidth);