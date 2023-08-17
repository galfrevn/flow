"use client";

import { useRouter } from "next/navigation";

import { Button } from "@nextui-org/react";
import { Icons } from "@/components/ui/icons";

export function BackButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} radius="full" variant="light" isIconOnly>
      <Icons.back className="w-5" />
    </Button>
  );
}
