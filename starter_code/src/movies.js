/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let newList = movies.map((movies) => movies);
    return newList.sort(function (a, b) {
        if (a.year - b.year == 0) {
            if (a.title > b.title) return 1;
            if (a.title == b.title) return 0;
            if (a.title < b.title) return -1;
        }
        else {
            return a.year - b.year;
        };
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    let newList = movies.filter(function (movies) {
        return movies.director === 'Steven Spielberg';
    });
    return newList.filter(function (movies) {
        return movies.genre.includes('Drama');
    }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let newlist = movies.map(function (movies) {
        return movies.title;
    });
    let sort = newlist.sort();
    return newlist.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }

    
    let newlist = movies.map(function (movie) {
        return movie.rate  ? movie.rate : 0; 
    });
    let numtol = newlist.length;
    newlist.filter(function (num) {
        return (num !== undefined)
    })
    let numall = newlist.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    })

    return Math.round((numall / numtol) * 100) / 100;
    // return (numall / numtol).toFixed(2);
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let newlist = movies.filter(function (movies) {
        return movies.genre.includes('Drama')
    });
    if (newlist.length === 0) {
        return 0;
    }
    let dramaRate = newlist.map(function (movies) {
        return movies.rate;
    });

    dramaRate.filter(function (num) {
        return (num !== undefined)
    })
    let numtol = dramaRate.length;
    let numall = dramaRate.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    })

    return Math.round((numall / numtol) * 100) / 100;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

    let newList = movies.map((eachMovie) => {
      let strDuration = eachMovie.duration
      let min = 0;
      let hour = 0;
    
      if (strDuration.indexOf("min") >= 0 && strDuration.indexOf("h") >= 0){
          hour = strDuration.substring(0,strDuration.indexOf("h"));
          min = strDuration.substring(strDuration.indexOf(" ")+1,strDuration.indexOf("m"))
      }
      else if (strDuration.indexOf("min") >= 0){
        min = strDuration.substring(0,strDuration.indexOf("m"))
      }
      else if (strDuration.indexOf("h") >= 0){
        hour = strDuration.substring(0,strDuration.indexOf("h"));
      }
      hour = Number(hour) * 60;
      let finalT = Number(min) + hour;
    
    
      return {
        title: eachMovie.title ,
          year: eachMovie.year,
          director: eachMovie.director,
          duration: finalT,
          genre: eachMovie.genre,
          rate: eachMovie.rate
      }
    
    
    })
    
    return newList
    
    }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
