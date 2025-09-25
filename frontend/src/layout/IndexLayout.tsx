import { Outlet } from "react-router-dom"
import { ToastContainer, Bounce } from 'react-toastify';
import NavBar from '../components/navbar/navbar';

export default function IndexLayout() {
    return (
        <div className="w-full lg:p-10 min-w-[300px]">
            <NavBar />

            <div > {/* <-- push content below navbar */}
                <Outlet />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </div>
    )
}
