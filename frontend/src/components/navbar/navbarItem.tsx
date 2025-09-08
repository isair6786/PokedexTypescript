import { NavLink } from "react-router-dom";
import INavBarItem from "../../interfaces/navbar/NavBarItem";


export default function NavBarItem({ image = "", text, route }: INavBarItem) {

    return (
        <NavLink to={route} className="flex flex-row justify-center items-center rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ">
            {image.length > 0 ? (<img src={image} width={30} height={30} />) : (<></>)}
            <p className="font-normal text-gray-700 text-lg ml-2 ">{text}</p>
        </NavLink >
    )

}