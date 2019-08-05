//1. Prepare: URL, Private Key, Public Key, MarvelKey()
var url = "https://gateway.marvel.com:443/v1/public/characters"
var publicKey = "cfc8dffa6c6b8ca34753d29d2fad49a9"
var privateKey = "0f31eb1be795ab4dd4bba01479df9ab77a81bf63"

function renderCharacters (characters) {
    var content = document.getElementById("content")
    content.textContent = "" 
    for (var i=0;i<characters.length;i++) {
        var character = characters[i]
        // link image, name, comics
        var imgSrc = character.thumbnail.path + "." + character.thumbnail.extension
        var name = character.name
        var comicsAvailable = character.comics.available
        
        //HTML, => content
        var characterHTML = `
        <div class="character">
            <img src="${imgSrc}" alt="" class="image">
            <h2 class="name">${name}</h2>
            <h3 class="comics">Comics: ${comicsAvailable}</h3>
        </div>
        `
        content.insertAdjacentHTML("beforeend",characterHTML)
    }
}

function fetchCharacter () {
    //2. Generate key, key + url => full url
    var key = marvelKey(privateKey,publicKey)
    var fullUrl = `${url}?${key}`

    //3. Send request, handle response data
    sendGetRequest(fullUrl, function (responseData) {
        var characters = responseData.data.results
        renderCharacters(characters)
    })
}

function setupEvents () {
    var btnSearch = document.getElementById("btn_search")
    btnSearch.addEventListener("click",function(e) {
        var searchBar = document.getElementById("search_bar")
        var searchString = searchBar.value
        var key = marvelKey(privateKey, publicKey)
        var fullUrl = `${url}?${key}`
        if (searchString != "") {
            fullUrl += `&nameStartsWith=${searchString}`
        }
        sendGetRequest(fullUrl, function(responseData) {
            var characters = responseData.data.results
            renderCharacters(characters)
        })        
    })  
}

function returnDetail() {
    var character_div = document.getElementsByClassName("character")
    console.log(character_div)
    // character_div[0].addEventListener("click",function (e) {
    //     // console.log("clicked")
    //     // open("detail.html","_self")
    //     // return e.target
    //     console.log(e.target)
    // })
}

fetchCharacter()
setupEvents()

var character_divs = document.getElementsByClassName("character")
console.log(character_divs)
console.log(character_divs[0])