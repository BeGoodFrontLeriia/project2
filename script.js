const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: number0fFilms,
    movies: {
    },
    actor: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмов?', ''),
        b = prompt('На сколько вы его оцениваете?', ''),
        c = prompt('Один из последних фильмов?', ''),
        d = prompt('На сколько вы его оцениваете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);