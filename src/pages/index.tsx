import { Input } from "@/components/input";
import { RvList } from "@/components/rv-list";
import { useDebounceState } from "@/utils/use-debounce-state";
import { Inter } from "@next/font/google";
import Head from "next/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounceState(search, 500);

  return (
    <>
      <Head>
        <title>Outdoorsy Task</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-5">
        <Input value={search} onChange={(newValue) => setSearch(newValue)} />
        <div className="mt-5">
          <RvList keywords={[debouncedSearch]} />
        </div>
      </main>
    </>
  );
}
