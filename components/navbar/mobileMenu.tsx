import { Dispatch, SetStateAction, useEffect } from 'react';
import MobileOptions from './items/mobileOptions/mobileOptions';
import { Container, MobileOptionsContainer } from './mobileMenuStyles';
import Navbar from '../../containers/navbar/navbar';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Container
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="hidden"
    >
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileOptionsContainer>
        <MobileOptions />
      </MobileOptionsContainer>
    </Container>
  );
};

export default MobileMenu;
