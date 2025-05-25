import { Billboard } from "../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`


const getBillboard = async( id:string ): Promise<Billboard> => {

    const res = await fetch(`${URL}/${id}`);

    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Specific billbaord", data);
        
    
  return  data;
}

export default getBillboard