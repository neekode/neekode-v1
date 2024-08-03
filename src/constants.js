import { AttachmentIcon, EmailIcon, PhoneIcon, StarIcon } from '@chakra-ui/icons';

export const getBaseWrapperProps = (isMobile) => {
  return {
    minHeight: '300px',
    borderBottomLeftRadius: '10',
    borderTopRightRadius: '10',
    borderBottomRightRadius: '100',
    boxShadow: 'lg',
    borderBottom: '1px',
    borderRight: '1px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row'
  };
};

// TODO: desc
export const experienceSegments = [
  {
    id: 'exp-pcl',
    innerContent1: 'Princess',
    innerContent2: 'Cruiselines',
    description: 'princess cruiselines',
    color: '#003595'
  },
  {
    id: 'exp-mst',
    innerContent1: 'Microsoft',
    innerContent2: 'Teams',
    description: 'microsoft teams',
    color: '#6264A7'
  },
  {
    id: 3,
    innerContent1: 'People',
    innerContent2: 'Tech Group',
    description: 'people tech',
    color: '#A72037'
  }
];

// TODO: colors and desc
export const toolsSegments = [
  {
    id: 'tool-next',
    innerContent1: 'NextJS',
    innerContent2: '13',
    description: 'nextjs 13',
    color: '#003595'
  },
  {
    id: 'tool-react',
    innerContent1: 'React',
    innerContent2: '18',
    description: 'react 18',
    color: '#6264A7'
  },
  {
    id: 'tool-redux',
    innerContent1: 'Redux',
    innerContent2: 'Toolkit',
    description: 'redux toolkit',
    color: '#A72037'
  },
  {
    id: 'tool-basics',
    innerContent1: 'The',
    innerContent2: 'Basics',
    description: 'html,css,js',
    color: '#A72037'
  }
];

// TODO: colors and desc
export const processSegments = [
  {
    id: 'process-discipline',
    innerContent1: '1.',
    innerContent2: 'Discipline',
    description: 'starting with a learned foundation...',
    color: '#003595'
  },
  {
    id: 'process-analysis',
    innerContent1: '2.',
    innerContent2: 'Analysis',
    description: 'to find a solution, we must first understand the problem....',
    color: '#6264A7'
  },
  {
    id: 'process-research',
    innerContent1: '3.',
    innerContent2: 'Research',
    description: 'find the context, know the best patterns and architectures...',
    color: '#A72037'
  },
  {
    id: 'process-communication',
    innerContent1: '4.',
    innerContent2: 'Communication',
    description: 'know the stakeholders, talk with points of expertise, let all involved be aware.',
    color: '#A72037'
  },
  {
    id: 'process-development',
    innerContent1: '5.',
    innerContent2: 'Development',
    description: 'write clean, extensible, modular code.',
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
