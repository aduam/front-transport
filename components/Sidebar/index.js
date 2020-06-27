import Link from 'next/link';
import { Container, Anchor } from './style';

const menu = [
  { title: 'Menu', href: '/menu', },
  { title: 'Llenar boleta', href: '/boleta' },
  { title: 'Boletas pendientes', href: '/pendiente' },
];

const Sidebar = () => {
  return (
    <Container>
      {menu.map((e, index) => (
        <Link key={index} href={`${e.href}`}>
          <Anchor>{e.title}</Anchor>
        </Link>
      ))}
    </Container>
  );
};

export default Sidebar;