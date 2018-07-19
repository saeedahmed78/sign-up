
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


	if (user == "" || password == "") {
		alert("please attempt all ");
	}   else{
		alert("sucessfull logged in")
		window.location.replace("html/home.html");

	}
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
	let password = document.querySelector("#pass").value;
	for ( i = 0; i < users.length; i++){
	   for ( i = 0; i < pass.length; i++){

		   if(fname == users[i] && password == pass ){
		
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




// logout


function chackLogIn(){
	// localStorage.removeItem("currentUser");
	window.location.replace("../index.html")
}

// post



function post(){

	let textarea = document.querySelector("textarea").value;
	let post = document.querySelector("#posts");
	post.innerHTML += "<div>" + textarea + "<br>"+ "<hr>"  +"<i class='far fa-heart' onclick='like()'>" + "</i>" + "</div>" ;

	// document.querySelector(".para").style.display = "block"
}

let count = 0;
function like(){
	count++;
	
	let likes = document.querySelector(".far");
	likes.innerHTML = count;

}

