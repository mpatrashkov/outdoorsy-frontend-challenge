import { useSearchRentalsQuery } from "@/queries/search-rentals";
import { RvCard } from "../rv-card";
import { Spinner } from "../spinner";

interface RvListProps {
  keywords?: string[];
}

export function RvList(props: RvListProps) {
  const searchRentalsQuery = useSearchRentalsQuery(
    props.keywords ?? [],
    "Pinnacles National Park, CA"
  );

  return (
    <div className="flex flex-col gap-5 relative">
      {searchRentalsQuery.data?.map?.((rv) => (
        <RvCard key={rv.id} rv={rv} />
      ))}

      {(searchRentalsQuery.isLoading || searchRentalsQuery.isPreviousData) && (
        <div className="absolute inset-0 backdrop-brightness-90 flex justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
