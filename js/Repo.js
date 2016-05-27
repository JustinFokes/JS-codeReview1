var apiKey = require('./../.env').apiKey;

exports.Repo = function(){
}

exports.Repo.prototype.getRepos = function(name, userName){
	console.log(name);
  $.get('https://api.github.com/users/'+ name +'?access_token=' + apiKey).then(function(response){
    userName(name, response);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};