var Repo = require('./../js/Repo.js').Repo;

var apiKey = require('./../.env').apiKey;



//Below will be placed variables to be passed into our object.


var getName = function(userName){
	$('#results').html("<h5>" + userName + "</h5>");
}

var getAvatar = function(picture){

	$('#avatar').html("<br>" + "<img class='img-circle' src="+ picture +"/>");

}

var getRepositoryList = function(list, repoUrl){
	$('#reposList').append("<a href="+repoUrl+">"+list+"</a>" + "<br>");

}


//

//When the document is ready instantiate your class:

$(document).ready(function(){

		

	//Below will be our user-logic.

	$('#find').click(function(){
		$('#reposList').empty();
		var name = $('#userName').val();
		$('#userName').val("");
		var newRepo = new Repo(name);
		newRepo.getRepos(getName, getAvatar)
		newRepo.getRepoList(getRepositoryList);
	});
});
