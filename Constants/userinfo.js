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
        content: `Michael “Mudcat” Ward has been a key player in the New England blues scene for over forty years. His signature traditionally-grounded approach and tone, both on the acoustic upright bass and on Fender bass, have gracefully supported many a roots artist over the years, whether in the recording studio, in clubs, theaters, outdoor venues, or on television broadcasts or film.`,
        resume: "/" //link your resume here. it can be drive link or any other link
    },

    aboutSeeMore: {
        content: `Michael “Mudcat” Ward has been a key player in the New England blues scene for over forty years. His signature traditionally-grounded approach and tone, both on the acoustic upright bass and on Fender bass, have gracefully supported many a roots artist over the years, whether in the recording studio, in clubs, theaters, outdoor venues, or on television broadcasts or film.

        A founding member, along with guitarist Ronnie Earl, of Sugar Ray & the Bluetones back in 1977, Ward’s musical contributions, both on the bass and in composition, have been a vital part of that legendary band’s legacy. Ward was an integral component of the debut LP of Ronnie Earl & the Broadcasters (entitled Smokin’) and of Earl’s subsequent six recordings. Among Ward’s many recordings, his bass lines can be heard backing such blues musical giants as Big Walter Horton (on Little Boy Blue and Live At the Bocce Club); Jimmy Rogers (with Ronnie Earl & the Broadcasters Live in Germany); Kim Wilson and guitarists Jimmy Vaughan, Wayne Bennett and Ronnie Earl on pianist/vocalist Ron Levy’s initial Wild Kingdom; Robert “Junior” Lockwood on Earl’s Surrounded By Love CD; the 2001 Grammy-nominated CD Superharps I featuring James Cotton, Charlie Musselwhite, Billy Branch and Sugar Ray; the 2002 follow-up Superharps II, with blues harmonica greats Lazy Lester, Snooky Pryor, Carey Bell and Raful Neal; and pianist Pinetop Perkins (On Top and Back On Top).
        
        Mr. Ward teamed together with J. Geils Band singer Peter Wolf, the late pianist David Maxwell and Ronnie Earl for the soundtrack to the movie Fried Green Tomatoes and the Whistle Stop Café. He can be seen in the film production about Howlin’ Wolf guitarist Hubert Sumlin (along with Stevie Ray Vaughan) entitled “Living the Blues,” and can be heard on Sumlin’s initial U.S. CD entitled Blues Party. In April 2000, a second opportunity to work with Hubert Sumlin in a recording studio resulted, this time, in the CD About Them Shoes, featuring esteemed British musical stalwarts Eric Clapton and Keith Richards, as well as the late noted drummer and actor Levon Helm, guitarist Bob Margolin and the late blues musician Paul Oscher.
        
        Mudcat Ward has been employed in bands run by former Muddy Waters’ band alumni, including harmonica player and former Eric Clapton sideman Jerry Portnoy, celebrated pianist Pinetop Perkins in concert and on two CD recordings, guitarist/singer Luther “Guitar Jr.” Johnson on the road across the U.S.A. and Canada, singer/harmonica player/guitarist Paul Oscher in concert and on CDs. guitarist/singer Bob Margolin in the clubs, and has worked with Muddy Water’s longtime drummer Willie Smith in the studio on multiple occasions.
        
        An original member of the House of Blues house band at the chain’s very first location in Harvard Square, Cambridge, MA, there Mudcat provided bass underpinnings (on many a Monday night) for noted musicians stopping by informally for a late night musical “cordial” after their own local gig. These drop-ins included Van Morrison, Steve Miller, Joe Walsh, Jr. Wells, and Little Milton among others.
        
        During the mid 1990’s, Ward held the bass chair with Magic Dick and the late Jay Geils (of J. Geils rock band fame) in their traditional blues-band project, called Bluestime, a position Ward held for four years. As a part of Bluestime, Ward composed and recorded the band theme, toured the US and Japan, recorded two studio CD’s, and had been featured on two summer tours of action with B.B. King, Etta James, Robert Cray and Jimmy Vaughan. He also played upright bass on a guitar instructional video tape guitarist Geils made for Hot Licks productions.
        
        One musical project worth attention: Mudcat was the guiding force enabling the final recordings of country singer Dick Curless to be made. Although Curless passed away just before its release on Rounder Records, the CD Traveling Through, produced by Jake Guralnick, son of writer Peter Guralnick, has received critical acclaim and is one of Ward’s proudest endeavors.
        
        These days, the two-time W.C. Handy/Blues Music Award winner and three-time winner in the outstanding bass category in Audience magazine’s readers’ poll can be seen and heard around the globe with Sugar Ray & the Bluetones, Severn recording artists, as the band marks its performance in each of the last four decades. Ward also played and recorded with Bluetones’ award-winning pianist and composer Anthony Geraci, as a member of the Geraci-led Boston All Stars, appearing live and internationally (Poland, Switzerland, Canada).
        
        The Lewiston, Maine-born, Cambridge, MA-located musician still answers the call when traditional bass playing is sought, such as at the Hatch Shell in Boston on the Esplanade (September, 2005). On that specific afternoon, Mudcat Ward could be heard supporting ninety-years-young Mississippi delta musician Honeyboy Edwards a few years before his death. In another realm, Ward the bassist can be found mentioned in two books on blues guitarists; one is Blues All Day Long: The Jimmy Rogers Story by W. Goins, and the other is Incurable Blues: The Troubles and Triumph of Blues Legend Hubert Sumlin by W. Romano. He was included in Peter Guralnick's magnificent Looking To Get Lost and in Susan Antone's book celebrating her brother Clifford's famous Austin, Texas music club. Ward himself is an author, having written the definitive biography of the Native-American two-time Boston Marathon winner, Ellison “Tarzan” Brown, published in 2006.
        
        A list of musicians Michael “Mudcat” Ward has performed with by any account is long and probably incomplete. Such a listing would need to include:
        
        Billy Boy Arnold, Kevin Barry, Little Charlie Baty, Sax Gordon Beadle, Joe Beard, Gerry Beaudoin, Carey Bell, Lurie Bell, Wayne Bennett, Chuck Berry, Brian Besesi, Eric Bibb, Ulrika Bibb, Elvin Bishop, Rory Block, Billy Branch, Denny Breau, John Brim, Nappy Brown, Chris Burns, Little Milton Campbell, Chico Chism, Fran Christina, Eric Clapton, Eddie Clearwater, Johnny Clyde Copeland, James Cotton, Left Hand Frank Craig, Dick Curless, Debbie Davies, James "Thunderbird" Davis, Larry Davis, Detroit Jr., Jim Dickinson, Floyd Dixon, Ola Dixon, Lefty Dizz, Rich Dubois, Ronnie Earl, Honeyboy Edwards, Lowell Fulson, Anson Funderburgh, Grady Gains, J. Geils, Anthony Geraci, Lloyd Glenn, Al Gomez, Troy Gonyea, Neil Gouvin, Otis Grand, Mark Greenberg, Buddy Guy, Phil Guy, Steve Guyger, John Hammond, Per Hanson, Ted “Houserockin'" Harvey, “Screaming” Jay Hawkins, Levon Helm, Miki Honeycutt, Big Walter Horton, Joe Houston,
        
        J. B. Hutto, Doug James, Luther “Guitar Jr.” Johnson, Ilana Katz Katz, Mark “Kaz” Kazanoff, Earl King, Cub Koda, Sleepy LaBeef, Lazy Lester, Sarah Levecque, Duke Levine, Ron Levy, Shirley Lewis, Colin Linden, Johnny Littlejohn, Robert “Junior” Lockwood, Bob Margolin, Steve Marriner, Alberto Marsico, David Maxwell, Matt McCabe, Jimmy McGriff, Jay McShann, R.J. Mischo, Jerry Miller, Steve Miller, John Mills, Iverson Minter aka Louisiana Red, Johnny Moeller, Mike Morgan, Big Bill Morganfield, Van Morrison, Joe Moss, Nick Moss, Maria Muldaur, Matt “Guitar” Murphy, Charlie Musselwhite, Mark Naftalin, Raful Neal, Chicago Bob Nelson, Jimmy “T-99” Nelson, John Nicholas, Sugar Ray Norcia, Darryll Nulisch, Paul Oscher, Pinetop Perkins, Brewer Phillips, Greg Picolo, Jerry Portnoy, Snooky Pryor, Sugaray Raiford, George Raines, Kid Ramos, George Recile, Jason Ricci, Keith Richards, Marty Richards, Duke Robillard, Hubcap Robinson, Tad Robinson, Jimmy Rogers, John Rossi, Otis Rush, Curtis Salgado, Magic Dick (Salwitz), Alex Schultz, Paul Size, Memphis Slim, Sunnyland Slim, Willie “Big Eyes” Smith, Hubert Sumlin, Roosevelt Sykes, Eddie Taylor, Jr., Brian Templeton, Benmont Tench, Irma Thomas, Racky Thomas, Big Mama Thornton, Nico Wayne Toussaint, Johnny Tucker, Big Joe Turner, Jimmy Vaughan, Eddie “Cleanhead” Vinson, Joe Walsh, Peter “Hi-Fi” Ward, Toni Lynn Washington, “Monster” Mike Welch, Jr. Wells, T.J. Wheeler, Jody Williams, Mike Williams, Willie Williams, Michelle Willson, Kim Wilson, Smokey Wilson, Peter Wolf, Zora Young and Tony Z.
        
        Michael “Mudcat” Ward
        
        June, 2022`
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
    articles: {
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
    articles: 'They wrote about me',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'Media',
    gigsCTA: 'View All',
    capabCTA: 'Get in Touch',
    resumeCTA: 'see more',
    submitBTN: 'Submit'
}