import { useEffect, useState } from "react";  
import { Button, Form } from "react-bootstrap";
import NavHeader from "../navbar/NavHeader";
import { fetchTweets } from "../services/services";
import TweetList from "../TweetList/TweetList";
import './Search.css';

export default function Search () {

    const [queryResult, setQueryResult] = useState([]);
    const [queryText, setQueryText] = useState('');

    const getTweets = (query, e) => {
        e.preventDefault();
        response = fetchTweets(query);
        setQueryResult(response);
    }

    return (
        <>
            <NavHeader />
            <div align="center">
                <Form className="form-group col-sm-4" align="center">
                    <Form.Control 
                        type="text" 
                        onChange={e => 
                            setQueryText(e.target.value)  
                        } 
                        className="search-field" placeholder="Buscar no Twitter">
                    </Form.Control>
                    <Form.Text className="text-muted">Tente buscar por pessoas, tópicos ou palavras-chave</Form.Text>
                    <div>
                        <Button 
                            variant="primary" 
                            className="search-button"
                            type="submit"
                            onClick={(e) => getTweets(queryText, e)}>
                            Pesquisar
                        </Button>
                    </div>
                </Form>
            </div>

            <TweetList searchText={queryResult} />
        </>
    );
}