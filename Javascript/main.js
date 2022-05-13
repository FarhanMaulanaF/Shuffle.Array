// fetch("scramble_linefollower.json")
//     .then(response => response.json())
//     .then(data=> 
//         {
//             console.log(data.instansi)
//             document.querySelector("#debug").innerText=data.instansi
//         })

//Masih Belum Bisa Connect ke JSON
let array = ["Alpha 3", "Alpha 1", "Alpha 4"];


function shuffleArray (arrayToShuffle) 
{
    for(let i = arrayToShuffle.length - 1; i > 0; i--)
    {
        let randomPosition = Math.floor(Math.random()*(i+1));
        let temp = arrayToShuffle[i];

        arrayToShuffle[i] = arrayToShuffle[randomPosition];
        arrayToShuffle[randomPosition] = temp;
    }
    return arrayToShuffle;
}

console.log(shuffleArray(array))