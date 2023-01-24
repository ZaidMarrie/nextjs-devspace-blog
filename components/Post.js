import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";

function Post({ post }) {
	return (
		<div className="px-10 py-6 bg-white rounded-lg shadow-md">
			<Image
				src={post.frontmatter.cover_image}
				alt={post.frontmatter.title}
				width={600}
				height={420}
				className="mb-4 rounded"
			/>

			<div className="flex justify-between items-cent">
				<span className="font-light text-gray-600">{post.frontmatter.date}</span>
				<CategoryLabel>{post.frontmatter.category}</CategoryLabel>
			</div>

			<div className="mt-2">
				<Link
					href={`/blog/${post.slug}`}
					className="text-2xl font-bold text-gray-700 hover:underline"
				>
					{post.frontmatter.title}
				</Link>

				<p className="mt-2 text-gray-60">{post.frontmatter.excerpt}</p>
			</div>

			<div className="mt-6 flex justify-between text-center">
				<Link href={`/blog/${post.slug}`} className="text-gray-900 hover:text-blue-600">
					Read More
				</Link>

				<div className="flex items-center">
					<Image
						src={post.frontmatter.author_image}
						alt={post.frontmatter.author}
						width={40}
						height={40}
						className="mx-4 object-cover rounded-full hidden sm:block"
					/>
					<h3 className="font-bold text-gray-700">{post.frontmatter.author}</h3>
				</div>
			</div>
		</div>
	);
}

export default Post;
