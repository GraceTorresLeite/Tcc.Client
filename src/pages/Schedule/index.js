import React from 'react';
import {Link} from 'react-router-dom'
import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi';

import './styles.css';

import logoSchedule from '../../assets/logoSchedule.png'

export default function Schedule(){
    return (
        <div className='schedule-container'>
            <header>
                <img src={logoSchedule} alt='Schedule'/>
                <span>Bem-vindo, <strong>Cliente</strong>!</span>
                <Link className='button' to='schedules'>Enviar pedido de agendamento</Link>
                <button type='button'>
                    <FiPower size={18} color='#251FC5'/>
                </button>
            </header>

            <h1>Agendamento</h1>
            <ul>
                <li>
                    <strong>Nome: </strong>
                    <input type='text' placeholder='Nome'/>
                    
                    <strong>Email: </strong>
                    <input type='email 'placeholder='Email'/>
                    
                    <strong>Endereço: </strong>
                    <input placeholder='Rua Felicidade nº 1000 ,Bairro: Amor , Cidade: Fé'/>
                    
                    <strong>Telefone: </strong>
                    <input type='phone' placeholder='XX-XXXXXXXXX'/>
                    
                    <strong>Serviço: </strong>
                    <input type='number' placeholder='Digite o número do serviço'/>
                    
                    <strong>Descrição: </strong>
                    <input id='description' type='textarea' placeholder='Caso necessite comentários adicionais'/>
                    
                    <strong>Data e horário: </strong>
                    <input  placeholder=' 00/00/0000 00:00'/>

                    <strong>Data: </strong>
                    <input id='date' type='date'/>
                   
                    <strong>Horário: </strong>
                    <input id='time' type='time'/>
                                   
                    <button type='button'>
                        <FiEdit size={20} color='#251FC5'/>
                    </button>

                    <button type='button'>
                        <FiTrash2 size={20} color='red'/>
                    </button>
                </li>

                <li>
                    <strong>SERVIÇOS </strong>
                    <hr></hr>
                    <br></br>
                    <strong> 1 - Sobrancelha: </strong>
                    <p>R$: 25,00</p>
                    <strong> 2 - Buço: </strong>
                    <p>R$: 10,00</p>
                    <strong> 3 - Axila: </strong>
                    <p>R$: 20,00</p>
                    <strong> 4 -Perna 1/2: </strong>
                    <p>R$: 20,00</p>
                    <strong> 5 - Perna: </strong>
                    <p>R$: 40,00</p>
                    <strong> 6 - Virilha: </strong>
                    <p>R$: 40,00</p>
                    <strong> 7 - Peito Masculino: </strong>
                    <p>R$: 70,00 - 100,00</p>
                    <strong> 8 - Barba: </strong>
                    <p>R$: 50,00</p>

                    <strong>AGENDA 19 a 24/04/2021</strong>
                    <hr></hr>  
                    <br></br>                  
                    <table>
					    <thead>
						    <tr>
							    <th>Horários</th>
							    <th>Segunda</th>
							    <th>Terça</th>
							    <th>Quarta</th>
							    <th>Quinta</th>
                                <th>Sexta</th>
                                <th>Sábado</th>
						    </tr>
					    </thead>
					    <tbody id="tabela-agenda">
						    <tr id="primeiro-cliente">
							    <td id='hora'>9:00</td>	
                                <td id='hora'>-</td>	
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>					
						    </tr>
                            <tr id="segundo-cliente">
							    <td id='hora'>10:00</td>
                                <td id='hora'>-</td>	
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>							
						    </tr>
                            <tr id="terceiro-cliente">
							    <td id='hora'>11:00</td>
                                <td id='hora'>-</td>	
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>							
						    </tr>
                            <tr id="quarto-cliente">
							    <td id='hora'>13:00</td>
                                <td id='hora'>-</td>	
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>							
						    </tr>
                            <tr id="quinto-cliente">
							    <td id='hora'>14:00</td>
                                <td id='hora'>-</td>	
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>							
						    </tr>
                            <tr id="sexto-cliente">
							    <td id='hora'>15:00</td>
                                <td id='hora'>-</td>	
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>							
						    </tr>
                                <tr id="setimo-cliente">
							    <td id='hora'>16:00</td>
                                <td id='hora'>-</td>	
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>							
						    </tr>
                            <tr id="oitavo-cliente">
							    <td id='hora'>17:00</td>
                                <td id='hora'>-</td>	
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>							
						        </tr>
                            <tr id="nono-cliente">
							    <td id='hora'>18:00</td>
                                <td id='hora'>-</td>	
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>
                                <td id='hora'>-</td>						
						    </tr>
					    </tbody>
				    </table>                   
                </li>
            </ul>
        </div>
    );
}