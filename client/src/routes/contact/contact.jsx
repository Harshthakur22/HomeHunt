import "./contact.scss";

function Contact() {
  return (
    <div className="contactPage">
      <h1>Contact Us</h1>
      <p>Have a question or feedback? Send us a message.</p>
      <form onSubmit={(e)=> e.preventDefault()} className="form">
        <div className="row">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
        </div>
        <textarea placeholder="Your message" rows={6} required />
        <button type="submit">Send</button>
      </form>
      <div className="details">
        <div><strong>Email:</strong> support@homehunt.app</div>
        <div><strong>Phone:</strong> +91 00000 00000</div>
      </div>
    </div>
  );
}

export default Contact;
