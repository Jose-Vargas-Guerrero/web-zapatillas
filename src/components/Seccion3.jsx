import React from 'react';
import './seccion3.css';
import zapatilla1 from './images/zapatillas1.jpg';
import zapatilla2 from './images/zapatillas1-2.jpg';
import zapatilla3 from './images/zapatillas1-3.jpg';
import zapatilla4 from './images/zapatillas1-4.jpg';
import { motion, AnimatePresence} from 'framer-motion';

class Zapatilla1 extends React.Component{
    render(){
        return(
            <AnimatePresence>
                <div>
                    <motion.img
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                     src={zapatilla1} alt="zapatilla1" height="300px"/>
                </div>
            </AnimatePresence>
        )
    }
}

class Zapatilla2 extends React.Component{
    render(){
        return(
            <AnimatePresence>
            <div>
                <motion.img
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                 src={zapatilla2} alt="zapatilla1" height="300px"/>
            </div>
            </AnimatePresence>
        )
    }
}

class Zapatilla3 extends React.Component{
    render(){
        return(
            <AnimatePresence>
            <div>
                <motion.img
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                 src={zapatilla3} alt="zapatilla1" height="300px"/>
            </div>
            </AnimatePresence>
        )
    }
}

class Zapatilla4 extends React.Component{
    render(){
        return(
            <AnimatePresence>
            <div>
                <motion.img
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                 src={zapatilla4} alt="zapatilla1" height="300px"/>
            </div>
            </AnimatePresence>
        )
    }
}



class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state = { image: "Visualize a style"}
    }

    /* funciones de imagen */
    estilo1 = () => {this.setState({ image: this.setState.image = <Zapatilla1/>})}
    estilo2 = () => {this.setState({ image: this.setState.image = <Zapatilla2/>})}
    estilo3 = () => {this.setState({ image: this.setState.image = <Zapatilla3/>})}
    estilo4 = () => {this.setState({ image: this.setState.image = <Zapatilla4/>})}

    render(){
        return(
            <div className="container" id="banner-container">
                <div className="imagen-container">
                    {this.state.image}
                </div>
                <div className="boton-container">
                    <button className="btn btn-1" onClick={this.estilo1}>1</button>
                    <button className="btn btn-2" onClick={this.estilo2}>2</button>
                    <button className="btn btn-3" onClick={this.estilo3}>3</button>
                    <button className="btn btn-4" onClick={this.estilo4}>4</button>
                </div>
            </div>
        )
    }
}

function Seccion3() {
    return (
        <div className="container-fluid" id="seccion3">
            <Banner/>
        </div>
    )
}

export default Seccion3
