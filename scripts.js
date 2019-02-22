
function displayResults(responseJson) {
    console.log(responseJson);

    for (let i=0; i<responseJson.length; i++) {
        $('.js-github-results').append(
            `<li>${responseJson[i].name}: <a href="${responseJson[i].html_url}" target="_blank">Repo</a></li>`
        )
    }
}





function getRepos(searchTerm) {
    const searchURL = `https://api.github.com/users/${searchTerm}/repos`;
    console.log(searchURL);
    
    fetch(searchURL).then(response => response.json()).then(responseJson => displayResults(responseJson));
}


function watchForm() {
    $('form').on('submit', function(event){
        event.preventDefault();
        const searchTerm = $('#handle').val();
        getRepos(searchTerm);
        console.log(searchTerm);
    })
}

$(watchForm);


