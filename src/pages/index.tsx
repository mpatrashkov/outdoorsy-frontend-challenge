import Head from "next/head";
import { Inter } from "@next/font/google";
import { Input } from "@/components/input";
import { RvCard } from "@/components/rv-card";
import { useSearchRentalsQuery } from "@/queries/search-rentals";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const searchRentalsQuery = useSearchRentalsQuery(
    ["trailer"],
    "Pinnacles National Park, CA"
  );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-5">
        <Input />
        {searchRentalsQuery.data?.map?.((rv) => (
          <RvCard key={rv.id} rv={rv} />
        ))}
      </main>
    </>
  );
}
