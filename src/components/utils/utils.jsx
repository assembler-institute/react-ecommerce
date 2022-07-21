
  //* "This function takes in a username and password, and returns a promise that resolves if the username
  //* and password are correct, and rejects if they are not."
  
  //* Now, let's say we want to use this function in our React component. 
  
  //* We can do this by calling the function, and then using the .then() and .catch() methods on the
  //* promise that is returned. 
  
  //* Here's an example of how we can do this:
  //* @returns A promise that resolves or rejects after 1 second.
 
export async function LoginVerification({ username, password }) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === "javier" && password === "password") {
				resolve();
			} else {
				reject();
			}
		}, 1000);
	});
}
