//PLEASE FOLLOW THE FORMAT OF THIS FILE.
import {  faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons";
import { FaYoutube, FaSpotify } from 'react-icons/fa';

export const userinfo = {
    logoText: 'Michael "Mudcat" Ward', //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'michaelscott@email.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '1234567890', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+91' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        { type: 'facebook', link: 'https://www.facebook.com/profile.php?id=1390464755', icon: faFacebook },
        { type: 'spotify', link: 'https://open.spotify.com/artist/2iFm95ocZxcqHyPjVdwjpg', icon: FaSpotify },
        { type: 'youtube', link: 'https://www.youtube.com/watch?v=H9ZcNQw0pqo&list=OLAK5uy_k_pyLcuj6Bt0sg__6hc8VyzK_CX3IeQ9k', icon: FaYoutube },
    ],
    greeting: {
        //this text goes on your landing page
        title: 'Michael "Mudcat" Ward',
        subtitle: 'Michael "Mudcat" Ward, is an American blues bassist, pianist and songwriter. Primarily he plays both the double bass and bass guitar, although he has recorded tracks playing the piano. Ward has been a member of the Bluetones for over 40 years and had a concurrent spells with the Broadcasters. Ward has gained two Blues Music Awards in his own name, and has participated in the recording of over 60 albums.'
    },
    distinctions: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Instrumentalist – Bass: 2018", // eg.frontend, backend, devops etc
            awardLogo: "https://www.americanbluesscene.com/wp-content/uploads/2010/12/BMA3-234x300.jpg", //eg. react, html, python etc.
            description: "American Blues Music Award for the best bassist in the world" //eg. react, html, python etc.
        },
        {
            category: "Instrumentalist – Bass: 2020",
            awardLogo: "https://www.americanbluesscene.com/wp-content/uploads/2010/12/BMA3-234x300.jpg", //eg. react, html, python etc.
            description: "American Blues Music Award for the best bassist in the world" //eg. react, html, python etc.

        },
  
    ],
    recentDiscography: {
        visible: true, //set this to false if you want to omit this section
        recentDiscographyList: [
            {
                time: 'May - Oct 2020', 
                title: 'MWA', 
                label: 'BMI', 
                place: 'Cambridge, MA', 
                supports: 'LP TP CD'
            },
            {
                time: 'May - Oct 2020',
                title: 'MWA',
                label: 'BMI', 
                place: 'Cambridge, MA', 
                supports: 'LP TP CD'
            },
            {
                time: 'May - Oct 2020',
                title: 'MWA',
                label: 'BMI', 
                place: 'Cambridge, MA', 
                supports: 'LP TP CD'
            },
        ],
    },
    discography: {
        visible: true, //set this to false if you want to omit this section
        discographyList: [
            {
                time: 'May - Oct 2020', 
                title: 'My Isabelle', 
                label: 'BMI', 
                place: 'Cambridge, MA', 
                supports: 'LP TP CD'
            },
            {
                time: 'May - Oct 2020',
                title: 'My Isabelle',
                label: 'BMI', 
                place: 'Cambridge, MA', 
                supports: 'LP TP CD'
            },
            {
                time: 'May - Oct 2020',
                title: 'My Isabelle',
                label: 'BMI', 
                place: 'Cambridge, MA', 
                supports: 'LP TP CD'
            },
            {
                time: 'May - Oct 2020',
                title: 'My Isabelle',
                label: 'BMI', 
                place: 'Cambridge, MA', 
                supports: 'LP TP CD'
            },
            {
                time: 'May - Oct 2020',
                title: 'My Isabelle',
                label: 'BMI', 
                place: 'Cambridge, MA', 
                supports: 'LP TP CD'
            },
            {
                time: 'May - Oct 2020',
                title: 'My Isabelle',
                label: 'BMI', 
                place: 'Cambridge, MA', 
                supports: 'LP TP CD'
            },
        ],
    },

    about: {
        //this text goes at the bottom of your home page.
        content: "'Do I ned to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need like my need to be praised.' Whatever the situation or conflict might be, it can almost always be traced back to this need. His conference room characters, fun runs, and copious amounts of office parties are all aimed at his need to be praised.",
        resume: "/" //link your resume here. it can be drive link or any other link
    },

    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Dunder Mifflin', //company name eg.Microsoft
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Regional Manager', //post you held eg.Senior SDE
                time: 'March 2020 - May 2020', //timespan
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    gigsHomePage: 'Next Gigs',
    gigsMainPage: 'Projects',
    distinctions: 'Distinctions',
    gigs: 'Next Gigs',
    about: 'About Me',
    discography: 'Discography',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'Media',
    gigsCTA: 'View All',
    capabCTA: 'Get in Touch',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}