export const Lista = ({ datos, delData, selectData }) => {
    const eliminar = (index) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este registro?")) {
            delData(datos.filter((item, i) => i !== index));
            window.alert("Registro eliminado con éxito.");
        }
    };

    return (
        <>
            <div className="row">
                {datos.map((item, index) => (
                    <div key={index} className="col-4 mb-3">
                        <div className="toast show">
                            <div className="toast-header">
                                <strong className="mx-auto">{item.nombres} {item.apellidos}</strong>
                                <button type="button" className="btn-close" 
                                    data-bs-dismiss="toast" onClick={() => eliminar(index)}></button>
                            </div>
                            <div className="toast-body">
                                <p><strong>RUT:</strong> {item.rut}</p>
                                <p><strong>Correo:</strong> {item.correo}</p>
                                <p><strong>Marca:</strong> {item.marca}</p>
                                <p><strong>Modelo:</strong> {item.modelo}</p>
                                <p><strong>Fecha de Arriendo:</strong> {item.fechaArriendo}</p>
                                <p><strong>Fecha de Entrega:</strong> {item.fechaEntrega}</p>
                                <button className="btn btn-secondary mt-2" onClick={() => selectData(index)}>Editar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
