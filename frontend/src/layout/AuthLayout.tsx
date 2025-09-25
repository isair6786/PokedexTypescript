import { Outlet } from "react-router-dom"
import { ToastContainer, Bounce } from 'react-toastify';

export default function AuthLayout() {
    return (
        <>
            <Outlet />


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
        </>
    )
}
