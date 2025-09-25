
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";


export default function NotFound() {
    const divRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
       
    }, []);
    return (<>
        <div  className="bg-purple-600 flex items-center justify-center h-screen">
            <div  className="text-center">
                <h1 ref={divRef} className="text-9xl font-extrabold text-white">404</h1>
                <p className="text-2xl text-white mt-4">Oops! Page not found.</p>
                <p className="text-white mt-2">The page you're looking for doesn't exist or has been moved.</p>
                <Link to='/' className="mt-6 inline-block px-6 py-3 bg-white text-purple-600 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors">Go Home</Link>
            </div>
        </div>
    </>);
}