import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PublicRoute } from "./routes/PublicRoutes";

function App() {
  return (
      <Navbar>
        <Routes>
          {
            PublicRoute.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />}></Route>))
          }
        </Routes>
      </Navbar>
  );
}

export default App;
