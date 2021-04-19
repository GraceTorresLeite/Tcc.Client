import React from 'react';
import {Link} from 'react-router-dom'
import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi';

import './styles.css';

import logoSchedule from '../../assets/logoSchedule.png'

export default function Schedules(){
    return (
        <div className='schedule-container'>
            <header>
                <img src={logoSchedule} alt='Schedule'/>
                <span><strong>Bem-vindo!</strong></span>
                <Link className='button' to='schedule/new'>Nova marcação</Link>
                <button type='button'>
                    <FiPower size={18} color='#251FC5'/>
                </button>
            </header>

            <h1>Agendamentos</h1>
            <ul>
                <li>
                    <strong>Nome: </strong>
                    <p>Fulano da Silva</p>
                    
                    <strong>Email: </strong>
                    <p>teste_01@test.com</p>
                    
                    <strong>Endereço: </strong>
                    <p>Rua Felicidade nº 1000 ,Bairro: Amor , Cidade: Fé</p>
                    
                    <strong>Telefone: </strong>
                    <p>xx-xxxxxxxxx</p>
                    
                    <strong>Serviço: </strong>
                    <p>Sobrancelha</p>
                    
                    <strong>Descrição: </strong>
                    <p>sem uso de cera</p>
                    
                    <strong>Data e horário: </strong>
                    <p></p>
                    <strong>Data: </strong>
                    <p>20/04/2021</p>
                   
                    <strong>Horário: </strong>
                    <p>15:00</p>
                                   
                    <button type='button'>
                        <FiEdit size={20} color='#251FC5'/>
                    </button>

                    <button type='button'>
                        <FiTrash2 size={20} color='red'/>
                    </button>
                </li>

                <li>
                <strong>Nome: </strong>
                    <p>Beltrano da Silva</p>
                    
                    <strong>Email: </strong>
                    <p>teste_02@test.com</p>
                    
                    <strong>Endereço: </strong>
                    <p>Rua Felicidade nº 1000 ,Bairro: Amor , Cidade: Fé</p>
                    
                    <strong>Telefone: </strong>
                    <p>xx-xxxxxxxxx</p>
                    
                    <strong>Serviço: </strong>
                    <p>Sobrancelha</p>
                    
                    <strong>Descrição: </strong>
                    <p>sem uso de cera</p>
                    
                    <strong>Data e horário: </strong>
                    <p></p>
                    <strong>Data: </strong>
                    <p>20/04/2021</p>
                   
                    <strong>Horário: </strong>
                    <p>16:00</p>
                                   
                    <button type='button'>
                        <FiEdit size={20} color='#251FC5'/>
                    </button>

                    <button type='button'>
                        <FiTrash2 size={20} color='red'/>
                    </button>                                 
                </li>
                <li>
                <strong>Nome: </strong>
                    <p>Ciclano da Silva</p>
                    
                    <strong>Email: </strong>
                    <p>teste_03@test.com</p>
                    
                    <strong>Endereço: </strong>
                    <p>Rua Felicidade nº 1000 ,Bairro: Amor , Cidade: Fé</p>
                    
                    <strong>Telefone: </strong>
                    <p>xx-xxxxxxxxx</p>
                    
                    <strong>Serviço: </strong>
                    <p>Sobrancelha</p>
                    
                    <strong>Descrição: </strong>
                    <p>sem uso de cera</p>
                    
                    <strong>Data e horário: </strong>
                    <p></p>
                    <strong>Data: </strong>
                    <p>20/04/2021</p>
                   
                    <strong>Horário: </strong>
                    <p>17:00</p>
                                   
                    <button type='button'>
                        <FiEdit size={20} color='#251FC5'/>
                    </button>

                    <button type='button'>
                        <FiTrash2 size={20} color='red'/>
                    </button>                                   
                </li>
            </ul>
        </div>
    );
}