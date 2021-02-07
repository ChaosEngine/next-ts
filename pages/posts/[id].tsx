import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/markdowns'

type Props = {
	postData: {
		id: string;
		date: any;
		title: any;
	}
};

type Path = {
	params: {
		id: string;
	}
}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	//console.log(`paths = `, paths);
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }: Path) {
	// console.log(`params.id = ${params}`);
	const postData = getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}

export default function Post({ postData }: Props) {
	return (
		<Layout>
			{postData.title}
			<br />
			{postData.id}
			<br />
			{postData.date}
		</Layout>
	)
}
