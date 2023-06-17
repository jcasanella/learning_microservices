const showModalMovie = (value) => {
    console.log(value);
    
    var theDiv = document.getElementById("staticBackdrop-body");
    var content = document.createTextNode(`Movie with code: ${value} `);
    theDiv.appendChild(content);
    
    var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
    myModal.show();
} 