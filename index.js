import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>News Website</title>
      </Head>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Latest News</h1>
        <p className="mt-2 text-gray-600">Stay updated with the latest headlines.</p>
      </main>
    </div>
  )
}