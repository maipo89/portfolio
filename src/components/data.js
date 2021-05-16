import easyBank from "../images/easy-bank.jpg"
import easyBankMobile from "../images/easy-bank-mobile.jpg"
import tuttoPepe from "../images/tutto-pepe-landing-page.jpg"
import tuttoPepeSecondPage from "../images/tutto-pepe-second-page.jpg"
import tuttoPepeMobile from "../images/tutto-pepe-mobile.jpg"

const dataPortfolio = [
    {
    title: "Marco Brunetti Portfolio Website", 
    subtitle: "This is my portfolio, an application built from scratch with React (using React-routing and Hooks). I did the UI design and the style using and deployed with Heroku",
    imgs: [
        {title: "Desktop Version", 
         img: easyBank},
        {title: "Mobile Version",
         img: easyBankMobile}],
    technologies: ["HTML", "CSS", "React", "React-Router"],
    link: "https://www.marcobrunetti.com",
    year: "2021",
    id: 1
    },
    {
        title: "Easy-Bank landing page", 
        subtitle: "I coded this landing page from scratch using html and css and add some features with javascript and SVG.",
        imgs: [
            {title: "Desktop Version", 
             img: easyBank},
            {title: "Mobile Version",
             img: easyBankMobile}],
        technologies: ["HTML", "CSS", "JavaScript", "SVG"],
        link: "",
        year: "2021",
        id: 2
    },
    {
    title: "Tutto Pepe front-end E-Commerce", 
    subtitle: "This was my first front end web application built using HTML, CSS and Vanilla Javscript. I made the design of the website and the photo editing of the images with Photoshop.",
    imgs: [
        {title: "Desktop Version", 
         img: tuttoPepe},
        {title: "Mobile Version",
         img: tuttoPepeMobile},
         {title: "Other Pages",
         img: tuttoPepeSecondPage}],
    technologies: ["HTML", "CSS", "JavaScript", "Photoshop"],
    link: "https://maipo89.github.io/tuttopepe/",
    year: "2020",
    id: 3
    }
]

export default dataPortfolio