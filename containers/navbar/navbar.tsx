import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import LeftItems from '../../components/navbar/items/leftItems/leftItems';
import RightItems from '../../components/navbar/items/rightItems/rightItems';
import MobileMenuToggle from '../../components/navbar/mobileMenuToggle';
import { Container, LogoImg, NavbarHiddenOnLG } from './navbarStyles';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Container>
      <NavbarHiddenOnLG>
        <LeftItems />
      </NavbarHiddenOnLG>
      <Link href="/">
        <LogoImg
          className="h-7 w-auto"
          src="/images/Skupos/logo.svg"
          alt="Skupos logo"
        />
      </Link>
      <NavbarHiddenOnLG>
        <RightItems />
      </NavbarHiddenOnLG>
      <MobileMenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
};

export default Navbar;
