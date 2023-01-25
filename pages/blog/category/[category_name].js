import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "@/components/Post";
import CategoryList from "@/components/CategoryList";
import Layout from "@/components/Layout";
import { getPosts } from "@/lib/posts";

function CategoryBlogPage({ posts, categoryName, categories }) {
	return (
		<Layout>
			<div className="flex justify-between gap-10">
				<div className="w-3/4">
					<h1 className="text-5xl font-bold border-b-4 p-5">Posts in {categoryName}</h1>

					<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
						{posts.map((post, idx) => (
							<Post key={idx} post={post} />
						))}
					</div>
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

	const categories = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

		const { data: frontmatter } = matter(markdownWithMeta);

		return frontmatter.category.toLowerCase();
	});

	const paths = categories.map((category) => ({
		params: { category_name: category },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { category_name } }) {
	const posts = getPosts();

	// Filter posts by category
	const filteredPosts = posts.filter(
		(post) => post.frontmatter.category.toLowerCase() === category_name
	);

	// Get categories for sidebar
	const categories = posts.map((post) => post.frontmatter.category);
	const uniqueCategories = [...new Set(categories)];

	return {
		props: {
			posts: filteredPosts,
			categoryName: category_name,
			categories: uniqueCategories,
		},
	};
}

export default CategoryBlogPage;
