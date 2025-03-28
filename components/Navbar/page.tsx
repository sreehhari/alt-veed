import { useState } from "react";
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconSettings,
  IconUser,
  TablerIcon,
} from "@tabler/icons-react";
import { Title, Tooltip, UnstyledButton } from "@mantine/core";
import classes from "./DoubleNavbar.module.css";
import { VideoComponent } from "../VideoComponent/page";
import { CanvasEditor } from "../CanvasEditor/page";

const GenericComponent = () => (
  <div>
    <p>Generic Component</p>
  </div>
);

const mainLinksMockdata = [
  { icon: IconHome2, label: "Home" },
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconUser, label: "Account" },
  { icon: IconFingerprint, label: "Security" },
  { icon: IconSettings, label: "Settings" },
];

const componentMap: Record<string, React.FC<{ onFileSelect?: (file: File) => void }>> = {
  Home: VideoComponent,
  Dashboard: GenericComponent,
  Analytics: VideoComponent,
  Releases: GenericComponent,
  Account: VideoComponent,
  Security: GenericComponent,
  Settings: VideoComponent,
};

export function DoubleNavbar() {
  const [active, setActive] = useState("Releases");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    console.log("Selected file:", file);
    setSelectedFile(file);
  };

  const ActiveComponent = componentMap[active] || (() => <div>No component selected</div>);

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

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}></div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {/* ✅ Properly render the ActiveComponent with props */}
          <ActiveComponent onFileSelect={handleFileSelect} />

          {/* ✅ Show the CanvasEditor only when a file is selected */}
          {selectedFile && <CanvasEditor file={selectedFile} />}
        </div>
      </div>
    </nav>
  );
}
