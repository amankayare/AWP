function send() {
    
    let msg = document.getElementById("type").value;
    const clone = document.querySelector(".message").cloneNode(true);

    clone.children[0].textContent = msg;
    document.querySelector(".container").appendChild(clone);
    clone.style.display = "flex";
    
    document.querySelector("#type").value = "";

}

function del(curr) {
    console.log('delete')
    curr.parentElement.remove();
}
var count = 1;

function likes() {
    let ele = document.getElementById('count');
    count++;
    ele.innerHTML = count;
}