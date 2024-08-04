import React, { useState } from 'react'
import messageList from './Message'

const EightBall = ({ initialMessage, initialColor }) => {
  const [message, setMessage] = useState(initialMessage)
  const [color, setColor] = useState()
  const [greenCount, setGreenCount] = useState(0)
  const [goldCount, setGoldenrodCount] = useState(0)
  const [redCount, setRedCount] = useState(0)

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messageList.length)
    return messageList[randomIndex]
  }

  const handleDivClick = () => {
    const randomMessage = getRandomMessage()
    setMessage(randomMessage.msg)
    setColor(randomMessage.color)

    if (randomMessage.color === 'green') {
      setGreenCount(greenCount + 1)
    } else if (randomMessage.color === 'goldenrod') {
      setGoldenrodCount(goldCount + 1)
    } else if (randomMessage.color === 'red') {
      setRedCount(redCount + 1)
    }
  }

  const handleResetClick = () => {
    setMessage(initialMessage)
    setColor()
    setGreenCount(0)
    setGoldenrodCount(0)
    setRedCount(0)
  }

  return (
    <div className="card">
      <div className={`eightBall ${color}`} onClick={handleDivClick}>
        <p className="eightBallMessage">{message}</p>
      </div>
      <button onClick={handleResetClick}>Reset</button>
      <div className="colorInformation">
        <section className="greenCount">Green Count: {greenCount}</section>
        <section className="goldCount">Gold Count: {goldCount}</section>
        <section className="redCount">Red Count: {redCount}</section>
      </div>
    </div>
  )
}

export default EightBall
