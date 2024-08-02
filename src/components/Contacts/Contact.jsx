import React from 'react'
import './Contact.css'
import iconmessage from '../../assets/message.webp'
import iconemail from '../../assets/email.png'
import icontel from '../../assets/telephone.jpg'
import iconemplacement from '../../assets/localisation.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Envoi....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "49dba4ba-f687-4752-8576-709ff8a19f8f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Formulaire soumis avec succès");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>envoyez-nous un message <img src={iconmessage} alt="" /></h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Velit explicabo nihil quod repudiandae tenetur doloremque earum quaerat minima, 
            dolor ipsum vitae. Quos repellat voluptatem explicabo!
        </p>
        <ul>
            <li><img src={iconemail} alt="" />Ousmaneyaou00@gmail.com</li>
            <li><img src={icontel} alt="" />+221 77 859 66 61</li>
            <li><img src={iconemplacement} alt="" />Medima, rue 30 X 27 <br />Dakar, Senegal</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Votre nom</label>
            <input type="text" name='name' placeholder='Votre nom...' required/>
            <label>Telephone</label>
            <input type="tel" name='tel' placeholder='Votre numero...' required/>
            <label>Votre messages</label>
            <textarea name="message" rows='6' placeholder='Enter votre message' required></textarea><br />
            <button type='subnit' className='btn dark-btn'>Envoyer</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
