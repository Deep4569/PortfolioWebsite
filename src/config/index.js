module.exports = {
  siteTitle: 'Deep Patel | Software Developer',
  siteDescription:
    'Deep Patel is a software engineer located in Toronto, CA who who enjoys developing, and designing exceptional, high-quality applications.',
  siteKeywords:
    'Deep Patel, Deep, Patel, deep4569, software developer, developer, web developer, python, java, julia',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  name: 'Deep Patel',
  location: 'Toronto, CA',
  email: 'deep4569@gmail.com',
  github: 'https://github.com/Deep4569',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Deep4569',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/deep--patel',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/deepatel4',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
