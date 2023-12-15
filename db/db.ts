import blog from "../src/assets/works/blog.png";
import personal from "../src/assets/works/personal.png";
import NodeJs from "../src/assets/icons/node.svg"
import ReactJs from "../src/assets/icons/react.svg";
import Npm from "../src/assets/icons/npm.svg";
import ReduxJs from "../src/assets/icons/redux.svg";
import Ts from "../src/assets/icons/ts.svg";
import Git from "../src/assets/icons/git.svg";
import Js from "../src/assets/icons/js.svg";
import Mdb from "../src/assets/icons/mongodb.svg";
import Html from "../src/assets/icons/html-5.svg";
import { IDb } from "./types";



export const db: IDb = {
    de: {
        mainTop: [
            {
                id: "45jgfcß",
                title: `Hi, ich bin  Muslim Zamukaev Web Developer.`,
                btnText: "Kontaktieren Sie mich"
            },
        ],
        aboutMe: [
            {
                id: 123,
                title: 'Über mich',
                text: 'Ich bin ein Frontend-Entwickler mit umfangreicher Erfahrung in der Verwendung von HTML, CSS, SCSS, JS, TS, React, Redux, Redux-Toolkit, Redux-Thunk, MobX, CSS-Modulen, MUI, NPM, Git und GitHub. Ich bin motiviert und engagiert, immer auf dem neuesten Stand der Technologien und Trends in der Frontend-Entwicklung zu bleiben. Ich habe eine Leidenschaft für die Erstellung benutzerfreundlicher und ansprechender Websites und Anwendungen, die ein hervorragendes Benutzererlebnis bieten. Ich bin außerdem ein Teamplayer und habe Erfahrung in der Zusammenarbeit mit Entwicklern und Designern. Ich bin bereit, meine Fähigkeiten und Erfahrungen in einem beruflichen Umfeld einzusetzen, um erfolgreiche Projekte umzusetzen.',
                image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
                cv: 'cv/cv.pdf',

            }
        ],
        aboutItems: [
            {
                id: 1,
                icon: '',
                title: 'Meine Reise',
                text: 'Nach meinem Umzug nach Deutschland Ende 2016 und den anfänglich schwierigen Jahren, in denen ich um mein Aufenthaltsrecht in Deutschland gekämpft habe, und nach meiner Integration in ein neues Land und eine neue Kultur, nachdem ich eine für mich neue Sprache erlernt habe, entschließe ich mich zu einer neuen Herausforderung.',
                cls: 'col1',
            },
            {
                id: 2,
                icon: '',
                title: 'Meine Leidenschaft',
                text: 'Als Philologe war ich immer von Sprachen und ihrer Struktur fasziniert, weshalb mich das Interesse an Programmiersprachen nie losgelassen hat. In meiner Freizeit habe ich mich intensiv mit Programmiersprachen beschäftigt und konnte bald erste Erfahrungen sammeln. Es wurde schnell deutlich, dass ich dies beruflich weiterverfolgen möchte.',
                cls: 'col2'
            },

            {
                id: 3,
                icon: '',
                title: 'Meine Suche',
                text: 'Schließlich entscheide ich mich, einen professionellen Programmierkurs zu besuchen. Bei meiner Suche bin ich auf Indisoft gestoßen. Nach erfolgreichem Abschluss meiner Weiterbildung bei Indisoft habe ich nicht innegehalten. Ich war als Freelancer tätig und habe in der Zwischenzeit zwei Bootcamps absolviert, eines am Fachinstitut für Informatik und Grafikdesign und ein weiteres bei Neue Fische.',
                cls: 'col3'
            },

            {
                id: 4,
                icon: '',
                title: 'Die Reise geht weiter',
                text: 'Mit dem Wissen und den Erfahrungen, die ich während meiner Reise in der IT-Welt gesammelt habe, fühle ich mich jetzt gut vorbereitet. Dennoch ist es für mich noch nicht genug. Es macht mir einfach zu viel Spaß, um einfach aufzuhören, mich weiterzubilden.',
                cls: 'col4'
            }
        ],
        works: [
            {
                id: '1h4u62',
                title: 'Personal Website',
                text: 'Next.js basierte Web-App (Personal Website)',
                gitHubLink: 'https://github.com/zamukaev/personal_web-site',
                pageLink: 'https://personal-web-site-zamukaev.vercel.app/',
                image: personal,
                category: 'next.js'
            },
            {
                id: '1h245632',
                title: 'Blog',
                text: 'Next.js basierte Web-App (Blog-Plattform)',
                gitHubLink: 'https://github.com/zamukaev/capstone-project',
                pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
                image: blog,
                category: 'react.js'
            },
            {
                id: '1e6b981',
                title: 'Blog',
                text: 'Next.js basierte Web-App (Blog-Plattform)',
                gitHubLink: 'https://github.com/zamukaev/capstone-project',
                pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
                image: blog,
                category: 'next.js'
            },
            {
                id: '0e6b31',
                title: 'Blog',
                text: 'Next.js basierte Web-App (Blog-Plattform)',
                gitHubLink: 'https://github.com/zamukaev/capstone-project',
                pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
                image: blog,
                category: 'next.js'
            },
        ],
        skills: [
            {
                text: "JavaScript",
                icon: Js,
            },
            {
                text: "TypeScript",
                icon: Ts,
            },
            {
                text: "React / Next.js",
                icon: ReactJs,
            },
            {
                text: "Redux",
                icon: ReduxJs,
            },
            {
                text: "HTML / CSS",
                icon: Html,
            },
            {
                text: "Node.js",
                icon: NodeJs,
            },
            {
                text: "MongoDB / Mongoose",
                icon: Mdb,
            },
            {
                text: "npm",
                icon: Npm,
            },
            {
                text: "Git / GitHub",
                icon: Git,
            },
        ],
        tabs: [
            { text: 'Alle', id: 0, category: '' },
            { text: 'React', id: 1, category: 'react.js' },
            { text: 'Next', id: 2, category: 'next.js' }
        ],
        navigation: [
            { id: "home", content: 'home' },
            { id: "skill", content: 'Kenntnisse' },
            { id: "portfolio", content: 'Arbeiten' },
            { id: "about me", content: 'Über mich' },
        ]
    },
    en: {
        mainTop: [
            {
                id: 'jd24',
                title: "Hi, I'm Muslim Zamukaev Web Developer.",
                btnText: "contact me"
            },
        ],
        aboutMe: [
            {
                id: 123,
                title: 'About me',
                text: 'I am a frontend developer with extensive experience in using HTML, CSS, SCSS, JS, TS, React, Redux, Redux-Toolkit, Redux-Thunk, MobX, CSS Modules, MUI, NPM, Git and GitHub. I am motivated and committed to always staying up to date with the latest technologies and trends in front-end development. I have a passion for creating user-friendly and engaging websites and applications that provide an excellent user experience. I am also a team player and have experience working with developers and designers. I am ready to use my skills and experience in a professional environment to implement successful projects.',
                image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
                cv: 'cv/cv.pdf',

            }
        ],
        aboutItems: [
            {
                id: 1,
                icon: '',
                title: 'My Journy',
                text: "After moving to Germany at the end of 2016 and the initially difficult years in which I fought for my right to reside in Germany, and after my integration into a new country and a new culture, after learning a language that was new to me, I decided to a new challenge.",
                cls: 'col1',
            },
            {
                id: 2,
                icon: '',
                title: "My passion",
                text: "As a philologist, I was always fascinated by languages and their structure, which is why my interest in programming languages has never left me. In my free time I worked intensively with programming languages and was soon able to gain my first experiences. It quickly became clear that I wanted to pursue this professionally.",
                cls: 'col2'
            },

            {
                id: 3,
                icon: '',
                title: "My search",
                text: "Schließlich entscheide ich mich, einen professionellen Programmierkurs zu besuchen. Bei meiner Suche bin ich auf Indisoft gestoßen. Nach erfolgreichem Abschluss meiner Weiterbildung bei Indisoft habe ich nicht innegehalten. Ich war als Freelancer tätig und habe in der Zwischenzeit zwei Bootcamps absolviert, eines am Fachinstitut für Informatik und Grafikdesign und ein weiteres bei Neue Fische.",
                cls: 'col3'
            },

            {
                id: 4,
                icon: '',
                title: "The trip goes on",
                text: "With the knowledge and experience I have gained during my journey in the IT world, I now feel well prepared. However, it is still not enough for me. I'm just having too much fun to just stop educating myself.",
                cls: 'col4'
            }
        ],
        works: [
            {
                id: '1h4u62',
                title: 'Personal Website',
                text: 'Next.js based wep-app(Personal Website)',
                gitHubLink: 'https://github.com/zamukaev/personal_web-site',
                pageLink: 'https://personal-web-site-zamukaev.vercel.app/',
                image: personal,
                category: 'next.js'
            },
            {
                id: '1h245632',
                title: 'Blog',
                text: 'Next.js based wep-app(Blog platform)',
                gitHubLink: 'https://github.com/zamukaev/capstone-project',
                pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
                image: blog,
                category: 'react.js'
            },
            {
                id: '1e6b981',
                title: 'Blog',
                text: 'Next.js based wep-app(Blog platform)',
                gitHubLink: 'https://github.com/zamukaev/capstone-project',
                pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
                image: blog,
                category: 'next.js'
            },
            {
                id: '0e6b31',
                title: 'Blog',
                text: 'Next.js based wep-app(Blog platform)',
                gitHubLink: 'https://github.com/zamukaev/capstone-project',
                pageLink: 'https://capstone-project-zamukaev.vercel.app/login',
                image: blog,
                category: 'next.js'
            },
        ],
        skills: [
            {
                text: "JavaScript",
                icon: Js,
            },
            {
                text: "TypeScript",
                icon: Ts,
            },
            {
                text: "React / Next.js",
                icon: ReactJs,
            },
            {
                text: "Redux",
                icon: ReduxJs,
            },
            {
                text: "HTML / CSS",
                icon: Html,
            },
            {
                text: "Node.js",
                icon: NodeJs,
            },
            {
                text: "MongoDB / Mongoose",
                icon: Mdb,
            },
            {
                text: "npm",
                icon: Npm,
            },
            {
                text: "Git / GitHub",
                icon: Git,
            },
        ],
        tabs: [
            { text: 'All', id: 0, category: '' },
            { text: 'React', id: 1, category: 'react.js' },
            { text: 'Next', id: 2, category: 'next.js' }
        ],
        navigation: [
            { id: "home", content: 'home' },
            { id: "skill", content: 'skill' },
            { id: "portfolio", content: 'portfolio' },
            { id: "about me", content: 'about me' },
        ]
    }

}