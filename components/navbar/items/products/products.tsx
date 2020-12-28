import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { NavbarSectionLink } from '../../../../styles/globalStyles';
//import Sidebar from '../sidebar/sidebar';
import loadable from '@loadable/component';

const Sidebar = loadable(() => import('../sidebar/sidebar'));

const Products = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <motion.div>
      <NavbarSectionLink onMouseEnter={() => setShowSidebar(true)}>
        Products
      </NavbarSectionLink>
      <AnimatePresence>
        {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Products;
