import { motion } from 'framer-motion';
import React from 'react'
import useFirestore from '../hooks/useFirestore'

function ImageGrid({ setSelectedImg }) {

    const { docs } = useFirestore('images');

    console.log('DOCS:::', docs);

    return (
        <div className='img-grid' >
            {docs && docs.length > 0 &&
                docs.map(item => {
                    return (
                        <motion.div className='img-wrap'
                            layout
                            whileHover={{ opacity: 1 }}
                            key={item.id}
                            onClick={() => setSelectedImg(item.url)} >
                            <motion.img src={item.url} alt="uploaded-image"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            />
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

export default ImageGrid