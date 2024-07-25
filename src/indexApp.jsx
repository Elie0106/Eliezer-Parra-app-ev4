import { useEffect, useState } from "react";
import { Lista } from "./components/datosApp";
import { Formulario } from "./components/formApp";

const inicio = () => {
    return JSON.parse(localStorage.getItem('registros')) || [];
}

export const Index = () => {
    const [data, setData] = useState(inicio);
    const [dataToEdit, setDataToEdit] = useState(null);

    const addDatos = (valores) => {
        setData([valores, ...data]);
    };

    const editData = (valores) => {
        const updatedData = data.map((item, index) => 
            index === dataToEdit.index ? valores : item
        );
        setData(updatedData);
        setDataToEdit(null);
    };

    useEffect(() => {
        localStorage.setItem('registros', JSON.stringify(data));
    }, [data]);

    const delData = (valores) => {
        setData(valores);
    };

    const selectData = (index) => {
        setDataToEdit({ ...data[index], index });
    };

    return (
        <>
            <h1 className="bg-info p-5 text-white text-center">Rent a Car</h1>
            <div className="container row mt-3">
                <div className="col-4">
                    <Formulario addNew={addDatos} editData={editData} dataToEdit={dataToEdit} />
                </div>
                <div className="col-8">
                    <Lista datos={data} delData={delData} selectData={selectData} />
                </div>
            </div>
        </>
    );
};
