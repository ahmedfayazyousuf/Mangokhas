import { FaFacebookSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from '../HeaderFooter/Navbar/NavbarTwo.js';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Cover from '../1_MediaAssets/SectionImages/MangoTexture.png'

const Checkout = () => {
  const [cart, setCart] = useState({
    mangoBox5kg: 0,
    achar500g: 0,
    achar1000g: 0,
    mangoBox2_5kg: 0
  });

  // Define your EmailJS service, template ID, and user ID
  const serviceID = 'service_jpk4a0n';
  const templateID = 'template_pas1i84';
  const userID = 'oBtsBhFsJoL-9rIkB';

  const prices = {
    mangoBox5kg: 1800,
    achar500g: 450,
    achar1000g: 700,
    mangoBox2_5kg: 900 // Add price for mangoBox2_5kg if needed
  };

  const handleIncrement = (product) => {
    setCart(prevCart => ({ ...prevCart, [product]: prevCart[product] + 1 }));
  };

  const handleDecrement = (product) => {
    setCart(prevCart => ({ ...prevCart, [product]: Math.max(prevCart[product] - 1, 0) }));
  };

  const calculateTotal = () => {
    return Object.keys(cart).reduce((total, product) => {
      return total + (cart[product] * prices[product]);
    }, 0);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("SubmitButton").innerHTML="Loading...";
  
    const templateParams = {
      mangoBox5kg: cart.mangoBox5kg,
      achar500g: cart.achar500g,
      achar1000g: cart.achar1000g,
      total: calculateTotal(),
      name: e.target.Name.value,
      email: e.target.Email.value,
      subject: e.target.Subject.value,
      phone: e.target.Phone.value,
      city: e.target.City.value,
      province: e.target.Province.value,
      address: e.target.address.value
    };
  
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Clear the form
        e.target.reset();
        // Show success message
        const successMessage = document.getElementById('success-message');
        successMessage.style.color = 'green';
        document.getElementById("SubmitButton").innerHTML="Submit";
        setTimeout(() => {
          successMessage.style.color = 'black';
        }, 5000);
        setCart({
            mangoBox5kg: 0,
            achar500g: 0,
            achar1000g: 0,
            mangoBox2_5kg: 0
          });
      }, (error) => {
        console.error('Email sending failed:', error.text);
        // Handle error, show error message to the user, etc.
      });
  };
  

  
  return (
    <>
    <Navbar />
        <div style={{width: '100vw', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', flexDirection: 'column', paddingTop: '100px', paddingBottom: '100px', backgroundImage: `url('${Cover}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className='mainOrderDiv'>
              <div className="imagediv" style={{position: 'relative'}}>
                <h1 style={{ color: '#d49400', width: '100%', textAlign: 'center'}}>Let's Talk Mangoes and Pickles!</h1>
                <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', gap: '10px', position:'absolute', bottom: '0', width: '100%', background: 'rgba(0,0,0,0.6)', padding: '10px 0px 10px 0px'}}>
                  <p style={{padding: '0', margin: '0', fontSize: '20px', color: 'white'}} className="fontSpecial">Connect with us on: </p>
                  <a href='https://www.instagram.com/mangokhas/' target='_blank' rel="noreferrer noopener" style={{marginBottom: '-4px'}}>
                    <FaInstagram style={{fontSize: '20px', color: 'white', padding: '0', margin: '0'}}/>
                  </a>
                  <a href='https://www.facebook.com/people/Mango-Khas/100066391855237/' target='_blank' rel="noreferrer noopener" style={{marginBottom: '-4px'}}>
                    <FaFacebookSquare style={{fontSize: '20px', color: 'white', padding: '0', margin: '0'}}/>
                  </a>
                  <a href='https://w.app/s3Pdih' target='_blank' rel="noreferrer noopener" style={{marginBottom: '-4px'}}>
                    <FaWhatsapp style={{fontSize: '20px', color: 'white', padding: '0', margin: '0'}}/>
                  </a>                  
                  <a href='https://w.app/s3Pdih' target='_blank' rel="noreferrer noopener" style={{marginBottom: '-4px'}}>
                    <HiOutlineMail style={{fontSize: '23px', color: 'white', padding: '0', margin: '0'}} />
                  </a>
                </div>
              </div>
      
              <div className="contactdiv">
              <form onSubmit={sendEmail} style={{display: 'flex', gap: '10px', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <div style={{display: 'flex', width: '100%', padding: '10px 10px 0px 10px', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '10px'}}>
                  {/* Premium Sindhri Mango Box 5kgs */}
                      <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
                          <div style={{display: 'flex', width: '50%', justifyContent: 'flex-start', alignItems: 'center'}}>
                              <p style={{color: '#fff', margin: '0', padding: '0'}}>Premium Sindhri Mango Box 5kgs - (PKR 1800)</p>
                          </div>
                          <div style={{display: 'flex', width: '50%', justifyContent: 'flex-end', alignItems: 'center'}}>
                              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', background: 'black', padding: '5px'}}>
                                  <div style={{cursor: 'pointer', fontSize: '15px', fontWeight: '900', background: 'black', border: '1px solid white', color: 'white', height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0'}} onClick={() => handleDecrement('mangoBox5kg')}>-</div>
                                  <span style={{color: 'white', width: ''}}>{cart.mangoBox5kg}</span>
                                  <div style={{cursor: 'pointer', fontSize: '15px', fontWeight: '900', background: 'black', border: '1px solid white', color: 'white', height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0'}} onClick={() => handleIncrement('mangoBox5kg')}>+</div>
                              </div> 
                          </div>
                      </div>
      
                  {/* Khas Premium Achar 500g */}
                      <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
                          <div style={{display: 'flex', width: '50%', justifyContent: 'flex-start', alignItems: 'center'}}>
                              <p style={{color: '#fff', margin: '0', padding: '0'}}>Khas Premium Achar 500g - (PKR 450)</p>
                          </div>
                          <div style={{display: 'flex', width: '50%', justifyContent: 'flex-end', alignItems: 'center'}}>
                              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', background: 'black', padding: '5px'}}>
                                  <div style={{cursor: 'pointer', fontSize: '15px', fontWeight: '900', background: 'black', border: '1px solid white', color: 'white', height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0'}} onClick={() => handleDecrement('achar500g')}>-</div>
                                  <span style={{color: 'white', width: ''}}>{cart.achar500g}</span>
                                  <div style={{cursor: 'pointer', fontSize: '15px', fontWeight: '900', background: 'black', border: '1px solid white', color: 'white', height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0'}} onClick={() => handleIncrement('achar500g')}>+</div>
                              </div> 
                          </div>
                      </div>
      
                  {/* Khas Premium Achar 1000g */}
                      <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
                          <div style={{display: 'flex', width: '50%', justifyContent: 'flex-start', alignItems: 'center'}}>
                              <p style={{color: '#fff', margin: '0', padding: '0'}}>Khas Premium Achar 1000g - (PKR 700)</p>
                          </div>
                          <div style={{display: 'flex', width: '50%', justifyContent: 'flex-end', alignItems: 'center'}}>
                              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', background: 'black', padding: '5px'}}>
                                  <div style={{cursor: 'pointer', fontSize: '15px', fontWeight: '900', background: 'black', border: '1px solid white', color: 'white', height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0'}} onClick={() => handleDecrement('achar1000g')}>-</div>
                                  <span style={{color: 'white', width: ''}}>{cart.achar1000g}</span>
                                  <div style={{cursor: 'pointer', fontSize: '15px', fontWeight: '900', background: 'black', border: '1px solid white', color: 'white', height: '25px', width: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0'}} onClick={() => handleIncrement('achar1000g')}>+</div>
                              </div>
                          </div>
                      </div>
      
                  {/* Total Price */}
                  <p style={{color: 'white', width: '100%', textAlign: 'right'}}>Total <span style={{color :'#d49400'}}> PKR {calculateTotal()}/-</span></p>
                  </div>
      
                  {/* Input Fields */}
                  <input name="Name" id="name" placeholder="Full Name" required type="text"/>
                  <input name="Email" id="email" placeholder="Email Address" required type="email"/>
                  <input name="Subject" id="Subject" placeholder="Subject" required />
                  <input name="Phone" id="Phone" placeholder="Phone number" required className="no-spinner" type="number" />
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '10px', margin: '0'}}>
                      <input name="City" id="City" placeholder="City" required type="text" />
                      <select name="Province" id="Province" required style={{padding: '10px'}} type="text" >
                          <option selected disabled value="">Province</option>
                          <option value="Sindh">Sindh</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Balochistan">Balochistan</option>
                          <option value="KPK">KPK</option>
                      </select>
                  </div>
              <textarea name="address" id="address" rows="3" placeholder="Shipping address" required></textarea>

                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '0', margin: '0', height: '20px'}}>
                      <p id='success-message' style={{ fontSize: '14px'}}>Order request sent! We will get back to you soon!</p>
                  </div>

              <button type="submit" id='SubmitButton' className="buttonMain2">Submit</button>
              </form>
          </div>
          </div>
        </div>
    </>
);
}

export default Checkout;
