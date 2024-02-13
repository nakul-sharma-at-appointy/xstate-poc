import React, { useState } from 'react'

const AddTodo = () => {
  const [text, setText] = useState('');

  const handleText = (text) => {
    setText(text)
  }
  return (
    <input
        type="text"
        placeholder="Add a task..."
        onChange={(e) => handleText(e.target.value)}
        value={text}
      />
  )
}

export default AddTodo