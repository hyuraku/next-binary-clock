
import React, { useState, useEffect } from 'react'

import { Blocks } from './Blocks'

import styles from '../../styles/Home.module.css'

const Clock = () => {
  const [dateTime, setDateime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setDateime(new Date()), 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  const currentHours = dateTime.getHours()
  const hoursString = Padding(currentHours.toString(), 2)

  const currentMinutes = dateTime.getMinutes()
  const minutesString = Padding(currentMinutes.toString(), 2)

  const binaryHours10 = Padding(toBinaryString(hoursString[0]), 2)
  const binaryHours1 = Padding(toBinaryString(hoursString[1]), 4)

  const binaryMinutes10 = Padding(toBinaryString(minutesString[0]), 3)
  const binaryMinutes1 = Padding(toBinaryString(minutesString[1]), 4)

  return (
    <div>
      <div className={styles.BlockArea}>
        <Blocks value={binaryHours10} />
        <Blocks value={binaryHours1} />
        <Blocks value={binaryMinutes10} />
        <Blocks value={binaryMinutes1} />
      </div>
    </div>
  )
}

const Padding = (string, start_num) => {
  return string.toString().padStart(start_num, '0')
}

const toBinaryString = (string) => {
  return parseInt(string).toString(2)
}

export default Clock
