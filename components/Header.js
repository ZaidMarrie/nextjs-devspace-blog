import Link from "next/link";
import Image from "next/image";

function Header() {
	return (
		<header className="bg-gray-900 text-gray-100 shadow w-full">
			<div className="container mx-auto p-5 flex flex-wrap flex-col items-center md:flex-row">
				<Link href="/" className="title-font font-medium flex items-center mb-4 md:w-1/5 md:mb-0">
					<Image src="/images/logo.png" alt="logo" width={40} height={40} />
					<span className="ml-3 text-xl">DevSpace</span>
				</Link>

				<nav className="text-base flex flex-wrap justify-end items-center gap-5 md:w-4/5 md:ml-auto">
					<Link href="/blog" className="uppercase hover:text-indigo-300">
						Blog
					</Link>
					<Link href="/about" className="uppercase hover:text-indigo-300">
						About
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
