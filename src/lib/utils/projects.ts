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
		id: 4,
		name: "Full Stack To Do List Application",
		img: "https://i.imgur.com/Ymi7ohv.png",
		github: "https://github.com/ziwei531/to-do-list",
		demo: "https://to-do-list-ziwei531.vercel.app/",
	},
	{
		id: 5,
		name: "URL Shortener",
		img: "https://i.imgur.com/cQoBZyc.png",
		github: "https://github.com/ziwei531/URL-shortener",
		demo: "https://kind-ruby-bee-coat.cyclic.app",
	},
	{
		id: 2,
		name: "Next JS Blog",
		img: "https://i.imgur.com/o7Df8Um.png",
		github: "https://github.com/ziwei531/next-blog",
		demo: "nhttps://next-blog-ziwei531.vercel.app",
	},
	{
		id: 3,
		name: "Cyclistic Data Analysis Project",
		img: "https://i.imgur.com/iDssqbP.png",
		github: "https://github.com/ziwei531/cyclistic-analysis",
		demo: "https://wzw-portfolio.netlify.app/case_study",
	},

	{
		id: 6,
		name: "Documentation Website",
		img: "https://i.imgur.com/pF77DjX.png",
		github: "https://github.com/ziwei531/fcc-js-docs",
		demo: "https://ziwei531.github.io/fcc-js-docs",
	},
	{
		id: 7,
		name: "Product Landing Page",
		img: "https://i.imgur.com/6pFLmpH.png",
		github: "https://github.com/ziwei531/fcc-product-landing-page",
		demo: "https://ziwei531.github.io/fcc-product-landing-page/",
	},
	{
		id: 8,
		name: "Sample Portfolio Website",
		img: "https://i.imgur.com/yzWVbaG.png",
		github: "https://github.com/ziwei531/fcc-personal-portfolio",
		demo: "https://ziwei531.github.io/fcc-personal-portfolio/",
	},
	{
		id: 9,
		name: "Sample Survey Form",
		img: "https://i.imgur.com/kPFY7DQ.png",
		github: "https://github.com/ziwei531/fcc-survey-form",
		demo: "https://ziwei531.github.io/fcc-survey-form/",
	},
	{
		id: 10,
		name: "Tribute Website",
		img: "https://i.imgur.com/umCKSf6.png",
		github: "https://github.com/ziwei531/fcc-tribute-website",
		demo: "https://ziwei531.github.io/fcc-tribute-page/",
	},
	{
		id: 11,
		name: "Markdown Editor Demo",
		img: "https://i.imgur.com/Gaudwo7.png",
		github: "https://github.com/ziwei531/Markdown-Editor-Demo",
		demo: "https://f4qflw-5173.csb.app/",
	},
	{
		id: 12,
		name: "Bellabeat data Analyst Case Study",
		img: "/images/Bellabeat.png",
		github: "https://github.com/ziwei531/bellabeat-case-study",
		demo: "https://ziwei531.github.io/bellabeat-case-study/",
	},
];

export default projects;
