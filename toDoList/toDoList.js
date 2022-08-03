let listDOM = document.querySelector('#list')
let LocalTask = { id: "", task: "", check: false }
let ArrayTask = []
let i = 0;

if (localStorage.getItem('todo')) {
    ArrayTask = JSON.parse(localStorage.getItem('todo'))
    ArrayTask.forEach(function (element) {
        i++;
        element.id = `id${i}`;
        localStorage.setItem('todo', JSON.stringify(ArrayTask))

        let liDOM = document.createElement(`li`)
        liDOM.setAttribute('id', `id${i}`)
        liDOM.innerHTML =
            `
        ${element.task} 
        <button
        class="close" 
        style="width: 50px; height: 50px; text-align: center;"
        onclick="RemoveFunc(${i})"
        >x
        </button>
        `

        listDOM.append(liDOM)
        if (ArrayTask[i - 1].check) {
            let changeLi = document.querySelector(`#id${i}`)
            changeLi.classList.add("checked")
        }
    });
}

let elem = document.querySelector('#liveToastBtn')
elem.outerHTML = `<button type="submit" onclick="newElement()" id="liveToastBtn" class="button" style ="border-width: 0px">${elem.innerHTML}</button>`;

let userTaskDOM = document.querySelector('#userTask')
userTaskDOM.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()
    const TASK = document.querySelector("#task")

    if (TASK.value.trim() == "") {
        $(".error").toast("show");
    }
    else {
        addItem(TASK.value)
        TASK.value = ""
        $(".success").toast("show");
    }
}

const addItem = (task) => {
    i++;

    LocalTask.task = task;
    LocalTask.id = `id${i}`;
    ArrayTask.push(LocalTask)
    localStorage.setItem('todo', JSON.stringify(ArrayTask))
    ArrayTask = JSON.parse(localStorage.getItem('todo'))

    let liDOM = document.createElement(`li`)
    liDOM.setAttribute('id', `id${i}`)
    liDOM.innerHTML =
        `
    ${task} 
    <button 
    class="close" 
    style="width: 50px; height: 50px; text-align: center;"
    onclick="RemoveFunc(${i})"
    >x
    </button>
    `
    listDOM.append(liDOM)
}

function RemoveFunc(j) {
    const element = document.querySelector(`#id${j}`);

    let index = ArrayTask.findIndex(function (Atask) {
        return JSON.stringify(Atask).indexOf(`id${j}`) >= 0
    });
    ArrayTask.splice(index, 1)
    localStorage.setItem('todo', JSON.stringify(ArrayTask))
    ArrayTask = JSON.parse(localStorage.getItem('todo'))
    element.remove();
}

document.addEventListener('click', (element) => {
    if (element.target.matches('li')) {
        let elementId = element.target.id;
        let index = ArrayTask.findIndex(function (Atask) {
            return JSON.stringify(Atask).indexOf(`${elementId}`) >= 0
        });
        ArrayTask[index].check = !(ArrayTask[index].check)
        localStorage.setItem('todo', JSON.stringify(ArrayTask))
        ArrayTask = JSON.parse(localStorage.getItem('todo'))

        let changeLi = document.querySelector(`#${elementId}`)
        changeLi.classList.toggle("checked")
    }
});