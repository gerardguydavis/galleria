const paintings = [];
const galleryBody = document.getElementById("gallery-body");
const getPaintings = async function () {
    const res = await fetch("https://gist.githubusercontent.com/gerardguydavis/d088caebf622a2120676e2b6369a2fd5/raw/f134888bb43ce5e08be06ea5e918bc138d389a11/data.json");
    const paintingsData = await res.json();
    for (let painting of paintingsData) {
        paintings.push(painting);
    }
    console.log(paintings)
    showPaintings(paintings);
}

const showPaintings = function (paintings) {
    for (let painting of (paintings)) {
        const paintingName = document.createElement('h2');
        const year = document.createElement('div');
        const description = document.createElement('p');
        const source = document.createElement('a');
        const artist = document.createElement('h3');
        const artistImage = document.createElement('figure');
        const thumbnail = document.createElement('div');
        const smallHero = document.createElement('figure');
        const largeHero = document.createElement('figure');
        const galleryImage = document.createElement('figure');

        paintingName.className = 'painting-name';
        year.className = 'year';
        description.className = 'description';
        source.className = 'source';
        artist.className = 'artist';
        artistImage.className = 'artist-image';
        thumbnail.className = 'thumbnail';
        smallHero.className = 'small-hero';
        largeHero.className = 'large-hero';
        galleryImage.className = 'gallery-image';

        paintingName.innerText = `${painting.name}`;
        year.innerText = `${painting.year}`;
        description.innerText = `${painting.description}`;
        source.innerText = `Go to source`;
        source.setAttribute("target", "_blank");
        source.setAttribute("href", `${painting.source}`);
        artist.innerText = `${painting.artist && painting.artist.name}`;
        artistImage.innerHTML = `<img src='${painting.artist && painting.artist.image}' alt='${painting.artist && painting.artist.name} portrait' />`;
        thumbnail.style.background = `url(${painting.images && painting.images.thumbnail})`;
        smallHero.innerHTML = `<img src='${painting.images && painting.images.hero && painting.images.hero.small}' alt='${painting.name} by ${painting.artist && painting.artist.name}' />`
        largeHero.innerHTML = `<img src='${painting.images && painting.images.hero && painting.images.hero.large}' alt='${painting.name} by ${painting.artist && painting.artist.name}' />`
        galleryImage.innerHTML = `<img src='${painting.images && painting.images.gallery}' alt='${painting.name} by ${painting.artist && painting.artist.name}' />`

        thumbnail.append(paintingName, artist);
        galleryBody.append(thumbnail);
    }
}

getPaintings();