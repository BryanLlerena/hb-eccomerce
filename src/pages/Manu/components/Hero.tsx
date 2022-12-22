import { Player } from '@lottiefiles/react-lottie-player';
import manu_hero from '../../../assets/manufest/manu_hero.png'

const Hero = () => {
  return(
    <div className='hero-container container'>
      <img src={manu_hero} alt='manu_backgrpund' className='hero-image'/>
      <Player
        src='https://assets6.lottiefiles.com/private_files/lf30_rjuv1b.json'
        className='fireworks-1'
        loop
        autoplay
      />
      <Player
        src='https://assets6.lottiefiles.com/private_files/lf30_rjuv1b.json'
        className='fireworks-2'
        loop
        autoplay
      />
      <Player
        src='https://assets7.lottiefiles.com/private_files/lf30_jkr8cuzq.json'
        className='balloon-1'
        loop
        autoplay
      />
      <Player
        src='https://assets7.lottiefiles.com/private_files/lf30_jkr8cuzq.json'
        className='balloon-2'
        loop
        autoplay
      />
    </div>
  )
}

export default Hero