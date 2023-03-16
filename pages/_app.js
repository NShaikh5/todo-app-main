import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import connectToDatabase from '../lib/mongodb';

async function handler(req, res) {
  const { db } = await connectToDatabase();
  // Use the db object to perform database operations
}

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
