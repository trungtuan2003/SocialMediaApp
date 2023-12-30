let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
})

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
    }
    else {
        msg.innerHTML = "";
        acceptData();
    }
}

let data = {};

let acceptData = () => {
    data["text"] = input.value; 
    console.log(data);

    createPost();

}

let createPost = () => {
    
    posts.innerHTML += `    
    <div>
        <p>${data.text}</p>
        
        <span class="options">
            <i class="fa-solid fa-trash-can" onClick="editPost(this)" ></i>
            <i class="fa-solid fa-pen-to-square" onClick="deletePost(this)"></i>
        </span>
    </div>
    `;  
    input.value = "";
}