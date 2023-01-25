import Link from "next/link";
import Post from "@/components/Post";
import Layout from "@/components/Layout";
import { getPosts } from "@/lib/posts";
import { POSTS_PER_PAGE } from "../config";

function HomePage({ posts }) {
	return (
		<Layout>
			<h1 className="text-5xl font-bold border-b-4 p-5">Latest Posts</h1>

			<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{posts.map((post, idx) => (
					<Post key={idx} post={post} />
				))}
			</div>

			<Link
				href="/blog"
				className="block text-center text-gray-800 border border-gray-500  rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none"
			>
				All Posts
			</Link>
		</Layout>
	);
}

export async function getStaticProps() {
	return {
		props: { posts: getPosts().slice(0, POSTS_PER_PAGE) },
	};
}

export default HomePage;
