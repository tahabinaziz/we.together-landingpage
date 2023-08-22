import HomePage from "../../pages/HomePage";
import UberUns from "../../pages/AboutUs";
import { AppRoute } from "./Routes";
import { Route, Routes } from "react-router-dom";
import Group from "../../pages/Group";
import PriceOverview from "../../pages/PriceOverview";
import Startseite from "../../pages/Statistics";
import Blog from "../../pages/Blog";
import Anmelden from "../../pages/Register";
import Mitgliedwerden from "../../pages/Member";

const routing = [
  {
    appRoute: AppRoute.HomePage,
    component: HomePage,
  },
  {
    appRoute: AppRoute.UberUns,
    component: UberUns,
  },
  {
    appRoute: AppRoute.Gruppen,
    component: Group,
  },
  {
    appRoute: AppRoute.Blog,
    component: Blog,
  },
  {
    appRoute: AppRoute.Preisübersicht,
    component: PriceOverview,
  },
  {
    appRoute: AppRoute.Startseite,
    component: Startseite,
  },
  {
    appRoute: AppRoute.Anmelden,
    component: Anmelden,
  },
  {
    appRoute: AppRoute.Mitgliedwerden,
    component: Mitgliedwerden,
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
