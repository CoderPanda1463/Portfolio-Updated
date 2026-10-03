/* All editable portfolio content lives here. */
window.portfolioData = {
  profile: {
    name: 'Fuad Al Hasan', hometown: 'Munshigonj',
    bio: 'Hello! I am Fuad, I am currently in my fourth year of B.sc striving toward the goal of becoming an educator, My hobbies are Robotics and Photography',
    tagline: 'Striving toward the goal of becoming an educator.',
    email: 'gen.fuad123@gmail.com', phone: '01686528188', whatsapp: '01908550358',
    whatsappLink: 'https://wa.me/88019085550358'
  },
  leadership: [
    'Current President of BUP Robotics Club',
    'Current Associate Head of Documentation, BUP Photography Society'
  ],
  projects: [
    {
      title: 'GridWise Campus Energy Optimizer',
      description: 'A FastAPI service that turns hourly campus demand, solar and battery inputs, and operator notes into a 24-hour energy plan. Directive validation and a PuLP mixed-integer optimizer minimize grid cost while honoring battery and scheduling constraints.',
      tags: ['Python', 'FastAPI', 'PuLP', 'Google Gemini', 'Docker'],
      repoUrl: 'https://github.com/CoderPanda1463/Smart-Grid-Planning-LKCJ-BUP-CSE-Fest-',
      featured: true
    },
    {
      title: 'VitalSync Health Tracker',
      description: 'A Flask and MySQL web application for recording health routines, including meals, sleep, exercise, weight, steps, stress, and goals. Its pages also present weekly summaries and reports based on the saved records.',
      tags: ['Python', 'Flask', 'MySQL', 'HTML', 'JavaScript'],
      repoUrl: 'https://github.com/CoderPanda1463/Vitalsync',
      featured: true,
      needsReview: true
    },
    {
      title: 'SMS Spam Classifier',
      description: 'A notebook that cleans and lemmatizes labeled SMS text, then trains a TF-IDF and LinearSVC pipeline to classify messages as spam or ham. It also explores the dataset and evaluates the classifier with classification metrics and cross-validation.',
      tags: ['Python', 'Jupyter Notebook', 'Pandas', 'scikit-learn', 'NLTK'],
      repoUrl: 'https://github.com/CoderPanda1463/SMS-spam-ham',
      featured: true
    },
    {
      title: 'RAM Checker',
      description: 'A Java console prototype with separate DDR3, DDR4, and DDR5 models. A menu lets users browse predefined memory entries by generation, including manufacturer and bus speed.',
      tags: ['Java', 'Maven'],
      repoUrl: 'https://github.com/CoderPanda1463/Ram_Checker',
      featured: false
    }
  ],
  education: [
    { title: 'B.Sc in ICE', detail: 'Bangladesh University of Professionals; 4th year, running CGPA 3.76' },
    { title: 'HSC', detail: 'Dhaka City College; GPA 5' },
    { title: 'SSC', detail: 'Monipur High School and College; GPA 5' }
  ],
  interests: ['Robotics', 'Photography'],
  links: {
    LinkedIn: 'https://www.linkedin.com/in/fuad-al-hasan-b046b3380/',
    GitHub: 'https://github.com/CoderPanda1463',
    Facebook: 'https://www.facebook.com/general.fuad'
  },
  cv: { src: 'assets/cv/Fuad_CV_P.pdf', downloadName: 'Fuad_CV_P.pdf', label: 'Download CV' },
  photos: [
    { src: 'assets/images/photography/photo-01.jpg', title: 'Bare feet, full hearts', alt: 'Mobile photograph titled Bare feet, full hearts', caption: 'Bare feet, full hearts' },
    { src: 'assets/images/photography/photo-02.jpg', title: 'Hustle of Life', alt: 'Mobile photograph titled Hustle of Life', caption: 'Hustle of Life' },
    { src: 'assets/images/photography/photo-03.jpg', title: 'One frame Different Stories', alt: 'Mobile photograph titled One frame Different Stories', caption: 'One frame Different Stories' },
    { src: 'assets/images/photography/photo-04.jpg', title: 'The Hearts Dedicated to the Almighty', alt: 'Mobile photograph titled The Hearts Dedicated to the Almighty', caption: 'The Hearts Dedicated to the Almighty' },
    { src: 'assets/images/photography/photo-05.jpg', title: 'Now the Hearts Rest', alt: 'Mobile photograph titled Now the Hearts Rest', caption: 'Now the Hearts Rest' },
    { src: 'assets/images/photography/photo-06.jpg', title: "A Whisker's Away", alt: "Mobile photograph titled A Whisker's Away", caption: "A Whisker's Away" },
    { src: 'assets/images/photography/photo-07.jpg', title: 'As Time Goes', alt: 'Photograph titled As Time Goes', caption: 'As Time Goes' },
    { src: 'assets/images/photography/photo-08.jpg', title: 'Beliefs that Rebel', alt: 'Photograph titled Beliefs that Rebel', caption: 'Beliefs that Rebel' },
    { src: 'assets/images/photography/photo-09.jpg', title: 'Faith', alt: 'Photograph titled Faith', caption: 'Faith' },
    { src: 'assets/images/photography/photo-10.jpg', title: 'Over The Horizon', alt: 'Photograph titled Over The Horizon', caption: 'Over The Horizon' }
  ]
};