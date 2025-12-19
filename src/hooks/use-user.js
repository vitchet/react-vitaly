import { useSelector } from "react-redux";

import { selectUserById } from "@/entities/user/user-slice";

export const userUser = (id) => {
  const { name } = useSelector((state) => selectUserById(state, id));

  return { name };
};
