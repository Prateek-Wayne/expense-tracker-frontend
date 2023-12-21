import React from 'react'

const SingleIncome = ({income}) => {
    return (
    <div>
      <p>{income?.title}</p>
      <p>{income?.amount}</p>
      <p>{income?.type}</p>
      <p>{income?.date}</p>
      <p>{income?.description}</p>
    </div>
  )
}

export default SingleIncome
