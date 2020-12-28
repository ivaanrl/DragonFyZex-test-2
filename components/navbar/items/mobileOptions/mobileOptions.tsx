import MobileProducts from '../products/mobileProducts/mobileProducts';
import NavbarLinks from '../navbarLinks/navbarLinks';
import RightItems from '../rightItems/rightItems';
import { Container } from './mobileOptionsStyles';

const MobileOptions = () => {
  return (
    <Container>
      <MobileProducts />
      <NavbarLinks />
      <RightItems />
    </Container>
  );
};

export default MobileOptions;
