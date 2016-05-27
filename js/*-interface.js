var Repo = require('./../js/Repo.js').Repo;

var apiKey = require('./../.env').apiKey;

//Below will be placed variables to be passed into our object.

var getName = function(userName){
	$('#results').append(userName);
}


//

//When the document is ready instantiate your class:

$(document).ready(function(){

var newRepo = new Repo();


	//Below will be our user-logic.

	$('#find').click(function(){
	var name = $('#userName').val();
	newRepo.getRepos(name, getName);
	});
});