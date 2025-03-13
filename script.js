document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.toggle('dark-theme');
    });
});