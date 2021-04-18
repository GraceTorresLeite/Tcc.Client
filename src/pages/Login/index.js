import React from 'react';
import './styles.css';

import logo from '../../assets/logo.svg'
import logoSchedule from '../../assets/logoSchedule.png'
import padlock from '../../assets/padlock.png'

export default function Login() {
    return ( 
        <div className='login-container'>
            <section className='form'>
                <img src={logoSchedule} alt='Schedule'/>
                <form>
                    <h1>Agende seu horário</h1>
                    <input placeholder='Usuário'/>
                    <input type='password' placeholder='Senha'/>

                    <button className='button' type="submit">Login</button>
                </form>
                <br></br>
                <img src={padlock} alt='Login'/>
            <footer><center> &copy; - 2021 Schedule Beauty</center></footer>
            </section>            
        </div>
    );
}