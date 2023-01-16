import React from "react";

type PageProps = {
	params: {
		searchTerm: string;
	};
};

type SearchResult = {
	organic_results: [
		{
			position: number;
			title: string;
			link: string;
			thumbnail: string;
			snippet: string;
		}
	];
};

const search = async (searchTerm: string) => {
	const response = await fetch(
		`https://serpapi.com/search.json?q=${searchTerm}&api_key=86c4ee853efdf08adbf86506ea74c6eb19b30e2e5d68da5b8bd3cb5ae6ee8506`
	);

	// force error to test Next13 Error architecture
	// throw new Error("Force Error for testing!");

	const data: SearchResult = await response.json();
	// console.log("data: ", data);
	return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
	const searchResults: SearchResult = await search(searchTerm);
	console.log("searchResults: ", searchResults.organic_results[0].title);
	return (
		<div>
			<p className="text-gray-500 text-sm">
				You searched for: {searchTerm}
			</p>
			<ol className="space-y-5 p-5">
				{searchResults.organic_results.map((result) => (
					<li key={result.position} className="list-decimal">
						<p className="font-bold">{result.title}</p>
						<p>{result.snippet}</p>
					</li>
				))}
			</ol>
		</div>
	);
}

export default SearchResults;
