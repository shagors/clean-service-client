import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PublicRoute } from "./routes/PublicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Services from "./pages/Services";
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoutes } from "./routes/privateRoutes";

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
        </Routes>
      </Navbar>
  );
}

export default App;
