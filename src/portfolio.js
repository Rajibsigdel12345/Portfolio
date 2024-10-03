/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rajib Sigdel",
  title: "Hello, I'm Rajib Sigdel",
  subTitle: emoji(
    "I'm a backend developer specializing in Django and Django REST Framework, with experience in Docker, GitHub Actions, and CI/CD pipelines. My skills include Python, Numpy, Scikit-learn, TensorFlow, and Docker. I'm passionate about machine learning, AI, and building efficient, scalable software solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_lGsgDgV2A1WqNM_CL2cRSNul13mGXkE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rajibsigdel12345",
  linkedin: "https://www.linkedin.com/in/rajib-sigdel/",
  gmail: "rajibsigdel12345@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/Razevesigdel1",
  medium: "https://medium.com/@rajibsigdel12345",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACKEND DEVELOPER WHO WANTS TO EXPLORE AI AND MACHINE LEARNING",
  skills: [
    emoji(
      "⚡ Develop highly dynamic and scalable Back end / Rest APIs for your applications"
    ),
    emoji("⚡ Focus on Best Devops Practices and deliver the application to you in a CI/CD pipeline"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName : "Django",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName : "REST API",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },


  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Amrit Campus, Tribhuvan University",
      logo: require("./assets/images/Tu.png"),
      subHeader: "Bachelors of Science in Computer Science and Information Technology",
      duration: "April 2021 - April 2025",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, Database Management Systems, Image Processing and more.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Kathmandu Institute of Science and Technology (KIST)",
      logo: require("./assets/images/logo_small.png"),
      subHeader: "10+2 in Computer Science",
      duration: "June 2018 - June 2020",
      desc: "Completed my High School taking Science stream with Math major",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    },
    {
      Stack: "AI & Machine Learning",
      progressPercentage: "30%"
    },
    {
      Stack: "Devops and Security",
      progressPercentage: "10%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/facebookLogo.png"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      role: "Junior Backend Developer",
      company: "Spices Research",
      companylogo: require("./assets/images/spices.png"),
      date: "May 2017 – May 2018",
      desc: ""
    },
    {
      role: "Backend Developer Intern",
      company: "Spices Research",
      companylogo: require("./assets/images/spices.png"),
      date: "April 2024 – August 2024",
      desc: "Worked As a Backend Developer Intern at Spices, a startup company that focuses on providing It solutions. I was responsible for developing and maintaining few Micro Service of the company's web application, which was built using Django and Django REST Framework."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/providhy.png"),
      projectName: "Providhy",
      projectDesc: "An Saas based platform for Enterprise Resource Planning",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://providhy.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Deep Learning Specialization",
      subtitle: "Completed Certifcation from Coursera consisting of 5 courses: Neural Networks and Deep Learning, Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization, Structuring Machine Learning Projects, Convolutional Neural Networks, and Sequence Models.",
      image: require("./assets/images/Deeplearning_Specialization.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "View Certificate", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/E2HXX3J5GMI1"},
        {
          name: "Verify Certificate",
          url: "https://www.coursera.org/account/accomplishments/specialization/E2HXX3J5GMI1"
        },
      ]
    },
    {
      title: "Neural networks and Deep Learning",
      subtitle:
        "Deep Learning Specialization on Coursera by Andrew Ng",
      image: require("./assets/images/Neural_networks.png"),
      imageAlt: "Neural networks and Deep Learning",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/4GZPPG2Q83P7"
        },
        {
          name: "Verify certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/4GZPPG2Q83P7"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      subtitle:
        "Learned to improve deep neural networks with techniques such as initialization, L2 and dropout regularization, batch normalization, and gradient checking.",
      image: require("./assets/images/Improving_neural_net.png"),
      imageAlt: "Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/Y2W8PNJ4QZ7H"
        },
        {
          name: "Verify Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/Y2W8PNJ4QZ7H"
        }
      ]
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "9840754843",
  email_address: "rajibsigdel12345@gmail.com",
  display:true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
