export const getGifs = async(category)=>{
	const url = `https://api.giphy.com/v1/gifs/search?api_key=reRR50XnN1ykthnfZDT1EGD4WgAo2xkO&q=${category}&limit=10`
	const resp = await fetch(url)
	const {data} = await resp.json()

	const gifs = data.map(img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	}))

	return gifs
	
}