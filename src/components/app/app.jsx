import { useEffect, useState } from "react";

import "../../css/global.scss";

import { restaurants } from "../../constants/mock";

import { AppLayout } from "../app-layout/app-layout";
import { RestaurantPage } from "../restaurant-page/restaurant-page";
import { ThemeContext, ThemeType } from "../theme-context/theme-context";

export const App = () => {
  const [theme, setTheme] = useState(ThemeType.LIGHT);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme.description);
  }, [theme]);

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <AppLayout>
        <RestaurantPage restaurants={restaurants} />
      </AppLayout>
    </ThemeContext>
  );
};
