import { useSelector } from "react-redux";

import { selectReviewById } from "@/redux/entities/review/review-slice";

export const useReview = (id) => {
  const { userId, text, rating } = useSelector((state) =>
    selectReviewById(state, id)
  );

  return { userId, text, rating };
};
