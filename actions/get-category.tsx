import { Category } from "../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`


const getCategory = async( id:string ): Promise<Category> => {

    const res = await fetch(`${URL}/${id}`);

    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("One Category", data);
        
    
  return  data;
}

export default getCategory