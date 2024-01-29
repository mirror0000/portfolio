import { FCBriefcase } from '@icongo/fc';
import { ICIconEducation } from '@icongo/ic';

function VerticalTimelineElementData({ since, until, icon, ...props }) {
  return {
    elementProps: {
      date: [since, until].filter(Boolean).join(' - '),
      contentStyle: {
        background: 'rgba(33, 33, 33, 0.5)',
        color: '#ddd',
      },
      contentArrowStyle: {
        borderRight: '10px solid #ccc',
      },
      iconStyle: {
        background: '#2d1950',
      },
      icon: icon,
    },
    ...props,
  };
}

export const Experiences = [
  VerticalTimelineElementData({
    type: 'education',
    icon: <ICIconEducation />,
    since: '2010.09',
    until: '2013.10',
    title: 'Bachelor in Computer Science',
    company: 'University of Belgrade School of Electrical Engineering',
    details: ['Computer Science', 'Computer Graphics', 'Web Programming'],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2015.08',
    until: '2018.01',
    title: 'Full Stack Devleoper',
    company: 'MiroWIn',
    details: [
      'MiroWin is a leading Digital Product Studio in Ukraine, helping companies to thrive on mobile apps, the web, VR/AR and IoT',
      '- Shortened project timeline by 14 months for largest customer by managing relationship with 3rd party vendors, saving over $80K',
      '- Led development of $50K research project which was deemed a "gold standard" by the client',
      '- Fine-tuned and developed AI/ML-based algorithms based on the results with Scikit-learn, increasing revenue 2-fold',
      '- Performed Web Scraping over a catalog of 10K school supply products using mainly NodeJS and MongoDB; completed in 1 month',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2018.04',
    until: '2022.01',
    title: 'Full Stack Developer',
    company: 'Tsukrtekh',
    details: [
      'Tsukrtekh is a universal digital loyalty program that offers unique and fun rewards at the places you love.',
      '- Simultaneously created & maintained scheduled jobs in SQL Server for space maintenance and daily backups of system and user databases for 10 clients',
      '- Increased company revenue by 30% within 2 months after developing and implementing business logic for over 20 features',
      '- Designed and Developed UI design for over 12 clients using CSS, HTML, ASP.NET, Vue, and React; Websites scoring over 85 on Lighthouse'
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2022.02',
    until: '2023.11',
    title: 'Senior Full Stack Developer',
    company: 'EvoPlay',
    details: [
      'EvoPlay is an international Technology and Management Consulting Group with a rapid pace development and innovative solutions for demanding projects. I work as a full-stack developer here, responsible for building, deploying and maintaining internal web applications',
      '- Hired, trained and leading an Agile team of 3 full-stack developers',
      '- Developed indexed database architecture using SQL procedures and triggers for 3 different applications ',
      '- Worked with Core Java to develop automated solutions to include web interfaces using HTML, CSS, JavaScript and Web services',
      '- Worked with a committee of 6 members to organise fun-activities for the employees'
    ],
  }),
].sort(({ since: as, until: au }, { since: bs, until: bu }) => (as < bs || au < bu ? 1 : -1));
