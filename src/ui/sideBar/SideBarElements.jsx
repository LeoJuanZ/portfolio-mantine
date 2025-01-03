import { useState } from 'react';
import { Box, NavLink, rem } from '@mantine/core';
import HomeIcon from '@mui/icons-material/Home';

const homeNav = [
  {
    icon: <HomeIcon sx={{ fontSize: rem(30) }} />,
    label: 'Home',
    href: '/',
    description: 'Página principal'
  },
];

function NavigationElements(elements, active, setActive) {
  const items = elements.map((item, index) => (
    item.children ?
      <NavLink
        href={item.href}
        key={item.label}
        active={index === active}
        label={item.label}
        description={item.description}
        rightSection={item.rightSection}
        leftSection={item.icon}
        onClick={() => setActive(index)}
        color='orange'
        styles={{
          label: {
            fontSize: '24px',
          },
        }}
      >
        {elements.map((children, childrenIndex) => (
          <NavLink
            href={item.href + children.href}
            key={children.label}
            active={childrenIndex === active}
            label={children.label}
            description={children.description}
            rightSection={children.rightSection}
            leftSection={children.icon}
            onClick={() => setActive(childrenIndex)}
            color='orange'
            styles={{
              label: {
                fontSize: '20px',
              },
            }}
          />
        ))}
      </NavLink>
      :
      <NavLink
        href={item.href}
        key={item.label}
        active={index === active}
        label={item.label}
        description={item.description}
        rightSection={item.rightSection}
        leftSection={item.icon}
        onClick={() => setActive(index)}
        color='orange'
        styles={{
          label: {
            fontSize: rem(20),
            fontWeight: 700,
            lineHeight: '1',
          },
          description: {
            fontSize: rem(13),
            lineHeight: '1.5',
          },
        }}
      />
  ));

  return items;
}

function SideBarElements() {
  const [active, setActive] = useState(0);

  const items = NavigationElements(homeNav, active, setActive);

  return (
    <Box w={'100%'}>
      {items}
    </Box>
  );
};

export default SideBarElements;