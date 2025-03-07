import { Card } from "react-bootstrap";

export default function CubeVolume({ volume }) {
    return (
        <Card className="cube-card">
            <Card.Body>
                <Card.Text className="fs-4 fw-bold">📦 Volumen: {volume.toFixed(2)} Cm</Card.Text>
            </Card.Body>
        </Card>
    );
}
