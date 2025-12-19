import "../../css/global.scss";

import { Provider } from "react-redux";

import { restaurants } from "../../constants/mock";
import { store } from "../../entities/store";

import { AppLayout } from "../app-layout/app-layout";
import { RestaurantPage } from "../restaurant-page/restaurant-page";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import { UserContextProvider } from "../user-context/user-context-provider";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <AppLayout>
            <RestaurantPage restaurants={restaurants} />
          </AppLayout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
