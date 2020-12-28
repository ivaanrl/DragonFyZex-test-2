import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { NavbarSectionLink } from '../../../../styles/globalStyles';
import Sidebar from '../sidebar/sidebar';

const Products = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <motion.a>
      <NavbarSectionLink onMouseEnter={() => setShowSidebar(true)}>
        Products
      </NavbarSectionLink>
      <AnimatePresence>
        {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
      </AnimatePresence>
    </motion.a>
  );
};

export default Products;
