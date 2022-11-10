import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { consultarAutos } from '../ruta/funciones';
import ItemDetailProduct from '../ItemDetailProduct/ItemDetailProduct';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [vehiculos, setAutos] = useState([]);
    const {id} = useParams();


useEffect(() => {
    consultarAutos('../../Json/autos.json').then(vehiculos=>{ 
        const vehiculo = vehiculos.find(autosArray => autosArray.id === parseInt(id))
        setAutos(vehiculo)})
}, []);



    return (
        <div>
           <div className="card mb-3 container detalleProducto">
            <ItemDetailProduct vehiculos ={vehiculos}/>
           </div>
        </div>
    );
}

export default ItemDetailContainer;

