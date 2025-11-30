import { useState } from "react";

export const useSelection = (items) => {
  const [selectedItem, setSelectedItem] = useState(
    items?.length ? items[0] : null
  );

  const select = (item) => {
    setSelectedItem(item);
  };

  return {
    selectedItem,
    select,
  };
};
