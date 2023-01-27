import '../Landing/style.css'
import { useState } from 'react'
import logo from '../../assets/logoWhite.png'
import ilustration from '../../assets/Illustration.png'

export function Landing({ setPage }){

    return(
        <div className='container__landingPage'>
            <div className='container'>
                <div className='container__header'>
                    <img src={logo} alt="logo" />
                    <h1>Centralize o controle das suas finanças</h1>
                    <span>de forma rápida e segura</span>
                    <button onClick={() => {setPage(false)}}>Iniciar</button>
                </div>


                <div className='container__bottom'>
                    <img src={ilustration} alt="" />
                </div>
            </div>
        </div>
    )
}