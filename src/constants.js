import { AttachmentIcon, EmailIcon, PhoneIcon, StarIcon } from '@chakra-ui/icons';
import PrincessIcon from './app/components/svgs/PrincessIcon';
import MSTeamsIcon from './app/components/svgs/MSTeamsIcon';
import PTGIcon from './app/components/svgs/PTGIcon';
import BasicsIcon from './app/components/svgs/BasicsIcon';
import NextIcon from './app/components/svgs/NextIcon';
import ReactIcon from './app/components/svgs/ReactIcon';
import ToolsIcon from './app/components/svgs/ToolsIcon';
import ChecklistIcon from './app/components/svgs/ChecklistIcon';
import OpenBookIcon from './app/components/svgs/OpenBookIcon';
import ChatBubblesIcon from './app/components/svgs/ChatBubblesIcon';
import CycleIcon from './app/components/svgs/CycleIcon';

// Animation settings for fading in and out
export const fadeAnimation = {
  initial: { opacity: 0.3 },
  animate: { opacity: 1 },
  exit: { opacity: 0.5 },
  transition: { duration: 0.8 } // Adjust the duration for smoothness
};

// Animation for headings (Reveal effect)
export const headingVariants = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3 }
  }
};

// Animation settings for changing height
export const getHeightAnimation = (type = 'slow') => {
  return {
    initial: {
      height: 0
    },
    animate: {
      height: '100%'
    }, // Adjust the target height as needed
    exit: {
      height: 0
    },
    transition: {
      duration: type === 'slow' ? 1.4 : 0.6,
      type:
        'tween'
    } // Use 'tween' for smoother height animations
  };
};

// Custom animation for the list
export const getListVariantsReveal = () => {
  return {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };
};

// Custom animation for each list item
export const getListItemVariantsReveal = () => {
  return {
    hidden: {
      opacity: 0,
      x: -10
    },
    visible: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: 10
    }
  };
};

export const contentContainerStyles = {
  placeContent: 'center',
  gap: '40px',
  marginTop: '24px',
  direction: 'column',
  alignSelf: 'center',
  width: '100vw',
  height: '100vh'
};

export const getBaseWrapperProps = (isMobile, isTablet, side) => {
  const isLeftSide = side === 'left';
  return {
    width: isMobile ? '85%' : '95%',
    borderBottomLeftRadius: '10',
    borderTopRightRadius: '10',
    borderBottomRightRadius: isLeftSide ? '0' : '100',
    borderTopLeftRadius: isLeftSide ? '100' : '0',
    borderLeft: isLeftSide ? '1px' : '0',
    borderTop: isLeftSide ? '1px' : '0',
    borderRight: isLeftSide ? '0' : '1px',
    borderBottom: isLeftSide ? '0' : '1px',
    boxShadow: 'lg',
    display: 'flex',
    placeContent: 'center',
    placeSelf: 'center',
    flexDirection: isMobile ? 'column' : 'row'
  };
};

export const getExperienceSegments = ({ colorHexes }) => {
  return [
    {
      id: 'exp-pcl',
      header: 'Princess Cruiselines',
      subheader: 'Current Position. Lead UI developer for PCL’s primary booking system since Nov. 2021.',
      icon: (<PrincessIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'exp-pcl-1',
          text: 'Major code owner of princess.com/cruise-search/, PCLs primary source of online Booking Revenue.'
        },
        {
          id: 'exp-pcl-2',
          text: 'Regularly builds complex features, defines new standards, and overhauls application architecture.'
        },
        {
          id: 'exp-pcl-3',
          text: 'Sole developer in re-building a legacy Deck Plans front-end into a modern React SPA.'
        }
      ],
      color: '#003595'
    },
    {
      id: 'exp-mst',
      header: 'Microsoft Teams',
      subheader: 'Worked for MSTeams Rooms, Microsoft\'s smart conference room solution. Nov. 2019 - Jun. 2021.',
      icon: (<MSTeamsIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'exp-mst-1',
          text: 'Made significant contributions like a component to switch the display config of a Room.'
        },
        {
          id: 'exp-mst-2',
          text: 'Part of a massive effort to migrate MSTeams from AngularJS to modern React.'
        },
        {
          id: 'exp-mst-3',
          text: 'Resolved numerous bugs and followed enterprise-level methodology and code review.'
        }
      ],
      color: '#6264A7'
    },
    {
      id: 'exp-ptg',
      header: 'People Tech Group',
      subheader: 'First position, worked on enterprise-level React projects as an intern, then Junior in 2019.',
      icon: (<PTGIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'exp-ptg-1',
          text: '1 out of 14 interns selected for a Junior-level position.'
        },
        {
          id: 'exp-ptg-2',
          text: 'Worked on enterprise-level projects with senior developers for a large contract w/ Costco.'
        },
        {
          id: 'exp-ptg-3',
          text: 'Contributed a notification system and conditional rendering based on user role.'
        }
      ],
      color: '#A72037'
    }
  ];
};

export const getToolsSegments = ({ colorHexes }) => {
  return [
    {
      id: 'tool-react',
      header: 'React v18',
      subheader: '7 years of experience with modular and reusable React components.',
      icon: (<ReactIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'tool-react-1',
          text: 'React - 7 years'
        },
        {
          id: 'tool-react-2',
          text: 'Designs sensible component hierarchies with re-usable components.'
        },
        {
          id: 'tool-react-3',
          text: 'Utilizes modern practices such as functional components, hooks, and memoization.'
        },
        {
          id: 'tool-react-4',
          text: 'Can build enterprise-level projects from the ground up.'
        }
      ],
      color: '#61DAFB'
    },
    {
      id: 'tool-redux-next',
      header: 'Redux & NextJS',
      subheader: 'Experience with state management and modern SSR with Redux and NextJS.',
      icon: (<NextIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'tool-redux-next-1',
          text: 'Redux (Toolkit) - 5 years'
        },
        {
          id: 'tool-redux-next-2',
          text: 'Uses latest methodology of Slices and feature-based organization for state-management.'
        },
        {
          id: 'tool-redux-next-3',
          text: 'NextJS - 3 years'
        },
        {
          id: 'tool-redux-next-4',
          text: 'Leverages server components and the App Directory Structure, as well as ChakraUI and TailwindCSS libraries.'
        }
      ],
      color: '#764ABC'
    },
    {
      id: 'tool-other',
      header: 'The Other Stuff',
      subheader: '6 years of professional experience has culminated into a deep knowledge for other tools that are standard today.',
      icon: (<ToolsIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'tool-other-1',
          text: 'AEM Integration'
        },
        {
          id: 'tool-other-2',
          text: 'Telemetry Implementations'
        },
        {
          id: 'tool-other-3',
          text: 'Unit Test Design'
        },
        {
          id: 'tool-other-4',
          text: 'UX Background, Git, Agile'
        },
        {
          id: 'tool-other-5',
          text: 'Legacy Tech such as jQuery, XML, AngularJS, etc.'
        }
      ],
      color: '#4A90E2'
    },
    {
      id: 'tool-basics',
      header: 'The Basics',
      subheader: '10+ years experience with web development fundamentals.',
      icon: (<BasicsIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'tool-basics-1',
          text: 'HTML5 / JSX - 10 years'
        },
        {
          id: 'tool-basics-2',
          text: 'CSS / SASS - 10 years'
        },
        {
          id: 'tool-basics-3',
          text: 'ES6 / TypeScript - 9 years'
        },
        {
          id: 'tool-basics-4',
          text: 'From my first webpage at UW in 2014, all the way to the complex SPA foundational structure overhauls today, I have worked for a long time to polish my fundamentals.'
        }
      ],
      color: '#5A5A5A'
    }
  ];
};

export const getProcessSegments = ({ colorHexes }) => {
  return [
    {
      id: 'process-discipline',
      header: '1. Discipline',
      subheader: 'Building a foundation through discipline and learned skills.',
      icon: (<ChecklistIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'process-discipline-1',
          text: 'A solid foundation of knowledge and discipline is crucial to delivering effective results.'
        },
        {
          id: 'process-discipline-2',
          text: 'Hone the necessary skills, adopt best practices, and cultivate a mindset focused on continual improvement.'
        },
        {
          id: 'process-discipline-3',
          text: 'Ensure preparedness for every challenge by building a robust foundation.'
        }
      ],
      color: '#334155' // Dark slate blue
    },
    {
      id: 'process-analysis-research',
      header: '2. Analysis & Research',
      subheader: 'Understanding the problem and finding the best solutions.',
      icon: (<OpenBookIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'process-analysis-research-1',
          text: 'Break down the problem into manageable components to fully understand its intricacies.'
        },
        {
          id: 'process-analysis-research-2',
          text: 'Ask the right questions to identify core challenges and potential blockers.'
        },
        {
          id: 'process-analysis-research-3',
          text: 'Identify existing design patterns, architectures, and industry best practices relevant to the project.'
        }
      ],
      color: '#005A87' // Deep cyan-blue
    },
    {
      id: 'process-communication',
      header: '3. Communication',
      subheader: 'Collaboration across all stakeholders is essential.',
      icon: (<ChatBubblesIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'process-communication-1',
          text: 'Engage stakeholders at each stage to gather requirements, feedback, and alignment.'
        },
        {
          id: 'process-communication-2',
          text: 'Bridge the gap between technical and non-technical perspectives, ensuring mutual understanding.'
        },
        {
          id: 'process-communication-3',
          text: 'Encourage open dialogue to keep everyone informed and foster a sense of shared ownership.'
        }
      ],
      color: '#00897B' // Teal
    },
    {
      id: 'process-development',
      header: '4. Development',
      subheader: 'Writing clean, extensible, and modular code.',
      icon: (<BasicsIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'process-development-1',
          text: 'Apply modular design principles to create reusable components.'
        },
        {
          id: 'process-development-2',
          text: 'Prioritize clean, readable code to facilitate ease of maintenance and future scalability.'
        },
        {
          id: 'process-development-3',
          text: 'Implement best practices for testing, ensuring reliability and performance.'
        }
      ],
      color: '#43A047' // Leaf green
    },
    {
      id: 'process-iteration',
      header: '5. Iteration',
      subheader: 'Continuous improvement through testing and refinement.',
      icon: (<CycleIcon colorHexes={ colorHexes } />),
      bullets: [
        {
          id: 'process-iteration-1',
          text: 'Gather feedback from user testing and iterate on the solution to enhance usability.'
        },
        {
          id: 'process-iteration-2',
          text: 'Measure performance against established goals, and make data-driven adjustments.'
        },
        {
          id: 'process-iteration-3',
          text: 'Remain adaptable, embracing change to continuously optimize the final product.'
        }
      ],
      color: '#7CB342' // Light green
    }
  ];
};

// neeks todo: finish this in own words.
export const getTimelineSegments = () => {
  return [
    {
      id: 'timeline-childhood',
      header: '1. Childhood',
      subheader: 'The origins of a tech enthusiast.',
      time: '2013',
      bullets: [
        {
          id: 'timeline-childhood-1',
          text: 'Grew up in Seattle, surrounded by the tech-driven culture of the Pacific Northwest.'
        },
        {
          id: 'timeline-childhood-2',
          text: 'Spent countless hours tinkering with computers, video games, and early web technologies.'
        },
        {
          id: 'timeline-childhood-3',
          text: 'Discovered a love for creating, experimenting, and solving problems.'
        }
      ],
      color: '#FFFFFF' // Calm white, symbolizing beginnings and curiosity
    },
    {
      id: 'timeline-education',
      header: '2. Education',
      subheader: 'Building a foundation for success.',
      time: '2018',
      bullets: [
        {
          id: 'timeline-education-1',
          text: 'Studied at the University of Washington, focusing on technology and innovation.'
        },
        {
          id: 'timeline-education-2',
          text: 'Developed skills in programming, user experience design, and creative problem-solving.'
        },
        {
          id: 'timeline-education-3',
          text: 'Worked on personal projects and freelance gigs, applying classroom knowledge to real-world challenges.'
        }
      ],
      color: '#DFF6E0' // Soft green, symbolizing growth and learning
    },
    {
      id: 'timeline-people-tech',
      header: '3. People Tech Group',
      subheader: 'The first professional milestone.',
      time: '2019',
      bullets: [
        {
          id: 'timeline-people-tech-1',
          text: 'Began my career as a front-end developer, diving into professional development environments.'
        },
        {
          id: 'timeline-people-tech-2',
          text: 'Collaborated on various projects, delivering intuitive and functional user interfaces.'
        },
        {
          id: 'timeline-people-tech-3',
          text: 'Built a solid foundation of technical and teamwork skills.'
        }
      ],
      color: '#BCE7C5' // Light green, symbolizing a significant step in growth
    },
    {
      id: 'timeline-microsoft-teams',
      header: '4. Microsoft Teams',
      subheader: 'Scaling impact at a global company.',
      time: '2021',
      bullets: [
        {
          id: 'timeline-microsoft-teams-1',
          text: 'Contributed to Microsoft Teams, enhancing collaboration tools for millions of users.'
        },
        {
          id: 'timeline-microsoft-teams-2',
          text: 'Focused on accessibility, scalability, and performance in enterprise applications.'
        },
        {
          id: 'timeline-microsoft-teams-3',
          text: 'Gained experience in large-scale application development and corporate environments.'
        }
      ],
      color: '#8DCB9B' // Balanced green, symbolizing professional growth and impact
    },
    {
      id: 'timeline-princess-cruiselines',
      header: '5. Princess Cruiselines',
      subheader: 'Shaping the digital travel experience.',
      time: 'today',
      bullets: [
        {
          id: 'timeline-princess-cruiselines-1',
          text: 'Enhanced digital experiences for Princess Cruiselines customers around the world.'
        },
        {
          id: 'timeline-princess-cruiselines-2',
          text: 'Focused on interactivity and user engagement for global audiences.'
        },
        {
          id: 'timeline-princess-cruiselines-3',
          text: 'Balanced performance optimization with elegant design solutions.'
        }
      ],
      color: '#66B675' // Strong green, symbolizing refinement and achievement
    },
    {
      id: 'timeline-future',
      header: '6. Future',
      subheader: 'Evolving, innovating, and exploring.',
      time: 'tmrw',
      bullets: [
        {
          id: 'timeline-future-1',
          text: 'Continuing to push the boundaries of front-end development and UI/UX design.'
        },
        {
          id: 'timeline-future-2',
          text: 'Exploring new opportunities in global projects and creative tech.'
        },
        {
          id: 'timeline-future-3',
          text: 'Balancing professional growth with personal passions, like music production and travel.'
        }
      ],
      color: '#43A047' // Growth green, symbolizing optimism and potential
    }
  ];
};

// TODO: finish this.
export const footerButtons = [
  {
    name: 'resume',
    text: '',
    icon: <AttachmentIcon />,
    link: ''
  },
  {
    name: 'phone',
    text: '+1 (206) 257-8765',
    icon: <PhoneIcon />,
    link: ''
  },
  {
    name: 'e-mail',
    text: 'nico.blomgren@gmail.com',
    icon: <EmailIcon />,
    link: ''
  },
  {
    name: 'linkedin',
    text: '',
    icon: <StarIcon />,
    link: ''
  }
];
