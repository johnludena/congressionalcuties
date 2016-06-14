// https://congress.api.sunlightfoundation.com/legislators?apikey=797de9d5e36943dc8c711434e521c82b

// Getting APIs
var congressionalApi = $.getJSON("https://congress.api.sunlightfoundation.com/legislators?apikey=797de9d5e36943dc8c711434e521c82b")


// Create nodes & variables
var congressContainer = document.querySelector("#congress-container")
var inputNode = document.querySelector("input")


// Getting user's zip code from input box



var getZipCode = function (inputObj) {
	
	var zipApiString = ""

	if (inputObj.keyCode === 13) {
		zipApiString = "https://congress.api.sunlightfoundation.com/legislators/locate?apikey=797de9d5e36943dc8c711434e521c82b&zip=" + inputNode.value
		var zipApi = $.getJSON(zipApiString)
		zipApi.then(handleData)
	}

}

inputNode.addEventListener("keydown", getZipCode)



// Function output all legislators data
var handleData = function(data){
	congressContainer.innerHTML = ""
	var senatorCardString = ""

	for (var i = 0; i < data.results.length; i++) {

		var legislatorName = '<h1>' + data.results[i].first_name + ' ' + data.results[i].last_name + '</h1>'
		var legislatorTitle = '<span>' + data.results[i].title + '</span>'
		var legislatorParty = '<span>' + data.results[i].party + '</span>'
		var legislatorStateName = '<span>' + data.results[i].state_name + '</span>'
		var legislatorEmail = '<li>' + data.results[i].oc_email + '</li>'
		var legislatorWebsite = '<li>' + data.results[i].website + '</li>'
		var legislatorFacebook = '<li>' + data.results[i].facebook_id + '</li>'
		var legislatorTwitter = '<li>' + data.results[i].twitter_id + '</li>'
		var legislatorTermEnd = '<span>' + data.results[i].term_end + '</span>'


		senatorCardString += '<div class="senator-card">'
		senatorCardString += legislatorName
		senatorCardString += '<p class="party-info">' + legislatorTitle + '--' + legislatorParty + '-' + legislatorStateName + '</p>'
		senatorCardString += '<ul>' + legislatorEmail + legislatorWebsite + legislatorFacebook + legislatorTwitter + '</ul>'
		senatorCardString += '<p class="term-end">Term end: ' + legislatorTermEnd + '</p>'
		senatorCardString += '</div>'

	}

	congressContainer.innerHTML += senatorCardString
}

// var handleZIP = function(zipData) {
// 	console.log(zipData)
// }

congressionalApi.then(handleData)
// congressionalAPI.then(handleZIP)




