# Merge Sort Projesi

## Proje 2

1. [16,21,11,8,12,22] &rarr; Merge Sort

    - a. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
    - b. Big-O gösterimini yazınız.

## Cevaplar

##### Aşamalar:
1. 
    - [16,21,11,8,12,22] dizi ikiye bölmeliyiz.
    - [16,21,11] ve [8,12,22] tek eleman kalıncaya kadar bölmeye devam ederiz.
    - [16],[21,11] --- [8],[12,22]
    - [16] - [21],[11] --- [8] - [12],[22] birleştirme işlemi yapılır (küçükten büyüğe)
    - [16] - [11,21] --- [8] - [12,22]
    - [11,16,21] --- [8,12,22]
    - [8,11,12,16,21,22]

##### Big O Gösterimi

2. 
    - 2^x = n &rarr; logn 
    - O(nlogn)








