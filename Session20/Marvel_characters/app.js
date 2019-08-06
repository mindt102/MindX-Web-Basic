//1. Prepare: URL, Private Key, Public Key, MarvelKey()
var url = "https://gateway.marvel.com:443/v1/public/characters"
var publicKey = "cfc8dffa6c6b8ca34753d29d2fad49a9"
var privateKey = "0f31eb1be795ab4dd4bba01479df9ab77a81bf63"
var limit = 30


function openDetail() {
    var character_div = document.getElementsByClassName("character")
    for (i=0;i<character_div.length;i++) {
        var character = character_div[i]
        character.addEventListener("click",function (e) {
            var div_clicked = e.target.parentNode
            var id = div_clicked.id 
            window.open(`detail.html?id=${id}`,"_self")         
        }) 
    }
}

function renderCharacters (characters) {
    var content = document.getElementById("content")
    content.textContent = "" 
    for (var i=0;i<characters.length;i++) {
        var character = characters[i]
        // link image, name, comics
        var imgSrc = character.thumbnail.path + "." + character.thumbnail.extension
        var name = character.name
        var comicsAvailable = character.comics.available
        var id = character.id
        //HTML, => content
        var characterHTML = `
        <div class="character" id=${id}>
            <img src="${imgSrc}" alt="" class="image">
            <h2 class="name">${name}</h2>
            <h3 class="comics">Comics: ${comicsAvailable}</h3>
        </div>
        `
        content.insertAdjacentHTML("beforeend",characterHTML)
    }
    openDetail()
}

function fetchCharacter () {
    //2. Generate key, key + url => full url
    var key = marvelKey(privateKey,publicKey)
    var fullUrl = `${url}?${key}&limit=${limit}`

    //3. Send request, handle response data
    sendGetRequest(fullUrl, function (responseData) {
        var characters = responseData.data.results
        renderCharacters(characters)
    })
}
function search() {
    var content = document.getElementById("content")
    var searchBar = document.getElementById("search_bar")
    var searchString = searchBar.value
    var key = marvelKey(privateKey, publicKey)
    var fullUrl = `${url}?${key}&limit=${limit}`
    var loading_indicator = '<div id="loader_container"><div class="loader"></div></div>'
    content.textContent = ""
    content.insertAdjacentHTML("beforeend",loading_indicator)
    console.log("searching")

    if (searchString != "") {
        fullUrl += `&nameStartsWith=${searchString}`
    }
    sendGetRequest(fullUrl, function(responseData) {
        var characters = responseData.data.results
        renderCharacters(characters)
        if (content.textContent == "") {
            content.textContent = "No result"
        }
    })
}

function setupEvents () {
    var btnSearch = document.getElementById("btn_search")
    var searchBar = document.getElementById("search_bar")
    btnSearch.addEventListener("click",function() {search()})
    searchBar.addEventListener("keypress",function(e){
        if(e.keyCode === 13) {search()}
    })      
}



fetchCharacter()
setupEvents()



