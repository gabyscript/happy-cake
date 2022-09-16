import './Contacto.css';
import { useState } from 'react';

const Contacto= () => {

    const [correo, setCorreo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [errorDatos, setErrorDatos] = useState(false);
    const [envioDatos, setEnvioDatos] = useState(false);

    const capturarCorreo = (e) => {
        setCorreo(e.target.value)
    }

    const capturarDescripcion = (e) => {
        setDescripcion(e.target.value)
    }

    const enviarFormulario = (e) => {
        e.preventDefault();

        if ((correo === "") || (descripcion === "")) {
            setErrorDatos(true)
            return
        }
        if ((correo !== "") && (descripcion !== "")) {
            setEnvioDatos(true);
            setErrorDatos(false)
            setCorreo("");
            setDescripcion("");
        }        
    }

    return(
        <section className='contacto-section'>
            <div className='formulario-div'>
                <h2>Cuéntanos ¿En qué podemos ayudarte?</h2>
                <form className='formulario-contacto' onSubmit={enviarFormulario}>
                    <div className='input-uno-div'>
                        <label className='label-title'>Correo electrónico</label>
                        <input type="email" className='correo-input' value={correo} placeholder="name@example.com" onChange={capturarCorreo}/>
                    </div>
                    <div className='select-div'>
                        <label className='label-title'>Asunto</label>
                        <select className='select-options'>
                            <option >Sugerencia</option>
                            <option >Felicitaciones</option>
                            <option >Reclamos</option>
                            <option >Trabaja con nosotros</option>
                            <option >Otros</option>
                        </select>
                    </div>
                    <div className='input-dos-div'>                   
                        <label className='label-title'>Descripción</label>
                        <input type="text" className='descripcion-input' value={descripcion} onChange={capturarDescripcion}/>                        
                    </div>
                    <button type="submit" className='enviar-btn'>Enviar formulario</button>
                    {errorDatos ? <p className='evento-p'>Por favor, ingrese los datos correspondientes</p> :null}
                    {envioDatos ? <p className='evento-p'>Los datos han sido enviados correctamente, muchas gracias.</p> :null}
                    
                </form>
            </div>
        </section>
    )
 }

export default Contacto;