import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../atoms';
import { AccordionButton, AccordionSection } from './styles';

export interface AccordionProps {
  label: string;
  children: React.ReactNode;
}

export const Accordion: FC<AccordionProps> = ({ label, children }) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <>
      <AccordionButton initial={false} onClick={() => setExpanded(!expanded)}>
        <Button fontSize={24} fontWeight={600} padding={0}>
          {label}
        </Button>
        <motion.div
          animate={{
            rotate: expanded ? 180 : 0,
          }}
        >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '11px', width: '11px' }}
          >
            <path d="M10.9133 5.65273L9.51328 7.05273L5.51328 3.05273L1.51328 7.05273L0.113281 5.65273L5.51328 0.252735L10.9133 5.65273Z" />
          </svg>
        </motion.div>
      </AccordionButton>
      <AnimatePresence initial={false}>
        {expanded && (
          <AccordionSection
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <motion.div
              variants={{
                collapsed: { scale: 0.8, opacity: 1 },
                open: { scale: 1, opacity: 1 },
              }}
              transition={{ duration: 0.25 }}
            >
              {children}
            </motion.div>
          </AccordionSection>
        )}
      </AnimatePresence>
    </>
  );
};
