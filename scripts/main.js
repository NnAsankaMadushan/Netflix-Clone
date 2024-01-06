document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.getElementById('main-content');

    // Dummy data (you can replace this with real data)
    const movies = [
        { title: 'Falling for Christmas', img: 'images/movie1.jpg' },
        { title: 'May December', img: 'images/movie2.jpg' },
        { title: 'Koreon', img: 'images/movie3.jpg' },
        { title: 'Love at First Sight', img: 'images/movie4.jpg' },
        { title: 'Paradise', img: 'images/movie5.jpg' },
        { title: 'A Perfect Pairing', img: 'images/movie6.jpg' },
        { title: 'Jamal', img: 'images/movie7.jpg' },
        { title: 'Troll', img: 'images/movie8.jpg' },
        { title: 'The Gray Man', img: 'images/movie9.jpg' },
        { title: 'Pain Hustlers', img: 'images/movie10.jpg' },
        { title: 'Purple Hearts', img: 'images/movie11.jpg' },
        { title: 'Bird Box', img: 'images/movie13.jpg' },
        { title: 'Along for the Ride', img: 'images/movie14.jpg' },
        { title: 'The 8th Night', img: 'images/movie15.jpg' },
        { title: 'Talk to Me', img: 'images/movie16.jpg' },
        { title: 'Bright', img: 'images/movie17.jpg' },
        { title: 'The Weekend Away', img: 'images/movie18.jpg' },
        { title: 'AKA', img: 'images/movie19.jpg' },
        { title: 'Silent House', img: 'images/movie20.jpg' },
        // Add more movies as needed
    ];

    // Populate main content with movie cards
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;
        mainContent.appendChild(movieCard);
    });
});
