var NumberOfWords = 40
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://link-to.net/106628/WONDER235"
words[2] = "https://bit.ly/2WTRbww"
words[3] = "https://bit.ly/3e7NU2k"
words[4] = "https://bit.ly/2AVlUAR"
words[5] = "https://bit.ly/2zl5f9d"
words[6] = "https://link-to.net/106628/wonder236"
words[7] = "https://bit.ly/3c0yuM0"
words[8] = "https://bit.ly/36lNjaB"
words[9] = "https://bit.ly/3cPGCjv"
words[10] = "https://bit.ly/2LSbfZU"
words[11] = "https://link-to.net/106628/Wonder237"
words[12] = "https://bit.ly/2XhJhfe"
words[13] = "https://bit.ly/2LSbfZU"
words[14] = "https://bit.ly/3cPGCjv"
words[15] = "https://link-to.net/106628/Wonder238"
words[16] = "https://bit.ly/2ZpSGUM"
words[17] = "https://bit.ly/2XhJhfe"
words[18] = "https://bit.ly/2LSbfZU"
words[19] = "https://bit.ly/2XjvB3x"
words[20] = "https://bit.ly/2ZpSGUM"
words[21] = "https://bit.ly/2XhJhfe"
words[22] = "https://link-to.net/106628/Wonder240"
words[23] = "https://bit.ly/2XjvB3x"
words[24] = "https://bit.ly/2ZpSGUM"
words[25] = "https://link-to.net/106628/Wonder241"
words[26] = "https://bit.ly/3e8QMvL"
words[27] = "https://bit.ly/36sO5mb"
words[28] = "https://bit.ly/2XjvB3x"
words[29] = "https://link-to.net/106628/Wonder242"
words[30] = "https://bit.ly/2TxJgTw"
words[31] = "https://bit.ly/3e8QMvL"
words[32] = "https://bit.ly/36sO5mb"
words[33] = "https://link-to.net/106628/Wonder243"
words[34] = "https://bit.ly/2WSApgZ" 
words[35] = "https://bit.ly/2TxJgTw" 
words[36] = "https://bit.ly/3e8QMvL"
words[37] = "https://link-to.net/106628/Wonder244"
words[38] = "https://bit.ly/3bX8dhk"
words[39] = "https://bit.ly/2WSApgZ"
words[40] = "https://bit.ly/2TxJgTw"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}