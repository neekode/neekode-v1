import { AttachmentIcon, EmailIcon, PhoneIcon, StarIcon } from '@chakra-ui/icons';
import PrincessIcon from './app/components/svgs/PrincessIcon';
import MSTeamsIcon from './app/components/svgs/MSTeamsIcon';
import PTGIcon from './app/components/svgs/PTGIcon';
import BasicsIcon from './app/components/svgs/BasicsIcon';
import NextIcon from './app/components/svgs/NextIcon';
import ReactIcon from './app/components/svgs/ReactIcon';

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

// TODO: replace all inner bulletss with icons.
//  ...is it legal to use my company's brands on my portfolio lol
export const getExperienceSegments = ({ colorHexes }) => {
  return [{
    id: 'exp-pcl',
    header: 'Princess Cruiselines*',
    icon: (<PrincessIcon colorHexes={ colorHexes } />),
    bullets: [
      '*Current position',
      'Started Nov. 2021',
      'Major code owner of princess.com/cruise-search/, PCLs primary source of online Booking Revenue.',
      'Regularly builds complex features, define and implement standards, and overhaul application architectures.'
    ],
    color: '#003595'
  },
  {
    id: 'exp-mst',
    header: 'Microsoft Teams',
    icon: (<MSTeamsIcon colorHexes={ colorHexes } />),
    bullets: [
      'Nov. 2019 - Jun. 2021',
      'Developed Microsoft Teams Rooms, Microsoft\'s smart conference room solution.',
      'Made significant contributions like a component to switch the display config of a Room.',
      'Part of a massive effort to migrate MSTeams from AngularJS to modern React.'
    ],
    color: '#6264A7'
  },
  {
    id: 3,
    header: 'People Tech Group',
    icon: (<PTGIcon colorHexes={ colorHexes } />),
    bullets: [
      'First position.',
      'Jan. 2019 - Aug. 2019',
      '1 out of 14 interns selected for a Junior-level position.',
      'Worked on enterprise-level projects with senior developers for a large contract w/ Costco.',
      'Contributed a notification system and conditional rendering based on user role.'
    ],
    color: '#A72037'
  }];
};

// TODO: colors and desc, also, how can i make these string constants turn into links n shit?
export const getToolsSegments = ({ colorHexes }) => {
  return [
    {
      id: 'tool-react',
      header: 'React v18',
      icon: (<ReactIcon colorHexes={ colorHexes } />),
      bullets: [
        'React - 7 years',
        'Utilizes modular and sensible component hierarchies with re-usable components.',
        'Keeps up with the latest technologies such as functional components and hooks.',
        'Implementing correct practices such as thorough documentation, memoization, and render minimization.'
      ],
      color: '#003595'
    },
    {
      id: 'tool-redux-next',
      header: 'Redux & NextJS',
      icon: (<NextIcon colorHexes={ colorHexes } />),
      bullets: [
        'Redux (Toolkit) - 5 years',
        'Using the latest methodology of Slices and feature-based organization for an orderly state-tree.',
        'NextJS - 3 years',
        'Leverages server components and the App Directory Structure.',
        'Uses ChakraUI and TailwindCSS libraries.'
      ],
      color: '#A72037'
    },
    {
      id: 'tool-other',
      header: 'The Other Stuff',
      icon: 'icon',
      bullets: [
        'Here we have the, still very significant, but less fundamental pieces of my UI developer toolbox. [TODO]',
        'AEM Integration',
        'Unit Test Design',
        'Git',
        'UX Background',
        'Legacy Tech: jQuery, XML, AngularJS, etc.'
      ],
      color: '#6264A7'
    },
    {
      id: 'tool-basics',
      header: 'The Basics',
      icon: (<BasicsIcon colorHexes={ colorHexes } />),
      bullets: [
        'HTML5 / JSX - 10 years',
        'CSS / SASS - 10 years',
        'ES6 / TypeScript - 9 years',
        'From my first simple webpage for a freshman webdev course at UW in 2014, all the way to the complex SPA foundational structure overhauls today, I have worked for a long time to polish my fundamentals.'
      ],
      color: '#A72037'
    }
  ];
};

export const getProcessSegments = ({ colorHexes }) => {
  return [
    {
      id: 'process-discipline',
      header: '1. Discipline',
      icon: 'icon',
      description: 'starting with a learned foundation...',
      color: '#003595'
    },
    {
      id: 'process-analysis',
      header: '2. Analysis',
      icon: 'icon',
      bullets: ['to find a solution, we must first understand the problem....'],
      color: '#6264A7'
    },
    {
      id: 'process-research',
      header: '3. Research',
      icon: 'icon',
      bullets: ['find the context, know the best patterns and architectures...'],
      color: '#A72037'
    },
    {
      id: 'process-communication',
      header: '4. Communication',
      icon: 'icon',
      bullets: ['know the stakeholders, talk with points of expertise, let all involved be aware.'],
      color: '#A72037'
    },
    {
      id: 'process-development',
      header: '5. Development',
      icon: 'icon',
      bullets: ['write clean, extensible, modular code.'],
      color: '#A72037'
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
