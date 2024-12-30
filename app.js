document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons button');
    const monthsDiv = document.getElementById('months');

    const seasonsData = {
        winters: {
            background: 'images/winter.jpg',
            months: 'December, January, February',
        },
        springs: {
            background: 'images/spring.jpg',
            months: 'March, April, May',
        },
        summers: {
            background: "images/summer.jpg",
            months: 'June, July, August',
        },
        autumns: {
            background: 'images/autumn.jpg',
            months: 'September, October, November',
        },
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const season = button.getAttribute('data-season');
            const data = seasonsData[season];

            if (data) {

                document.body.style.backgroundImage = 'url(${data.background})';

                monthsDiv.textContent = data.months;
            }
        });
    });
});