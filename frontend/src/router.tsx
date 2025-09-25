import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexLayout from './layout/IndexLayout'
import PokedexView from './views/index/PokedexView'
import NotFound from './views/notFound/NotFound'

export default function Router(){

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route element={<AuthLayout/>}>
                    <Route path='/auth/login' element={<LoginView/>}></Route>
                    <Route path='/auth/register' element={<RegisterView />}></Route>
                </Route> */}
                 <Route  element={<IndexLayout/>}>
                    <Route  index={true} element={<PokedexView />} />
                </Route> 
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}