import axios from 'axios';



export function getRecipes(): Promise<any>{
    return axios.get('https://api.edamam.com/api/recipes/v2?type=public&app_id=a1f447f9&app_key=6612b837da4be38b1d8a51664b0ac46c&q=ground%20beef&dishType=Bread')
        .then(response => response.data)
}