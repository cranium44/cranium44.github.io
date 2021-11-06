// This file stores all the information in the website
// edit/update the data here
const about =
	"I am an innovative software developer with a keen interest in solving problems using modern technologies. Seeking to leverage my programming skills and other soft skills to developing, testing, and maintaining enterprise software applications.";

const interests = ["Learning", "Reading", "Video games", "Football"];

const softSkills = [
	"Proven leadership skills",
	"SCRUM (Agile)",
	"Effective communications",
	"Teamwork",
	"Problem solving",
	"Adaptability",
];

const skills = [
	"Android Development",
	"REST API and web services",
	"Kotlin (Fluent), Java(Fluent), Flutter (Intermediate),  Python (Intermediate)",
	"JavaScript, HTML, CSS",
	"Version control (Git)",
	"Firebase and Google Cloud",
	"Relational and Graph databases",
	"CI/CD Tools (CircleCI, Azure, Github)",
];

const porfolioProjects = [
	{
		id: 1,
		title: "Movie Hut",
		description:
			"A mobile app that allows a user to check the latest trending movies, save favourites and even watch the trailers.",
		technologies: ["Kotlin", "Android", "YouTube Api", "IMDb Api"],
		url: "https://github.com/cranium44/MovieHut",
	},
	{
		id: 2,
		title: "My Root App",
		description:
			"An android app that allows a user to contribute to reforestation in Africa by bying trees that will be named after them.",
		technologies: ["Kotlin", "Android"],
		url: "https://github.com/cranium44/myrootapp",
	},
	{
		id: 3,
		title: "Feed Me",
		description:
			"An app that allows people share cooking recipes, invite friends over to a meal and connect all that love food and cooking.",
		technologies: ["Kotlin", "Android", "AndroidX Jetpack"],
		url: "https://github.com",
	},
	{
		id: 4,
		title: "Portfolio Website",
		description:
			"My portfolio website displaying all the works I have created.",
		technologies: ["ReactJS", "Bootstrap", "SCSS"],
		url: "https://github.com/cranium44/cranium44.github.io",
	},
	{
		id: 5,
		title: "Tappy",
		description:
			"A clone of the Tappy Mobile Game where you navigate a bird through obstacles.",
		technologies: ["C#", "Unity"],
		url: "https://github.com/cranium44/Tappy",
	},
];

const contactDetails = {
	name: "Adabe Echaim",
	phone: "+234 903 323 7339",
	emai: "adabeechaim@gmail.com",
	address: "Nigeria",
	instagram: "https://instagram.com/",
	linkedin: "https://www.linkedin.com/in/adabe-echaim-31273a8b/",
	twitter: "https://twitter.com/cranium_44",
	facebook: "https://facebook.com/cranium44",
	github: "https://github.com/cranium44",
};
export { porfolioProjects, about, interests, contactDetails, skills, softSkills };
