import React, {Component} from "react";

export default class Historial extends Component{
    render(){

        const histor = this.props.historial; 
        const opcAnt = this.props.opcionAnt;

        return <div className="recordatorio">
            <h3 className="opciones">Opcion Anterior: {opcAnt.replace(/[0-9]/g, '').toUpperCase()}</h3>
            <h4 className="opciones">Historial:</h4>
            <ul>
            {histor.map((historial1, index) => <li key={index} className="lista">{historial1.replace(/[0-9]/g, '').toUpperCase()}</li>)}
            </ul>
        </div>
    }
}