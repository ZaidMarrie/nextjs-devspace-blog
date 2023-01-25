import Link from "next/link";

function CategoryList({ categories }) {
	return (
		<div className="mt-6 p-5 rounded-lg bg-white shadow-md">
			<h3 className="w-full text-2xl text-white p-3 rounded bg-gray-800">Blog Categories</h3>

			<ul className="divide-y divide-gray-300">
				{categories.map((category, idx) => (
					<Link key={idx} href={`/blog/category/${category.toLowerCase()}`}>
						<li className="p-4 hover:bg-gray-50">{category}</li>
					</Link>
				))}
			</ul>
		</div>
	);
}

export default CategoryList;
