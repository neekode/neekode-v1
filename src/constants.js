import { AttachmentIcon, EmailIcon, PhoneIcon, StarIcon } from '@chakra-ui/icons';

export const getBaseWrapperProps = (isMobile) => {
  return {
    width: '95%',
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

export const experienceSections = [
  {
    id: 1,
    label: 'princess cruiselines',
    value: 7,
    color: '#003595',
    content1: 'Princess',
    content2: 'Cruiselines'
  },
  {
    id: 2,
    label: 'microsoft teams',
    value: 5,
    color: '#6264A7',
    content1: 'Microsoft',
    content2: 'Teams'
  },
  {
    id: 3,
    label: 'people tech',
    value: 3,
    color: '#A72037',
    content1: 'People',
    content2: 'Tech Group'
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
