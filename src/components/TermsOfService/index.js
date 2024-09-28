import React from 'react';
import Navbar from '../HeaderFooter/Navbar/NavbarTwo.js';
import Cover from '../1_MediaAssets/SectionImages/MangoTexture.png';

const TermsOfService = () => {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', minHeight: '100vh', backgroundImage: `url('${Cover}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif', color: '#d3d3d3' }}>
                    <h1 style={{ color: '#d49400' }}>Terms of Service</h1>
                    <p>Effective Date: 11 August 2024</p>

                    <p>Welcome to <a style={{color: '#d49400'}} href='https://www.mangokhas.com/'>www.mangokhas.com</a> These Terms of Service outline the rules and regulations for using our website.</p>

                    <h2 style={{ color: '#d3d3d3' }}>Acceptance of Terms</h2>
                    <p>By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our site.</p>

                    <h2 style={{ color: '#d3d3d3' }}>Use of the Site</h2>
                    <p>You are responsible for your use of the website and must comply with all applicable laws and regulations.</p>

                    <h2 style={{ color: '#d3d3d3' }}>Intellectual Property</h2>
                    <p>All content on our website, including text, graphics, logos, and images, is the property of [Your Website Name] and is protected by copyright laws.</p>

                    <h2 style={{ color: '#d3d3d3' }}>Limitation of Liability</h2>
                    <p>[Your Website Name] is not liable for any damages arising from your use of the site.</p>

                    <h2 style={{ color: '#d3d3d3' }}>Changes to These Terms</h2>
                    <p>We may update these Terms from time to time. Changes will be posted on this page.</p>

                    <h2 style={{ color: '#d3d3d3' }}>Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us at [Your Contact Information].</p>
                </div>
            </div>
        </>
    );
};

export default TermsOfService;
