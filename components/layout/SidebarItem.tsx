import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
  route: string;
  item: any;
}

const MenuItem: React.VFC<Props> = ({
  isMenuOpen,
  toggleMenuOpen,
  route,
  item,
}) => {
  return (
    <motion.li
      variants={menuItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      whileFocus={{ scale: 1.1 }}
      className="mb-6 flex items-center cursor-pointer"
    >
      <Link href={item.route}>
        <a
          className={
            route === item.route ? 'text-white font-semibold' : 'text-gray-50'
          }
          onClick={toggleMenuOpen}
          tabIndex={!isMenuOpen ? -1 : 0}
        >
          {item.text}
        </a>
      </Link>
    </motion.li>
  );
};

export default MenuItem;

export const menuItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
