import Header from './header';
import Footer from './footer';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
