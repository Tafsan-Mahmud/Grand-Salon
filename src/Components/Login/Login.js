// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import './Login.css';
import img from './20945760.jpg'
import facebook from './fb-png-hd.png';
import google from './googlx.png';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import { firebaseConfig } from './firebase.config';
import { UserContex } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [newUser, setNewUSer] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: ''
    })
    const [logedInUser, setLogedInUser] = useContext(UserContex);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleProvider = new firebase.auth.GoogleAuthProvider();


    const handleSginIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser)
                setLogedInUser(signedInUser)
                history.replace(from);
            })
            .catch(error => {
                console.log(error)
                console.log(error.message)
            })
    }
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFbSginIn = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                var credential = result.credential;
                const user = result.user;
                var accessToken = credential.accessToken;
                setLogedInUser(user)
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    };


    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const isSginedOut = {
                    isSignIn: false,
                    name: '',
                    photo: "",
                    password: '',
                    email: '',
                    error: '',
                    success: false
                }
                setUser(isSginedOut);
            })
            .catch(res => {

            })
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const NewUSerInfo = { ...user }
                    NewUSerInfo.error = '';
                    NewUSerInfo.success = true;
                    setUser(NewUSerInfo);
                    setLogedInUser(user)
                    updateUserInfo(user.name);
                    history.replace(from);
                })
                .catch((error) => {
                    const NewUSerInfo = { ...user }
                    NewUSerInfo.error = error.message
                    NewUSerInfo.success = false;
                    setUser(NewUSerInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const NewUSerInfo = { ...user }
                    NewUSerInfo.error = '';
                    NewUSerInfo.success = true;
                    setUser(NewUSerInfo);
                    setLogedInUser(NewUSerInfo)
                    history.replace(from);
                })
                .catch((error) => {
                    const NewUSerInfo = { ...user }
                    NewUSerInfo.error = error.message
                    NewUSerInfo.success = false;
                    setUser(NewUSerInfo);
                });
        }
        e.preventDefault()
    }
    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        })
            .then(res => {
                history.replace(from);
                console.log('user name updated successfully')
            })
            .catch(error => {
                console.log(error)
            });
    }
    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {
            const NewUSerInfo = { ...user }
            NewUSerInfo[e.target.name] = e.target.value;
            setUser(NewUSerInfo);
        }
    }

    return (
        <div id="my-login">
            <section>
                <div className="imgBx">
                    <img src={img} alt="" />
                </div>
                <div className="contentBx">
                    <div className="fromBx">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBx">
                                {newUser && <span> Name</span>}
                                {newUser && <input type="text" onBlur={handleBlur} placeholder="your name" required name="name" />}
                            </div>
                            <div className="inputBx">
                                <span>Username or Email</span>
                                <input type="text" onBlur={handleBlur} placeholder="enter your email" required name="email" />
                            </div>
                            <div className="inputBx">
                                <span>Password</span>
                                <input type="password" placeholder="enter a strong password" onBlur={handleBlur} required name="password" />
                            </div>
                            <div className="inputBx">
                                {newUser && <span>Confirm Password</span>}
                                {newUser && <input type="password" placeholder="password retype" onBlur={handleBlur} required name="" />}
                            </div>
                            <div className="remember">
                                <label htmlFor=""><input type="checkbox" onChange={() => setNewUSer(!newUser)} name="" id="" />Remember Me</label>
                            </div>
                            <div className="inputBx">
                                <input type="submit" value={newUser ? 'sign up' : 'sign in'} />
                            </div>
                            <div className="inputBx">
                                <p> {newUser ? 'Already have an account?' : 'Do not have an account?'}<button className="btn-sign" onClick={() => setNewUSer(!newUser)}>{newUser ? 'Sign in' : 'Sign Up'}</button> </p>
                            </div>
                        </form>
                        <h3>Login with social media</h3>
                        <ul className="sci">
                            <li onClick={handleSginIn}><img src={google} alt="" /></li>
                            <li onClick={handleFbSginIn}><img src={facebook} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <p style={{ color: 'red' }}>{user.error}</p>
                {user.success && <h4 style={{ color: 'green' }}>User {newUser ? 'Created' : 'Loged in'} Successfully Done </h4>}
            </section>
        </div>
    );
};

export default Login;