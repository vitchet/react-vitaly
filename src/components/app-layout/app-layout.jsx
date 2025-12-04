import { ScrollProgressBar } from "../scroll-progres-bar/scroll-progress-bar";

const headerStyles = {
  position: "fixed",
  width: "100%",
  height: "1rem",
};

export const AppLayout = ({ children }) => {
  return (
    <>
      <header style={headerStyles}>
        <ScrollProgressBar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
