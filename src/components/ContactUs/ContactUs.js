import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {

    return (
        <div className="container my-5">
            <h2>Contacto</h2>
            <hr/>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Email.." />
            <Form.Text className="text-muted">
            Nunca compartiremos tu información privada.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control type="text" placeholder="Dejanos tu mensaje y te responseremos lo m[as pronto posible" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
        </div>
    )
}

export default Contacto