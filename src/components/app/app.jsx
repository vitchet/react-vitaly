import { AppLayout } from "../app-layout/app-layout";
import { RestaurantPage } from "../restaurant-page/restaurant-page";

import { restaurants } from "../../constants/mock";

import "../../css/global.scss";

export const App = () => {
  return (
    <AppLayout>
      <RestaurantPage restaurants={restaurants} />
    </AppLayout>
  );
};
