const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const f1 = prompt("Один из последних просмотренных фильмов?", ''),
      r1 = prompt("На сколько оцените его?", ''),
      f2 = prompt("Один из последних просмотренных фильмов?", ''),
      r2 = prompt("На сколько оцените его?", '');

personalMovieDB.movies[f1] = r1;
personalMovieDB.movies[f2] = r2;

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);



