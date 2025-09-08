import { useState } from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";
export default function SeachingBar() {

    const [ searchWord, setSearchWord ] = useState('')

    return (<>
        <div className="flex flex-row bg-white items-center rounded-2xl  shadow mt-15 ">
            <input 
            className="text-gray-700 rounded-2xl h-15 w-full p-5 focus:outline-none focus:ring-0 focus:border-gray-300" 
            type="text" 
            placeholder="Search your Pokemon"
            onChange={(e)=> setSearchWord(e.target.value)} />
            <MdOutlineCatchingPokemon size={50} className="bg-red-400 rounded-lg p-1 text-white mx-5"/>
        </div>
        <p className="text-gray-900">Palabra buscada {searchWord}</p>
    </>);
}