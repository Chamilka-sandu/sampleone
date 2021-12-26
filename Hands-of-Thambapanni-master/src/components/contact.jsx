import {useState} from 'react'
import emailjs from 'emailjs-com'
import {Header} from "./header";
import { db } from "../database/firebase-config"
import { collection, addDoc } from "firebase/firestore";

const initialState = {
    name: '',
    email: '',
    message: '',
}
const Contact = (props) => {
   
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");

        const [loader, setLoader] = useState(false);
        const handleSubmit = async(e) => {
            e.preventDefault();
            setLoader(true);

     await addDoc(collection(db, 'feedback'), {
                name,
                email,
                message,
             

           })
                .then(() => {
                    setLoader(false);
                    alert("Your message has been submitted👍");
                })
                .catch((error) => {
                    alert(error.message);
                    setLoader(false);
                });

            setName("");
            setEmail("");
            setMessage("");
        }
        return (
            <div className="bg-blue">
                <div id='contact'>
                    <div className='container'>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='section-title'>
                                    <h2>Get In Touch</h2>
                                    <p>
                                        Please fill out the form below to send us an email and we will
                                        get back to you as soon as possible.
                                    </p>
                                </div>
                                <form name='sentMessage' validate onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    id='name'
                                                    name='name'
                                                    className='form-control'
                                                    placeholder='Name'
                                                    required
                                                    value={name}
                                       onChange={(e) => setName(e.target.value)}
                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type='email'
                                                    id='email'
                                                    name='email'
                                                    className='form-control'
                                                    placeholder='Email'
                                                    required
                                                   value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <textarea
                                            name='message'
                                            id='message'
                                            className='form-control'
                                            rows='4'
                                            placeholder='Message'
                                            required
                                           value={message}
                                   onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                        <p className='help-block text-danger'></p>
                                    </div>
                                    <div id='success'></div>
                                    <button type='submit' className='btn btn-custom btn-lg'>
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-3 col-md-offset-1 contact-info'>
                            <div className='contact-item'>
                                <h3>Contact Info</h3>
                                <p>
                                    <span>
                                        <i className='fa fa-map-marker'></i> Address
                                    </span>
                                    Uva Wellasa University, Passara Road, Badulla, Sri Lanka
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-phone'></i> Phone
                                    </span>{' '}
                                    +94 712223619
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-envelope-o'></i> Email
                                    </span>{' '}
                                    racuwub@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='social'>
                                    <ul>
                                        <li>
                                            <a href={props.data ? props.data.facebook : 'https://www.facebook.com/RACUWUBadulla/'}>
                                                <i className='fa fa-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={props.data ? props.data.twitter : '/'}>
                                                <i className='fa fa-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={props.data ? props.data.youtube : '/'}>
                                                <i className='fa fa-youtube'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='footer'>
                    <div className='container text-center'>
                        <p>
                            &copy; Project Initiated By Rotaract Club Of Uva Wellassa University,
                            Sri Lanka.
                        </p>
                    </div>
                </div>
            </div>
        )
    };


export default Contact;