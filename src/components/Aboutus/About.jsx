import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Welcome to StartConnect Hub, the premier platform for connecting startups with investors 
          and fostering innovation in the entrepreneurial ecosystem. At StartConnect Hub, we believe in the 
          power of collaboration and the transformative potential of startups to drive positive change in the 
          world. Our mission is to empower startups to succeed by providing them with the resources, connections, 
          and support they need to thrive, while also enabling investors to discover and invest in promising 
          opportunities.
        </p>
      </div>
      
      <div className="about-us-content">
        <h2>Our Vision</h2>
        <p>
          Our vision is to create a vibrant and inclusive community where startups and investors can come 
          together to share ideas, collaborate on projects, and fuel innovation. We envision a future where 
          every entrepreneur has access to the resources and support they need to turn their vision into reality, 
          and where every investor can find exciting opportunities to support and grow.
        </p>
      </div>
      <div className="about-us-content">
        <h2>What we Offer</h2>
        <p>
          At StartConnect Hub, we offer a comprehensive suite of tools, resources, and services designed to support 
          startups and investors at every stage of their journey. From matchmaking algorithms that connect startups 
          with compatible investors, to secure messaging systems that facilitate communication and collaboration, 
          we provide the infrastructure and support needed to foster meaningful connections and drive success.
        </p>
      </div>
      <div className="about-us-content">
        <h2>Why Choose StartConnectHub</h2>
        <p>
        <b>Extensive Network:</b> With a diverse and expansive network of startups, investors, mentors, and 
        industry experts, StartConnect Hub offers unparalleled access to opportunities and connections.<br/>
        <b>Personalized Matchmaking:</b> Our advanced matchmaking algorithms analyze user profiles and 
        preferences to provide personalized recommendations, ensuring that startups and investors find the 
        perfect match.<br/>
        <b>Secure and Confidential:</b> We prioritize the security and confidentiality of our users' data, 
        implementing robust encryption, access controls, and privacy measures to safeguard sensitive 
        information.<br/>
        <b>Innovation and Growth:</b> By fostering collaboration, innovation, and growth, StartConnect Hub 
        empowers startups to realize their full potential and investors to diversify their portfolios and 
        drive returns.<br/>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
