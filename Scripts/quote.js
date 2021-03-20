let requestURL = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const res = request.response;
    document.getElementById("quot").innerHTML = res.quotes[0].text;
    document.getElementById("auth").innerHTML = "~ " + res.quotes[0].author;
}