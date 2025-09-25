
import { Link } from 'react-router-dom';
import { ILinkComponent } from "../interfaces/ILinkComponent";
export default function LinkComponent({ to, icon:Icon,text }: ILinkComponent) {

    return (
        <Link
            to={to}
            className="w-[100px] font-normal text-black hover:text-rose-600  text-base p-2 rounded transition-all flex items-center justify-center"
        >
            {Icon && <Icon className="mr-1" />}
            {text}
        </Link>
    )
}