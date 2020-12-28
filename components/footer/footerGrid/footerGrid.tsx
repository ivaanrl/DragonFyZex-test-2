import { GridItem, GridTitle } from './footerGridStyles';

interface Props {
  title: string;
  items: string[];
}

const FooterGrid = ({ title, items }: Props) => {
  return (
    <>
      <GridTitle>{title}</GridTitle>
      {items.map((item) => (
        <GridItem href="#">{item}</GridItem>
      ))}
    </>
  );
};

export default FooterGrid;
