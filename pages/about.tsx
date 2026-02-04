import Link from 'next/link'
//import Image from 'next/image'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About">
    <h1>About</h1>
    <p>This is the about page</p>
    <div>
      Avatar profile Image
      <img
        src="/images/profile.jpg"
        width="200px"
        height="150px"
        alt="Chaos Engine"
      />
    </div>
    <p>
      <Link href="/">
        Go home
      </Link>
    </p>
  </Layout>
)

export default AboutPage
