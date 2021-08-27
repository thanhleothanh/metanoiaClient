import MetaTag from '@/components/MetaTag';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <MetaTag title={title} description={description} />
      <main>
        <Header />
        <Navigation />
        {children}
        <Footer />
      </main>
    </>
  );
};
export default Layout;
