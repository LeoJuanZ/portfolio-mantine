import { AppShell, Burger, Group, ScrollArea, Text, Title } from '@mantine/core';
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
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <img src="/logo.png" alt="" width={'50px'} />
          <Text
            size="xxl"
            fw={900}
            variant="gradient"
            gradient={{ from: 'orange', to: '#ffa01c', deg: 115 }}
          >
            Giovanni Mugno
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar overflow="auto">
        <AppShell.Section p="md" py="xs" pb={0}>
          <Title size="h3">Navegación</Title>
        </AppShell.Section>
        <AppShell.Section grow my="xs" component={ScrollArea}>
          <SideBarElements />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default AppLayout;