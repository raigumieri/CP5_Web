import {} from 'react';
import { AiOutlineMail, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css'

export default function Footer (){

    return(
        <>
        <section className='footer_geral'>
            <div className='icon'>
                <div className='icones'>
                    <AiOutlineMail/>
                    <a href="" target='blanc'>Email</a>
                </div>
                <div className='icones'>
                    <FaLinkedin/>
                    <a href="https://www.linkedin.com/in/guilherme-fazito-5a3288277/" target='blanc'>Linkedin</a>
                </div>
                <div className='icones'>
                    <AiFillFacebook/>
                    <a href="#" target='blanc'>Facebook</a>
                </div>
                <div className='icones'>
                    <AiFillInstagram/>
                    <a href="https://www.instagram.com/__fazito__/" target='blanc'>Instagram</a>
                </div>
                
                
                
                
            </div>
            <div className='footer'>
                <h3>@2023 - Todos os direitos reservados </h3>
            </div>
            
        </section>
      
        </>

    )


}