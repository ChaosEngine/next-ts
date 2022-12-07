import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const defaultTitle = (): React.ReactNode => 'Next.js + TypeScript Example';

const Layout = ({ children, title = '' }: Props) => (
  <div className="container">
    <Head>
      <title>{title !== "" ? title + ' | ' + defaultTitle() : defaultTitle()}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        |{' '}
        <Link href="/posts">
          <a>Posts</a>
        </Link>{' '}
        |{' '}
        <Link href="/api/users">
          Users API
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
