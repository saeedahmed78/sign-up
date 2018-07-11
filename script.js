
//  sign-up 

let users = [];
let pass = [];
function addUser() {
    let user = document.querySelector("#fullName").value;
    users.push(user);
    localStorage.setItem("users", users.join(","));

    let password = document.querySelector("#password").value;
    pass.push(password);
    localStorage.setItem("pass", pass.join(","));

    alert("Sucessfully signup");
        window.location.replace("home.html");

}


// local storage

function reloadUsers() {
    if (localStorage.getItem("users") !== null) {
        users = localStorage.getItem("users").split(",");
        pass = localStorage.getItem("pass").split(",");
    
    }


}
reloadUsers();



// login-panle


function login(){

	let fname = document.querySelector("#fname").value;
	let pass = document.querySelector("#pass").value;
    for ( i = 0; i < users.length; i++){
	for ( i = 0; i < pass.length; i++){

	if(fname == users[i] ){
        // if (pass == pass[i]) {
	
    	alert("loggedin");
        window.location.replace("home.html");
// }
        return	
    }else{
		alert("erorr");
        return
}
	}	
}
}



// post

// let timeline = [];

function post(){

    let textarea = document.querySelector("textarea").value;
    // timeline.push(textarea);
    let post = document.querySelector("#posts");
    post.innerHTML += "<div>"+textarea+"</div>";
}