var Repo = require('./../js/Repo.js').Repo;

var apiKey = require('./../.env').apiKey;



//Below will be placed variables to be passed into our object.



var getName = function(userName){
	$('#results').append("<h5>" + userName + "</h5>");
}

var getAvatar = function(picture){

	$('#avatar').append("<br>" + "<img class='img-circle' src="+ picture +"/>");
	
	$('avatar').resize(function(){
	myImg = document.getElementById('avatar');
	myImg.style.height = "100px";
	myImg.style.width = "100px";
	})
}

var getRepositoryList = function(list){
	for(var i = 0; i<list.length; i++){
		$('reposList').append(i);
	}
}



//

//When the document is ready instantiate your class:

$(document).ready(function(){

var newRepo = new Repo();


	//Below will be our user-logic.

	$('#find').click(function(){
	var name = $('#userName').val();
	newRepo.getRepos(name, getName, getAvatar, getRepositoryList);
	});
});