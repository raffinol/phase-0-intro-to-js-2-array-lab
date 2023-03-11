// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
        cats.push("Ralph");
         //Another way
        //cats.splice(3, 0,"Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
   const copyCat = [...cats, "Broom"];
   return copyCat;
}

function prependCat(){
    const copyCat = ["Arnold", ...cats];
    return copyCat;
 }

 function removeLastCat(){
    const copyCat = cats.slice(0, cats.length - 1);
    return copyCat;
 }

 function removeFirstCat(){
    const copyCat = cats.slice(1);
    return copyCat;
 }