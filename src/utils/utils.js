const filterFilms = (moviesList, value) => {
    return moviesList.filter((item) => {
        const strRu = String(item.nameRU).toLowerCase();
        const strEn = String(item.nameEN).toLowerCase();
        const filmSearchQueryStr = value.toLowerCase().trim();
        return (strRu.indexOf(filmSearchQueryStr) !== -1 || strEn.indexOf(filmSearchQueryStr) !== -1);
    });
}

export default  filterFilms;
