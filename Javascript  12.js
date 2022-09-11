


function compute_scrabble_score(word){

let wordDictionary = {'a':1,'b':3,'c':3,'d':2,'e':1,'f':4,'g':2,'h':4,'i':1,'j':8,'k':5,'l':1,'m':3,'n':1,'o':1,'p':3,'q':10,'r':1,'s':1,'t':1,'u':1,'v':4,'w':4,'x':8,'y':4,'z':10}
word = word.toLowerCase()

let wordscore = 0

for (i=0;i<word.length;i++) {
    
    for (const [key,value] of Object.entries(wordDictionary)) {   //looping through dictionary
        if (word[i] == key){
            wordscore += wordDictionary[key]     
    }}
    }

return wordscore

}

 

 
console.log(compute_scrabble_score('apple') == 9)
console.log(compute_scrabble_score('Programming') == 19)
console.log(compute_scrabble_score('ZZDITRI') == 26)
 
