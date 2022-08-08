const toplama = ({ sayi1, sayi2, ...args }) => {
  let sonuc = sayi1 + sayi2;
  for (let sayi in args){
   sonuc += args[sayi]
   console.log(sayi);
  }
  return sonuc;
 }
 const sayilar = {
  sayi1: 1,
  sayi2: 2,
  sayi3: 3,
  sayi4: 4,
  sayi5: 5
 }

 
  console.log(toplama(sayilar));

  document.getElementById("demo").innerHTML = toplama(sayilar); 