import PokemonInfo from '../../components/pokemonInfo/PokemonInformation';
import SeachingBar from '../../components/seachingBar/SeachingBar';
export default function PokedexView() {

    return (
        <div className="grid grid-cols-1  md:grid-cols-12 gap-15 text-white bg-amber-500">

            <main className=" col-span-1  md:col-span-6 lg:col-span-8 xl:col-span-9">
                 <SeachingBar />
            </main>
             <main className="col-span-1  md:col-span-6 lg:col-span-4 xl:col-span-3">
                  <PokemonInfo />
            </main>
        </div>
      
    );
}