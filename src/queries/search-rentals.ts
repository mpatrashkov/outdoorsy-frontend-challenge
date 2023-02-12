import { convertToCamelCase } from "@/utils/convert-to-camel-case";
import { useQuery } from "@tanstack/react-query";

export interface Rv {
  id: string;
  attributes: {
    name: string;
    primaryImageUrl: string;
  };
}

function getSearchRentals(keywords: string[], address: string) {
  return fetch(
    `https://search.outdoorsy.com/rentals?filter[keywords]=${keywords.join(
      " "
    )}&address=${address}`
  )
    .then((res) => res.json())
    .then((res) => convertToCamelCase(res)?.data as Rv[]);
}

export function useSearchRentalsQuery(keywords: string[], address: string) {
  return useQuery(
    ["rentals", { keywords, address }],
    () => getSearchRentals(keywords, address),
    {
      keepPreviousData: true,
    }
  );
}
