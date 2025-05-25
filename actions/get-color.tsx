import { Color } from "../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async(): Promise<Color[]> => {

    const res = await fetch(URL);

    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Get all colors", data);
        
    
  return  data;
}

export default getColors