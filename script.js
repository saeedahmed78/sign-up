let users = [];
let pass = [12,13];
function addUser() {
    let user = document.querySelector("#fullName").value;
    users.push(user);
    localStorage.setItem("users", users.join(","));

    let password = document.querySelector("#password").value;
    pass.push(password);
    localStorage.setItem("pass", pass.join(","));

    alert("Sucessfully signup");
		window.location.replace("index2.html");

}

function reloadUsers() {
    if (localStorage.getItem("users") !== null) {
        users = localStorage.getItem("users").split(",");
        pass = localStorage.getItem("pass").split(",");
    
    }


}
reloadUsers();


function login(){

	let fname = document.querySelector("#fname").value;
	let pass = document.querySelector("#pass").value;
	for ( i = 0; i < users.length; i++) {

	if(fname == users[i] && pass == pass[i]){
		console.log("loggedin");
	}else{
		console.log("erorr");

}
	}	
}
