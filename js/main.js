const captionName = document.createElement('h2');
const year = document.createElement('div');
const description = document.createElement('p');
const source = document.createElement('a');
const artist = document.createElement('h3');
const artistImage = document.createElement('figure');
const thumbnail = document.createElement('figure');
const smallHero = document.createElement('figure');
const largeHero = document.createElement('figure');
const galleryImage = document.createElement('figure');

captionName.className = 'caption-name';
year.className = 'year';
description.className = 'description';
source.className = 'source';
artist.className = 'artist';
artistImage.className = 'artist-image';
thumbnail.className = 'thumbnail';
smallHero.className = 'small-hero';
largeHero.className = 'large-hero';
galleryImage.className = 'gallery-image';

captionName.innerText = `${painting.name}`;
year.innerText = `${painting.year}`;
description.innerText = `${painting.description}`;
source.innerText = `Go to source`;
source.setAttribute("target", "_blank");
source.setAttribute("href", `${painting.source}`)
artist.innerText = `${painting.artist.name}`;
artistImage.innerHTML = `<img src='${painting.artist.image}' alt='${painting.artist.name} portrait' />`;
thumbnail.innerHTML = `<img src='${painting.images.thumbnail}' alt='${painting.name} thumbnail' />`;
smallHero.innerHTML = `<img src='${painting.images.hero.small}' alt='${painting.name} by ${painting.artist.name}' />`
largeHero.innerHTML = `<img src='${painting.images.hero.large}' alt='${painting.name} by ${painting.artist.name}' />`
galleryImage.innerHTML = `<img src='${painting.images.gallery}' alt='${painting.name} by ${painting.artist.name}' />`