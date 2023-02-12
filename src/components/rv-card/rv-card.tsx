import Image from "next/image";

interface Rv {
  name: string;
  primaryImageUrl: string;
}

interface RvCardProps {
  rv: Rv;
}

export function RvCard(props: RvCardProps) {
  return (
    <div className="flex gap-3 items-center">
      <Image
        className="rounded-md"
        src={props.rv.primaryImageUrl}
        alt={`Thumbnail image for ${props.rv.name}`}
        width={200}
        height={150}
      />

      <div className="font-semibold">{props.rv.name}</div>
    </div>
  );
}
