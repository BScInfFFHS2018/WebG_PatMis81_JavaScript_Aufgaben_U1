function checkPangram(inputText) {
    let isPangram = "Kein Pangramm.";
    let letterCount = 0;
    let inputTextLC = inputText.toLowerCase();
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');

    /* Loop through each letter of the abc and check if it is contained in the inputTextLC
       if a letter is found, increment the letter count by 1
     */
    abc.forEach(function(letter) {
        let letterIndex = inputTextLC.indexOf(letter);
        console.log("Letter '" + letter + "' index: " + letterIndex);
        if(letterIndex != -1) {
            letterCount++;
        }
    });

    // Check if all letters (26) are found
    if (letterCount == 26) {
        isPangram = "Voila! Ein Pangramm!";
    }

    return isPangram;
}