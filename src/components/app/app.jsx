import "../../css/global.scss";

import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";

import { restaurants } from "../../constants/mock";
import { store } from "../../redux/store";

import { AppLayout } from "../app-layout/app-layout";
import { RestaurantPage } from "../restaurant-page/restaurant-page";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { HomePage } from "@/components/home-page/home-page";
import { RestaurantView } from "../restaurant-view/restaurant-view";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="restaurant" element={<RestaurantPage />}>
                  <Route path=":restaurantId" element={<RestaurantView />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
