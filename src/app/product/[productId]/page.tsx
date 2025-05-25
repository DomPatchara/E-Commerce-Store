import React from "react";
import getProduct from "../../../../actions/get-product";
import getProducts from "../../../../actions/get-products";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

interface ProductPageProps {
  params: Promise<{productId: string;}>;
}
const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params;

  const product = await getProduct(productId);

  const sameCategory = await getProducts({ categoryId: product?.category?.id})
  const relateProduct = sameCategory.filter((product) => product.id !== productId)

  return (
    <div className="bg-white py-10">
      <Container>
          {/** Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/**Gallery Picture */}
            <Gallery images={product.images}/>
          
            {/** Info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product}/>              
            </div>
          </div>

          <hr className="my-10" />

          {/** Relate Products */}
          <ProductList title="Related Items" items={relateProduct} />
      
      </Container>
    </div>
  );
};

export default ProductPage;
