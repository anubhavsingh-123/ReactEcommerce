import React from 'react'
import Herosection from './components/Herosection'
import Trusted from './components/Trusted'
import Services from './components/Services'
import Featureproduct from './components/Featureproduct'
const Home = () => {
  const data=
  {
    name:"  The General Storehouse",
  }
  return (
    <div>
 <Herosection mydata={data} style={{ fontFamily: "Lora, serif" }}>
  {/* Your content goes here */}
</Herosection>
 <Featureproduct/>

           <Services style={{ fontFamily: "Lora, serif" }}/>
           <Trusted style={{ fontFamily: "Lora, serif" }}/>
            
    </div>
  )
}

export default Home
