const Cinema = function (films) {
  this.films = films;
}

Cinema.prototype.getTitles = function () {
  const title = [];
  this.films.forEach (film => title.push(film.title));
  return title;
}

Cinema.prototype.findFilmByTitle = function (title) {
  return this.films.find(film => film.title === title);
}

// Cinema.prototype.filterFilmsByGenre = function (genre) {
//   return this.films.filter(film => film.genre === genre);
// };

Cinema.prototype.filmForYear = function (year) {
  return this.films.some(film => film.year === year);
}

Cinema.prototype.filmsALength = function (length) {
  return this.films.every(film => film.length > length);
}

Cinema.prototype.totalRunningTime = function () {
    return this.films.reduce((runningTotal, film) => {
      return runningTotal + film.length;
    }, 0);
  }

Cinema.prototype.filterFilmsByProperty = function (propertyType, property) {
  return this.films.filter(film => film[propertyType] === property);
}

module.exports = Cinema;
