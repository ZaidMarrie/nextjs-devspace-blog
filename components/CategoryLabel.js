import Link from "next/link";

function CategoryLabel({ children }) {
	const colorKey = {
		JavaScript: "yellow",
		CSS: "blue",
		Python: "green",
		PHP: "purple",
		Ruby: "red",
	};

	return (
		<div className={`text-bold text-gray-100 rounded px-2 py-1 bg-${colorKey[children]}-600`}>
			<Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
		</div>
	);
}

export default CategoryLabel;
