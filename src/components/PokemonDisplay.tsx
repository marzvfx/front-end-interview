"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface PokemonDisplayProps {
  name: string;
  sprite: string;
}

export function PokemonDisplay({ name, sprite }: PokemonDisplayProps) {
  return (
    <Card className="w-[250px]">
      <CardContent className="p-4 flex flex-col items-center">
        <Image
          src={sprite || "/placeholder.svg"}
          alt={`${name} sprite`}
          width={182}
          height={182}
          className="mb-4"
        />
        <h2 className="text-xl font-bold capitalize">{name}</h2>
      </CardContent>
    </Card>
  );
}
