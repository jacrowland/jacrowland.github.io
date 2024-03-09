const displayModal = (id) => { document.getElementById(id).classList.remove('display-none'); };

const hideModal = (id) => {
    document.getElementById(id).classList.add('display-none');
    document.querySelectorAll('video').forEach(video => video.id != "hero-bg-video" ? video.pause() : null);
}

document.getElementById('current-year').innerHTML = new Date().getFullYear();