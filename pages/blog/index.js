import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "@/components/Post";
import Layout from "@/components/Layout";
import { sortByDate } from "@/utils/index";

function BlogPage({ posts }) {
	return (
		<Layout>
			<h1 className="text-5xl font-bold border-b-4 p-5">Blog</h1>

			<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{posts.map((post, idx) => (
					<Post key={idx} post={post} />
				))}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
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

	return {
		props: { posts: posts.sort(sortByDate) },
	};
}

export default BlogPage;
