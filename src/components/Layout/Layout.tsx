import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="pt-8 pb-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
