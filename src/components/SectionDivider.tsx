import { motion } from 'framer-motion';

function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className='bg-gray-50/20 my-20 h-16 w-1 rounded-full hidden sm:block'
    ></motion.div>
  );
}

export default SectionDivider;