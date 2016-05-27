var apiKey = require('./../.env').apiKey;

exports.Repo = function(){
}

exports.Repo.prototype.getRepos = function(name, getUserNameFunction, getAvatarFunction){
	console.log(name);
  $.get('https://api.github.com/users/'+ name +'?access_token=' + apiKey).then(function(response){
    getUserNameFunction(name, response);
    getAvatarFunction(response.avatar_url);
    console.log(response.repos_url);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.Repo.prototype.getRepoList = function(name, getRepoFunction){
 $.get('https://api.github.com/users/'+ name + '/repos?type=all?access_token=' + apiKey).then(function(response){
 	for(var i=0; response.length; i++){
 		getRepoFunction(response[i].full_name, response[i].html_url);
 		}
	});
};
