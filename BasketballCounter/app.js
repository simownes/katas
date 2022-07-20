{function Points(twoPointers, threePointers){
    return (twoPointers *2) + (threePointers *3);
}

console.log(Points(5,2))}



function splitOnDoubleLetter(word){
    let preiousLetter = word[0];

    for (let i = 1; i < word.length; i++) {
        if(preiousLetter == word[1]){
            console.log("found the letter " + word[i]);
        }
        preiousLetter = word[i];
    }
}

splitOnDoubleLetter("happy");
