import { AttachmentIcon, EmailIcon, PhoneIcon, StarIcon } from '@chakra-ui/icons';

export const getBaseWrapperProps = (isMobile) => {
  return {
    width: '95%',
    minHeight: '300px',
    borderBottomLeftRadius: '10',
    borderTopRightRadius: '10',
    borderBottomRightRadius: '10',
    boxShadow: 'lg',
    borderBottom: '1px',
    borderRight: '1px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row'
  };
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
