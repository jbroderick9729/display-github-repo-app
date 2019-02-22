






function getRepos(searchTerm) {
    const searchURL = `https://api.github.com/users/${searchTerm}/repos`;
    console.log(searchURL);
    fetch
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


