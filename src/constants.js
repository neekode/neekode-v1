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

export const getBaseWrapperProps = (isMobile) => {
  return {
    minHeight: '300px',
    borderBottomLeftRadius: '10',
    borderTopRightRadius: '10',
    borderBottomRightRadius: '100',
    borderRight: '1px',
    borderBottom: '1px',
    boxShadow: 'lg',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row'
  };
};

// TODO: replace all inner bullets with icons.
//  ...is it legal to use my company's brands on my portfolio lol
export const getExperienceSegments = ({ colorHexes }) => {
  return [
    {
      id: 'exp-pcl',
      header: 'Princess Cruiselines',
      subheader: 'Current Position. Lead UI developer for PCL’s primary booking system since Nov. 2021.',
      icon: (<PrincessIcon colorHexes={ colorHexes } />),
      bullets: [
        'Major code owner of princess.com/cruise-search/, PCLs primary source of online Booking Revenue.',
        'Regularly builds complex features, defines new standards, and overhauls application architecture.',
        'Sole developer in re-building a legacy Deck Plans front-end into a modern React SPA.'
      ],
      color: '#003595'
    },
    {
      id: 'exp-mst',
      header: 'Microsoft Teams',
      subheader: 'Worked for MSTeams Rooms, Microsoft\'s smart conference room solution. Nov. 2019 - Jun. 2021.',
      icon: (<MSTeamsIcon colorHexes={ colorHexes } />),
      bullets: [
        'Made significant contributions like a component to switch the display config of a Room.',
        'Part of a massive effort to migrate MSTeams from AngularJS to modern React.',
        'Resolved numerous bugs and followed enterprise-level methodology and code review.'
      ],
      color: '#6264A7'
    },
    {
      id: 'exp-ptg',
      header: 'People Tech Group',
      subheader: 'First position, worked on enterprise-level React projects as an intern, then Junior in 2019.',
      icon: (<PTGIcon colorHexes={ colorHexes } />),
      bullets: [
        '1 out of 14 interns selected for a Junior-level position.',
        'Worked on enterprise-level projects with senior developers for a large contract w/ Costco.',
        'Contributed a notification system and conditional rendering based on user role.'
      ],
      color: '#A72037'
    }
  ];
};

// TODO: colors and desc, also, how can i make these string constants turn into links n shit?
export const getToolsSegments = ({ colorHexes }) => {
  return [
    {
      id: 'tool-react',
      header: 'React v18',
      subheader: '7 years of experience with modular and reusable React components.',
      icon: (<ReactIcon colorHexes={ colorHexes } />),
      bullets: [
        'React - 7 years',
        'Designs sensible component hierarchies with re-usable components.',
        'Utilizes modern practices such as functional components, hooks, and memoization.',
        'Can build enterprise-level projects from the ground up.'
      ],
      color: '#61DAFB'
    },
    {
      id: 'tool-redux-next',
      header: 'Redux & NextJS',
      subheader: 'Experience with state management and modern SSR with Redux and NextJS.',
      icon: (<NextIcon colorHexes={ colorHexes } />),
      bullets: [
        'Redux (Toolkit) - 5 years',
        'Uses latest methodology of Slices and feature-based organization for state-management.',
        'NextJS - 3 years',
        'Leverages server components and the App Directory Structure, as well as ChakraUI and TailwindCSS libraries.'
      ],
      color: '#764ABC'
    },
    {
      id: 'tool-other',
      header: 'The Other Stuff',
      subheader: '6 years of professional experience has culminated into a deep knowledge for other tools that are standard today.',
      icon: (<ToolsIcon colorHexes={ colorHexes } />),
      bullets: [
        'AEM Integration',
        'Telemetry Implementations',
        'Unit Test Design',
        'UX Background, Git, Agile',
        'Legacy Tech such as jQuery, XML, AngularJS, etc.'
      ],
      color: '#4A90E2'
    },
    {
      id: 'tool-basics',
      header: 'The Basics',
      subheader: '10+ years experience with web development fundamentals.',
      icon: (<BasicsIcon colorHexes={ colorHexes } />),
      bullets: [
        'HTML5 / JSX - 10 years',
        'CSS / SASS - 10 years',
        'ES6 / TypeScript - 9 years',
        'From my first webpage at UW in 2014, all the way to the complex SPA foundational structure overhauls today, I have worked for a long time to polish my fundamentals.'
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
        'A solid foundation of knowledge and discipline is crucial to delivering effective results.',
        'Hone the necessary skills, adopt best practices, and cultivate a mindset focused on continual improvement.',
        'Ensure preparedness for every challenge by building a robust foundation.'
      ],
      color: '#334155' // Dark slate blue
    },
    {
      id: 'process-analysis-research',
      header: '2. Analysis & Research',
      subheader: 'Understanding the problem and finding the best solutions.',
      icon: (<OpenBookIcon colorHexes={ colorHexes } />),
      bullets: [
        'Break down the problem into manageable components to fully understand its intricacies.',
        'Ask the right questions to identify core challenges and potential blockers.',
        'Identify existing design patterns, architectures, and industry best practices relevant to the project.'
      ],
      color: '#005A87' // Deep cyan-blue
    },
    {
      id: 'process-communication',
      header: '3. Communication',
      subheader: 'Collaboration across all stakeholders is essential.',
      icon: (<ChatBubblesIcon colorHexes={ colorHexes } />),
      bullets: [
        'Engage stakeholders at each stage to gather requirements, feedback, and alignment.',
        'Bridge the gap between technical and non-technical perspectives, ensuring mutual understanding.',
        'Encourage open dialogue to keep everyone informed and foster a sense of shared ownership.'
      ],
      color: '#00897B' // Teal
    },
    {
      id: 'process-development',
      header: '4. Development',
      subheader: 'Writing clean, extensible, and modular code.',
      icon: (<BasicsIcon colorHexes={ colorHexes } />),
      bullets: [
        'Apply modular design principles to create reusable components.',
        'Prioritize clean, readable code to facilitate ease of maintenance and future scalability.',
        'Implement best practices for testing, ensuring reliability and performance.'
      ],
      color: '#43A047' // Leaf green
    },
    {
      id: 'process-iteration',
      header: '5. Iteration',
      subheader: 'Continuous improvement through testing and refinement.',
      icon: (<CycleIcon colorHexes={ colorHexes } />),
      bullets: [
        'Gather feedback from user testing and iterate on the solution to enhance usability.',
        'Measure performance against established goals, and make data-driven adjustments.',
        'Remain adaptable, embracing change to continuously optimize the final product.'
      ],
      color: '#7CB342' // Light green
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
