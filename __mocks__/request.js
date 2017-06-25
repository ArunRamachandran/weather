//Exports the mocked version of the version "Request()" function
// that our API's use for the purpose of fetching data from end point.

export default function request() {  
	return new Promise((resolve, reject) => {    
		process.nextTick(() => {      
			resolve({        
				json: () => new Promise((resolve, reject) => {          
				// This is where we put all of our mock fetch          
				// data. A given function should just test          
				// the properties that it's interested in,          
				// ignoring the rest.          
				resolve({ origin: 'localhost' });        
			})      
		});    
	});  
});