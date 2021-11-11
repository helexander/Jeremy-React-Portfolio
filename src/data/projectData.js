export const ProjectData = [
    {
        id: 4,
        title: "Simons Game",
        about:
            "A web application inspired by my childhood favourite game, Simon Game. The player must repeat a random sequence of lights by pressing the coloured pads in the correct order. My highest score is 18, can you beat it?",
        tags: ["JavaScript", "HTML", "CSS"],
        demo: "https://helexander.github.io/SimonsGame/",
        github: "https://github.com/helexander/SimonsGame",
        image:
            require('../assets/project_img/simonsgame.gif').default,
    },
    {
        id: 3,
        title: "JavaScript Calculator",
        about:
            "One of my first ever web-based applications that I have built from scratch. Created with an intention of testing my Vanilla JavaScript and SASS abilities.",
        tags: ["HTML", "CSS", "SASS", "JavaScript"],
        demo: "https://helexander.github.io/js-calculator/",
        github: "https://github.com/helexander/js-calculator",
        image:
            require('../assets/project_img/calc.gif').default,
    },
    {
        id: 2,
        title: "React Ecommerce Store",
        about:
            "A React project based off another childhood favourite game of mine, Runescape! Also added a toggleable button which plays the background music of the login page for nostalgic memories. Purpose of the application is to cement my knowledge with React hooks and understand the concept of a persistent database.",
        tags: ["ReactJs", "SASS", "HTML", "Firebase"],
        demo: "https://helexander.github.io/react-runescape-store/",
        github: "https://github.com/helexander/react-runescape-store/tree/main/react-runescape-store",
        image:
            require('../assets/project_img/ecomstore.gif').default,
    },

    {
        id: 1,
        title: "Google Books API",
        about:
            "A web-based application which allows users to retrieve an array of books from the Google Books API. It informs users of some basic information of the books related to the search query. The purpose of this project was to implement an existing web API and to fetch data into an existing program.",
        tags: [
            "JavaScript", "HTML", "CSS", "SASS"
        ],
        demo: "https://helexander.github.io/googlebooks-api/",
        github: "https://github.com/helexander/googlebooks-api",
        image:
            require('../assets/project_img/googlebook.gif').default,
    },
];