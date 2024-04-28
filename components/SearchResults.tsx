"use client";

import { useCallback, useEffect, useState } from "react";
import { useCategoryStore } from "@/store/CategoryStore";
import { useIngredientStore } from "@/store/IngredientStore";
import { useSearchStore } from "@/store/SearchStore";
import { searchByName } from "@/utils/getRecipes";
import { TDrink } from "@/types/drink";
import Image from "next/image";
import { SearchResultItem } from "./SearchResultItem";

export const SearchResults = () => {
  const [results, setResults] = useState<{ drinks: [] | null }>({
    drinks: null,
  });

  const searchText = useSearchStore((state) => state.searchName);
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const selectedIngredient = useIngredientStore(
    (state) => state.selectedIngredient
  );

  const fetchDrinks = useCallback(async () => {
    const drinks = await searchByName(searchText);
    setResults(drinks);
    console.log(drinks);
  }, [searchText]);

  useEffect(() => {
    if (searchText.length > 2) {
      fetchDrinks();
    }
  }, [searchText, fetchDrinks]);

  return (
    <div className="text-white min-h-[500px] w-full">
      {results.drinks && (
        <>
          <p className="mt-4 text-xs">Found {results.drinks.length} results</p>
          <ul className="grid grid-cols-2 mt-4 grid-flow-row gap-4 w-full">
            {results.drinks.map((drink: TDrink) => (
              <SearchResultItem drink={drink} key={drink.idDrink} />
            ))}
          </ul>
        </>
      )}
      {searchText.length > 2 && !results.drinks && (
        <p className="text-sm mt-4 font-light">No results</p>
      )}
    </div>
  );
};