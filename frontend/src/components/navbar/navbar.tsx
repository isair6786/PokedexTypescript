import Logo from './../../assets/images/logo.png'
import NavBarLogo from './navbarLogo';
import { useState } from 'react';
import { IoMdLogIn } from "react-icons/io";
import LinkComponent from '../LinkComponent';
import ButtonLink from '../ButtonLink';
export default function NavBar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
            <nav className="bg-white shadow-lg rounded-2xl w-full mx-auto ">
                <div className=" mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">

                        {/* Logo */}
                        <NavBarLogo image={Logo} route='/' text='PokeApiReact' />


                        {/* Desktop menu */}
                        <div className="hidden md:flex ">
                            <LinkComponent to='/auth/login' text='Home' />
                            <ButtonLink to='/auth/login' icon={IoMdLogIn} />
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* Hamburger icon */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> // X icon
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <LinkComponent to='/auth/login' text='Home' />
                            <ButtonLink to='/auth/login' icon={IoMdLogIn} />

                        </div>
                    </div>
                </div>
            </nav>
    )
}