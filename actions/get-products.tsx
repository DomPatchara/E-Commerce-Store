import { Product } from "../types";
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?:string;
    colorId?:string;
    sizeId?:string;
    isFeatured?:boolean;
}

const getProducts = async(query: Query): Promise<Product[]> => {

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })

    const res = await fetch(url)

    if(!res.ok) {
        throw new Error("HTTP ERROR with :"+ res.status)
    }

    const data = await res.json();
    console.log("Get All Product", data);
    
    return data
} 

export default getProducts;
