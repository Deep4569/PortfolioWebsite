module.exports = {
  siteTitle: 'Deep Patel | Software Engineer',
  siteDescription:
    'Deep Patel is a software engineer based in Toronto, CA who is skillful at designing and developing exceptional, high-quality applications.',
  siteKeywords:
    'Deep Patel, Deep, Patel, software engineer, python, java, back-end engineer',
  name: 'Deep Patel',
  location: 'Toronto, CA',
  email: 'deep4569@gmail.com',
  github: 'https://github.com/Deep4569',

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
  blueColor: '#21eef3',
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
