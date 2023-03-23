$(function(){

})

function fizbuz(n){
    if(n === 0){return "";}
    
    let txt = "";
    for (let i = 1; i < n; i++) {
        txt += fizbuzzErtek(i) + ", ";
    }
    txt += fizbuzzErtek(n);
    return txt;
}

function fizbuzzErtek(x){
    let ertek = "";
    if (x % 3 === 0 && x % 5 === 0) {
        ertek = "fizzbuzz";
    } else if (x % 5 === 0){
        ertek = "buzz";
    } else if (x % 3 ===0){
        ertek = "fizz";
    } else{
        ertek = x;
    }
    return ertek;
}