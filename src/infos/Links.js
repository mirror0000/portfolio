import { ICPGithubIconWhite } from '@icongo/ic';
import { IUMicrosoftOutlook } from '@icongo/iu';
import { LGGithubIcon, LGGoogleGmail } from '@icongo/lg';
import { VLSkype } from '@icongo/vl';

export const LinkInfos = [
  {
    href: 'mailto:miroslavpesic111@gmail.com',
    icon: {
      dark: LGGoogleGmail,
      light: LGGoogleGmail,
    },
    label: 'GMail',
  },
  {
    href: 'mailto:pop.runner88@outlook.com',
    icon: {
      dark: IUMicrosoftOutlook,
      light: IUMicrosoftOutlook,
    },
    label: 'Outlook',
  },
  {
    href: 'live:.cid.e360fafc9c6a0e22',
    icon: {
      dark: VLSkype,
      light: VLSkype,
    },
    label: 'Skype',
  },
  {
    href: 'https://github.com/JunioDo',
    icon: {
      dark: LGGithubIcon,
      light: ICPGithubIconWhite,
    },
    label: 'Github',
  },
];
