import Link from 'next/link'
import Layout from '../../components/Layout'
import { getSortedPostsData } from '../../lib/markdowns'

type PostData = {
	id: string;
	date: string;
	title: string;
};
type Props = {
	allPostsData: PostData[]
};

export async function getStaticProps() {
	const allPostsData: PostData[] = getSortedPostsData()

	return {
		props: {
			allPostsData
		}
	}
}

const html = ({ allPostsData }: Props) => {
	// console.log('aaa', allPostsData);

	return (
		<Layout title="Posts">
			<h1 className="title">
				Read{' '}
				<Link href="/posts/first">
					this page!
				</Link>
			</h1>

			<section>
				<h2>Blogs</h2>
				<ul>
					{allPostsData.map(({ id, title, date }) => (
						<li key={id}>
							<p>
								<strong>title:</strong> {title}
								<br />
								<strong>id: </strong>
								<Link href={`/posts/${id}`}>
									{id}
								</Link>
								<br />
								<strong>date:</strong> {date}
							</p>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export default html;