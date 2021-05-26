let inputEl = document.querySelectorAll("input");
inputEl.forEach((node) => (node.onchange = movieSearch));


async function movieSearch(event) {
  const OMDB_API = `http://www.omdbapi.com/?s=${event.srcElement.value}&apikey=8bf835a0`;


    await fetch(OMDB_API)
    .then((response) => response.json())
    .then((data) => {
        const movies = data.Search;
        movies.forEach((movie) => 
        document.getElementById("Search").innerHTML = movies.Poster);

      //const moviesGrid = document.getElementById("grid");
      //tableContainer.innerHTML = table.genTable();
  
} )
}