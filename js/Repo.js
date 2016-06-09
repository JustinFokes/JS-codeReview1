var apiKey = require('./../.env').apiKey;

exports.Repo = function(name){
	this.userName = name;
}

exports.Repo.prototype.getRepos = function(getUserNameFunction, getAvatarFunction){
	var userName = this.userName;
  $.get('https://api.github.com/users/'+ userName +'?access_token=' + apiKey).then(function(response){
    getUserNameFunction(userName);
    getAvatarFunction(response.avatar_url);
    console.log(response.repos_url);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.Repo.prototype.getRepoList = function(getRepoFunction){
  var userName = this.userName;
  $.get('https://api.github.com/users/'+ userName + '/repos?type=all?access_token=' + apiKey).then(function(response){
 	  for(var i=0; response.length; i++){
 		  getRepoFunction(response[i].full_name, response[i].html_url);
 		}
	});
};
