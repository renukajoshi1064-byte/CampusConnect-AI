import { useState } from "react";

import {
  useNavigate
} from "react-router-dom";

import "./StudentRegister.css";

import {
  GraduationCap,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";


const StudentRegister = () => {

  const navigate =
    useNavigate();

  const [
    showPassword,
    setShowPassword
  ] = useState(false);
  const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailTouched, setEmailTouched] = useState(false);

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const getPasswordStrength = (password) => {
  if (password.length === 0) {
    return {
      label: "",
      level: 0,
    };
  }

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialCharacter =
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (
    password.length >= 8 &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialCharacter
  ) {
    return {
      label: "Strong",
      level: 3,
    };
  }

  if (
    password.length >= 6 &&
    ((hasUppercase && hasLowercase) ||
      (hasLowercase && hasNumber) ||
      (hasUppercase && hasNumber))
  ) {
    return {
      label: "Medium",
      level: 2,
    };
  }

  return {
    label: "Weak",
    level: 1,
  };
};

const passwordStrength =
  getPasswordStrength(password);


  const handleSubmit = (event) => {
  event.preventDefault();

  if (!isValidEmail(email)) {
    alert(
      "Please enter a valid email address."
    );

    return;
  }

  if (passwordStrength.level < 2) {
    alert(
      "Please create at least a medium-strength password."
    );

    return;
  }

  const studentData = {
    fullName,
    email,
    password,
  };

  localStorage.setItem(
    "studentAccount",
    JSON.stringify(studentData)
  );

  alert(
    "Account created successfully! Please sign in."
  );

  navigate("/student-login");
};


  return (

    <main className="student-register-page">

      <section className="register-info-section">

        <div className="register-logo">

          <div className="register-logo-icon">

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


        <div className="register-info-content">

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

            Create your profile,
            discover campus opportunities,
            and start building your
            professional journey.

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


      <section className="register-form-section">

        <div className="register-form-card">

          <div className="form-heading">

            <span className="form-icon">

              <GraduationCap size={25} />

            </span>

            <h2>

              Create your account

            </h2>

            <p>

              Start discovering
              opportunities today.

            </p>

          </div>


          <form
            onSubmit={handleSubmit}
          >

            <div className="input-group">

              <label>

                Full Name

              </label>

              <div className="input-box">

                <User size={19} />

               <input
  type="text"
  placeholder="Enter your full name"
  value={fullName}
  onChange={(event) =>
    setFullName(event.target.value)
  }
  required
/>

              </div>

            </div>


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
  onBlur={() =>
    setEmailTouched(true)
  }
  required
/>

              </div>

            </div>


            <div className="input-group">

              <label>

                Password

              </label>

              <div className="input-box">

                <Lock size={19} />

                <input
  type={
    showPassword
      ? "text"
      : "password"
  }
  placeholder="Create a password"
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
              {emailTouched && email && !isValidEmail(email) && (

  <p className="validation-message error-message">

    Please enter a valid email address.

  </p>

)}

{emailTouched && email && isValidEmail(email) && (

  <p className="validation-message success-message">

    ✓ Valid email address

  </p>

)}
{password && (

  <div className="password-strength">

    <div className="strength-header">

      <span>
        Password strength
      </span>

      <strong
        className={
          `strength-${passwordStrength.level}`
        }
      >

        {passwordStrength.label}

      </strong>

    </div>

    <div className="strength-bars">

      <span
        className={
          passwordStrength.level >= 1
            ? `active strength-${passwordStrength.level}`
            : ""
        }
      />

      <span
        className={
          passwordStrength.level >= 2
            ? `active strength-${passwordStrength.level}`
            : ""
        }
      />

      <span
        className={
          passwordStrength.level >= 3
            ? `active strength-${passwordStrength.level}`
            : ""
        }
      />

    </div>

    <p className="password-help">

      Use 8+ characters with uppercase,
      lowercase, a number, and a special character.

    </p>

  </div>

)}

            </div>


            <button
  type="submit"
  className="register-submit-btn"
>

              Create Student Account

              <ArrowRight size={19} />

            </button>

          </form>


          <div className="auth-switch">

            <span>

              Already have an account?

            </span>

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/student-login"
                )
              }
            >

              Sign in

            </button>

          </div>

        </div>

      </section>

    </main>

  );

};


export default StudentRegister;