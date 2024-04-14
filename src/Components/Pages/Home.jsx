import React from 'react'

function Home() {
  return (
    <div className='bg-slate-800 h-[700px] w-full flex items-center justify-center bg-bgOne '>

      <div className='  h-[600px] w-[900px]    rounded-md'>

        <div id='cardSection' className='h-full flex flex-col items-center justify-evenly backdrop-blur-[10px] '>

        <div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <div class="bg-cat bg-cover w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
  <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
    <span class="text-2xl font-semibold">Your Name</span>
    <p>Software Developer</p>
  </div>
  <a class="cursor-pointer bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"  onClick={()=>window.open("https://github.com/nishan812","nishan812")} >Follow Me!</a>
</div>

<div id='textArea' className='h-[200px] flex items-start justify-center  '>

<div id='textContainer' className='w-[60%]'>
  <p className='text-left text-white'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi ipsam voluptatum quam voluptates omnis sed eaque ratione! Quas laboriosam rerum eligendi, quia nostrum mollitia necessitatibus. Omnis nulla quisquam beatae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore temporibus aliquid, obcaecati qui repudiandae ducimus eaque architecto facilis! Voluptatibus nobis corrupti illum eius molestias esse laborum sapiente rerum fuga omnis!  </p>

</div>

        </div>

       
        





        </div>





      </div>
      
  


    </div>
  )
}

export default Home