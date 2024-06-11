import React from "react";
import Feed from "@components/Feed";

const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Discover & share
				<br className="max-md:hidden" />
				<span className="orange_gradient text-center">
					{" "}
					AI-powered prompts
				</span>
				<p className="desc text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptates, mollitia maxime? Suscipit tempore, accusantium
					enim ducimus quibusdam ex id sit?
				</p>
			</h1>
			<Feed />
		</section>
	);
};

export default Home;
