//Add
const div=document.getElementById("add");
div.classList.add("fancy","add","addMetod");

const classNames = div.classList;
document.getElementById("pAdd").innerHTML="Class ekledikten sonra liste: "+ classNames;

//Remove
div.classList.remove("addMetod");
document.getElementById("pRemove").innerHTML="Class sildikten sonra liste: "+ classNames;

//Item
 const firstClassName=div.classList.item(0);
 document.getElementById("pItem").innerHTML= "İlk class: "+ firstClassName;

//Contains
const result=div.classList.contains("add");
document.getElementById("pContainsTrue").innerHTML="'add' class'ını içeriyor mu? "+" --> "+ result;
const result2=div.classList.contains("addMetod");
document.getElementById("pContainsFalse").innerHTML="'addMetod' class'ını içeriyor mu? "+" --> "+ result2;

//Replace
div.classList.replace("add","newClass");
document.getElementById("pReplace").innerHTML=classNames;

//Toggle
const pToggle=document.getElementById("pToggle")
const button=document.getElementById("toggleButton");
button.addEventListener("click",function(){
pToggle.classList.toggle("colorp");
})
//Length
document.getElementById("length").innerHTML="Class names length:"+" "+div.classList.length;

const son = document.getElementById("son")
const AddButton = document.getElementById("AddButton");
AddButton.addEventListener("click",function(){
son.classList.add("aqua","fancy","add","addMetod");
})

const RemoveButton = document.getElementById("RemoveButton");
RemoveButton.addEventListener("click",function(){
son.classList.remove("aqua","crimson");
})

const ReplaceButton = document.getElementById("ReplaceButton");
ReplaceButton.addEventListener("click",function(){
son.classList.replace("aqua","crimson");
})

const ItemButton = document.getElementById("ItemButton");
ItemButton.addEventListener("click",function(){
const firstClass = son.classList.item(0);
alert(firstClass);
})

const ContainsButton = document.getElementById("ContainsButton");
ContainsButton.addEventListener("click",function(){
const result = son.classList.contains("classList");
alert(result);
})