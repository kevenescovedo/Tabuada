import { Component } from "react";

export default class Titulo extends Component {
    constructor(props) {
   super(props);
   this.state = {
    titulo : this.props.titulo,
    texto: this.props.texto,
    link: this.props.link
   }
    }
    render () {
    let {titulo,texto,link} = this.state;
    return (<div>
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <a href={link}>{link}</a>
    </div>)
    }
}