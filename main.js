const displayModal = (id) => { document.getElementById(id).classList.remove('display-none'); };

const hideModal = (id) => {
    document.getElementById(id).classList.add('display-none');
    document.querySelectorAll('video').forEach(video => video.id != "hero-bg-video" ? video.pause() : null);
}

var prevScrollYAmount = 0;
document.addEventListener("scroll", (e) => {
    document.getElementById("navbar").style.top = window.pageYOffset > prevScrollYAmount && window.pageYOffset > window.innerHeight ? "-100px" : "0";
    document.getElementById("navbar").style.opacity = window.pageYOffset > prevScrollYAmount && window.pageYOffset > window.innerHeight ? "0" : "1";
    prevScrollYAmount = window.pageYOffset;
});

document.getElementById('current-year').innerHTML = new Date().getFullYear();