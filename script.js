function searchMovies() {
    value = document.getElementById("searchInput").value;
    result2 = document.getElementById("result2");
    console.log(value);
    try {
        if (value != "") {
            fetch(`https://omdbapi.com/?apikey=3b4b46fe&t=${value}`)
                .then(data => data.json())
                .then(data => {
                    result2.innerHTML = `<h3>Movie Name :${data.Title}</h3>
                    <p>Release Year: ${data.Year}</p>
                    <p>Director: ${data.Director}</p>
                    <p>Writer: ${data.Writer}</p>
                    <p>Story line: ${data.Plot}</p>`
                    result2.style.display="block"
                }
                )


        } else {
            alert("enter a movie name please")
        }
    } catch (error) {
        console.log(" the error is " + error);

    }
}