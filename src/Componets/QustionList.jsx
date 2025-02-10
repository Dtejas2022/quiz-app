import React from 'react'

const QustionList = ({question, options, handleClick, currentAnswer}) => {
  return (
    <div>
      <h2 className='text-3xl mb-2'>{question}</h2>

      <ul>
        {options.map((option,index)=>(
            <li className={currentAnswer===option ? 'bg-green-400 m-2 p-2':'w-full bg-slate-100 m-2 p-2 cursor-pointer text-lg hover:bg-slate-200'} key={index}
            onClick={()=>handleClick(option)}
            >{option}</li>
        ))}
      </ul>

    </div>
  )
}

export default QustionList
