import React from 'react'
import RDR2__herosec from '../../../Components/Site/Sections/RDR2__heroSec/RDR2__herosec'
import "./RDR2.css"
import RDR2__aboutSec from '../../../Components/Site/Sections/RDR2__aboutSec/RDR2__aboutSec'
import RDR2__gangs from '../../../Components/Site/Sections/RDR2__gangs/RDR2__gangs'
import RDR2__outlaws from '../../../Components/Site/Sections/RDR2__outlaws/RDR2__outlaws'
const RDR2 = () => {
  return (
    <main id='rdr2'>
      <RDR2__herosec/>
      <RDR2__aboutSec/>
      <RDR2__gangs/>
      <RDR2__outlaws/>
    </main>
  )
}

export default RDR2
