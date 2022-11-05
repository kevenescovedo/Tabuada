import { Component } from "react";
import LinhaTabuada from "../linha_tabuada";

export default class Tabuada extends Component {
    render () {
        let numeros = [0,1,2,3,4,5,6,7,8,9,10];
        let n = parseInt(this.props.n);
        return (<div className="tabuda">
           {numeros.map((numero) => <LinhaTabuada key={numero} conta={`${numero} X ${n} = ${numero * n}`}></LinhaTabuada>)}
        </div>);
    }
}