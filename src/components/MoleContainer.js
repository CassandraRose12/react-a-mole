//add handleClick, to increase score by one and then set clicked on mole to no longer display
import React from 'react'
import Mole from './Mole'

function MoleContainer(props) {
  return (
    <div>
        <h2>MoleContainer</h2>
            <Mole />
        </div>
  )
}

export default MoleContainer