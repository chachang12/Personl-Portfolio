import { features } from '../constants';
import { Headshot3ai, logoforbg, githubvec, linkedin } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';


const AboutMe = () => {
  return (
    <section id='aboutme' className={layout.section}>
      <div className={layout.sectionInfo}>
        <img src={Headshot3ai} atl="headshot" className=' w-[300px] h-[300px] rounded-full'/>

      </div>

      <div className='mr-20'>
        <h2 className={styles.heading2}>
          About Me
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          My name is Carson Chang and I love building applications that find use in consumers every day lives. I aspire to keep learning and growing so that my creations are only limited by my imagination. 
        </p>
      </div>

      <div>
        <div className="flex flex-row space-x-4"  >
          <button onClick={() => { window.location.href = 'https://github.com/chachang12'; } } class='flex-none '>
            <img src={githubvec} atl="logo" className=' w-[100px] h-[100px]'/>
          </button>
          <p className={`flex ${styles.heading3} my-8`}>
            chachang12
          </p>
        
        </div>

        <div className="flex flex-row space-x-4"  >
          <button onClick={() => { window.location.href = 'https://www.linkedin.com/in/chachang12/'; } } class='flex-none '>
            <img src={linkedin} atl="logo" className=' w-[100px] h-[100px]'/>
          </button>
          <p className={`flex ${styles.heading3} my-8`}>
            chachang12
          </p>
        
        </div>

      </div>

    </section>
  )
}

export default AboutMe