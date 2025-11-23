
// import Herosection from './components/Herosection'
// import { useProductContext } from './Context/Productcontext';
// const About = () => {
//   const myname=useProductContext();
//   const data=
//   {
//     name:"React Ecommerce Website",
//   }
//   return (
//     <div>
//     {myname}
//          <Herosection mydata={data}/>
//     </div>
//   )
// }

// export default About

import HeroSection from "./components/Herosection";
import { useProductContext } from "./Context/Productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "React Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection mydata={data} />
    </>
  );
};

export default About;
