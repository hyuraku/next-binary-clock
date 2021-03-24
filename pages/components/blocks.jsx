import React from 'react'

import { Block } from './Block'

import styles from '../../styles/Home.module.css'

export const Blocks = ({ value }) => {
  const value_arr = value.split('')

  const number = parseInt(value, 2)

  const blockList = value_arr.map((value) => {
    return <Block value={value} />
  })

  return (
    <div className={styles.Blocks}>
      {blockList}
      <h1>{number}</h1>
    </div>
  )
}
