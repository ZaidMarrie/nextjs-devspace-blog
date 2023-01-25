import fs from "fs";
import path from "path";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import CategoryList from "@/components/CategoryList";
import Layout from "@/components/Layout";
import { getPosts } from "@/lib/posts";
import { POSTS_PER_PAGE } from "@/config/index";

function BlogPage({ posts, numPages, currentPage, categories }) {
	return (
		<Layout>
			<div className="flex justify-between gap-10">
				<div className="w-3/4">
					<h1 className="text-5xl font-bold border-b-4 p-5">Blog</h1>

					<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
						{posts.map((post, idx) => (
							<Post key={idx} post={post} />
						))}
					</div>

					<Pagination currentPage={currentPage} numPages={numPages} />
				</div>

				<div className="w-1/4">
					<CategoryList categories={categories} />
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

	let paths = [];

	for (let i = 1; i <= numPages; i++) {
		paths.push({
			params: { page_index: i.toString() },
		});
	}

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const page = parseInt((params && params.page_index) || 1);

	const files = fs.readdirSync(path.join("posts"));

	const posts = getPosts();

	// Get categories for sidebar
	const categories = posts.map((post) => post.frontmatter.category);
	const uniqueCategories = [...new Set(categories)];

	const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
	const pageIndex = page - 1;
	const orderedPosts = posts.slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);

	return {
		props: {
			posts: orderedPosts,
			numPages,
			currentPage: page,
			categories: uniqueCategories,
		},
	};
}

export default BlogPage;
