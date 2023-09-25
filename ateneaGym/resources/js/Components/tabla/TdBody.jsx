import React from 'react'

export const TdBody = (children, index) => {
  return (
    <td className="px-6 py-4" key={index} >
      {children}
    </td >

  )
}
