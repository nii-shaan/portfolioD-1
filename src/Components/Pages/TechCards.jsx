import React from "react";

function TechCards({ techName = "techlogo" }) {
  return( 
  <>

  <div className="border border-white h-[50px] w-[100px] m-[5px] flex items-center justify-center text-white rounded-lg ">
{techName}
  </div>
  
  
  </>
)
}

export default TechCards;
