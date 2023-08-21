const editor = document.getElementById("editor");
const findInput = document.getElementById("findInput");

function countWords() {
    const text = editor.value;
    const words = text.trim().split(/\s/);
    alert(`Word Count: ${words.length}`);
}

function findWord() {
    const targetWord = findInput.value;
    const text = editor.value;
    const occurrences = (text.match(new RegExp(targetWord, "g")) || []).length; 
    alert (`Occurrences of '${targetWord}' : ${occurrences}`);
}

function editWord(){
    const targetWord = findInput.value;
    const newWord = prompt("Enter New Word: ");

    if(!editor.value.includes(targetWord)){
        alert (`'${targetWord}' not found in the text`);
        return;
    }

    editor.value = editor.value.replace(new RegExp(targetWord, "g"), newWord);
}

function deleteWord(){
    const targetWord = findInput.value;
    if(!editor.value.includes(targetWord)){
        alert (`'${targetWord}' not found in the text`);
        return;
    }
    editor.value = editor.value.replace(new RegExp(targetWord, "g"), "");
}