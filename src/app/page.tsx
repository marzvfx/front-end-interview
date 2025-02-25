import { PokemonDisplay } from "@/components/PokemonDisplay";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="flex flex-wrap gap-4 p-4">
        <PokemonDisplay
          name="Bulbasaur"
          sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
        <PokemonDisplay
          name="Charmander"
          sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        />
        <PokemonDisplay
          name="Squirtle"
          sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        />
      </div>
      <div className="flex flex-row gap-4">
        <Button variant="default" disabled>
          Previous
        </Button>
        <Button variant="default">Next</Button>
      </div>
    </div>
  );
}
