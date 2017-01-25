// exercise 8.7  Strings

var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.",
    animal = "Zielone słonie".toUpperCase();

text = text.replace("Papugi", animal);
console.log(text.substr(0, text.length/2));
