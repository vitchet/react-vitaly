import { AppLayout } from "../app-layout/app-layout";
import { RestaurantView } from "../restaurant-view/restaurant-view";

import { restaurants } from "../../constants/mock";

export const App = () => {
  return (
    <AppLayout>
      <RestaurantView restaurants={restaurants} />
    </AppLayout>
  );
};
