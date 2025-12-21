export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Enter Your Name"
            required
            autoComplete="off"
          />
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            name="message"
            placeholder="Enter Your Name"
            rows="10"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
