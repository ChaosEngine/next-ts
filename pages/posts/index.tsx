import Link from 'next/link'
import Layout from '../../components/Layout'
import { getSortedPostsData } from '../../lib/markdowns'

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()

	return {
		props: {
			allPostsData
		}
	}
}

type PostData = {
	id: string;
	title: any;
	date: any;
};
type Props = {
	allPostsData: PostData[]
};

const html = ({ allPostsData }: Props) => {
	// console.log('aaa', props);

	return (
		<Layout title="Posts">
			<h1 className="title">
				Read{' '}
				<Link href="/posts/first">
					<a>this page!</a>
				</Link>
			</h1>

			<section>
				<h2>Blog</h2>
				<ul>
					{allPostsData.map(({ id, title, date }) => (
						<li key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export default html;