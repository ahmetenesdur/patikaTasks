let id = localStorage.getItem("id") ? parseInt(localStorage.getItem("id")) : 0
let input = document.getElementById("task")
let list = document.getElementById("list")

//veritabanı
store = localStorage.getItem("store") ? JSON.parse(localStorage.getItem("store")) : []

//veritaban güncelle
function updateDatabase() {
    localStorage.setItem("store", JSON.stringify(store))
    localStorage.setItem("id", id)
}

//dba dan veri al
function getDatabase(id) {
    let data;
    JSON.parse(localStorage.getItem("store")).forEach(value => {
        if (value.id === id) data = value
    })
    return data
}

//veritabanından veri silme
function deleteDataBase(id) {
    store = store.filter(value => value.id != id)
    updateDatabase()

}
//listeye eleman ekleme
function newElement() {
    if (input.value && input.value.toString().trim() !== "") {
        store.push({ value: input.value, id: id, isOk: false })
        id++;
        updateDatabase()
        updateScreen()

        $(document).ready(function () {
            $('.a').toast('show');  
        });
    }
    else {
        $(document).ready(function () {
            $('.b').toast('show');
        });
      
      
    }
    input.value = ""

}


input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        //event.preventDefault();
        document.getElementById("liveToastBtn").click();
    }
});

//database deki elemanları ekrana yazdırema

function updateScreen() {
    list.innerHTML = ""
    store.forEach((value, index) => {
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.classList.add("btn")
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg>`
        li.innerHTML = value.value
        li.append(btn)
        list.append(li)
        if (store[index].isOk) li.classList.add("checked")
        else li.classList.remove("checked")

        btn.addEventListener("click", () => {
            li.remove()
            deleteDataBase(value.id)
        })

        li.addEventListener("click", () => {
            let data =
                store[index].isOk = !getDatabase(value.id).isOk
            li.classList.toggle("checked")
            updateDatabase()
        })
    })
    updateDatabase()
}
updateScreen()