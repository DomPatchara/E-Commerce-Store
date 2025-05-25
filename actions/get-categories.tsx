import { Category } from "../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async(): Promise<Category[]> => {

    const res = await fetch(URL);

    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Get all categories", data);
        
    
  return  data;
}

export default getCategories