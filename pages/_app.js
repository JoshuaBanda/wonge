import { useRouter } from 'next/router';
import Navbar from '../components/Navbar'; // Adjust path if necessary
import '../styles/globals.css'; // Import your global styles
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Correct check: only render Navbar and Footer on the correct pages
  const isLandingPage = router.pathname === '/' || router.pathname === '/LoginPage' ||router.pathname==='/userAunthentication/SignUpPage'||router.pathname==='/userAunthentication/CreateAccountPage';  // Fixed typo here

  return (
    <>

      <Head>
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&family=Caramel&family=Grechen+Fuemen&family=Lavishly+Yours&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        </>
      </Head>
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
