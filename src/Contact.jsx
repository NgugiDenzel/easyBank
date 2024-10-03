
const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We would love to hear from you! Reach out to us using the information below.</p>

      <section>
        <h2>Email</h2>
        <p><a href="mailto:support@easybank.com">support@easybank.com</a></p>
      </section>

      <section>
        <h2>Phone</h2>
        <p>+1 (800) 123-4567</p>
      </section>

      <section>
        <h2>Address</h2>
        <p>1234 EasyBank Blvd, Suite 100<br />San Francisco, CA 94105</p>
      </section>

      <section>
        <h2>Social Media</h2>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
