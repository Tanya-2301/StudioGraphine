import footerBackground from "../../assets/18591063.png";
import ellipse from "../../assets/Ellipse 1.png";

const Footer = () => {
  return (
    <div className="footer-body">
      <div
        style={{
          backgroundImage: `url(${footerBackground})`,
          width: "100%",
          height: "510px",
          position: "relative",
        }}
      >
        <div className="form-container">
          <div className="form-text">
            <h1 className="form-text-title">Newsletter</h1>
            <p className="form-text-para">
              Get news about articles and updates <br /> in your inbox.
            </p>
          </div>
          <div class="form-group">
            <div className="input">
              <span className="label">NAME</span>
              <input type="text" />
            </div>
            <div className="input">
              <span className="label">EMAIL</span>
              <input type="text" />
            </div>
            <div className="input">
              <span className="label">MESSAGE</span>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="footer-msg">
          <p
            className="message"
          >
            GET <br /> IN TOUCH
          </p>
          <div className="sending">
          <img className="ellipse" src={ellipse} alt="" srcset="" />
          <div className="send">SEND</div>
          </div>
  
        </div>
      </div>
      <div className="copyright">
        <span className="copyright-msg">
          Copyright 2022 All Right Reserved By SG
        </span>
      </div>
    </div>
  );
};

export default Footer;
