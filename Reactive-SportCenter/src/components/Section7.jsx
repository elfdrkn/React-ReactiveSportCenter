const Contact = () =>  {
    return (
        <section id="contact-us">
            <div className="contact-container">
                <div className="section-title">
                <h2>CONTACT US</h2>
                <hr className="line" />
                <p>
                    Lorem ipsum is not simply random text. It has roots in a piece of
                    classical at <br />
                    Hampden-Sydney College.
                </p>
                </div>
                <div className="map-form-container">
                <div className="contact-info">
                    <div className="contact-item">
                    <h4>
                        Mobile Number
                        <br />
                        <span>+135 773 321 442</span>
                    </h4>
                    <h4>
                        Email Address
                        <br />
                        <span>demo@demo.com</span>
                    </h4>
                    </div>
                    <h2>Make An Appointment</h2>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <textarea
                    name="message"
                    rows={4}
                    cols={50}
                    placeholder="Your Message"
                    style={{ resize: "none" }}
                    defaultValue={""}
                    />
                </div>
                <div className="map">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.18782012835!2d32.830436075498795!3d39.847623790081435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34449a60f69fd%3A0x8c80df72e81a394!2sMAC%2FOne%20Panora!5e0!3m2!1str!2str!4v1728123176819!5m2!1str!2str"
                    width={350}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                </div>
            </div>
            </section>

    );
};

export default Contact;