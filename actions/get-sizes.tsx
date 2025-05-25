import { Size } from "../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async(): Promise<Size[]> => {

    const res = await fetch(URL);

    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Get all Sizes", data);
        
    
  return  data;
}

export default getSizes