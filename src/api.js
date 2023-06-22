import axios from 'axios'
require('dotenv').config();
const access_key = process.env['access_key'];
console.log(access_key)
const searchImages = async (queryString) => {
  const response = await  axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID '+access_key
        },params:{
            query:queryString
        }

    })
    console.log(response)
    return response.data.results;
}
export default searchImages;