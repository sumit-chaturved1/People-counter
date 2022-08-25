let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if(saveEl.textContent=="Previous entries: "){
        saveEl.textContent+=count
    }else{
        let countStr = " - "+count 
        saveEl.textContent += countStr
    }
    
    
    countEl.textContent = 0
    count = 0
}
function reset(){
    count=0
    countEl.textContent=0
    saveEl.textContent="Previous entries: "
}
