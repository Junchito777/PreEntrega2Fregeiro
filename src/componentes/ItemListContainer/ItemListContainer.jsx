import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect} from 'react';
import { consultarAutos } from '../ruta/funciones';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {


    const [vehiculos, setAutos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        if (category){
        consultarAutos('../Json/autos.json').then(vehiculos => {
        const listaVehiculos =  vehiculos.filter(vehiculos => vehiculos.idCategoria === parseInt(category))
        console.log(listaVehiculos)
        const cardAutos = ItemList({listaVehiculos})
        setAutos(cardAutos)
        })    
        }else{
        consultarAutos('./Json/autos.json').then(listaVehiculos => {
        const cardAutos = ItemList({listaVehiculos})
        console.log(listaVehiculos)
        setAutos(cardAutos)
        })        
    }}
    , [category]);

    

    return(
        <div className='vehiculos'>
            {vehiculos}
        </div>

    );
}

export default ItemListContainer;
