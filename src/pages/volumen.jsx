import { useState } from "react";
import { Container } from "react-bootstrap";

// Todo importacion de los componentes//
import CubeInput from "../components/cubeinput";
import CubeVolume from "../components/cubevolumen";
import "../styles/estilo.css";

// ! logica de la calculadora //
export default function CubeVolumeCalculator() {
    const [side, setSide] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setSide(value);
        }
    };

    const handleReset = () => {
        setSide("");
    };

    const volume = side ? Math.pow(parseFloat(side), 3) : 0;

    // ? Maquetacion //
    return (
        <Container className="cube-container mb-3">
            <h1 className="title">📏 Calculadora de Volumen</h1>
            <CubeInput side={side} onChange={handleChange} onReset={handleReset} />
            <CubeVolume volume={volume} />
        </Container>
    );
}
