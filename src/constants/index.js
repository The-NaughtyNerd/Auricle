import {
  aboutImg1,
  aboutImg2,
  aboutImg3,
  featureIcon1,
  featureIcon2,
  featureIcon3,
  phoneScr1,
  phoneScr2,
  phoneScr3,
} from '../assets';

import {
  FaWordpress,
  FaWindows,
  FaTag,
  FaFile,
  FaSwatchbook,
  FaCloudUploadAlt,
  FaChartLine,
  FaCode,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';

export const about = [
  {
    id: 'about-1',
    head: 'Unique app with different Features',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum fuga amet, accusamus eos laborum atque rem ad ipsam veniam pariatur praesentium optio nemo earum, ipsum fugiat laudantium architecto doloremque!',
    moreInfo:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum fuga.',
    img: aboutImg1,
  },
  {
    id: 'about-2',
    head: 'Unique app with different Features',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum fuga amet, accusamus eos laborum atque rem ad ipsam veniam pariatur praesentium optio nemo earum, ipsum fugiat laudantium architecto doloremque!',
    moreInfo:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum fuga.',
    img: aboutImg2,
  },
  {
    id: 'about-3',
    head: 'Unique app with different Features',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum fuga amet, accusamus eos laborum atque rem ad ipsam veniam pariatur praesentium optio nemo earum, ipsum fugiat laudantium architecto doloremque!',
    moreInfo:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum fuga.',
    img: aboutImg3,
  },
];

export const services = [
  {
    id: 'service-1',
    heading: 'Awesome Features',
    info: ' Laborum dolore facilis rem ducimus dolorem id. Sint incidunt eveniet impedit modi!',
    img: featureIcon1,
  },
  {
    id: 'service-2',
    heading: 'Creative Design',
    info: ' Laborum dolore facilis rem ducimus dolorem id. Sint incidunt eveniet impedit modi!',
    img: featureIcon2,
  },
  {
    id: 'service-3',
    heading: '24 Hours Supports',
    info: ' Laborum dolore facilis rem ducimus dolorem id. Sint incidunt eveniet impedit modi!',
    img: featureIcon3,
  },
];

export const features = [
  {
    id: 'feature-1',
    feature: 'WordPress Installation',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur incidunt',
    icon: FaWordpress,
  },
  {
    id: 'feature-2',
    feature: 'Browser Compatible',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur incidunt',
    icon: FaWindows,
  },
  {
    id: 'feature-3',
    feature: 'eCommerce Ready',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur incidunt',
    icon: FaTag,
  },
  {
    id: 'feature-4',
    feature: 'Easy to Customize',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur incidunt',
    icon: FaFile,
  },
  {
    id: 'feature-5',
    feature: 'Limitless Colors',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur incidunt',
    icon: FaSwatchbook,
  },
  {
    id: 'feature-6',
    feature: 'Lifetime Update',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur incidunt',
    icon: FaCloudUploadAlt,
  },
  {
    id: 'feature-7',
    feature: 'SEO Friendly',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur incidunt',
    icon: FaChartLine,
  },
  {
    id: 'feature-8',
    feature: 'Simple Clean Code',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur incidunt',
    icon: FaCode,
  },
];

export const navLinks = [
  { id: 1, link: '/', linkName: 'Home', current: true },
  { id: 2, link: '/about', linkName: 'About', current: false },
  { id: 3, link: '/service', linkName: 'Service', current: false },
  { id: 4, link: '/screenshots', linkName: 'Screenshots', current: false },
  { id: 5, link: '/pricing', linkName: 'Pricing', current: false },
  { id: 6, link: '/team', linkName: 'Team', current: false },
  { id: 7, link: '/contact', linkName: 'Contact', current: false },
  // { id: 8, link: '/service', linkName: 'Service' },
];

export const price = [
  {
    id: 1,
    package: 'Basic',
    amount: '$29.00',
    duration: '/month',
    offer1: '100MB Disk Space',
    offer2: '2 Subdomains',
    offer3: '4 Email Accounts',
    offer4: 'Customer Support 24/7',
    action: 'Buy Now',
  },

  {
    id: 2,
    package: 'Standard',
    amount: '$39.00',
    duration: '/month',
    offer1: '200MB Disk Space',
    offer2: '4 Subdomains',
    offer3: '5 Email Accounts',
    offer4: 'Customer Support 24/7',
    action: 'Buy Now',
  },

  {
    id: 3,
    package: 'Professional',
    amount: '$49.00',
    duration: '/month',
    offer1: '500MB Disk Space',
    offer2: '10 Subdomains',
    offer3: '10 Email Accounts',
    offer4: 'Customer Support 24/7',
    action: 'Buy Now',
  },
];

export const socials = [
  {
    id: 1,
    logo: FaFacebook,
    stats: '256 Likes',
  },
  {
    id: 2,
    logo: FaGithub,
    stats: '57+ projects',
  },
  {
    id: 3,
    logo: FaInstagram,
    stats: '1268 Followers',
  },
  {
    id: 4,
    logo: FaPinterest,
    stats: '2412+ Pins',
  },
];

export const blog = [
  {
    id: 1,
    img: phoneScr1,
    date: 'September 9, 2023',
    info: 'Round and round like carousel',
  },
  {
    id: 2,
    img: phoneScr2,
    date: 'September 8, 2023',
    info: 'Round and round like carousel',
  },
  {
    id: 3,
    img: phoneScr3,
    date: 'September 7, 2023',
    info: 'Round and round like carousel',
  },
];
