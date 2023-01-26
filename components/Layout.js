import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

function Layout({ title, description, keywords, children }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<link name="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Search />

			<main className="container mx-auto my-7">{children}</main>
		</>
	);
}

Layout.defaultProps = {
	title: "Welcome to Dev Space",
	description: "The best information and news in development",
	keywords: "development, programming, coding",
};

export default Layout;
