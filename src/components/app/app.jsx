import "../../css/global.scss";

import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router";

import { store } from "../../redux/store";

import { AppLayout } from "../app-layout/app-layout";
import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { DishPage } from "../dish-page/dish-page";
import { HomePage } from "@/components/home-page/home-page";
import { MenuView } from "../menu-view/menu-view";
import { RestaurantPage } from "../restaurant-page/restaurant-page";
import { RestaurantView } from "../restaurant-view/restaurant-view";
import { ReviewPage } from "../review-page/review-page";
import { ReviewView } from "../review-view/review-view";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";

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
                  <Route path=":restaurantId" element={<RestaurantView />}>
                    <Route index element={<Navigate to="menu" />} />
                    <Route path="menu" element={<MenuView />} />
                    <Route path="reviews" element={<ReviewView />} />
                  </Route>
                </Route>
                <Route path="dish/:dishId" element={<DishPage />} />
                <Route path="review/:reviewId" element={<ReviewPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
