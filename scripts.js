document.getElementById('navbarBurger').addEventListener('click', function() {
    var menu = document.getElementById('navbarMenu');
    menu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        gap: 10,
    }).mount();
});


document.querySelectorAll('.collapsible').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        let content = item.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});