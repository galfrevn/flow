"use client";

import { Suspense, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { Icons } from "@/components/ui/icons";
import { environmentVariables } from "@/environment.mjs";

interface PublicationCreationModalGifsProps {
  setPublicationMedia: React.Dispatch<React.SetStateAction<string>>;
  setPublicationStep: React.Dispatch<React.SetStateAction<string>>;
}

const giphy = new GiphyFetch(environmentVariables.NEXT_PUBLIC_GIPHY_KEY);

export function PublicationCreationModalGifs({
  setPublicationMedia,
  setPublicationStep,
}: PublicationCreationModalGifsProps) {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const fetchGifs = (offset: number) =>
    giphy.search(searchValue || "cats", { offset, limit: 10, lang: "es" });

  return (
    <div>
      <Button onClick={() => setPublicationStep("content")} variant="flat" className="mb-4">
        <Icons.back className="w-4 h-4" /> Go back
      </Button>
      <Input
        fullWidth
        name="search"
        variant="flat"
        radius="full"
        placeholder="Cute cats"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        startContent={<Icons.search className="text-gray-500 w-4" />}
      />

      <Suspense>
        <Grid
          width={526}
          columns={3}
          gutter={12}
          hideAttribution
          className="my-4"
          borderRadius={8}
          fetchGifs={fetchGifs}
          key={debouncedSearchValue}
          onGifClick={(gif, e) => {
            e.preventDefault();
            setPublicationMedia(gif.images.original.url);
          }}
          noResultsMessage={<p>No results were found for {searchValue}</p>}
        />
      </Suspense>
    </div>
  );
}
