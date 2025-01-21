import { Carousel } from '@mantine/carousel';
import { Paper, Title, Text, Button, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CarouselHome.module.css';

const data = [
  {
    image: 'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixlib=rb-4.0.3',
    title: 'Desarrollo Web Profesional',
    category: 'Servicios',
    description: 'Creamos sitios web modernos y responsivos'
  },
  {
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3',
    title: 'Diseño UI/UX',
    category: 'Diseño',
    description: 'Interfaces intuitivas y experiencias de usuario excepcionales'
  },
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3',
    title: 'Soluciones Tecnológicas',
    category: 'Tecnología',
    description: 'Implementamos las últimas tecnologías para tu negocio'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
    title: 'Marketing Digital',
    category: 'Marketing',
    description: 'Estrategias efectivas para tu presencia online'
  }
];

function Card({ image, title, category, description }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.description} size="sm">
          {description}
        </Text>
      </div>
      <Button variant="white" color="dark">
        Saber más
      </Button>
    </Paper>
  );
}

const CarouselHome = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      withControls
      withIndicators
      loop
    >
      {slides}
    </Carousel>
  );
};

export default CarouselHome;