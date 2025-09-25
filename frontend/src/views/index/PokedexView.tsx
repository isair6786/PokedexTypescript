import PokemonInfo from '../../components/pokemonInfo/PokemonInformation';
import PokemonGridInfo from '../../components/pokedexGrid/pokemonGridInfo';
import { useState } from 'react';
export default function PokedexView() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="grid grid-cols-1  md:grid-cols-12 gap-15 text-white h-fullmt-5">

            <main className=" col-span-1  md:col-span-6 lg:col-span-7 xl:col-span-8">

                <PokemonGridInfo setShowModal={setShowModal} />
            </main>
            <main className="col-span-1 hidden md:block md:col-span-6 lg:col-span-5 xl:col-span-4 p-2">
                <PokemonInfo />
            </main>
            <div className="block md:hidden">
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                        <div className="bg-white rounded-2xl shadow-lg w-[90%] h-[80%] overflow-y-auto relative">
                            <button
                                className="absolute top-3 right-3 text-black font-bold"
                                onClick={() => setShowModal(false)}
                            >
                                ✕
                            </button>
                            <PokemonInfo />
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}