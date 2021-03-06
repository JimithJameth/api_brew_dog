var app = function () {
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET",url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  populateList(beers);
}

var populateList = function(beers){
  var ul = document.getElementById("beers");

  beers.forEach(function(beer){
    var li = document.createElement('li');
    var li2 = document.createElement('li');
    var beerImage = document.createElement('img');
    beerImage.src = beer.image_url
    li.appendChild(beerImage);
    li2.innerText = beer.name;
    
    ul.appendChild(li2);
    ul.appendChild(li);
  });
}


window.addEventListener('load', app);
