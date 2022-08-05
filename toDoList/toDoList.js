let listDOM = document.querySelector("#list") // eklenecek yeri seçme
let storage = {id:"", task:"", check: false} // localstorage için object
let arrStorage = [] //localstorage için array
let i = 0 // id ataması

// LocalStorage 
if(localStorage.getItem("todo")) { // eğer localstorage varsa göster
    arrStorage = JSON.parse(localStorage.getItem('todo')) // arraye localstorage object bilgilerini aktarmak

    arrStorage.forEach(function (element) {
        i++;

        element.id = `id${i}`; // storage id verme
        localStorage.setItem("todo", JSON.stringify(arrStorage)) // storage object ekleme
        let liDOM = document.createElement(`li`) // list element oluşturma
        liDOM.setAttribute("id",`id${i}`) // list id verme
        liDOM.innerHTML = `
        ${element.task}
        <button
        class="close" 
        style="width: 50px; height: 50px; text-align: center; font-size: 20px;"
        onclick="RemoveFunc(${i})"
        >x
        </button>
        `
        listDOM.append(liDOM) // oluşturulan list i ul un altına ekleme
        if(arrStorage[i-1].check) {
            let checkLi = document.querySelector(`#id${i}`) // son list seçme
            checkLi.classList.add("checked") // list checked clası ekleme
        }
    }); // localstorage deki bilgiyi list e aktarmak 
}

// input daki bilgiye uluşmak
let addTaskDOM = document.querySelector("#addTask")
addTaskDOM.addEventListener("submit", formHandler)

// input işlemleri
function formHandler(event) {
    event.preventDefault() // sayfa refresh engeller
    const input = document.querySelector("#task") // input u seçme

    if(input.value.trim() == "") { // error toast göster
        $(".error").toast("show") 
    } else {
        addItem(input.value) //foncsiyonu çalıştırır
        input.value = ""
        $(".success").toast("show")
    }
}

// bilgi ekleme 
function addItem(part) {
    i++;

    storage.task = part //object e bilgi yolla
    storage.id = `id${i}` // object id yolla
    arrStorage.push(storage) // localstorage e object deki bilgileri yolla
    localStorage.setItem("todo", JSON.stringify(arrStorage))
    arrStorage = JSON.parse(localStorage.getItem("todo"))

    let liDOM = document.createElement("li") // list element oluşturma
    liDOM.setAttribute("id",`id${i}`) // list id verme
    liDOM.innerHTML = `
    ${task.value}
    <button
    class="close" 
    style="width: 50px; height: 50px; text-align: center; font-size: 20px;"
    onclick="RemoveFunc(${i})"
    >x
    </button>
    `
    listDOM.append(liDOM) // oluşturulan list i ul un altına ekleme
}

// silme fonksiyonu
function RemoveFunc(j) {
    const element = document.querySelector(`#id${j}`) // silinecek list seçme
    let index = arrStorage.findIndex(function (find) {
        return JSON.stringify(find).indexOf(`id${j}`) >= 0
    }) // silenecek elemanın index i
    arrStorage.splice(index,1) // localstorage içinden silme
    localStorage.setItem("todo", JSON.stringify(arrStorage)) // yeniden set etme
    arrStorage = JSON.parse(localStorage.getItem("todo"))
    element.remove() // list silme
}

// checked işlemi
document.addEventListener("click", (element) => {
    if(element.target.matches('li')) { // list mi kontrol et
        let elementId = element.target.id // id ye öğren
        let index = arrStorage.findIndex(function(find) {
            return JSON.stringify(find).indexOf(`${elementId}`) >= 0
        }) // localstorage deki index e ulaşma
        arrStorage[index].check = !(arrStorage[index].check) // localstorage deki check bilgisini değiştirme
        localStorage.setItem("todo", JSON.stringify(arrStorage)) // tekrar set etme
        arrStorage = JSON.parse(localStorage.getItem("todo"))
        let checkLi = document.querySelector(`#${elementId}`)
        checkLi.classList.toggle("checked")
    }
})