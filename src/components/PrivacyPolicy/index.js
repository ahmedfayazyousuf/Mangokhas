import React from 'react';
import Navbar from '../HeaderFooter/Navbar/NavbarTwo.js';
import Cover from '../1_MediaAssets/SectionImages/MangoTexture.png';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', minHeight: '100vh', backgroundImage: `url('${Cover}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
                <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif', color: '#d3d3d3' }}>
                    <h1 style={{ color: '#d49400' }}>Privacy Policy</h1>
                    <p>Effective Date: 11 August 2024</p>

                    <p>Welcome to <a style={{color: '#d49400'}} href='https://www.mangokhas.com/'>www.mangokhas.com</a> This privacy policy outlines how we collect, use, and protect your information when you visit our website.</p>

                    <h2 style={{ color: '#d3d3d3' }}>Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <ul>
                        <li><strong>Personal Information:</strong> Name, email address, and any other information you provide when you sign up or contact us.</li>
                        <li><strong>Usage Data:</strong> Information on how you use our website, which may include your IP address, browser type, and access times.</li>
                    </ul>

                    <h2 style={{ color: '#d3d3d3' }}>How We Use Your Information</h2>
                    <p>We may use your information for the following purposes:</p>
                    <ul>
                        <li>To provide and maintain our website.</li>
                        <li>To improve, personalize, and expand our services.</li>
                        <li>To communicate with you, either directly or through one of our partners.</li>
                        <li>To find and prevent fraud.</li>
                    </ul>

                    <h2 style={{ color: '#d3d3d3' }}>Data Security</h2>
                    <p>We take your privacy seriously and implement appropriate technical and organizational measures to protect your data.</p>

                    <h2 style={{ color: '#d3d3d3' }}>Your Rights</h2>
                    <p>You have the right to access, update, or delete your personal information. If you have any questions or requests regarding your data, please contact us.</p>

                    <h2 style={{ color: '#d3d3d3' }}>Changes to This Privacy Policy</h2>
                    <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

                    <h2 style={{ color: '#d3d3d3' }}>Contact Us</h2>
                    <p>If you have any questions about this privacy policy, please contact us at <a style={{color: '#d49400'}} href='mailto:mangokhas@gmail.com'>mangokhas@gmail.com</a></p>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
