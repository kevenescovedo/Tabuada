import { Component } from "react";

export default class Titulo2 extends Component {
    render () {
    let {titulo} = this.props;
    return (<h1>{titulo}</h1>)
    }
}