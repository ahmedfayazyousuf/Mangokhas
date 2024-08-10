import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../../Firebase/firebase.js';

const UserDetailsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const db = getFirestore(app);

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById('error');
    
    if (!name || !email || !phone) {
      errorElement.innerHTML = "Input all fields!";
      return false;
    }
    if (!emailRegex.test(email)) {
      errorElement.innerHTML = "Wrong email format!";
      return false;
    }

    errorElement.innerHTML = '';
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const docRef = await addDoc(collection(db, 'CatchGameUsers'), {
          name,
          email,
          phone,
        });
        navigate('/CatchGame', { state: { userId: docRef.id } });
      } catch (error) {
        console.error('Error adding document: ', error);
        document.getElementById('error').innerHTML = "Failed to save user details. Please try again.";
      }
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'black', height: '100vh', width: '100vw'}}>
      <h1 style={{color: 'white', fontWeight: '300', fontSize: '50px', margin: '0', padding: '0'}}>Enter Your Details</h1>

      <form onSubmit={handleSubmit} style={{width: '95vw', maxWidth: '400px'}}>
        <div>
          <input style={{width: '100%', marginTop: '10px'}} placeholder='Name' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input style={{width: '100%', marginTop: '10px'}} placeholder='Email' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input style={{width: '100%', marginTop: '10px'}} placeholder='Phone' type="number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div id='error' style={{color: 'red', fontSize: '10px', marginTop: '10px', width: '100%', textAlign: 'center', height: '12px'}}></div>
        <button className='buttonMain2' style={{width: '100%', marginTop: '10px'}} type="submit">Let's Play</button>

      </form>
    </div>
  );
};

export default UserDetailsPage;
