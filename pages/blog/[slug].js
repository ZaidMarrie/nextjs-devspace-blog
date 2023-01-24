import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import CategoryLabel from "@/components/CategoryLabel";
import Layout from "@/components/Layout";

function PostPage({ post }) {
	return (
		<Layout title={post.frontmatter.title}>
			<Link href="/blog">Go Back</Link>

			<div className="mt-6 px-10 py-6 bg-white rounded-lg shadow-md">
				<div className="flex justify-between items-center mt-4">
					<h1 className="text-5xl mb-7">{post.frontmatter.title}</h1>
					<CategoryLabel>{post.frontmatter.category}</CategoryLabel>
				</div>

				<img src={post.frontmatter.cover_image} alt="" className="w-full rounded" />

				<div className="bg-gray-100 p-2 my-8 rounded flex justify-between items-center">
					<div className="flex items-center">
						<img
							src={post.frontmatter.author_image}
							alt=""
							className="w-10 h-10 mx-4 object-cover rounded-full hidden sm:block"
						/>

						<h4>{post.frontmatter.author}</h4>
					</div>

					<div className="mr-4">{post.frontmatter.date}</div>
				</div>

				<div className="blog-text mt-2">
					<div dangerouslySetInnerHTML={{ __html: marked(post.content) }}></div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(path.join("posts", `${slug}.md`));

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			post: { frontmatter, content, slug },
		},
	};
}

export default PostPage;
