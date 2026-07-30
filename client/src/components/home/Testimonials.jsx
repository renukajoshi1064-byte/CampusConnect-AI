import "./Testimonials.css";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="testimonial-section">

      <div className="testimonial-header">

        <span className="testimonial-badge">
          Testimonials
        </span>

        <h2>
          What People Say About CampusConnect AI
        </h2>

        <p>
          Helping students, recruiters and placement officers
          simplify campus hiring through one intelligent platform.
        </p>

      </div>

      <div className="testimonial-container">

        <div className="testimonial-card">

          <Quote className="quote"/>

          <p>
            CampusConnect AI simplified our placement process.
            Everything from applications to interviews became
            organized and efficient.
          </p>

          <div className="user">

            <div className="avatar">
              A
            </div>

            <div>

              <h4>Ananya Sharma</h4>

              <span>Placement Officer</span>

            </div>

          </div>

        </div>

        <div className="testimonial-card">

          <Quote className="quote"/>

          <p>
            Finding and applying for campus drives has never
            been this easy. The dashboard is clean and intuitive.
          </p>

          <div className="user">

            <div className="avatar">
              R
            </div>

            <div>

              <h4>Rahul Patil</h4>

              <span>Student</span>

            </div>

          </div>

        </div>

        <div className="testimonial-card">

          <Quote className="quote"/>

          <p>
            We shortlisted candidates much faster and managed
            interviews from one place.
          </p>

          <div className="user">

            <div className="avatar">
              S
            </div>

            <div>

              <h4>Sneha Gupta</h4>

              <span>HR Recruiter</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;