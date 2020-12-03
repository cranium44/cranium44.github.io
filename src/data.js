// This file stores all the information in the website
// edit/update the data here
import image from '../src/assets/placeholder.png'
const about = "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"

const interests = ["Lorem Ipsum", "Moton Ideal", "Pira Neve", "Dolor Sitema"]

const porfolioProjects = [
    {
        id: 1,
        title: "Project 1",
        description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        technologies: ['Kotlin' ,'Java'],
        url: "https://github.com",
        image: image
    },
    {
        id: 2,
        title: "Project 2",
        description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        technologies: ['Java', 'C#', 'C'],
        url: "https://github.com",
        image: image
    },
    {
        id: 3,
        title: "Project 3",
        description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        technologies: ['Java', 'C#'],
        url: "https://github.com",
        image: image
    },
    {
        id: 4,
        title: "Project 4",
        description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        technologies: ['Java', 'JavaScript'],
        url: "https://github.com",
        image: image
    },
    {
        id: 5,
        title: "Project 5",
        description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        technologies: [ 'C', 'JavaScript'],
        url: "https://github.com",
        image: image
    },
]


const contactDetails = {
    name: "Adabe",
    phone: "+234 54454323",
    email: "dabs@gmail.com",
    address: "Nigeria",
    instagram: "https://instagram.com/",
    linkedin: "https://www.linkedin.com/in",
    twitter: "http://twitter.com/",
    facebook: "https://facebook.com/",

}
export { porfolioProjects, about, interests, contactDetails }
