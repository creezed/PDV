const videoBlock = document.querySelector('.video-section');
const video = document.querySelector('video');
const videoIcon = document.querySelector('.video-section__play-icon');

videoIcon.addEventListener('click', () => {
    video.play();
    videoIcon.classList.add('video-section__play-icon--played');
    video.addEventListener('click', () => {
        video.pause();
        videoIcon.classList.remove('video-section__play-icon--played');
    })
})
