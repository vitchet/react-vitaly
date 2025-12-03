import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { text, userName, setText, setUserName, clear } = useForm();

  return (
    <>
      <form>
        <p>
          <input
            type="text"
            placeholder="Enter your name..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
        <p>
          <textarea
            placeholder="Right your review..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </p>
        <button type="button" value={text} onClick={clear}>
          CLEAR
        </button>
      </form>
    </>
  );
};
