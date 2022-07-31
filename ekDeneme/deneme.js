let dizi = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

const sonuc = dizi.some(function(rakam) {
    return rakam > 5;
});

function myFunction (dizi){
    dizi = sonuc
    if(dizi==true) {
        console.log("Beşten büyük bir eleman mevcut.");
    } else
    console.log("5'ten büyük eleman mevcut değil.");
}

myFunction(dizi);