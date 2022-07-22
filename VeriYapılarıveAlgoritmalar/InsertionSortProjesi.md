# Insertion Sort Projesi

## Proje 1

1. [22,27,16,2,18,6] &rarr; Insertion Sort

    - a. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
    - b. Big-O gösterimini yazınız.
    - c. Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
    - d. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

2. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.



## Cevaplar

##### Sort Türüne Göre Aşamalarını:
1. 
- 1.a 
    - [22,27,16,2,18,6] &rarr; (n)
    - [2,27,16,22,18,6] &rarr; (n-1)
    - [2,6,16,22,18,27] &rarr; (n-2)
    - [2,6,16,18,22,27] &rarr; (n-3)

##### Big-O gösterimi:
- 1.b
    - Best Case: O(n)
    - Worst Case: O(n²)
    - Average Case: O(n²) =  = n + (n-1) + (n-2)...+ 1

##### Time Complexity
- 1.c
    - Best case &rarr; [2,6,16,18,22,27]
    - Worst case &rarr; [27,22,16,2,6,18]
    - Averaged case &rarr; [2,27,18,22,16,6]

##### 18 Sayısının Case Durumu
- 1.d
    - Averaged Case

##### Insertion Sort'a göre ilk 4 adımı

2. 
    - [7,3,5,8,2,9,4,15,6]
    - [2|,3,5,8,7,9,4,15,6]
    - [2,3|,5,8,7,9,4,15,6]
    - [2,3,4|,8,7,9,5,15,6]
    - [2,3,4,5|,7,9,8,15,6]








