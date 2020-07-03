let currentURL = window.location.href;
const userName = '/?username='; 
let userLogin = '6thSence';
if (currentURL.includes(userName)){
	userLogin = currentURL.substr(currentURL.indexOf('=') + 1);
}

let apiURL = 'https://api.github.com/users/';
let nameId = "userName";
let infoId = "userInfo";
let hrefId = "userPage";
let photoId = "userPhoto";
fetch(apiURL + userLogin)
	.then(response => response.json())
	.then(result => {
	    document.getElementById(nameId).appendChild(document.createTextNode(result.name));
	    document.getElementById(infoId).appendChild(document.createTextNode(result.bio));
	    document.getElementById(hrefId).href = result.html_url;
	    document.getElementById(photoId).src = result.avatar_url;		
	})
	.catch(err =>console.log(err));