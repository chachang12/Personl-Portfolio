import styles from '../style'
import {logo, WebsiteLogo} from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className={`${styles.flexStart} flex-1 flex flex-col justify-start mr-10`}>
        <img src={WebsiteLogo} alt='hoobank' className='w-[266px] h-[72px] object-contain'/>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A reliable and innovative aspiring software engineer.</p>
      </div>
    </div>
    

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
      2023 Carson Chang
      </p>
      
    </div>
  </section>
)


export default Footer