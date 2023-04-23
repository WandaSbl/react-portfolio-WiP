import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>Ingénieur application depuis plus de 3 ans dans une ESN spécialisée dans la digitalisation de l'industrie, j'ai travaillé pour des clients Grands Comptes des secteurs pétrochimique, pharmaceutique et agro-alimentaire dans le cadre de missions d'intégration, mais aussi de développement de solutions de gestion de laboratoire. </p>
                <p>Mon expérience m'a permis de développer ma sensibilité à l'optimisation des processus métiers ainsi que mon sens du service.</p>
                <p>Je suis aujourd'hui à la recherche de l'opportunité qui me permettra de passer du rôle d'intégratrice à celui de développeuse.</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#2b2d42" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faReact} color="#92DCE5" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faReact} color="#2b2d42" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#F7EC59" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#FF66D8" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faReact} color="#2b2d42" />
                    </div>
                </div>
            </div>

            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default About