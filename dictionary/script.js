const input = document.querySelector('#input')
const output = document.querySelector('#output')
const search = document.querySelector('search');

search.addEventListener('click', async() => {
   const value  = input.value;
    if( value === ""){
    alert("Please enter a word");
    }else {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
        let meaning = await fetch(url);
        meaning = await meaning.json();
        console.log("meaning", meaning[0]['meaning'][0]["definition"])
        output.innerText = meaning[0]['meaning'][0]["definition"];
    }
})