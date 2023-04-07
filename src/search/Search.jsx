import { useEffect, useState } from "react";  
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import NavHeader from "../navbar/NavHeader";
import { fetchTweets } from "../services/services";
import TweetList from "../TweetList/TweetList";
import './Search.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { graphicData }  from '../graphic/Graphic';
import { BsSearch } from 'react-icons/bs';
import  Modal from 'react-bootstrap/Modal';
import { ModalGraphic } from '../graphic/ModalGraphic';
import Table from 'react-bootstrap/Table';

export default function Search () {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const [queryResult, setQueryResult] = useState([]);
    const [queryText, setQueryText] = useState('');

    let data = null;
    data = graphicData();

    const getTweets = (query, e) => {
        e.preventDefault();
        let response = fetchTweets(query);
        console.log(response.status);
        setQueryResult(response);
    }
    const styles = {
        padding: '38px'
    }
    return (
        <>
        <NavHeader />
        <div align="center">
            <Form className="form-group col-sm-4" align="center">
                <InputGroup>
                        <Form.Control
                            type="text" 
                            onChange={e => 
                                setQueryText(e.target.value)  
                            } 
                            className="search-field" placeholder="Buscar no Twitter">
                
                        </Form.Control>
                            <Button
                                className="search-submit"
                                type="submit"
                                onClick={(e) => getTweets(queryText, e)}
                                >
                                <BsSearch></BsSearch>        
                            </Button>
                        </InputGroup>
                    <Form.Text className="text-muted">Tente buscar por pessoas, tópicos ou palavras-chave</Form.Text>
                    {/* <div>
                        <Button 
                            variant="primary" 
                            className="search-button"
                            type="submit"
                            onClick={(e) => getTweets(queryText, e)}>
                            Pesquisar
                        </Button>
                    </div> */}
                    <div>
                        {/* <Button
                            variant="primary" 
                            className="search-button"
                            type="submit"
                            onClick={ 
                               
                            }>
                            Pesquisar
                        </Button> */}
                        <Modal show={true}>
                            <Modal.Header closeButton>
                                <Modal.Title>Titulo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Texto Body
                                {/* {data && 
                                
                                    <div>
                                        <Pie data={data} 
                                            // width={"10%"}
                                            //  height={"90%"}
                                            options={{ radius:1 }}
                                            />
                                    
                                    </div>} */}

                                    {data && 
                                        <div 
                                        style={styles}
                                        // style={ padding: '38px' }
                                        >
                                            <Pie data={data} 
                                            // width={"10%"}
                                            //  height={"90%"}
                                            // options={{ maintainAspectRatio: false }}
                                            />
                                        </div>
                                        
                                        
                                        }
                                        <Table bordered striped hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <p className="chart-color-indicator positive-color-indicator"
                                                        // style={
                                                            // {backgroundColor: "#67e0a5", width: "8px", height: "8px", borderRadius: "1px", marginTop: "0px", marginBottom: "0px", marginRight: "7px", display: "inline-block"}}
                                                            
                                                            ></p>
                                                        Positivo
                                                    </th>
                                                    <th>
                                                        <p className="chart-color-indicator negative-color-indicator"></p>
                                                        Negativo
                                                    </th>
                                                    <th>
                                                        <p className="chart-color-indicator neutral-color-indicator"></p>
                                                        Neutro
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1 %</td>
                                                    <td>2 %</td>
                                                    <td>3 %</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    
            </Form>
        {/* </InputGroup> */}
        </div>
                    
        {queryResult.length && 
            <TweetList searchText={queryResult} /> 
        } 
        </>
    );
}