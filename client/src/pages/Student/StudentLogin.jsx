import { useState } from "react"; 

import {
  useNavigate
} from "react-router-dom";

import "./StudentLogin.css";

import {
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";


const StudentLogin = () => {

  const navigate =
    useNavigate();

  const [
    showPassword,
    setShowPassword
  ] = useState(false);
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


 const handleSubmit = (event) => {
  event.preventDefault();

  const savedStudent = localStorage.getItem(
    "studentAccount"
  );

  if (!savedStudent) {
    alert(
      "No account found. Please create an account first."
    );

    navigate("/student-register");

    return;
  }

  const studentData = JSON.parse(
    savedStudent
  );

  if (
    email === studentData.email &&
    password === studentData.password
  ) {
    navigate("/student/dashboard");
  } else {
    alert(
      "Incorrect email or password."
    );
  }
};


  return (

    <main className="student-login-page">

      <section className="login-info-section">

        <div className="login-logo">

          <div className="login-logo-icon">

            <GraduationCap
              size={30}
            />

          </div>

          <div>

            <h2>

              CampusConnect
              <span> AI</span>

            </h2>

            <p>

              Campus Recruitment Platform

            </p>

          </div>

        </div>


        <div className="login-info-content">

          <span className="student-tag">

            🎓 STUDENT PORTAL

          </span>


          <h1>

            Your next opportunity

            <span>
              starts here.
            </span>

          </h1>


          <p>

            Discover campus drives,
            apply for exciting opportunities,
            and manage your placement journey
            from one platform.

          </p>


          <div className="student-benefits">

            <div>

              <CheckCircle2 size={20} />

              Explore verified campus drives

            </div>

            <div>

              <CheckCircle2 size={20} />

              Track your applications

            </div>

            <div>

              <CheckCircle2 size={20} />

              Build your professional profile

            </div>

          </div>

        </div>

      </section>


      <section className="login-form-section">

        <div className="login-form-card">

          <div className="form-heading">

            <span className="form-icon">

              <GraduationCap size={25} />

            </span>

            <h2>

              Welcome back!

            </h2>

            <p>

              Sign in to continue your
              placement journey.

            </p>

          </div>


          <form
            onSubmit={handleSubmit}
          >

            <div className="input-group">

              <label>

                College Email

              </label>

              <div className="input-box">

                <Mail size={19} />

                <input
  type="email"
  placeholder="name@college.edu"
  value={email}
  onChange={(event) =>
    setEmail(event.target.value)
  }
  required
/>

              </div>

            </div>


            <div className="input-group">

              <div className="password-label">

                <label>

                  Password

                </label>

                <button
                  type="button"
                >

                  Forgot Password?

                </button>

              </div>


              <div className="input-box">

                <Lock size={19} />

               <input
  type={
    showPassword
      ? "text"
      : "password"
  }
  placeholder="Enter your password"
  value={password}
  onChange={(event) =>
    setPassword(event.target.value)
  }
  required
/>

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >

                  {showPassword
                    ? <EyeOff size={19} />
                    : <Eye size={19} />
                  }

                </button>

              </div>

            </div>


            <label className="remember-row">

              <input type="checkbox" />

              <span>

                Remember me

              </span>

            </label>


           <button
  type="submit"
  className="login-submit-btn"
>

              Sign In to Student Portal

              <ArrowRight size={19} />

            </button>

          </form>


          <div className="auth-switch">

            <span>

              New to CampusConnect AI?

            </span>

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/student-register"
                )
              }
            >

              Create an account

            </button>

          </div>

        </div>

      </section>

    </main>

  );

};


export default StudentLogin;