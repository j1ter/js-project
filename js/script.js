const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null ||isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const f1 = prompt("Один из последних просмотренных фильмов?", '').trim(),
                  r1 = prompt("На сколько оцените его?", '');
            
            if (f1 != null && r1 != null && f1 != '' && r1 != '' && f1.length < 50) {
                personalMovieDB.movies[f1] = r1;
                console.log("Done");
            } else {
                console.log("Error");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов!");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Error");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i <= 3; i++) {
        //     // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //     // if (genre === '' || genre === null) {
        //     //     console.log('Вы ввели некоректные данные или не ввели их вовсе');
        //     //     i--;
        //     // } else {
        //     //     personalMovieDB.genres[i - 1] = genre;
        //     // }

        // }
        for (let i = 1; i < 2; i++) {
            let genres = prompt('Введите ваши любимые жанры через запятую');

            if (genres === '' || genres === null) {
                console.log('Вы ввели некоректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }

        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
}



