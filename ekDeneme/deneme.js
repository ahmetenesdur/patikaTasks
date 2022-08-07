function Insan(isim,yas) {
  this.isim = isim;
  this.yas = yas;
}

const ayse = new Insan("ayşe",22);


ayse.__proto__.enYeniFonksiyon = () => {console.log("Tekrar Merhaba Kodluyoruz!")}
ayse.enYeniFonksiyon();
// Output : "Tekrar Merhaba Kodluyoruz!"
console.log(ayse);
