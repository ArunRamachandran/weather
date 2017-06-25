//Exports the mocked version of the version "Request()" function
// that our API's use for the purpose of fetching data from end point.
import Superagent from 'superagent';

let Request = {
	get(url, header) {
		return new Promise((resolve, reject) => {
			Superagent.get(url)
   			.end(function(err, res) {
				err ? reject(res.body, err) : resolve(res.body, res);
			})
		});
	}
}

export default Request;