const showModalMovie = (value) => {
    console.log(value);

    fetch(`http://localhost:8000/api/movie/${value}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            return response.json();
        }).then((obj) => {
            console.log(obj)

            // Title
            var theTitle = document.getElementById("staticBackdropLabel");
            theTitle.replaceChildren();
            var txtTitle = document.createTextNode(`${obj.title}`);
            theTitle.appendChild(txtTitle);

            // var content = document.createTextNode(`Movie with code: ${obj.coverPicture} `);
            // theDiv.appendChild(content);

            // Body Image
            var theDivCover = document.getElementById("coverMovie");
            theDivCover.replaceChildren();

            var coverImg = document.createElement("img");
            coverImg.setAttribute("src", `images/${obj.coverPicture}`);
            coverImg.setAttribute("alt", `${obj.name}`);

            theDivCover.appendChild(coverImg);

            // Body details
            var theDiv = document.getElementById("detailsMovie");
            theDiv.replaceChildren();
            var txtSummary = document.createTextNode(`${obj.summary}`);
            theDiv.appendChild(txtSummary);

            // Show dialog
            var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
            myModal.show();
        })
        .catch((err) => console.error(`Fetch problem: ${err.message}`));
} 