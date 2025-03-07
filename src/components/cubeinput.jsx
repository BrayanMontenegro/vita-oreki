import { Card, Form, Button } from "react-bootstrap";

export default function CubeInput({ side, onChange, onReset }) {
    return (
        <Card className="cube-card">
            <Card.Body>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        value={side} 
                        onChange={onChange} 
                        placeholder="Ingrese el lado del cubo"
                        className="text-center fs-5"
                    />
                </Form.Group>
                <Button variant="danger" onClick={onReset} className="w-100">🗑 Borrar</Button>
            </Card.Body>
        </Card>
    );
}
