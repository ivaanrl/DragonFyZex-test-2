import Products from '../products/products';
import { Container } from './leftItemsStyles';
import NavbarLinks from '../navbarLinks/navbarLinks';

const LeftItems = () => {
  return (
    <Container>
      <Products />
      <NavbarLinks />
    </Container>
  );
};

export default LeftItems;
