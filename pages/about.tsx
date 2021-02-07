import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <div>
      Avatar profile Image
      <Image
        src="/images/profile.jpg"
        width="200px"
        height="150px"
        alt="Chaos Engine"
      />
    </div>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
