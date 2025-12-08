export const Review = ({ review }) => {
  const { user, text, rating } = review;
  return (
    <>
      <p>
        <b>{user}</b> {"⭐".repeat(rating)}
      </p>
      <p>{text}</p>
    </>
  );
};
