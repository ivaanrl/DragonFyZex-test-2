import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from '../../atoms/link';
import { AccordionButton, AccordionSection } from './styles';

interface AccordionProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  label: string;
}

const Accordion = ({
  expanded,
  setExpanded,
  children,
  label,
}: AccordionProps) => {
  const isOpen = expanded;

  return (
    <>
      <AccordionButton initial={false} onClick={() => setExpanded(!isOpen)}>
        <Link>{label}</Link>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
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
        {isOpen && (
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

export interface ShrinkableLinkProps {
  label: string;
  children: React.ReactNode;
}

export const ShrinkableLink: React.FC<ShrinkableLinkProps> = ({
  label,
  children,
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <Accordion expanded={expanded} setExpanded={setExpanded} label={label}>
      {children}
    </Accordion>
  );
};
