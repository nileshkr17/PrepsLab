const button = document.getElementById('clickable');
button.addEventListener('click', () => {
    const div = document.getElementById('showable');
    const image = document.createElement('img');
    image.src = 'https://picsum.photos/200';
    div.appendChild(image);
});
