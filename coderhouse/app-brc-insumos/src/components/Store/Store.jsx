import "./Store.css";
import NavBar from "../NavBar/NavBar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Store() {
  return (
    <div className="StoreContainer">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a nuestra tienda!"></ItemListContainer>
    </div>
  );
}

export default Store;
