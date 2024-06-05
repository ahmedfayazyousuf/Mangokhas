import ccontact from '../../1_MediaAssets/SectionImages/HeroCover.png';
import React from 'react';

const Footer = () =>{

    return(
        <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                <form className='contactdiv'>
                    <h1 style={{alignSelf: 'start', fontWeight: '900', color: '#d49400', fontSize: '35px'}}>Contact</h1>
                    <p style={{alignSelf: 'start', marginTop: '-12px', color: '#d49400'}}>Let's turn your ideas into reality. </p>
                    <input style={{border: '0.5px solid #d49400', margin: '5px', borderRadius: '0', color: '#d49400', background: 'black', padding: '10px', width: '80%'}} type="text" name="from_name" id="name" placeholder="Full Name"  required/>
                    <input style={{border: '0.5px solid #d49400', margin: '5px', borderRadius: '0', color: '#d49400', background: 'black', padding: '10px', width: '80%'}} type="email" name="from_email" id="email" placeholder="Email Address" required/>
                    <input style={{border: '0.5px solid #d49400', margin: '5px', borderRadius: '0', color: '#d49400', background: 'black', padding: '10px', width: '80%'}} name="subject" id="subject" placeholder="Subject" required/>
                    <textarea style={{border: '0.5px solid #d49400', margin: '5px', borderRadius: '0', color: '#d49400', background: 'black', padding: '10px', width: '80%'}} className="form-control testinput" type="textarea" name="message" id="message" rows='3'placeholder="For us, the answer is Yes. Now, what's your question?" required /> 
                    <div>
                        <p id='error' className="error" style={{color:"white", marginBottom: '-17px', fontWeight: '900', fontSize: '11px'}}></p>
                    </div>
                    <button style={{width: '80%'}}>Submit</button>
                </form>

                <div class="imagediv">
                    <div style={{width: '300px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url('${ccontact}')`}}>
                    </div>
                </div>

        </div>
    )
}

export default Footer;