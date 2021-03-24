import React from 'react'

import styles from '../../styles/Home.module.css'

export const Block = ({value}) => {
  const blockColor = value === '1' ? 'BlackBlock' : 'WhiteBlock'
  if (value === '1'){
    return <div className={  styles.BlackBlock  } > </div>
  }else{
    return <div className={  styles.WhiteBlock  } > </div>
  }
  
}
