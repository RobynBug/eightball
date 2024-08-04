import React, { useState } from 'react'
import messageList from './Message'

const EightBall = ({ initialMessage }) => {
  const [message, setMessage] = useState(initialMessage)
  const [color, setColor] = useState()
  const [clicked, setClicked] = useState(false)

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messageList.length)
    return messageList[randomIndex]
  }

  const handleDivClick = () => {
    if (!clicked) {
      const randomMessage = getRandomMessage()
      setMessage(randomMessage.msg)
      setColor(randomMessage.color)
      setClicked(true)
    }
  }

  const handleResetClick = () => {
    setMessage(initialMessage)
    setColor()
    setClicked(false)
  }

  return (
    <div className="card">
      <div className={`eightBall ${color}`} onClick={handleDivClick}>
        <p className="eightBallMessage">{message}</p>
      </div>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  )
}

export default EightBall
