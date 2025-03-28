import { useState } from 'react';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconSettings,
  IconUser,
  TablerIcon,
} from '@tabler/icons-react';
import { Title, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './DoubleNavbar.module.css';
import { CanvasEditor } from '../CanvasEditor/page';
import { ReactNode } from 'react';
// interface MainLink{
//     icon:TablerIcon;
//     label:string;
//     component:()=>ReactNode;

// }

// interface DoubleNavbarProps {
//     active: string;
//     setActive: (label: string) => void;
//     mainLinksMockdata: MainLink[];
// }
import { VideoComponent } from '../VideoComponent/page';
const GenericConponent=()=>{
    return(
    <div>
        <p>generic</p>
    </div>
)}

const mainLinksMockdata= [
    { icon: IconHome2, label: 'Home'},
    { icon: IconGauge, label: 'Dashboard'},
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics'},
    { icon: IconCalendarStats, label: 'Releases'},
    { icon: IconUser, label: 'Account'},
    { icon: IconFingerprint, label: 'Security'},
    { icon: IconSettings, label: 'Settings'},
  ];
  const componentMap = {
    'Home': VideoComponent,
    'Dashboard': GenericConponent,
    'Analytics': VideoComponent,
    'Releases': GenericConponent,
    'Account': VideoComponent,
    'Security': GenericConponent,
    'Settings': VideoComponent,
  };

const linksMockdata = [
  'Security',
  'Settings',
  'Dashboard',
  'Releases',
  'Account',
  'Orders',
  'Clients',
  'Databases',
  'Pull Requests',
  'Open Issues',
  'Wiki pages',
];

export function DoubleNavbar({ extraContent }: { extraContent?: React.ReactNode }) {
  const [active, setActive] = useState('Releases');
//   const [activeLink, setActiveLink] = useState('Settings');
  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon size={22} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));
  //@ts-ignore
  const ActiveComponent = componentMap[active]||(()=>{
    <div>
      No component selected
    </div>
  })

//   const links = linksMockdata.map((link) => (
//     <a
//       className={classes.link}
//       data-active={activeLink === link || undefined}
//       href="#"
//       onClick={(event) => {
//         event.preventDefault();
//         setActiveLink(link);
//       }}
//       key={link}
//     >
//       {link}
//     </a>
//   ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          <ActiveComponent/>
        </div>
      </div>
    </nav>
  );
}