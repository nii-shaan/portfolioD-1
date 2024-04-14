import React from 'react'
import TechCards from './TechCards'

function About() {
  return (
    <div className='bg-bgOne h-[700px] w-full flex items-center  justify-center  '>

    <div className='h-full w-full  backdrop-blur-[15px] flex justify-center items-center'>

      <div id='area' className=' h-[600px] w-[1400px]'>

        <div id='textContainer' className=" h-[30%] w-full flex items-center justify-center ">

          <div className='bg-blue-900 text-white h-[90%] w-[600px] overflow-y-scroll p-[15px] rounded-lg'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam quaerat debitis ea. Laboriosam animi cupiditate qui necessitatibus beatae aperiam ratione corporis. Eos quidem sint voluptas corporis, at sapiente necessitatibus.
            Nobis, quas provident? Quis reprehenderit necessitatibus dolorem officiis perferendis at hic voluptatum repellendus mollitia, blanditiis voluptates, cumque ex quibusdam numquam quasi commodi omnis aspernatur rem fugiat ipsum veritatis, animi dolore.
            Dolore similique nisi, rerum blanditiis ea aut nobis architecto, unde, nulla deleniti vero. Rem ab, dolorum hic quam ratione itaque vero commodi ducimus eveniet quo explicabo laboriosam deleniti aspernatur corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in, beatae minima voluptates distinctio velit temporibus! Similique, magni. Esse delectus temporibus libero iusto necessitatibus. Nobis consequuntur possimus quisquam repudiandae quod! </p>
          </div>
        </div>

        <div id='techsSection' className=' h-[50%] w-full flex  items-center justify-evenly'>

          <div id='frontEndSection' className='h-full w-[33%] border-black border-[2px]'>

            <h2 className='block text-center text-[25px] text-orange-100 italic border-black border-b'>Frontend</h2>
            <div className='h-[80%] flex flex-wrap items-center justify-center'>
            <TechCards/>
            <TechCards/>
            <TechCards/>
            <TechCards/>
            <TechCards/>
            <TechCards/>
            <TechCards/>  
            <TechCards/>  
             

            </div>
            


          </div>
          <div id='backEndSection' className='h-full w-[33%] border-black border-[2px]'>
            
          <h2 className='block text-center text-[25px] text-orange-100 italic border-black border-b'>Backend</h2>
            <div className='h-[80%] flex flex-wrap items-center justify-center'>
            <TechCards/>
            <TechCards/>
            <TechCards/>
            <TechCards/>
            
            

            </div>

          </div>

          <div id='database section' className='h-full w-[33%] border-black border-[2px]'>

              
          <h2 className='block text-center text-[25px] text-orange-100 italic border-black border-b'>Database</h2>
            <div className='h-[80%] flex flex-wrap items-center justify-center'>
            <TechCards/>
            <TechCards/>
            <TechCards/>
            <TechCards/>
            <TechCards/>
            <TechCards/>
            
            

            </div>
          </div>


        </div>
        
        <div id='othersSection' className='border-black border-[2px] w-full h-[20%] mt-[5px]'>

          <div className='w-[10%] border-r border-black text-white h-full inline-flex flex-row items-center justify-center'>
            <h1 className='inline'>Others</h1>
          </div>

          

        </div>




      </div>




      
    </div>
    </div>
  )
}

export default About