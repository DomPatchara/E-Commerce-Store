import Container from "@/components/ui/container";
import getCategory from "../../../../actions/get-category";
import getColors from "../../../../actions/get-color";
import getProducts from "../../../../actions/get-products";
import getSizes from "../../../../actions/get-sizes";
import Billboard from "@/components/billboard";
import Filter from "./components/filter";
import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import MobileFilter from "./components/mobile-filter";
import getCategories from "../../../../actions/get-categories";

export const revalidate = 0;

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{
    colorId?: string;
    sizeId?: string;
  }>;
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { categoryId } = await params;
  const { colorId, sizeId } = await searchParams;

  const products = await getProducts({
    categoryId: categoryId,
    colorId: colorId,
    sizeId: sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard}/>

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/** Mobile Filters */}
            <MobileFilter sizes={sizes} colors={colors}/>

            {/**Large Screen Filter */}
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sized" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>

            {/**Products Show */}
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;



export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((cat) => ({
    categoryId: cat.id.toString()
  }))
}