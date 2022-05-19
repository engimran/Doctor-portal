import React from 'react';
import bgImg from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer class=" p-10" style={{
            background: `url(${bgImg})`,
            backgroundSize: 'cover'
        }}>
            <div className='footer'>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>

            <div className='py-12 text-center'>
                <p>Copyright © 2022 - All right reserved by Vision Plus Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;