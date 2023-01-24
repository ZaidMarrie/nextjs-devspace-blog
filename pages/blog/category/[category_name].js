import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Post from "@/components/Post";
import Layout from "@/components/Layout";
import { sortByDate } from "@/utils/index";

function CategoryBlogPage({ posts, categoryName }) {
	return (
		<Layout>
			<h1 className="text-5xl font-bold border-b-4 p-5">Posts in {categoryName}</h1>

			<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{posts.map((post, idx) => (
					<Post key={idx} post={post} />
				))}
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
	const files = fs.readdirSync(path.join("posts"));

	const posts = files.map((filename) => {
		const slug = filename.replace(".md", "");
		const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	// Filter posts by category
	const filteredPosts = posts.filter(
		(post) => post.frontmatter.category.toLowerCase() === category_name
	);

	return {
		props: { posts: filteredPosts.sort(sortByDate), categoryName: category_name },
	};
}

export default CategoryBlogPage;
