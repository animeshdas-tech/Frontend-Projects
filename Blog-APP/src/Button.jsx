import React from 'react'

function Button({children,className='',bgcolor="bg-blue-600",type="button",textColor = "text-white",...props}) {
  return (
    <button className={`px-4 py-2 rounded-lg hover:bg-slate-400 font-bold ${bgcolor}${textColor}${className}`}{...props}>
      {children}
    </button>
  )
}

export default Button