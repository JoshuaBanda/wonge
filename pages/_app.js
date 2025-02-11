import { useRouter } from 'next/router';
import Navbar from '../components/Navbar'; // Adjust path if necessary
import '../styles/globals.css'; // Import your global styles
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {
  const router = useRouter();


  // Check if the user is on the landing page, so we don't show the navbar there
  const isLandingPage = router.pathname === '/';

  return (
    <>
    {/* Render the navbar only if the user is not on the landing page */}
    {!isLandingPage && <Navbar />}

    {/* Render the page component */}
    <Component {...pageProps} />
    {!isLandingPage &&<Footer/>}
    </>
  );
}

export default MyApp;
