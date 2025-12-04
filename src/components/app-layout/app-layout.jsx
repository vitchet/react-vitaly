import { ScrollProgressBar } from "../scroll-progres-bar/scroll-progress-bar";
export const AppLayout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
