import { AppShell, Burger, Group, ScrollArea, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import SideBarElements from '../ui/sideBar/SideBarElements';

function AppLayout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <img src="/logo.png" alt="" width={'50px'} />
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: 'orange', to: 'rgba(255, 160, 28, 1)', deg: 115 }}
          >
            Giovanni Mugno
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar overflow="auto">
        <AppShell.Section p="md">
          <Text size="xl">Navegación</Text>
        </AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
          <SideBarElements />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <AppShell.Section grow my="md" component={ScrollArea}>
          <Outlet />
        </AppShell.Section>
      </AppShell.Main>
    </AppShell>
  );
}

export default AppLayout;