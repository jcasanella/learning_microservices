const showModalMovie = (value) => {
    console.log(value);

    var theDiv = document.getElementById("staticBackdrop-body");
    theDiv.replaceChildren();

    fetch(`http://localhost:8000/api/movie/${value}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            return response.json();
        }).then((obj) => {
            console.log(obj)
            // var content = document.createTextNode(`Movie with code: ${obj.coverPicture} `);
            // theDiv.appendChild(content);

            var coverImg = document.createElement("img");
            coverImg.setAttribute("src", `images/${obj.coverPicture}`);
            coverImg.setAttribute("alt", `${obj.name}`);

            theDiv.appendChild(coverImg);
        })
        .catch((err) => console.error(`Fetch problem: ${err.message}`));
        
    var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
    myModal.show();
} 