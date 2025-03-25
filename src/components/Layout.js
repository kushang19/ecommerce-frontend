import Footer from "./Footer/Footer";
import Header from "./Header/Header";


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
