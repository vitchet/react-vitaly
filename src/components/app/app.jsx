import { AppLayout } from "../app-layout/app-layout";
import { RestaurantView } from "../restaurant-view/restaurant-view";

import { restaurants } from "../../constants/mock";

import "../../css/global.css";

export const App = () => {
  return (
    <AppLayout>
      <RestaurantView restaurants={restaurants} />
    </AppLayout>
  );
};
