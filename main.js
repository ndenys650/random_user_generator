
// var's to clear up
var url = 'https://randomuser.me/api'
var fullnameDisp = document.querySelector("#fullname")
var avatar = document.querySelector("#avatar")
var username = document.querySelector("#username")
var useremail = document.querySelector("#email")
var city = document.querySelector("#city")
// 

// function for handling error callbacks
function handleErrors(res){
	if(!res.ok){
		throw Error(res.status)
	}
	return res
}

// function for parsing retrived data from API
function parseJSON (res){
	return res.json().then(function(parsedData){
		return parsedData.results[0]
	})
}

// function for updating content on HTML with parsed retreived data
function updateProfile (data){
	var fullname = data.name.first + " " + data.name.last
	fullnameDisp.innerText = fullname
	avatar.src = data.picture.medium
	username.innerText = data.login.username
	useremail.innerText = data.email
	city.innerText = data.location.city
}

// displaying error feedback
function displayErrors (err){
	console.log("Display Errors!")
	console.log(err)
}

// 
var btn = document.querySelector('#btn')
// 
// 
// add event listener for submission button
btn.addEventListener("click", function(){
	// go to api url
	fetch(url)
	// handle errors
	.then(handleErrors)
	// parse returned data into JSON format
	.then(parseJSON)
	// update content based on data recieved
	.then(updateProfile)
	// handle errors
	.catch(displayErrors)
})





