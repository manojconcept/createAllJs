console.log("Linked");

//----------------------------->Creating Element.
let initDiv = document.createElement("div");
let initDiv1 = document.createElement("div");
let likeButton = document.createElement("button");
let disLikeButton = document.createElement("button");
let initIthumbD = document.createElement("i");
let initIthumbU = document.createElement("i");
let initCount = document.createElement("span");
// ---------------------------->adding class.
initDiv.classList.add("container");
likeButton.classList.add("btn","btn-outline-success")
disLikeButton.classList.add("btn","btn-outline-danger");
initIthumbU.classList.add("bi","bi-hand-thumbs-up","fs-2")
initIthumbD.classList.add("bi","bi-hand-thumbs-down","fs-2");
initCount.classList.add("fs-2");
// ----------------------------->attributes
disLikeButton.setAttribute("type","button");
likeButton.setAttribute("type","button");
// ----------------------------->id
disLikeButton.id = "disLikeButton";
initCount.id = "count";
likeButton.id = "likeButton";
// ----------------------------->add_value
// initCount.innerText = 0;
//------------------------------> append
document.body.appendChild(initDiv);
//--------oder
initDiv.appendChild(initDiv1);
initDiv1.append(likeButton,initCount,disLikeButton);
likeButton.appendChild(initIthumbU);
disLikeButton.appendChild(initIthumbD);
//-----------------------------------------------action;
let getElement = (id)=>{
    let getId = document.getElementById(id);
    return getId;
}
let getLikeButton = getElement("likeButton");
let getCount = getElement("count");
let getDisLikeButton = getElement("disLikeButton");

getLikeButton.addEventListener("click",()=>{
    let getCounts = +getCount.innerText;
    getCount.innerText = getCounts + 1;
})

getDisLikeButton.addEventListener("click",()=>{
    let getCounts = +getCount.innerText;
    getCount.innerText = getCounts - 1;
})







 