import { Button, Form } from "react-bootstrap";
import NavHeader from "../navbar/NavHeader";
import './Search.css';

export default function Search () {
    return (
        <>
            <NavHeader />
            <div align="center">
                <Form className="form-group col-sm-4" align="center">
                    <Form.Control type="text" className="search-field" placeholder="Buscar no Twitter"></Form.Control>
                    <Form.Text className="text-muted">Tente buscar por pessoas, tópicos ou palavras-chave</Form.Text>
                    <div>
                        <Button variant="primary" className="search-button" type="submit">Pesquisar</Button>
                    </div>
                </Form>
            </div>
        </>
    );
}