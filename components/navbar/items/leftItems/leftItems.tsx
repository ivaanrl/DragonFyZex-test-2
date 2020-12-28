import { Container } from './leftItemsStyles';
import NavbarLinks from '../navbarLinks/navbarLinks';
import Products from '../products/products';

const LeftItems = () => {
  return (
    <Container>
      <Products />
      <NavbarLinks />
    </Container>
  );
};

export default LeftItems;
