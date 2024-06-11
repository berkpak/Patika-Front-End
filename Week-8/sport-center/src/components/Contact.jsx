import React from 'react';

function Contact() {
  return (
    <section id='contact'>
      <div className='contact-container'>
        <h2>CONTACT US</h2>
        <div className='line'></div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
          aspernatur, impedit non quis sed nisi!
        </p>
        <div className='contact-info'>
          <div className='phone-email-container'>
            <div className='phone-info'>
              <p>Mobile Number</p>
              <p>+111 111 111</p>
            </div>
            <div className='email-info'>
              <p>Email Address</p>
              <p>test@gmail.com</p>
            </div>
          </div>
          <div className='input-container'>
            <h3>Make An Appointment</h3>
            <input type='text' placeholder='Your Name' />
            <input type='email' placeholder='Your Email' />
            <textarea
              name='msg'
              cols='30'
              rows='10'
              placeholder='Your Message'
            ></textarea>
          </div>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.88850531832!2d28.847372628072865!3d41.00546324300304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1713870330735!5m2!1str!2str'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
