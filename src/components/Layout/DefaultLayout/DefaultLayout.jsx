import Header from '~/components/Layout/components/Header';
import Sidebar from '~/components/Layout/components/Sidebar';
import Footer from '~/components/Layout/components/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <Sidebar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
