//NUMBER VERİ TİPLERİ


var x= 1453;

// alert(x.toString(2));
// alert(x.toString(4));
// alert(x.toString(8));
// alert(x.toString(16));
console.log(x.toString(2));

//nan

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(typeof(NaN));

var x = 100 / "Yusuf";
  console.log(isNaN(x));


console.log(100*"ahmet");//NaN

console.log(isNaN(100*"ahmet")); //True
console.log(isNaN(100*5)); //False


console.log( 123456..toString(36) ); // 2n9c

console.log(Number.MAX_VALUE);

var xSayisi = 1453;
console.log(xSayisi.toString());
console.log((1453).toString());
console.log(typeof(xSayisi)); //number
console.log(typeof(xSayisi.toString()));//string


let age = Number("Bir sayı yerine herhangi bir yazı");

alert(age); // NaN, dönüştüremedi!


