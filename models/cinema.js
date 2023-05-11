const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titleOfFilms = function (){
   const titles = this.films.map(film => film.title )
   return titles
}

Cinema.prototype.findFilmByTitle = function (title) {
  const foundfilm = this.films.find(film => film.title === title )
  return foundfilm 
}

Cinema.prototype.findFilmsByGenre = function (genre) {
  const foundgenre = this.films.filter(film => film.genre === genre)
  return foundgenre
}

Cinema.prototype.totalTimeOfFilms = function () {
  const totaltime = this.films.reduce((accumulator, this.length) => accumulator + this.length)
}

module.exports = Cinema;
