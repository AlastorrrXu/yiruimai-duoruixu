document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const record = document.getElementById('record');

    record.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            record.classList.add('spinning');
        } else {
            audio.pause();
            record.classList.remove('spinning');
        }
    });
});
