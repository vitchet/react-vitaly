export const Review = ({ user, text, rating }) => {
  return (
    <>
      <p>
        <b>{user}</b> {"⭐".repeat(rating)}
      </p>
      <p>{text}</p>
    </>
  );
};
