import AdminLayout from "../Layout";
import routesLink from "../config/routeLink";
import { AdminHome } from "../page";

const routes = [
    { path: routesLink.admin,page: AdminHome,layout: AdminLayout },    
];

export default routes;