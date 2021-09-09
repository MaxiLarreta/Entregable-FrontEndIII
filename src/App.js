import React from 'react';
import data from './components/data.json';
import Historial from './components/Historial';
import History from './components/History';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      historiaActual: data[0],
      historias: data,
      historial: ['inicio'],
      opcionAnterior: ""
    };
    this.seleccionarOpcion = this.seleccionarOpcion.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.historiaActual.id !== this.state.historiaActual.id) {
      this.setState({
        historial: prevState.historial.concat(this.state.historiaActual.id),
        opcionAnterior: this.state.historiaActual.id
      });
    }
  }

  seleccionarOpcion(opc) {
    if (this.state.historial.length === ((this.state.historias.length - 1) / 2) + 1) {
      window.alert("La historia ha finalizado");
      return;
    }
    const historiaSiguiente = this.state.historias.find(historia => historia.id === (this.state.historial.length + 1) + opc);
    this.setState({
      historiaActual: historiaSiguiente
    });
  }

  render() {
    return (
      <div className="layout">
        <History seleccionarOpcion={this.seleccionarOpcion} hist={this.state.historiaActual}></History>
        <Historial historial={this.state.historial} opcionAnt={this.state.opcionAnterior}></Historial>
      </div>
    );
  }
}

export default App;
