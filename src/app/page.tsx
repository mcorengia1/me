'use client'
import Image from 'next/image'
import { useRef } from 'react'
import ProyectCard from './ProyectCard'
import TookeatImg from '../../public/tookeat-project.jpg'
import CryptoDashImg from '../../public/cryptodash-project.jpg'
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link'

export default function Home() {

  const navigationRef: any = useRef(null)
  const proyectsRef: any = useRef(null)
  const techRef: any = useRef(null)
  const contactRef: any = useRef(null)

  const scrollTo = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <div className="bg-[url('../../public/main-bg.jpg')] bg-center bg-cover flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className='text-9xl'>Hola</h1>
        <button
          className='border border-white rounded-3xl px-4 py-1 text-xl mt-32'
          onClick={() => scrollTo(navigationRef)}
        >Ver más</button>

      </div>

      <div ref={navigationRef}
        className="bg-[url('../../public/earth.jpg')] bg-center bg-contain bg-no-repeat flex h-screen flex-col items-center justify-center">
        <p className='mx-3 my-16 max-w-4xl p-3 bg-black/70 rounded-xl text-xl text-center'>
          Me llamo Mauro y tengo experiencia creando soluciones completas con aplicaciones Full Stack (React - Go/Node), así también como administrando su infraestructura
        </p>

        <div className='flex flex-wrap w-full h-full justify-center'>
          <div className='bg-[url("../../public/proyects.png")] bg-center bg-cover flex justify-center items-center flex-col w-2/5 h-44 hover:bg-black/90 rounded-xl cursor-pointer max-w-sm mx-2'
            onClick={() => scrollTo(proyectsRef)}>

            <h3 className='text-xl font-bold'>Proyectos</h3>
          </div>

          <div className='bg-[url("../../public/tech.png")] bg-center bg-cover flex justify-center items-center flex-col w-2/5 h-44 hover:bg-black/80 bg-black/70 rounded-xl cursor-pointer max-w-sm mx-2'
            onClick={() => scrollTo(techRef)}>

            <h3 className='text-xl font-bold'>Tecnologías</h3>
          </div>
        </div>

        <div className='flex flex-wrap w-full h-full justify-center'>
          <div className='bg-[url("../../public/contact.png")] bg-center bg-cover flex justify-center items-center flex-col w-2/5 h-44 hover:bg-black/80 bg-black/70 rounded-xl cursor-pointer max-w-sm mx-2'
            onClick={() => scrollTo(contactRef)}>

            <h3 className='text-xl font-bold'>Contacto</h3>
          </div>

          <div className='bg-[url("../../public/cv.png")] bg-center bg-cover flex justify-center items-center flex-col w-2/5 h-44 hover:bg-black/80 bg-black/70 rounded-xl cursor-pointer max-w-sm mx-2'
            onClick={() => window.open('https://drive.google.com/file/d/1WlWZcfWUjhdDB8Zx_BVkP-d1XxmN7vPo/view?usp=drive_link')}>

            <h3 className='text-xl font-bold'>CV de Mauro</h3>
            <p>Se mostrará en Google Drive</p>
          </div>
        </div>
      </div>

      <div ref={proyectsRef} className="bg-[url('../../public/venus.jpg')] bg-center bg-cover min-h-screen flex flex-col items-center justify-center">
        <h2 className='my-6 text-5xl'>Proyectos</h2>

        <p className='mx-3 max-w-4xl p-3 bg-black/70 rounded-xl text-xl text-center'>
          Estos son algunos de los proyectos que considero mas interesantes de ver.
          Todos mis repositorios de codigo (+25) los pueden encontrar en <Link href={'https://github.com/mcorengia1'} className='underline'>Mi Github</Link>
        </p>

        <div className='flex flex-row flex-wrap items-center justify-center'>

          <ProyectCard
            title='Tookeat'
            description='Web App para crear un menú online y recibir pedidos por Whatsapp'
            live='https://www.tookeat.com'
            image={TookeatImg}
            stack={[{
              title: 'Features',
              content: 'Suscripciones, manejo de usuarios, menus e imagenes dinamicas, reglas de seguridad cloud',
            },
            {
              title: 'APIs de terceros',
              content: 'Cloud functions para interactuar con la API de MercadoPago sin necesidad de un servidor ',
            },
            {
              title: 'Base de datos de imagenes de archivos',
              content: 'Google Cloud Storage',
            },
            {
              title: 'Base de datos de usuarios',
              content: 'RealTime Database de Google Cloud',
            },
            {
              title: 'Frontend',
              content: 'React',
            },
            {
              title: 'Manejo de usuarios',
              content: 'Google auth, registro con email y con cuenta de google',
            },
            {
              title: 'Sistema de pagos',
              content: 'Posee un sistema de versiones de pago usando el API de MercadoPago y un cronjob para verificar los estados de las suscripciones',
            },]}
          />

          <ProyectCard
            title='CryptoDash'
            description='Dashboard crypto con cotizaciones en tiempo real e información de cada criptomoneda'
            github='https://github.com/mcorengia1/cryptodash'
            demo='https://cryptodash123.vercel.app/'
            image={CryptoDashImg}
          />

        </div>

      </div>

      <div ref={techRef} className="bg-[url('../../public/neptune.jpg')] flex justify-center items-center flex-col bg-center bg-cover min-h-screen py-24">

        <h2 className='my-6 text-5xl'>Skills</h2>

        <div className='flex flex-row justify-evenly flex-wrap w-full'>
          <div className='flex flex-col justify-center items-start w-full md:w-1/3 my-4 px-2 bg-black/75 min-w-min '>
            <h3 className='text-3xl my-4 mx-2'>FullStack</h3>

            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='React'
                src='/react.svg'
                width={40}
                height={40}
              />
              &nbsp;React</div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='Next.js'
                src='/nextjs.png'
                width={40}
                height={40}
              />
              &nbsp;Next.js
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='Typescript'
                src='/typescript.png'
                width={40}
                height={40}
              />
              &nbsp;Typescript
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='HTML'
                src='/html.svg'
                width={40}
                height={40}
              />
              &nbsp;HTML
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='CSS'
                src='/css.svg'
                width={40}
                height={40}
              />
              &nbsp;CSS
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='Git'
                src='/git.svg'
                width={40}
                height={40}
              />
              &nbsp;Git
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='Go'
                src='/go.svg'
                width={40}
                height={40}
              />
              &nbsp;Go
            </div>
          </div>

          <div className='flex flex-col justify-center items-start w-full md:w-1/3 my-4 px-2 bg-black/75 min-w-min '>
            <h3 className='text-3xl my-4 mx-2'>DevOps</h3>

            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='Python'
                src='/python.svg'
                width={40}
                height={40}
              />
              &nbsp;Python
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='Bash'
                src='/bash.svg'
                width={40}
                height={40}
              />
              &nbsp;Bash
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='Linux'
                src='/linux.png'
                width={40}
                height={40}
              />
              &nbsp;Linux
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='Containers'
                src='/docker.svg'
                width={40}
                height={40}
              />
              &nbsp;Containers
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='Networking'
                src='/networking.png'
                width={40}
                height={40}
              />
              &nbsp;Networking
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='Cloud'
                src='/cloudops.svg'
                width={40}
                height={40}
              />
              &nbsp;Cloud
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='CI/CD'
                src='/cicd.png'
                width={40}
                height={40}
              />
              &nbsp;CI/CD
            </div>
            <div className='flex flex-row items-center text-xl my-2 ms-6'>
              <Image
                alt='Monitoreo'
                src='/monitoreo.png'
                width={40}
                height={40}
              />
              &nbsp;Monitoreo
            </div>
          </div>
        </div>
      </div>
      <div ref={contactRef} className="bg-[url('../../public/contact-bg.jpg')] bg-center bg-cover min-h-screen flex flex-col items-center justify-center w-full">
        <h2 className='my-6 text-5xl'>Contacto</h2>

        <div className='bg-black/50 p-1 w-full md:w-2/5 rounded-xl'>
          <div className='bg-black/50 p-2 my-4 border rounded-xl cursor-pointer hover:bg-black/75'
            onClick={() => window.open('https://github.com/mcorengia1')}>
            <GitHubIcon />
            &nbsp;/mcorengia1
          </div>
          <div className='bg-black/50 p-2 my-4 border rounded-xl cursor-pointer hover:bg-black/75'
            onClick={() => window.open('https://www.linkedin.com/in/maurocorengia/')}>
            <LinkedInIcon />
            &nbsp;@maurocorengia
          </div>
          <div className='bg-black/50 p-2 my-4 border rounded-xl'>
            <MailIcon />
            &nbsp;mcorengia1@gmail.com
          </div>
        </div>

      </div>

      <Fab className='bg-white hover:bg-white/90' onClick={() => scrollTo(navigationRef)}
        style={{ position: 'fixed', bottom: '25px', right: '25px' }}>
        <MenuIcon />
      </Fab>
    </main >
  )
}
