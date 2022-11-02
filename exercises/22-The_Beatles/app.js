function sing(){
    var beatles = " ";
    for( let i = 1; i<= 12; i ++)
    if(i == 5){
         beatles + "whisper words of wisdom, "
    }else if(i == 9){
        beatles + ", there will be an answer, "
    }else{
        beatles + "let it be, "
    }
}


//Your code above ^^^

console.log(sing());