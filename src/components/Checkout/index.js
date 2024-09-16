import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Navbar from '../HeaderFooter/Navbar/NavbarTwo.js';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Cover from '../1_MediaAssets/SectionImages/MangoTexture.png';
import MangoBoxSindhri from '../1_MediaAssets/SectionImages/AcharTypes/MangoSindhri.jpg';
import MangoBoxChaunsa from '../1_MediaAssets/SectionImages/AcharTypes/MangoChaunsa.jpeg';
import AcharVeg from '../1_MediaAssets/SectionImages/AcharTypes/MixVegetableAcharNew.jpg';
import HariChutney from '../1_MediaAssets/SectionImages/AcharTypes/HariChutneyNew.jpg';

const Checkout = () => {
    const [cart, setCart] = useState({});
    const outOfStockItems = ['SindhriMangoBox', 'ChaunsaMangoBox'];
    
    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById("SubmitButton").innerHTML = "Loading...";
    
        if (Object.keys(cart).length === 0) {
            const successMessage = document.getElementById('success-message');
            successMessage.style.color = 'red';
            successMessage.innerHTML = "Please add items to cart!";
            document.getElementById("SubmitButton").innerHTML = "Submit";
            setTimeout(() => {
                successMessage.style.color = 'black';
            }, 5000);
            return;
        }

        const orderDetails = Object.keys(cart).reduce((details, key) => {
            if (cart[key] > 0) {
                details += `${key}: ${cart[key]}, `;
            }
            return details;
        }, '');

        const templateParams = {
            orderDetails: orderDetails.slice(0, -2),
            total: calculateTotal(),
            name: e.target.Name.value,
            email: e.target.Email.value,
            phone: e.target.Phone.value,
            city: e.target.City.value,
            province: e.target.Province.value,
            address: e.target.address.value
        };

        console.log('templateParams:', templateParams);

        emailjs.send('service_tc2d7fm', 'template_pgkzv6f', templateParams, 'oSlgLc8eZpRNdorcO')
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            e.target.reset();
            const successMessage = document.getElementById('success-message');
            successMessage.style.color = 'green';
            successMessage.innerHTML = "Order request sent! We will contact you soon!";
            document.getElementById("SubmitButton").innerHTML = "Submit";
            setTimeout(() => {
                successMessage.style.color = 'black';
            }, 5000);
            setCart({});
        })
        .catch((error) => {
            console.error('Email sending failed:', error.text);
        });
    };

    const items = [
        {
            id: 'MixVegetableAchar',
            name: 'Mix Vegetable Achar',
            prices: { '450g': 450, '850g': 800 },
            image: AcharVeg 
        },
        {
            id: 'HariChutney',
            name: 'Hari Chutney',
            prices: { '450g': 400, '850g': 800 },
            image: HariChutney 
        },
        {
            id: 'SindhriMangoBox',
            name: 'Premium Sindhri Mango Box (Out of stock)',
            prices: { '5kg': 1600 },
            image: MangoBoxSindhri 
        },
        {
            id: 'ChaunsaMangoBox',
            name: 'Premium Chaunsa Mango Box (Out of stock)',
            prices: { '5kg': 1600 },
            image: MangoBoxChaunsa 
        }
    ];

    const handleIncrement = (productId, weight) => {
        const key = `${productId}-${weight}`;
        setCart(prevCart => ({
            ...prevCart,
            [key]: (prevCart[key] || 0) + 1
        }));
    };

    const handleDecrement = (productId, weight) => {
        const key = `${productId}-${weight}`;
        setCart(prevCart => {
            const newCart = { ...prevCart };
            if (newCart[key] > 0) {
                newCart[key] -= 1;
                if (newCart[key] === 0) {
                    delete newCart[key];
                }
            }
            return newCart;
        });
    };

    const calculateTotal = () => {
        return Object.keys(cart).reduce((total, key) => {
            const [productId, weight] = key.split('-');
            const item = items.find(item => item.id === productId);
            if (item) {
                return total + (cart[key] * item.prices[weight]);
            }
            return total;
        }, 0);
    };

    return (
      <>
          <Navbar />
          <div style={{ width: '100vw', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', flexDirection: 'column', paddingTop: '75px', paddingBottom: '100px', backgroundImage: `url('${Cover}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
              <div className='mainOrderDiv'>
                  <div className="imagediv" style={{ position: 'relative' }}>
                      <h1 style={{ color: '#d49400', width: '100%', textAlign: 'center' }}>Let's Talk Mangoes and Pickles!</h1>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', position: 'absolute', bottom: '0', width: '100%', background: 'rgba(0,0,0,0.6)', padding: '10px 0px 10px 0px' }}>
                          <p style={{ padding: '0', margin: '0', fontSize: '20px', color: 'white' }} className="fontSpecial">Connect with us on:</p>
                          <a href='https://www.instagram.com/mangokhas/' target='_blank' rel="noreferrer noopener" style={{ marginBottom: '-4px' }}>
                              <FaInstagram className="HomeIcon" style={{ fontSize: '20px', padding: '0', margin: '0' }} />
                          </a>
                          <a href='https://www.facebook.com/people/Mango-Khas/100066391855237/' target='_blank' rel="noreferrer noopener" style={{ marginBottom: '-4px' }}>
                              <FaFacebookSquare className="HomeIcon" style={{ fontSize: '20px', padding: '0', margin: '0' }} />
                          </a>
                          <a href='https://wa.me/923063311880' target='_blank' rel="noreferrer noopener" style={{ marginBottom: '-4px' }}>
                              <FaWhatsapp className="HomeIcon" style={{ fontSize: '20px', padding: '0', margin: '0' }} />
                          </a>
                          <a href='mailto:mangokhas@gmail.com' target='_blank' rel="noreferrer noopener" style={{ marginBottom: '-4px' }}>
                              <HiOutlineMail className="HomeIcon" style={{ fontSize: '23px', padding: '0', margin: '0' }} />
                          </a>
                      </div>
                  </div>

                  <div className="contactdiv">
                      <form onSubmit={sendEmail} className="makemeColumn" style={{ display: 'flex', gap: '25px', width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                          <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
                            {items.map(item => (
                              <div key={item.id} style={{ border: '1px solid #777', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px', position: 'relative', marginBottom: '15px', filter: outOfStockItems.includes(item.id) ? 'grayscale(100%)' : 'none' }}>
                                  <div style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.9)', color: 'white', textAlign: 'center', padding: '10px 0px', borderTop: '1px solid #777' }}>
                                      <p style={{ margin: '0', padding: '0', letterSpacing: '1px', fontSize: '13px', fontWeight: '900', color: '#d49400', marginBottom: '5px' }}>
                                          {item.name}
                                      </p>
                                      {Object.keys(item.prices).map(weight => (
                                          <div key={weight} style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', fontSize: '13px', marginBottom: '5px' }}>
                                              <span style={{ color: 'white' }}>{weight}</span>
                                              <span style={{ color: 'white' }}>PKR {item.prices[weight]}</span>
                                              {!outOfStockItems.includes(item.id) ? (
                                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '13px' }}>
                                                      <div style={{ cursor: 'pointer', fontSize: '13px', fontWeight: '900', background: 'black', border: '1px solid white', color: 'white', height: '20px', width: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => handleDecrement(item.id, weight)} >
                                                          -
                                                      </div>
                                                      <span style={{ color: 'white' }}>{cart[`${item.id}-${weight}`] || 0}</span>
                                                      <div style={{ cursor: 'pointer', fontSize: '13px', fontWeight: '900', background: 'black', border: '1px solid white', color: 'white', height: '20px', width: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => handleIncrement(item.id, weight)} >
                                                          +
                                                      </div>
                                                  </div>
                                              ) : (
                                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '13px' }}>
                                                      <span style={{ color: 'white' }}>Out of Stock</span>
                                                  </div>
                                              )}
                                          </div>
                                      ))}
                                  </div>
                              </div>
                            ))}
                            <p style={{ color: 'white', width: '100%', textAlign: 'right', fontSize: '13px' }}>Total =<span style={{ color: '#d49400' }}> PKR {calculateTotal()}/-</span></p>
                            <p style={{ color: 'white', width: '100%', textAlign: 'center', fontSize: '13px' }}>Note: This quote is not inclusive of delivery charges</p>
                          </div>

                          <div className="formdata" style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                              <h2 className="heading" style={{ color: '#d49400', margin: '0', padding: '0', textAlign: 'center', fontWeight: '300' }}>Enter your details below to confirm your order</h2>
                              <input className="input" name="Name" type="text" placeholder="Full Name" required />
                              <input className="input" name="Email" type="email" placeholder="Email" required />
                              <input className="input" name="Phone" type="number" placeholder="Phone Number" required />
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '10px', margin: '0' }}>
                                  <input name="City" id="City" placeholder="City" required type="text" />
                                  <select name="Province" id="Province" required style={{ padding: '10px', height: '40px', borderRadius: '0px' }} type="text">
                                      <option selected disabled value="">Province</option>
                                      <option value="Sindh">Sindh</option>
                                      <option value="Punjab">Punjab</option>
                                      <option value="Balochistan">Balochistan</option>
                                      <option value="KPK">KPK</option>
                                  </select>
                              </div>
                              <textarea name="address" id="address" rows="3" placeholder="Shipping address" required></textarea>
                              <button type="submit" id='SubmitButton' className="buttonMain2" style={{ marginTop: '5px' }}>Submit</button>
                              <p style={{ color: 'white', width: '100%', textAlign: 'right', fontSize: '13px' }}>Total =<span style={{ color: '#d49400' }}> PKR {calculateTotal()}/-</span></p>
                              <p id="success-message" style={{ fontSize: '13px', margin: '0', textAlign: 'center' }}>Order request sent! We will contact you soon!</p>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </>
  );
    
};

export default Checkout;
