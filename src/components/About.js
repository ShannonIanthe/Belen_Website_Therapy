import React from 'react'
import '../Styles/main.css'
import Belen from '../images/beluPic.png'

function About() {
  return (
    <div className='about-info'>
<div id='col' className='col1'>
<img className='belu-picture' src={Belen} alt='pictureOfBelen'/> 
</div>   
<div id='col' className='col2'>
<p><span className='name'><h1>Maria Belen</h1></span>
<span className='title'><h3>Licenciada en Psicología</h3></span><br/>
          Servicio de salud mental
          “Tejiendo Redes - Psicología Integral”
          Atención online y presencial
          <br/> Soy Licenciada en Psicología. Tengo 7 años de experiencia en el trabajo de personas con discapacidad. He trabajado también en consultorio privado y en la toma de psicotécnicos y de entrevistas en Selección de Personal. Me considero una persona responsable, proactiva y motivada hacia nuevos retos y aprendizajes.
Busco poder brindar mis valores personales y profesionales en un buen ámbito laboral. </p>
</div> 
    </div>
  )
}

export default About