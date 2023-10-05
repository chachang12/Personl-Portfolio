import {apple, bill, google, picklehome, session} from '../assets'
import styles, {layout} from '../style';


const Projects = () => (
  <section id='projects' className={`${layout.sectionReverse} `}>
    <div className='flex-col'>
    <div className='flex float-left'>
    <div>
      <div className='ml-10'>
        <img src={picklehome} className='rounded-lg w-[100] h-[600px]' />
      </div>
    </div>


    <div className={`${layout.sectionInfo} ml-10`}>
      <h2 className={styles.heading2}>
      Power Pickle
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Power Pickle is an IOS application written in Swift and SwiftUI. Power Pickle allows pickleball players to enter in their recent match data and recieve a rank based on their win to loss ratio. Similar to modern video games, Power Pickle then uses skill based match-making to find the best opponent for each user. Power Pickle is planned to be released on the App Store early 2024.
      </p>
      <div className='mt-5'>
        <img src={apple} alt='applestore' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
        <div>
          <p className={`font-poppins font-normal text-dimWhite text-[12px] leading-[30.8px] mt-1`}>
            Coming Soon!
          </p>

        <div className="flex flex-row space-x-4">

          <p className='font-poppins font-normal text-dimWhite text-[12px] leading-[30.8px] mt-1'>
            Swift
          </p>
          <p className='font-poppins font-normal text-dimWhite text-[12px] leading-[30.8px] mt-1'>
            Firebase
          </p>
        </div>
        </div>

      </div>
    </div>
    </div>

    <div className='flex float-right my-20'>
    <div>
      <div className='ml-10'>
        <img src={session} className='rounded-lg w-[100] h-[400px]' />
      </div>
    </div>


    <div className={`${layout.sectionInfo} ml-10`}>
      <h2 className={styles.heading2}>
      Computer Caddy
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Computer Caddy is a Windows application that allows users to enter in golf ball tracking data from a launch monitor. The program then takes this data and through an algorithm, makes equipment product recommendations best suited for that player. This program aims to gives a club fitting experince to users at home. 
      </p>
      <div className='mt-5'>
        
        

        <div className="flex flex-row space-x-4">

          <p className='font-poppins font-normal text-dimWhite text-[12px] leading-[30.8px] mt-1'>
            C#
          </p>
          <p className='font-poppins font-normal text-dimWhite text-[12px] leading-[30.8px] mt-1'>
            Azure
          </p>
          <p className='font-poppins font-normal text-dimWhite text-[12px] leading-[30.8px] mt-1'>
            MSSQL
          </p>
        </div>
        </div>

      </div>
    </div>
    </div>

  </section>

  

  
)

export default Projects