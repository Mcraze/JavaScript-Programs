// Create a function that takes a sentence as input and capitalizes the first letter of each word in the sentence.

function capitalizeWords(sentence) {
    
    const sentenceArray = sentence.trim().toLowerCase().split(" ");

    const capitalArray = sentenceArray.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })

    const finalSentence = capitalArray.join(" ");

    console.log(finalSentence);
}

//For the purpose of user debugging.
capitalizeWords("JavaScript is fun and what a great language i should learn it and get better at it");