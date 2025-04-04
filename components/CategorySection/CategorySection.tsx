import { CategoryList } from "./CategoryList";
import { CategorySearchResults } from "./CategorySearchResults";

export const CategorySection = () => {
  return (
    <>
      <h2 className="text-4xl font-OpenSans mb-3 mt-2 font-semibold uppercase tracking-wider text-center">
        Discover
      </h2>
      <p className="text-center text-sm max-w-xs mx-auto font-light">
        Select one of the categories below to see all our recipes within that
        category
      </p>
      <div className="mt-2">
        <CategoryList />
        <div className="mt-4">
          <CategorySearchResults />
        </div>
      </div>
    </>
  );
};
