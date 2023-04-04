interface Project {
	id: number;
	name: string;
	img: string;
	github?: string;
	demo?: string;
}

//add all your projects here
let projects: Project[] = [
	{
		id: 1,
		name: "Simple Anime List Application",
		img: "https://i.imgur.com/uwlnOvb.png",
		github: "https://github.com/ziwei531/anime-list-website",
		demo: "https://anime-list-website.vercel.app/",
	},
	{
		id: 2,
		name: "Next JS Blog",
		img: "https://i.imgur.com/o7Df8Um.png",
		github: "https://github.com/ziwei531/next-blog",
		demo: "next-blog-ziwei531.vercel.app",
	},
	{
		id: 3,
		name: "Cyclistic Data Analysis Project",
		img: "https://i.imgur.com/iDssqbP.png",
		github: "https://github.com/ziwei531/cyclistic-analysis",
		demo: "wzw-portfolio.netlify.app/case_study",
	},
];

export default projects;
