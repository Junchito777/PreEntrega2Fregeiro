import Item from "../Item/Item";


const ItemList = ({listaVehiculos}) => {    
    return (
            <>
                {listaVehiculos.map(vehiculo => <Item key={vehiculo.idCategoria} vehiculos ={vehiculo}/>)}
            </>
    );
}

export default ItemList;
