var apiKey = require('./../.env').apiKey;

exports.Repo = function(){
}

exports.Repo.prototype.getRepos = function(name, getUserNameFunction, getAvatarFunction, getRepoListFunction){
	console.log(name);
  $.get('https://api.github.com/users/'+ name +'?access_token=' + apiKey).then(function(response){
    getUserNameFunction(name, response);
    getAvatarFunction(response.avatar_url);
    getRepoListFunction(response.repos_url);
    console.log(response.repos_url);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};