import { Dispatch, SetStateAction } from 'react';
import { Button, PathGrey, PathWhite } from './mobileMenuToggleStyles';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenuToggle = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Button
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="toggle open/close mobile menu"
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          width="14"
          height="14"
          style={{
            width: '1rem',
            height: '1rem',
          }}
        >
          <PathWhite
            d="M11.78.865L6.513 6.13 1.247.865.005 2.106l5.267 5.267L.005 12.64l1.242 1.241 5.266-5.266 5.267 5.266 1.242-1.241-5.267-5.267 5.267-5.267L11.78.865z"
            className="fill-white"
          ></PathWhite>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          style={{
            width: '1.5rem',
            height: '1.5rem',
          }}
          aria-hidden="true"
        >
          <PathGrey
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="stroke-gray-400"
          ></PathGrey>
          )
        </svg>
      )}
    </Button>
  );
};

export default MobileMenuToggle;
