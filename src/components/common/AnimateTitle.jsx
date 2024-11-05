import { motion } from 'framer-motion';

export const AnimateTitle = () => {

    const textVariants = {
        hidden: { 
          opacity: 0,
          y: 20 
        },
        visible: { 
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut"
          }
        }
      };
    
      const titleVariants = {
        hidden: { 
          opacity: 0 
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.55,
          }
        }
      };

  return (
    <motion.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  textAlign: 'center', marginTop:"2rem"}}
      variants={titleVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1>
        <motion.span variants={textVariants} style={{marginLeft:"1rem"}} className='gradient-title'>
          Bienvenido
        </motion.span>
        <motion.span variants={textVariants} style={{marginLeft:"1rem"}} className='gradient-title'>
           a 
        </motion.span>
        <motion.span style={{marginLeft:"1rem"}} className='gradient-title'
          variants={textVariants}
        >
          your travel
        </motion.span>
      </motion.h1>
    </motion.div>
  )
}
