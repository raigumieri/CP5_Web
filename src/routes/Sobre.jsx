import { } from "react";
import "./Sobre.css"

export default function Sobre (){

    return(
        <>
            <div className="integrantes_geral">
                <div className="grupo1">
                    <div className="integrantes">
                        <img className="imagem_fazito" src="src\assets\Fazito.jpeg" alt="" />
                        <h3>Guilherme Fazito</h3>
                    </div>
                
                    <div className="integrantes">
                        <img className="imagem_rai" src="src\assets\Rai.jpeg" alt="" />
                        <h3 className="rai">Rai Gumieri dos Santos</h3>
                    </div>
                </div>
                
                <div className="grupo2">
                    <div className="integrantes">
                        <img className="imagem_ian" src="src\assets\Ian.jpeg" alt="" />
                        <h3>Ian Xavier Kuraoka</h3>
                    </div>
                
                    <div className="integrantes">
                        <img className="imagem_lima" src="src\assets\lima.jpeg" alt="" />
                        <h3>Henrique Lima</h3>
                    </div>

                    <div className="integrantes">
                        <img className="imagem_laes" src="src\assets\laes.jpeg" alt="" />
                        <h3>Fellype Laes</h3>
                    </div>
                </div>    
            </div>
        </>
    )
}