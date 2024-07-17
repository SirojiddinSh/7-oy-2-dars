import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./routes/admin/Admin";
import Products from "./routes/products/Products";
import Menu from "./routes/menu/Menu";

function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<Admin />}>
                    <Route path="products" element={<Products />} />
                    <Route path="menu" element={<Menu />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
