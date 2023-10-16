// a component it will show when there is delay in action
import Loader from "../Loader/Loader";

//  contactAPI
import { useValue } from "../../context";

// CSS
import Style from './Home.module.css';

// dependiences from the react-router-dom
import { Link } from "react-router-dom";



function Home() {
    // all the dependencies from the ContactAPI
    const {contactList, isLoading , deleteContact} = useValue();

    if(isLoading){
        return <Loader />
    }
    //  Home Page
    return (
        <>
            {/* design for Home Page */}
            <div className={Style.addContact}>
                
            {/* Button to Add the contact */}
                <Link to = 'add-contact'>
                    <button>Add new Contact</button>
                </Link>
            </div>
            {/* contactTable */}
            <div className={Style.contactTable}>
                <table className="table">
                    <thead>
                        {/* Table */}
                        <tr className={Style.tableHead}>
                          
                            <th scope="col">Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                   
                    {/*  Body of Table */}
                    <tbody>
                        {contactList.map((contact, index) => (
                            <tr key={index}>
                                
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>
                                    <Link to= {`edit-contact/${contact.id}`}>
                                        <button className={Style.editButton}>Edit</button>
                                    </Link>
                                    
                                    <button onClick={()=>deleteContact(contact.id)} className={Style.deleteButton}>
                                        Delete
                                    </button>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    ) 
}

export default Home;