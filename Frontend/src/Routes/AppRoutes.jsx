import { Routes, Route } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";

const Home = () => <h1>Home Page</h1>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;