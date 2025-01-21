import { ActionIcon, AppShell, Burger, Group, ScrollArea, Text, Title, rem, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import SideBarElements from '../ui/sideBar/SideBarElements';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

function AppLayout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <AppShell
      header={{ height: rem(60) }}
      navbar={{
        width: rem(300),
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle navigation"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
              aria-label="Toggle desktop navigation"
            />
            <img src="/logo.png" alt="Logo Giovanni Mugno" width={50} height={50} />
            <Text
              size="xl"
              fw={900}
              variant="gradient"
              gradient={{ from: 'orange.7', to: 'orange.4', deg: 115 }}
              ff="Segoe UI"
            >
              Giovanni Mugno
            </Text>
          </Group>
          <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            size="lg"
          >
            {dark ? (
              <IconSun size={18} stroke={1.5} />
            ) : (
              <IconMoonStars size={18} stroke={1.5} />
            )}
          </ActionIcon>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <AppShell.Section p="md">
          <Title order={3}>Navegación</Title>
        </AppShell.Section>
        <AppShell.Section grow component={ScrollArea}>
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