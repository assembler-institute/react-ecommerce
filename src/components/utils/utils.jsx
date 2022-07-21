const apiKey = "i1JImrnGOrm98w5JuTFpDyff4yMPnJR3";

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

const fetchData = async () => {
	const response = await fetch(
		`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=bruce+lee&limit=25&offset=0&rating=g&lang=es`,
	);
	const data = await response.json();
	return data;
};

export const getRandomAvatar = async () => {
	const data = await fetchData()
	const rand = Math.round(Math.random()*25)
	const url = data.data[rand].images.original.url;
	return url;
};


