import { useRouter } from 'next/router';
import Navbar from '../components/Navbar'; // Adjust path if necessary
import '../styles/globals.css'; // Import your global styles
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Correct check: only render Navbar and Footer on the correct pages
  const isLandingPage = router.pathname === '/' || router.pathname === '/LoginPage' ||router.pathname==='/userAunthentication/SignUpPage'||router.pathname==='/userAunthentication/CreateAccountPage';  // Fixed typo here

  return (
    <>
      {/* Render the navbar only if the user is not on the landing page */}
      {!isLandingPage && <Navbar />}

      {/* Render the page component */}
      <Component {...pageProps} />

      {/* Render Footer only if not on the landing page */}
      {!isLandingPage && <Footer />}
    </>
  );
}

export default MyApp;
