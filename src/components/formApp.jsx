import { useState, useEffect } from "react";

export const Formulario = ({ addNew, editData, dataToEdit }) => {
    const [valores, setValores] = useState({ 
        nombres: '', 
        apellidos: '', 
        rut: '', 
        correo: '', 
        marca: '', 
        modelo: '', 
        fechaArriendo: '', 
        fechaEntrega: '' 
    });
    const [errores, setErrores] = useState({});

    useEffect(() => {
        if (dataToEdit) {
            setValores(dataToEdit);
        }
    }, [dataToEdit]);

    const { nombres, apellidos, rut, correo, marca, modelo, fechaArriendo, fechaEntrega } = valores;

    const cambioInput = (e) => {
        setValores({ ...valores, [e.target.name]: e.target.value });
    };

    const validarCampos = () => {
        let errores = {};
        if (!nombres.trim()) errores.nombres = "El campo nombres es requerido.";
        if (!apellidos.trim()) errores.apellidos = "El campo apellidos es requerido.";
        if (!rut.trim()) errores.rut = "El campo RUT es requerido.";
        if (!/^[0-9]+-[0-9Kk]$/.test(rut)) errores.rut = "El RUT no es válido.";
        if (!correo.trim()) errores.correo = "El campo correo es requerido.";
        if (!/\S+@\S+\.\S+/.test(correo)) errores.correo = "El correo no es válido.";
        if (!marca.trim()) errores.marca = "El campo marca es requerido.";
        if (!modelo.trim()) errores.modelo = "El campo modelo es requerido.";
        if (!fechaArriendo.trim()) errores.fechaArriendo = "El campo fecha de arriendo es requerido.";
        if (!fechaEntrega.trim()) errores.fechaEntrega = "El campo fecha de entrega es requerido.";
        return errores;
    };

    const guardar = () => {
        const erroresEncontrados = validarCampos();
        if (Object.keys(erroresEncontrados).length === 0) {
            if (dataToEdit) {
                editData(valores);
            } else {
                addNew(valores);
            }
            setValores({ 
                nombres: '', 
                apellidos: '', 
                rut: '', 
                correo: '', 
                marca: '', 
                modelo: '', 
                fechaArriendo: '', 
                fechaEntrega: '' 
            });
            setErrores({});
        } else {
            setErrores(erroresEncontrados);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <label>Nombres</label>
                <input type="text" className="form-control" name="nombres" value={nombres} onChange={cambioInput} />
                {errores.nombres && <p className="text-danger">{errores.nombres}</p>}

                <label>Apellidos</label>
                <input type="text" className="form-control" name="apellidos" value={apellidos} onChange={cambioInput} />
                {errores.apellidos && <p className="text-danger">{errores.apellidos}</p>}

                <label>RUT</label>
                <input type="text" className="form-control" name="rut" value={rut} onChange={cambioInput} />
                {errores.rut && <p className="text-danger">{errores.rut}</p>}

                <label>Correo</label>
                <input type="email" className="form-control" name="correo" value={correo} onChange={cambioInput} />
                {errores.correo && <p className="text-danger">{errores.correo}</p>}

                <label>Marca</label>
                <input type="text" className="form-control" name="marca" value={marca} onChange={cambioInput} />
                {errores.marca && <p className="text-danger">{errores.marca}</p>}

                <label>Modelo</label>
                <input type="text" className="form-control" name="modelo" value={modelo} onChange={cambioInput} />
                {errores.modelo && <p className="text-danger">{errores.modelo}</p>}

                <label>Fecha de Arriendo</label>
                <input type="date" className="form-control" name="fechaArriendo" value={fechaArriendo} onChange={cambioInput} />
                {errores.fechaArriendo && <p className="text-danger">{errores.fechaArriendo}</p>}

                <label>Fecha de Entrega</label>
                <input type="date" className="form-control" name="fechaEntrega" value={fechaEntrega} onChange={cambioInput} />
                {errores.fechaEntrega && <p className="text-danger">{errores.fechaEntrega}</p>}
            </div>
            <div className="text-end card-footer">
                <button className="btn btn-primary" onClick={guardar}>{dataToEdit ? "Editar" : "Agregar"}</button>
            </div>
        </div>
    );
};
