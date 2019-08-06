var id= window.location.search.substring(4)
var url = `https://gateway.marvel.com:443/v1/public/characters/${id}`
var publicKey = "cfc8dffa6c6b8ca34753d29d2fad49a9"
var privateKey = "0f31eb1be795ab4dd4bba01479df9ab77a81bf63"
var limit = 30

function renderCharacter (character) {
        var content = document.getElementById("dt_content")
        content.textContent = ""
        // link image, name, comics
        var imgSrc = character.thumbnail.path + "." + character.thumbnail.extension
        
        var name = character.name
        var description = character.description
        
        var comics = character.comics
        var comicsAvailable = comics.available
        var comicsItems = comics.items
        var relatedComics = ""

        var events = character.events
        var eventsAvailable = events.available
        var eventsItems = events.items
        var relatedEvents = ""
        
        var ytlink = `https://www.youtube.com/results?search_query=${name.replace(" ","+")}+marvel`
        var wklink = `https://en.wikipedia.org/wiki/Special:Search?search=${name.replace(" ","+")}+marvel&go=Go&ns0=1`
        var ytref = `<a href="${ytlink}" target="#"><img src="youtube.png" class="logo"></a>`
        var wkref = `<a href="${wklink}" target="#"><img src="wikipedia.png" class="logo"></a>`
        
        if (description == "") {
            description = "No description"
        }
        
        if (comicsAvailable == 0) {
            relatedComics = "No comic"
        }
        else {
            for (i=0;i<Math.min(comicsAvailable,5);i++) {
                relatedComics += `<div class="dt_infos font_size_20">${comicsItems[i].name}</div>`
            }
        }
        

        if (eventsAvailable == 0) {
            relatedEvents = "No events"
        }
        else {
            for (i=0;i<Math.min(eventsAvailable,5);i++) {
                relatedEvents += `<div class="dt_infos font_size_20">${eventsItems[i].name}</div>`
            }
        }

        //HTML, => content
        var characterHTML = `
        <img src="${imgSrc}" id="dt_img">
        <div id="infos">
            <div>
                <h1>${name}</h1>
                <div class="font_size_20">${description}</div>
            </div>
            <div>
                <h3>Related comics</h3>
                <div class="related_infos font_size_20">${relatedComics}</div>
            </div>
            <div>
                <h3>Related events</h3>
                <div class="related_infos font_size_20">${relatedEvents}</div>
            </div>
            <div>
                <h3>References</h3>
                <div id="logos">
                    <div>${ytref}</div> 
                    <div>${wkref}</div>
                </div>
            </div>
        </div>
        `
        content.insertAdjacentHTML("beforeend",characterHTML)
}


function fetchCharacter () {
    //2. Generate key, key + url => full url
    var key = marvelKey(privateKey,publicKey)
    var fullUrl = `${url}?${key}&limit=${limit}`

    //3. Send request, handle response data
    sendGetRequest(fullUrl, function (responseData) {
        var character = responseData.data.results[0]
        renderCharacter(character)
        // console.log(character)
    })
}

fetchCharacter()