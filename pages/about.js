import Layout from "@/components/Layout";

function AboutPage() {
	return (
		<Layout title="About DevSpace">
			<h1 className="text-5xl font-bold border-b-4 pb-5">About</h1>

			<div className="mt-6 px-10 py-6 bg-white shadow-md rounded-lg">
				<h3 className="text-2xl mb-5">DevSpace Blog</h3>

				<p className="mb-3">This is a blog built with nextJS and markdown.</p>
				<p>
					<span className="font-bold">Version: 1.0.0</span>
				</p>
			</div>
		</Layout>
	);
}

export default AboutPage;
