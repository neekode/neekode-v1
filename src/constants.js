import { AttachmentIcon, EmailIcon, PhoneIcon, StarIcon } from '@chakra-ui/icons';
import PrincessIcon from './app/components/svgs/PrincessIcon';
import MSTeamsIcon from './app/components/svgs/MSTeamsIcon';
import PTGIcon from './app/components/svgs/PTGIcon';

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
export const experienceSegments = [
  {
    id: 'exp-pcl',
    header: 'Princess Cruiselines',
    icon: (<PrincessIcon />),
    bullets: [
      'Current Position',
      'From November 2021',
      'Major code owner of princess.com/cruise-search/, PCLs primary source of online Booking Revenue.',
      'I regularly build complex features, define and implement standards, and overhaul architectures.'
    ],
    color: '#003595'
  },
  {
    id: 'exp-mst',
    header: 'Microsoft Teams',
    icon: (<MSTeamsIcon />),
    bullets: [
      'From [TODO] to [TODO]',
      'Developed Microsoft Teams Rooms, MSFTs smart conference room solution.',
      'Made significant contributions like a component to switch the display config of a Room.',
      'Part of a massive effort to migrate MSTeams from AngularJS to modern React.'
    ],
    color: '#6264A7'
  },
  {
    id: 3,
    header: 'People Tech Group',
    icon: (<PTGIcon />),
    bullets: [
      'First professional position, from [TODO] to [TODO].',
      '1 out of 14 interns selected for a Junior-level position.',
      'Worked on enterprise-level projects with senior developers for a large contract w/ Costco.',
      'Contributed a notification system and conditional rendering based on user role.'
    ],
    color: '#A72037'
  }
];

// TODO: colors and desc, also, how can i make these string constants turn into links n shit?
export const toolsSegments = [
  {
    id: 'tool-react',
    header: 'React (NextJS 13)',
    icon: 'icon',
    bullets: [
      'react',
      'nextjs 13'
    ],
    color: '#003595'
  },
  {
    id: 'tool-redux',
    header: 'Redux (Toolkit)',
    icon: 'icon',
    bullets: ['redux toolkit'],
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
    icon: 'icon',
    bullets: [
      'From my first simple webpage for a freshman webdev course at UW in 2014, all the way to the complex SPA foundational structure overhauls today, my fundamentals are extremely polished. ',
      '10 years, HTML5 / JSX',
      '10 years, CSS / SASS',
      '9 years, ES6 / TypeScript'
    ],
    color: '#A72037'
  }
];

export const processSegments = [
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
