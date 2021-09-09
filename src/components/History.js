import React, {Component} from 'react'

export default class History extends Component{
    
    render(){
      
        const seleccionarOpcion = this.props.seleccionarOpcion;
        const opcionA = this.props.hist.opciones.a;
        const opcionB = this.props.hist.opciones.b;
        
        
        return <div className="historia">
            <h1>{this.props.hist.historia}</h1>
            <div className="opciones">
                <div className="celdaBotones">
                    <button className="botones" onClick={() => seleccionarOpcion('a')}>A</button>
                    <h2 className="opcion">{opcionA}</h2>
                </div>
                <div className="celdaBotones">
                    <button className="botones" onClick={() => seleccionarOpcion('b')}>B</button>
                    <h2 className="opcion">{opcionB}</h2>
                </div>
            </div>   
        </div>
    }
    

}