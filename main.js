
document.querySelector('#searchButton').addEventListener('click', getWordFromInput)

function getWordFromInput(){
    let word = document.querySelector('#inputWord').value.toLowerCase()
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#putTheSearchedWord').innerText = data[0].word.toUpperCase()
        
        for(let i = 0; i < data[0].phonetics.length; i++ ){
            if(data[0].phonetics[i]){
                document.querySelector('#putPronunciation').innerText = data[0].phonetics[i].text
                break;
            }
        }

        document.querySelector('#putTheDefinitionOfTheWord').innerText =data[0].meanings[0].definitions[0].definition

        document.querySelector('#putTheExampleInUse').innerText = data[0].meanings[0].synonyms[0]

    })
    .catch(err => {
        console.log(`Error ${err}`)
    })
}