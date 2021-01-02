import React from 'react';
import { StyledModal } from './styles';

export interface StyledModalProps {
  fullScreen?: boolean;
  color?: string;
  zIndex?: number;
  onClick?: () => void;
  customStyles?: {};
}

export interface ModalProps extends StyledModalProps {}

const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.4,
  },
};

export const Modal: React.FC<ModalProps> = ({
  fullScreen = false,
  zIndex = 10,
  color = '#000000',
  onClick,
  customStyles,
}) => {
  return (
    <StyledModal
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      fullScreen={fullScreen}
      zIndex={zIndex}
      color={color}
      customStyles={customStyles}
      onClick={onClick}
    />
  );
};
