document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.getElementById('main-content');

    // Dummy data (you can replace this with real data)
    const movies = [
        { title: 'Falling for Christmas', img: 'images/movie1.jpg' },
        { title: 'Movie 2', img: 'images/movie2.jpg' },
        { title: 'Movie 3', img: 'images/movie3.jpg' },
        { title: 'Movie 2', img: 'images/movie4.jpg' },
        { title: 'Movie 2', img: 'images/movie5.jpg' },
        { title: 'Movie 2', img: 'images/movie6.jpg' },
        { title: 'Movie 2', img: 'images/movie7.jpg' },
        { title: 'Movie 2', img: 'images/movie8.jpg' },
        { title: 'Movie 2', img: 'images/movie9.jpg' },
        { title: 'Movie 3', img: 'images/movie10.jpg' },
        { title: 'Movie 2', img: 'images/movie11.jpg' },
        { title: 'Movie 2', img: 'images/movie12.jpg' },
        { title: 'Movie 2', img: 'images/movie13.jpg' },
        { title: 'Movie 2', img: 'images/movie14.jpg' },
        { title: 'Movie 2', img: 'images/movie15.jpg' },
        { title: 'Movie 2', img: 'images/movie16.jpg' },
        { title: 'Movie 2', img: 'images/movie17.jpg' },
        { title: 'Movie 2', img: 'images/movie18.jpg' },
        { title: 'Movie 2', img: 'images/movie19.jpg' },
        { title: 'Movie 2', img: 'images/movie20.jpg' },
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
