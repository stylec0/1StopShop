import tokenService from "./tokenService"

const BASE_URL = '/api/items/'

export function create(createItem){
	// Make a post request to the server
	return fetch(BASE_URL, {
		method: 'POST',
		// We are sending over a picture
		// multipart/form-data < - is the content type
		body: createItem, // <- postInfoFromTheForm has to be formData
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		// Valid login if we have a status of 2xx (res.ok)
		if (res.ok) return res.json();
		throw new Error('Error submitting the Form! Hey Check the Express Terminal');
	  })
}

export function getAll() {
	return fetch(BASE_URL, {
	  headers: {
		'Authorization': 'Bearer ' + tokenService.getToken()
	  }
	})
	.then(res => {
		if(res.ok) return res.json()
		throw new Error('Problem Fetching Get All')
	})	
  }

//const itemService = {
//    getAll,
//}

//export default itemService

//function getAll() {
//    return Promise.resolve([
//    {itemName: 'T-Shirt', description: "A Bright Green Shirt", price: 15.95},
//    {itemName: 'Jeans', description: "Blue Jeans", price: 35.95},
//    {itemName: 'Baseball Cap', description: "A black baseball cap", price: 25.95},
//    {itemName: 'Socks', description: "Red long socks", price: 9.95},
//    ])
//}