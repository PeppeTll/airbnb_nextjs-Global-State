import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import LocationList from '@/Components/LocationList'
import GET from '@/utils/HTTPS'

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>airBnB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <LocationList data={data} />
      </main>
    </>
  )
}


export async function getServerSideProps() {
  const data = await GET()

  return {
    props: {
      data
    }
  };
};