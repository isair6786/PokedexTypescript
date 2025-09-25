import { IButtonLink } from "../interfaces/IButtonLink";
import { Link } from 'react-router-dom';
export default function ButtonLink({ to, icon:Icon }: IButtonLink) {

    return (
        <Link
            to={to}
            className="bg-red-400 w-[100px] font-bold text-white text-base hover:bg-red-600 p-2 rounded transition-all flex items-center justify-center"
        >
            {Icon && <Icon className="mr-1" />}
            Login
        </Link>
    )
}