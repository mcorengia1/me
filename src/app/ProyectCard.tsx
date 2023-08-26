import { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import ConstructionIcon from '@mui/icons-material/Construction';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StorageIcon from '@mui/icons-material/Storage';

interface Stack {
    title: string,
    content: string
}

interface Data {
    title: string,
    description: string,
    image: any,
    github?: string,
    demo?: string,
    live?: string,
    stack?: Stack[],
}

export default function ProyectCard(props: Data) {

    const [showDetails, setShowDetails] = useState(false)

    const noDetailsClass = "bg-black/60 rounded-xl m-3 w-full md:w-1/4"
    const detailsClass = "bg-black/60 rounded-xl m-3 w-full md:w-1/2"

    return (
        <div className={showDetails ? detailsClass : noDetailsClass} >

            <div className="bg-center bg-cover h-48 flex items-end"
                style={{ backgroundImage: props.image ? 'url(' + props.image.src + ')' : '' }}>
                <h3 className="text-2xl bg-black/75 p-2 w-full">{props.title}</h3>
            </div>

            <div className="m-3">
                <p>{props.description}</p>

                <div className="flex items-center justify-evenly">
                    {props.github ?
                        <button className="border rounded-3xl py-1 px-2 m-1 flex justify-center items-center hover:bg-white/20"
                            onClick={() => window.open(props.github)}><GitHubIcon />&nbsp;Github</button> : null}

                    {props.stack ?
                        <button className="border rounded-3xl py-1 px-2 m-1 flex justify-center items-center hover:bg-white/20"
                            onClick={() => setShowDetails(!showDetails)}><StorageIcon />
                            &nbsp; {showDetails ? 'Ocultar stack' : 'Mostrar stack'}
                        </button> : null}


                    {props.demo ?
                        <button className="border rounded-3xl py-1 px-2 m-1 flex justify-center items-center hover:bg-white/20"
                            onClick={() => window.open(props.demo)}><ConstructionIcon />&nbsp;Demo</button> : null}
                    {props.live ?
                        <button className="border rounded-3xl py-1 px-2 m-1 flex justify-center items-center hover:bg-white/20"
                            onClick={() => window.open(props.live)}><RocketLaunchIcon />&nbsp;Live</button> : null}
                </div>

                {!showDetails ? null :
                    <>
                        {!props.stack ? null : props.stack.map((elem: Stack, i: number) => {
                            return (
                                <div className='my-2 bg-black/75' key={i}>
                                    <h3 className='text-xl font-semibold'>{elem.title}</h3>
                                    <p className=''>{elem.content}</p>
                                </div>
                            )
                        })}
                    </>}
            </div>
        </div>
    )
}