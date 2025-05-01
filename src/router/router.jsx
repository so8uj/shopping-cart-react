import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";

const routes = [
    {
        path:"/", element: <Layout />, children: [
        {index:true, element: <ShopPage />},
        {path:"/cart", element: <CartPage />}
    ]}
]

const router = createBrowserRouter(
    routes
)

export default router