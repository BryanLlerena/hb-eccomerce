import ale from '../../../assets/manufest/friends/ale.png'
import ale_name from '../../../assets/manufest/eccomerce_names/ale_name.png'

import bryan from '../../../assets/manufest/friends/bryan.png'
import bryan_name from '../../../assets/manufest/eccomerce_names/bryan_name.png'

import cesar from '../../../assets/manufest/friends/cesar.png'
import cesar_name from '../../../assets/manufest/eccomerce_names/cesar_name.png'

import chema from '../../../assets/manufest/friends/chema.png'
import chema_name from '../../../assets/manufest/eccomerce_names/chema_name.png'

import dani from '../../../assets/manufest/friends/dani.png'
import dani_name from '../../../assets/manufest/eccomerce_names/dani_name.png'

import edu from '../../../assets/manufest/friends/edu.png'
import edu_name from '../../../assets/manufest/eccomerce_names/edu_name.png'

import gian from '../../../assets/manufest/friends/gian.png'
import gian_name from '../../../assets/manufest/eccomerce_names/gian_name.png'

import jhon from '../../../assets/manufest/friends/jhon.png'
import jhon_name from '../../../assets/manufest/eccomerce_names/jhon_name.png'

import kat from '../../../assets/manufest/friends/kat.png'
import kat_name from '../../../assets/manufest/eccomerce_names/kat_name.png'

import siumai from '../../../assets/manufest/friends/siumai.png'
import siumai_name from '../../../assets/manufest/eccomerce_names/siumai_name.png'

import vale from '../../../assets/manufest/friends/vale.png'
import vale_name from '../../../assets/manufest/eccomerce_names/vale_name.png'

import william from '../../../assets/manufest/friends/william.png'
import william_name from '../../../assets/manufest/eccomerce_names/william_name.png'


const Friends = () => {
  return(
    <div className="friends-words container">
      <div className='grid-2'>
        <div className='image-container rotate-left'>
          <img className='member_image' src={jhon} alt='jhon_korean_heart'/>
          <img className='member_name' src={jhon_name} alt='jhon_name'/>
        </div>
        <div className='text-container rotate-left'>
          <p>¡Manuuuuu! Espero tengas un día chvr y ganemos todas las pichangas del 2023.</p>
        </div>
      </div>

      <div className='grid-2'>
        <div className='text-container rotate-rigth'>
          <p>Saluidos</p>
        </div>
        <div className='image-container rotate-rigth'>
          <img className='member_image' src={edu} alt='edu_korean_heart'/>
          <img className='member_name' src={edu_name} alt='edu_name'/>
        </div>
      </div>

      <div className='grid-2'>
        <div className='image-container rotate-left'>
          <img className='member_image' src={ale} alt='ale_korean_heart'/>
          <img className='member_name' src={ale_name} alt='edu_name'/>
        </div>
        <div className='text-container rotate-left'>
          <p>Saludos</p>
        </div>
      </div>

      <div className='grid-2'>
        <div className='text-container rotate-rigth'>
          <p>Saluidos</p>
        </div>
        <div className='image-container rotate-rigth'>
          <img className='member_image' src={kat} alt='kat_korean_heart'/>
          <img className='member_name' src={kat_name} alt='kat_name'/>
        </div>
      </div>

      <div className='grid-2'>
        <div className='image-container rotate-left'>
          <img className='member_image' src={gian} alt='gian_korean_heart'/>
          <img className='member_name' src={gian_name} alt='gian_name'/>
        </div>
        <div className='text-container rotate-left'>
          <p>Saluidos</p>
        </div>
      </div>

      <div className='grid-2'>
        <div className='text-container rotate-rigth'>
          <p>Saluidos</p>
        </div>
        <div className='image-container rotate-rigth'>
          <img className='member_image' src={bryan} alt='bryan_korean_heart'/>
          <img className='member_name' src={bryan_name} alt='bryan_name'/>
        </div>
      </div>

      <div className='grid-2'>
        <div className='image-container rotate-left'>
          <img className='member_image' src={william} alt='william_korean_heart'/>
          <img className='member_name' src={william_name} alt='william_name'/>
        </div>
        <div className='text-container rotate-left'>
          <p>Saluidos</p>
        </div>
      </div>

      <div className='grid-2'>
        <div className='text-container rotate-rigth'>
          <p>Saluidos</p>
        </div>
        <div className='image-container rotate-rigth'>
          <img className='member_image' src={siumai} alt='william_korean_heart'/>
          <img className='member_name' src={siumai_name} alt='siumai_name'/>
        </div>
      </div>

      <div className='grid-2'>
        <div className='image-container rotate-left'>
          <img className='member_image' src={dani} alt='dani_korean_heart'/>
          <img className='member_name' src={dani_name} alt='dani_name'/>
        </div>
        <div className='text-container rotate-left'>
          <p>Saluidos</p>
        </div>
      </div>

      <div className='grid-2'>
        <div className='text-container rotate-rigth'>
          <p>Saluidos</p>
        </div>
        <div className='image-container rotate-rigth'>
          <img className='member_image' src={vale} alt='vale_korean_heart'/>
          <img className='member_name' src={vale_name} alt='vale_name'/>
        </div>
      </div>

      <div className='grid-2'>
        <div className='image-container rotate-left'>
          <img className='member_image' src={cesar} alt='cesar_korean_heart'/>
          <img className='member_name' src={cesar_name} alt='cesar_name'/>
        </div>
        <div className='text-container rotate-left'>
          <p>Saluidos</p>
        </div>
      </div>

      <div className='grid-2'>
        <div className='text-container' rotate-rigth>
          <p>Saluidos</p>
        </div>
        <div className='image-container rotate-rigth'>
          <img className='member_image' src={chema} alt='chema_korean_heart'/>
          <img className='member_name' src={chema_name} alt='chema_name'/>
        </div>
      </div>
    </div>
  )
}

export default Friends