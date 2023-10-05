import styles from '../style';
import { discount, robot, Headshot3ai, cloudvec, logoforbg } from '../assets';
import MyProjectsButton from './MyProjectsButton'

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] mr-5 z-10'>
        Carson Chang <br className='sm:block hidden'/>
        <span className='text-white'>Full Stack</span> {" "}
        </h1>
          
        <div className='ss:flex hidden md:mr-4 mr-0'>
          {/*<MyProjectsButton />*/}
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full z-10 mr-5'>
        Software Developer
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Junior Computer Science Student at Southern Adventist University
      </p>
    </div>
    <div className={`flex justify-center z-0 mr-20`}>
      <img src={logoforbg} atl="logo" className=' w-[500px] h-[500px] relative z-[5]'/>
      <div className='absolute z-[0] mt-10 w-[450px] h-[450px] pink__gradient'/>
      {/* <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>*/}
      </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      {/*<MyProjectsButton/>*/}
    </div>
    
  </section>
)

export default Hero