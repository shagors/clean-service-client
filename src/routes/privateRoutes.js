import About from "../pages/About";
import Services from "../pages/Services";


export const privateRoutes = [
    {path: '/services', name: 'Services', Component: Services},
    {path: '/about', name: 'About', Component: About},
]