import { useEffect, useState } from "react";

import "../../css/global.scss";

import { restaurants } from "../../constants/mock";

import { AppLayout } from "../app-layout/app-layout";
import { RestaurantPage } from "../restaurant-page/restaurant-page";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";

export const App = () => {
  return (
    <ThemeContextProvider>
      <AppLayout>
        <RestaurantPage restaurants={restaurants} />
      </AppLayout>
    </ThemeContextProvider>
  );
};
