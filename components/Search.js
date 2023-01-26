import SearchResults from "./SearchResults";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

function Search() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const getResults = async () => {
			if (searchTerm === "") {
				setSearchResults([]);
			} else {
				const res = await fetch(`/api/search?q=${searchTerm}`);
				const { results } = await res.json();
				setSearchResults(results);
			}
		};

		getResults();
	}, [searchTerm]);

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

			<SearchResults results={searchResults} />
		</div>
	);
}

export default Search;
