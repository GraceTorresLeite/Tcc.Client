import React from 'react';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logoSchedule from '../../assets/logoSchedule.png'

export default function NewSchedule(){
    return (
        <div className='new-schedule-container'>
            <div className='content'>
                <section className='form'>
                    <img src={logoSchedule} alt='Schedule Beauty'/>
                    <h1>Marcação</h1>
                    <p>Confirmação por <strong>Whatsapp</strong>.</p>
                    <br></br>
                    <Link className='back-link' to='/schedules'>
                        <FiArrowLeft size={16} color='#251fc5'/>
                        Agendamentos confirmados
                    </Link>
                </section>
                <form>
                    <input type='text' placeholder='Nome'/>
                    <input type='email 'placeholder='Email'/>
                    <input placeholder='Rua:  nº , Bairro:  , Cidade: '/>
                    <input type='phone' placeholder='XX-XXXXXXXXX'/>
                    <input type='number' placeholder='Digite o número do serviço'/>
                    <input id='description' type='textarea' placeholder='Comentários adicionais'/>
                    <input placeholder=' 00/00/0000 00:00'/>
                    <input id='date' type='date'/>
                    <input id='time' type='time'/>

                    <button className='button' type='submit'>Enviar</button>
                </form>
            </div>

            <div className='new-schedule-container'>
                <ul>

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
                    </li>

                    <li>
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
        </div>    
     );       

}           