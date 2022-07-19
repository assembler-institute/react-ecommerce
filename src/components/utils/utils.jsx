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
