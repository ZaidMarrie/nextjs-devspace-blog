import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

function Search() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	return (
		<div className="p-4 bg-gray-600 relative">
			<div className="container mx-auto flex justify-center items-center md:justify-end">
				<div className="relative text-gray-600 w-72">
					<form>
						<input
							type="search"
							name="search"
							id="search"
							value={searchTerm}
							placeholder="Search Posts..."
							onChange={(e) => setSearchTerm(e.target.value)}
							className="text-sm w-72 h-10 px-5 pr-10 rounded-full focus:outline-none"
						/>
						<FaSearch className="text-black mt-3 mr-4 absolute top-0 right-0" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default Search;
