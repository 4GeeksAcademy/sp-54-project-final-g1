import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { Context } from '../store/appContext';


export const WishList = () => {
    const { store, actions } = useContext(Context);
    //const navigate = useNavigate();

    const deleteWish = (wish) => {
        //actions.deleteContact(contact.id); // Assuming you have a deleteContact action.
    };

    return (
        !store.wishes ? <div>No tienes listado</div> :
            <div className="container">
                <h1 className="mb-4">Wish List</h1>
                {!store.wishes ? <h2>Loading...</h2> :
                    <div className="card-columns">
                        {store.wishes.map((wish) => (
                            <div key={wish.id} className="card">
                                <img src={wish.image} className="card-img-top" alt={wish.full_name} />
                                <div className="card-body">
                                    <h5 className="card-title">{wish.name}</h5>
                                </div>
                                <div className="card-footer">
                                    <button onClick={() => deleteWish(wish)} className="btn btn-danger mr-2">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
    );

}