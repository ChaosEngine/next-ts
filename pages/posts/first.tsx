import Link from 'next/link'
import Layout from '../../components/Layout'

const FirstPost = () => {
	return (
		<Layout title="First Post">
			<h1>First Post</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officiis! Eos unde, quasi quas sequi iure error voluptates, est doloribus nesciunt labore autem vitae consectetur maiores alias corporis corrupti dignissimos.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quis itaque quaerat dolorem molestiae! Dolor voluptatum explicabo ullam animi in, dignissimos iure magnam eligendi iusto debitis soluta error? Non, excepturi!
			</p>
			<h2>
				<Link href="/">
					Back to home
				</Link>
			</h2>
		</Layout>
	)
}

export default FirstPost