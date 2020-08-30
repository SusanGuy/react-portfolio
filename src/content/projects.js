import corona from "../images/coronainnepal.png";
import coolclothing from "../images/coolclothing.png";
import scrumptious from "../images/scrumptious.png";
import portfolio from "../images/portfolio.png";
import booking from "../images/booking.png";
import chitchat from "../images/chitchat.png";
import collabdev from "../images/collabdev.png";
import sentiment from "../images/sentiment.png";
import vandy from "../images/vandy.png";
import sahayog from "../images/sahayog.png";

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: "Sahayog",
    description:
      'A crowdfunding go fund me like initiative for Nepal that allows people to raise money for events ranging from life events such as celebrations and graduations to challenging circumstances like accidents and illnesses. Web version is built using React/Redux and Node/Express Stack and mobile app using Flutter. Payment feature is integrated using <a target = "_blank" rel = "noopener noreferrer" href="https://pub.dev/packages/stripe_payment">Stripe API</a>, <a target = "_blank" rel = "noopener noreferrer" href="https://developer.esewa.com.np/#/">Esewa API</a> and <a target = "_blank" rel = "noopener noreferrer" href="https://docs.khalti.com/">Khalti API</a>.(Update: I am in the process of migrating from Express backend to GraphQL backend using <a target = "_blank" rel = "noopener noreferrer" href="https://www.apollographql.com/docs/apollo-server/">Apollo Server</a> for better performance in both web and mobile.',
    skills: [
      "HTML5",
      "CSS3",
      "Sass",
      "JavaScript",
      "ES6",
      "ReactJS",
      "Redux",
      "Flutter",
      "StripeAPI",
      "PostgreSQL",
      "GraphQL",
    ],
    image: sahayog,
    links: {
      github: "https://github.com/SusanGuy/sahayog-frontend",
      preview: "",
    },
  },
  {
    title: "Corona In Nepal",
    description:
      'This is a real time Covid-19 stats tracker web application for Nepal. We used ReactJS for the frontend and custom express backend to get real time data. Charts are built using <a target = "_blank" rel = "noopener noreferrer" href="https://d3js.org/">D3.js</a> ',
    skills: [
      "HTML5",
      "CSS3",
      "Sass",
      "JavaScript",
      "ES6",
      "ReactJS",
      "D3.js",
      "Node/Express",
    ],
    image: corona,
    links: {
      github: "https://github.com/SusanGuy/Coronavirus-Nepal-Dashboard",
      preview: "https://coronainnepal.com/",
    },
  },
  {
    title: "Scrumptious",
    description:
      'Scrumptious is a meal planning web application that lets you browse,create, filter and favorite recipes. I used <a target = "_blank" rel = "noopener noreferrer" href="https://spoonacular.com/food-api">Spoonacular’s API</a> to populate the MongoDB database with some pre-existing recipes. This web app was developed using MERN stack. Also implemented <a target = "_blank" rel = "noopener noreferrer" href="https://aws.amazon.com/s3/">AWS-S3</a> bucket for all file storage',
    skills: [
      "HTML5",
      "CSS3",
      "Sass",
      "JavaScript",
      "ReactJS",
      "Redux",
      "SpoonacularAPI",
      "MongoDB",
      "AWS",
    ],
    image: scrumptious,
    links: {
      github: "https://github.com/SusanGuy/scrumptious",
      preview: "https://scrumptious-recipe-manager.herokuapp.com/",
    },
  },
  {
    title: "Cool Clothing",
    description:
      'An e-commerce platform to buy clothes built using ReactJS and SaSS and implemented Redux to store overall app state and redux thunk to fetch data from the backend. I used firebase for user authentication and firestore for data storage. Payment processing was done using <a target = "_blank" rel = "noopener noreferrer" href="https://stripe.com/docs/api">Stripe API</a>',
    skills: [
      "HTML5",
      "CSS3",
      "Sass",
      "JavaScript",
      "React",
      "Redux",
      "Firebase",
      "Stripe",
    ],
    image: coolclothing,
    links: {
      github: "https://github.com/SusanGuy/Cool-Clothing",
      preview: "https://cool-live.herokuapp.com",
    },
  },
  {
    title: "YayorNay",
    description:
      'This was a hackathon project at Vanderbilt University. We built an Alexa Skill under 36 hours using Alexa Skill kit that fetches data from <a target = "_blank" rel = "noopener noreferrer" href="https://www.ratemyprofessors.com/">RateMyProfessors</a> to get teacher ratings and reviews. Our custom backend was built using Node/Express that would communicate with API from ratemyprofessors.com.',
    skills: ["AWS", "Alexa Skill Kit", "NodeJS"],
    image: vandy,
    links: {
      github: "https://github.com/SusanGuy/YayorStayAway-AlexaSkill",
      preview: "https://www.youtube.com/watch?v=hw8Pu9C9vHU",
    },
  },
  {
    title: "Portfolio",
    description:
      "This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance. Used GatsbyJS for server side rendering",
    skills: [
      "HTML5",
      "CSS3",
      "Sass",
      "JavaScript",
      "ReactJS",
      "GraphQL",
      "GatsbyJS",
    ],
    image: portfolio,
    links: {
      github: "https://github.com/SusanGuy/react-portfolio",
      preview: "",
    },
  },
  {
    title: "Collab Dev",
    description:
      'A Social network for developers using MERN Stack. I integrated Express and mongoose for server-side and user authentication and authorization between multiple systems, servers, and environments using <a target = "_blank" rel = "noopener noreferrer" href="https://jwt.io/">JWT(JSON Web Tokens)</a>. Client side code was developed using ReactJS and implemented redux to store overall state for the frontend and redux thunk for asynchronous data fetching from the backend',
    skills: [
      "HTML5",
      "CSS3",
      "React",
      "Redux",
      "Node/Express",
      "Semantic UI",
      "MongoDB",
    ],
    image: collabdev,
    links: {
      github: "https://github.com/SusanGuy/Collab-Dev",
      preview: "https://collab-developer.herokuapp.com",
    },
  },
  {
    title: "Chit Chat",
    description:
      'A NodeJS websocket powered chat app . Used <a target = "_blank" rel = "noopener noreferrer" href="https://jwt.io/">socket.io</a>. with Node as a real time engine',
    skills: ["HTML5", "CSS3", "JavaScript", "ES6", "NodeJS", "Socket.io"],
    image: chitchat,
    links: {
      github: "https://github.com/SusanGuy/Chit-Chat",
      preview: "https://chitchatharu.herokuapp.com/",
    },
  },
  {
    title: "Booking Website",
    description:
      'Came out third at <a target = "_blank" rel = "noopener noreferrer" href="https://olemisscie.com/programs/gillespie-business-plan/">OleMiss Bussiness Plan Competition</a> by building an AirBnb like web application but for wildlife. This application lets people reserve a wildlife place(hunting,fishing,or any wildlife area in general). This was a 3 person group project . My role was that I developed Restful APIs using NodeJS Express Framework and Setup RDBMS and database interaction code using MySQL and configured Amazon AWS (Elastic Beanstalk, RDS, etc.)',
    skills: [
      "AWS",
      "HTML5",
      "CSS3",
      "React",
      "Redux",
      "Paypal API",
      "MySQL",
      "Node/Express",
    ],
    image: booking,
    links: {
      github: "https://github.com/SusanGuy/booking-website-frontend",
      preview: "http://giwoolee.s3-website.us-east-2.amazonaws.com/",
    },
  },
  {
    title: "Sentiment Analyzer",
    description:
      'This is a sentiment analysis of the 1.4 million cell phone review extracted from <a target = "_blank" rel = "noopener noreferrer" href="https://www.kaggle.com/masaladata/14-million-cell-phone-reviews">Kaggle</a>. I used different Data Visualization techniques with Python to observe a pattern among cell phone reviewers and draw a statistical conclusion. Finally built a prediction model using TF-IDF Vectorizer and Linear SVM Classifier from <a target = "_blank" rel = "noopener noreferrer" href="https://scikit-learn.org/stable/">scikit-learn</a> library of Python and achieved an accuracy of 94.5%',
    skills: [
      "Scikit-Learn",
      "Python",
      "Jupyter Notebook",
      "Data-Visualization",
      "Python",
    ],
    image: sentiment,
    links: {
      github: "https://github.com/SusanGuy/Cell-Phone-Data-Sentiment-Analysis",
      preview: "",
    },
  },
];
