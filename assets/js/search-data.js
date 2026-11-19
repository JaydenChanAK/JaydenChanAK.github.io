// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-sentiment-analysis-for-stock-market-trend-prediction",
              title: "Sentiment Analysis for Stock Market Trend Prediction",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/artificial%20intelligence/sentiment_analysis/";
              },
            },{id: "dropdown-aircraft-identification-tool",
              title: "Aircraft Identification Tool",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/artificial%20intelligence/aircraft_identification_tool/";
              },
            },{id: "dropdown-heart-disease-prediction-tool",
              title: "Heart Disease Prediction Tool",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/artificial%20intelligence/heart_disease_prediction_tool/";
              },
            },{id: "dropdown-all-ai-projects",
              title: "All AI Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/artificial_intelligence/";
              },
            },{id: "dropdown-hangout",
              title: "Hangout",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/software%20development/hangout/";
              },
            },{id: "dropdown-youtube-wrapped",
              title: "YouTube Wrapped",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/software%20development/yt_wrapped/";
              },
            },{id: "dropdown-rate-my-tos",
              title: "Rate My TOS",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/software%20development/rate_my_tos/";
              },
            },{id: "dropdown-all-software-projects",
              title: "All Software Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/software_development/";
              },
            },{id: "dropdown-flay",
              title: "Flay",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/games/flay/";
              },
            },{id: "dropdown-parrying-god",
              title: "Parrying God",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/games/parrying_god/";
              },
            },{id: "dropdown-line-by-line",
              title: "Line By Line",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/games/line_by_line/";
              },
            },{id: "dropdown-my-hot-vampire-date-is-trying-to-kill-me",
              title: "My Hot Vampire Date is Trying to Kill Me!",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/games/vampire_date/";
              },
            },{id: "dropdown-all-games",
              title: "All Games",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/games/";
              },
            },{id: "nav-projects",
          title: "projects",
          description: "A mostly complete collection of my projects and games.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-aircraft-identification-tool",
          title: 'Aircraft Identification Tool',
          description: "Computer Vision Developer  ML pipeline and model to classify aircraft.  January - February 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/artificial%20intelligence/aircraft_identification_tool/";
            },},{id: "projects-heart-disease-prediction-tool",
          title: 'Heart Disease Prediction Tool',
          description: "Full-Stack ML Developer  Website to predict chance of heart disease.  November 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/artificial%20intelligence/heart_disease_prediction_tool/";
            },},{id: "projects-regression-and-classification",
          title: 'Regression and Classification',
          description: "Machine Learning Developer  Regression and classification models.  April - May 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/artificial%20intelligence/regression_and_classification/";
            },},{id: "projects-sentiment-analysis-for-stock-market-trend-prediction",
          title: 'Sentiment Analysis for Stock Market Trend Prediction',
          description: "Sentiment Pipeline Developer  Team research project testing whether tweet sentiment helps predict stock direction.  August 2026 - November 2026",
          section: "Projects",handler: () => {
              window.location.href = "/projects/artificial%20intelligence/sentiment_analysis/";
            },},{id: "projects-brimstone-buddies",
          title: 'Brimstone Buddies',
          description: "Lead Game Designer  &#39;Cute and fucked up&#39; deathmatch card game.  March - May 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/games/brimstone_buddies/";
            },},{id: "projects-capitalist-craze",
          title: 'Capitalist Craze',
          description: "Lead Game Designer  All is fair in love, war, and the relentless pursuit of corporate domination.  February - March 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/games/capitalist_craze/";
            },},{id: "projects-flay",
          title: 'FLAY',
          description: "Designer and Gameplay Programmer  WIP  June 2026 - present",
          section: "Projects",handler: () => {
              window.location.href = "/projects/games/flay/";
            },},{id: "projects-line-by-line",
          title: 'Line By Line',
          description: "QA Lead  Use your wits to solve a murder.  August 2026 - present",
          section: "Projects",handler: () => {
              window.location.href = "/projects/games/line_by_line/";
            },},{id: "projects-parrying-god",
          title: 'Parrying God',
          description: "Designer and Gameplay Programmer  Sekiro meets Smash Bros.  January - May 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/games/parrying_god/";
            },},{id: "projects-my-hot-vampire-date-is-trying-to-kill-me",
          title: 'My Hot Vampire Date Is Trying To Kill Me!',
          description: "Designer and Developer  You can (not) fix her.  February - April 2026",
          section: "Projects",handler: () => {
              window.location.href = "/projects/games/vampire_date/";
            },},{id: "projects-hangout",
          title: 'Hangout',
          description: "Full-Stack Developer  Mobile web app that gets plans out of the group chat and actually happening.  August 2026 - November 2026",
          section: "Projects",handler: () => {
              window.location.href = "/projects/software%20development/hangout/";
            },},{id: "projects-rate-my-tos",
          title: 'Rate My TOS',
          description: "Developer and AI Lead  Chrome extension to evaluate terms of service.  November 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/software%20development/rate_my_tos/";
            },},{id: "projects-youtube-wrapped",
          title: 'YouTube Wrapped',
          description: "Chrome Extension Developer  Chrome extension that tracks your YouTube watch time and gives you a Spotify-Wrapped-style recap.  July 2026",
          section: "Projects",handler: () => {
              window.location.href = "/projects/software%20development/yt_wrapped/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%79%64%65%6E%63%68%61%6E%32%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JaydenChanAK", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jaydenchanak", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
