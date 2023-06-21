const showModalMovie = (value) => {
    console.log(value);

    fetch(`http://localhost:8000/api/video/${value}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            return response.json();
        }).then((obj) => console.log(obj))
        .catch((err) => console.error(`Fetch problem: ${err.message}`));
    
    var theDiv = document.getElementById("staticBackdrop-body");
    var content = document.createTextNode(`Movie with code: ${value} `);
    theDiv.appendChild(content);
    
    var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
    myModal.show();
} 