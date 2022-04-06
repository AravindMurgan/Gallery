import { motion } from 'framer-motion';
import React from 'react'

function Modal({ selectedImg, setSelectedImg }) {
    console.log('SELECTEDIMG:::', selectedImg);
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null)

        }
    }
    return (
        <motion.div className='backdrop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleClick} >
            <motion.img src={selectedImg}
                initial={{ y: '-100vh' }}
                animate={{ y: '0' }}
                alt="enlarged-pic" />
        </motion.div>
    )
}

export default Modal