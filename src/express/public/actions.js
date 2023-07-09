const addTextElement = (className, text) => {
    var theElement = document.getElementById(className);
    theElement.replaceChildren();
    var theText = document.createTextNode(text);
    theElement.appendChild(theText);
}

const addDetailElement = (caption, text, rootElement) => {
    var textToAdd = document.createTextNode(text);
    var paragraph = document.createElement("p");
    paragraph.classList.add("actorsDialog");
    var span = document.createElement("span");
    span.innerHTML = `${caption}: `;
    paragraph.appendChild(span);
    paragraph.appendChild(textToAdd);
    var parentElement = document.getElementById(rootElement);
    parentElement.appendChild(paragraph); 
}
 
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
            addTextElement("staticBackdropLabel", obj.title);

            // Body Image
            var theDivCover = document.getElementById("coverMovie");
            theDivCover.replaceChildren();

            var coverImg = document.createElement("img");
            coverImg.setAttribute("src", `images/${obj.coverPicture}`);
            coverImg.setAttribute("alt", `${obj.name}`);

            theDivCover.appendChild(coverImg);

            // Body Show Summary
            // addTextElement("detailsMovie", obj.summary);
            // var parentElement = document.getElementById("detailsMovie");
            // parentElement.replaceChildren();  

            var summaryText = document.createTextNode(obj.summary);
            var summaryParagraph = document.createElement("p");
            summaryParagraph.classList.add("actorsDialog");
            var summarySpan = document.createElement("span");
            summarySpan.innerHTML = "Summary: ";
            summaryParagraph.appendChild(summarySpan);
            summaryParagraph.appendChild(summaryText);
            var parentElement = document.getElementById("detailsMovie");
            parentElement.appendChild(summaryParagraph);  

            // Body Show Actors
            var actorsText = document.createTextNode(obj.actors);
            var actorsParagraph = document.createElement("p");
            actorsParagraph.classList.add("actorsDialog");
            var actorsSpan = document.createElement("span");
            actorsSpan.innerHTML = "Actors: ";
            actorsParagraph.appendChild(actorsSpan);
            actorsParagraph.appendChild(actorsText);
            var parentElement = document.getElementById("detailsMovie");
            parentElement.appendChild(actorsParagraph);  
            
            // Body Show Genre
            var genreText = document.createTextNode(obj.genre);
            var genreParagraph = document.createElement("p");
            genreParagraph.classList.add("actorsDialog");
            var genreSpan = document.createElement("span");
            genreSpan.innerHTML = "Genre: ";
            genreParagraph.appendChild(genreSpan);
            genreParagraph.appendChild(genreText);
            var parentElement = document.getElementById("detailsMovie");
            parentElement.appendChild(genreParagraph);  

            // Show dialog
            var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
            myModal.show();
        })
        .catch((err) => console.error(`Fetch problem: ${err.message}`));
} 