

export const getGifs = async ( category ) =>{

    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI (category)}&limit=10&api_key=mhoMDFYsiVWL6B8mNz1kg3yW5hRq4g4T`
    const resp = await fetch (url);
    const { data } = await resp.json();

    const gifts = data.map( img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })

    return gifts;
    
}   
