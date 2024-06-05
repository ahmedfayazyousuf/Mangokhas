import ccontact from '../../1_MediaAssets/SectionImages/HeroCover.png';
import React from 'react';

const Contact = () =>{

    return(
        <div style={{width: '95%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <form className='contactdiv'>
                <h1 style={{ fontWeight: '900', color: '#d49400', fontSize: '35px', width: '83%'}}>Contact</h1>
                <p style={{ marginTop: '-40px', color: '#d49400', width: '83%'}}>Let's Talk Mangoes and Pickles!</p>
                <input type="text" name="from_name" id="name" placeholder="Full Name"  required/>
                <input type="email" name="from_email" id="email" placeholder="Email Address" required/>
                <input name="subject" id="subject" placeholder="Subject" required/>
                <textarea style={{border: '0.5px solid #d49400', borderRadius: '0', color: '#d49400', background: 'black', padding: '10px', width: '80%'}} className="form-control testinput" type="textarea" name="message" id="message" rows='3'placeholder="For us, the answer is Yes. Now, what's your question?" required /> 
                <button style={{marginTop: '10px', width: '200px'}}>Submit</button>
            </form>

            <div class="imagediv">
                <div style={{width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url('${ccontact}')`}}>
                </div>
            </div>

        </div>
    )
}

export default Contact;