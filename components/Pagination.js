import Link from "next/link";

function Pagination({ currentPage, numPages }) {
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = `/blog/page/${currentPage - 1}`;
	const nextPage = `/blog/page/${currentPage + 1}`;

	if (numPages === 1) return <></>;

	return (
		<div className="mt-6">
			<ul className="list-none my-2 pl-0 flex">
				{!isFirst && (
					<Link href={prevPage}>
						<li className="leading-tight text-gray-800 mr-1 px-3 py-2 border border-gray-300 rounded bg-white hover:bg-gray-200">
							Previous
						</li>
					</Link>
				)}

				{Array.from({ length: numPages }, (_, i) => (
					<Link href={`/blog/page/${i + 1}`}>
						<li className="leading-tight text-gray-800 mr-1 px-3 py-2 border border-gray-300 rounded bg-white hover:bg-gray-200">
							{i + 1}
						</li>
					</Link>
				))}

				{!isLast && (
					<Link href={nextPage}>
						<li className="leading-tight text-gray-800 mr-1 px-3 py-2 border border-gray-300 rounded bg-white hover:bg-gray-200">
							Next
						</li>
					</Link>
				)}
			</ul>
		</div>
	);
}

export default Pagination;
