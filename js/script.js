const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


for (let i = 0; i < 2; i++) {
    const f1 = prompt("Один из последних просмотренных фильмов?", ''),
          r1 = prompt("На сколько оцените его?", '');
    
    if (f1 != null && r1 != null && f1 != '' && r1 != '' && f1.length < 50) {
        personalMovieDB.movies[f1] = r1;
        console.log("Done");
    } else {
        console.log("Error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Error");
}

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);



