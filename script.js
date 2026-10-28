const morseCodeMap = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.', 
    'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---', 
    'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---', 
    'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-', 
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--', 
    'Z': '--..',  '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', 
    '0': '-----', ' ': '/'
};
function textToMorse(text) {
    return text
        .toUpperCase() 
        .split('') 
        .map(char => morseCodeMap[char] || '') // Convert to Morse (ignore unknown characters)
        .join(' '); // Separate each Morse letter with a space for readability
}

const translateButton = document.getElementById('translateButton');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

translateButton.addEventListener('click', function() {
    const morseOutput = textToMorse(inputText.value);
    outputText.textContent = morseOutput;
});
