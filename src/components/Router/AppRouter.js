import HomePage from "../../pages/HomePage";
import UberUns from "../../pages/UberUns";
import { AppRoute } from "./Routes";
import { Route, Routes } from "react-router-dom";

const routing = [
  {
    appRoute: AppRoute.HomePage,
    component: HomePage,
  },
  {
    appRoute: AppRoute.Uberuns,
    component: UberUns,
  },
];

const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path={"/"} element={<HomePage />}></Route>
      <Route path={"/Uber uns"} element={<UberUns />}></Route> */}
      <Route>
        {routing.map((url, index) => {
          return (
            <Route
              path={url.appRoute}
              key={index + 1}
              element={<url.component />}
            ></Route>
          );
        })}
      </Route>
    </Routes>
  );
};
export default AppRouter;
