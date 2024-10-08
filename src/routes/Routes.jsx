import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Dashboard } from "../dashboard/Dashboard";

export const Routes = () => {
    const routesPublic = [
        {
            path: "/",
            element: <App />
        },
        {
            path:"/dashboard",
            element: <Dashboard/>
        }
    ];

    const router = createBrowserRouter(routesPublic);

    return <RouterProvider router={router} />;
};
