import { BrowserRouter, Routes, Route } from "react-router-dom/dist/umd/react-router-dom.development"
import { HomePage } from "../pages/HomePage"
import { ErrorPage } from "../pages/ErrorPage"
import { ProfilePage } from "../pages/ProfilePage"
import { Product  } from "../pages/Product"

export const Router = () => 
{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} /> {/* o index substitui o path na página principal */}
                <Route path="/profile/:name" element={<ProfilePage/>} />
                <Route path="*" element={<ErrorPage/>} />
                <Route path="/products/:name" element={< Product />}/>
                {/* <Route path="/login/:name" element={<LoginPage/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}