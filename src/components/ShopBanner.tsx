import { formatCategoryName } from "../utils/formatCategoryName";
import CategoryItem from "./CategoryItem";

const ShopBanner = ({ category }: { category: string }) => {

  return (
    <div className="bg-secondaryBrown text-white py-20 flex justify-center items-center mx-5 my-10">
      <h2 className="text-3xl max-sm:text-2xl">
        {category ? formatCategoryName(category) : ""} 
      </h2>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Special Edition"
          image="luxury category 1.png"
          link="special-edition"
        />
        <CategoryItem
          categoryTitle="Luxury Collection"
          image="luxury category 2.png"
          link="luxury-collection"
        />
        <CategoryItem
          categoryTitle="Summer Edition"
          image="luxury category 3.png"
          link="summer-edition"
        />
        <CategoryItem
          categoryTitle="Unique Collection"
          image="luxury category 4.png"
          link="unique-collection"
        />
      </div>
    </div>
  );
};
export default ShopBanner;
