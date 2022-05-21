import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PublicRoute } from "./routes/PublicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoutes } from "./routes/privateRoutes";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddService from "./pages/Dashboard/AddService";
import AddAdmin from "./pages/Dashboard/AddAdmin";

function App() {

  useEffect( () => {
    AOS.init();
  } , [])

  return (
      <Navbar>
        <Routes>
          {
            PublicRoute.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />}></Route>))
          }
          <Route element={<PrivateRoute></PrivateRoute>}>
            {
              privateRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />}></Route>))
            }
          </Route>
          <Route element={<AdminRoute></AdminRoute>}>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                <Route path = 'add-service' element={<AddService></AddService>}></Route >
                <Route path = 'add-admin'element={<AddAdmin></AddAdmin>}></Route>
            </Route>
          </Route>
        </Routes>
      </Navbar>
  );
}

export default App;
