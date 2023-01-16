import Link from "next/link";
import React from "react";

function Header() {
	return (
		<header className="p-5 bg-blue-500">
			<Link
				className="px-2 py-1 text-blue-500 bg-white rounded-lg"
				href="/"
			>
				Home
			</Link>
		</header>
	);
}

export default Header;
