import { Rv } from "@/queries/search-rentals";
import Image from "next/image";

interface RvCardProps {
  rv: Rv;
}

export function RvCard(props: RvCardProps) {
  return (
    <div className="flex gap-3 items-center">
      <div className="h-36 w-48 relative">
        <Image
          className="rounded-md object-cover"
          src={props.rv.attributes.primaryImageUrl}
          alt={`Thumbnail image for ${props.rv.attributes.name}`}
          fill
        />
      </div>

      <div className="font-semibold">{props.rv.attributes.name}</div>
    </div>
  );
}
