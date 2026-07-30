import {
  GraduationCap,
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  User,
  Bell,
  LogOut,
  Search,
  ChevronDown,
  MapPin,
  IndianRupee,
  CalendarDays,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import "./DriveDetails.css";
import { useState } from "react";



const DriveDetails = () => {

  
   const navigate = useNavigate();

  const [showApplicationForm, setShowApplicationForm] =
    useState(false);

  const [selectedResume, setSelectedResume] =
    useState("");

  const [agreed, setAgreed] =
    useState(false);

  const { company } = useParams();


  const drives = {

    Google: {
      logo: "G",
      logoClass: "google-logo",
      company: "Google",
      role: "Software Engineer Intern",
      location: "Bangalore, India",
      package: "₹12 LPA",
      deadline: "15 Aug 2026",
      type: "Internship",
      duration: "6 Months",

      description:
        "Join Google as a Software Engineer Intern and work with experienced engineers on scalable products used by millions of people. You will contribute to real-world projects and gain practical software development experience.",

      eligibility: [
        "BE/BTech in Computer Science or Information Technology",
        "Minimum 7.0 CGPA",
        "Graduating batch of 2027",
        "No active backlogs",
      ],

      skills: [
        "Java",
        "Python",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
      ],

    },


    Microsoft: {
      logo: "M",
      logoClass: "microsoft-logo",
      company: "Microsoft",
      role: "Software Development Engineer",
      location: "Hyderabad, India",
      package: "₹14 LPA",
      deadline: "18 Aug 2026",
      type: "Full Time",
      duration: "Full-time",

      description:
        "Microsoft is looking for motivated software development engineers to design, build, test, and maintain reliable software solutions. You will collaborate with teams and contribute to innovative products.",

      eligibility: [
        "BE/BTech in Computer Science or IT",
        "Minimum 7.5 CGPA",
        "Graduating batch of 2027",
        "No active backlogs",
      ],

      skills: [
        "C++",
        "Java",
        "JavaScript",
        "DSA",
        "Software Development",
      ],

    },


    Infosys: {
      logo: "I",
      logoClass: "infosys-logo",
      company: "Infosys",
      role: "Systems Engineer",
      location: "Pune, India",
      package: "₹6.5 LPA",
      deadline: "22 Aug 2026",
      type: "Full Time",
      duration: "Full-time",

      description:
        "Join Infosys as a Systems Engineer and work on enterprise applications, software development, testing, and technology solutions for global clients.",

      eligibility: [
        "BE/BTech in IT or Computer Science",
        "Minimum 6.0 CGPA",
        "Graduating batch of 2027",
        "No active backlogs",
      ],

      skills: [
        "Java",
        "Python",
        "SQL",
        "Web Development",
        "Communication",
      ],

    },


    Accenture: {
      logo: "A",
      logoClass: "accenture-logo",
      company: "Accenture",
      role: "Associate Software Engineer",
      location: "Mumbai, India",
      package: "₹6 LPA",
      deadline: "25 Aug 2026",
      type: "Full Time",
      duration: "Full-time",

      description:
        "Work with Accenture technology teams to develop, test, and maintain software applications while learning modern tools and industry practices.",

      eligibility: [
        "BE/BTech in IT or Computer Science",
        "Minimum 6.0 CGPA",
        "Graduating batch of 2027",
        "No active backlogs",
      ],

      skills: [
        "Java",
        "JavaScript",
        "SQL",
        "Problem Solving",
        "Teamwork",
      ],

    },


    TCS: {
      logo: "T",
      logoClass: "tcs-logo",
      company: "TCS",
      role: "Graduate Engineer Trainee",
      location: "Pune, India",
      package: "₹7.2 LPA",
      deadline: "28 Aug 2026",
      type: "Full Time",
      duration: "Full-time",

      description:
        "Start your technology career at TCS as a Graduate Engineer Trainee and work on software development, testing, cloud, and enterprise technology projects.",

      eligibility: [
        "BE/BTech in IT or Computer Science",
        "Minimum 6.0 CGPA",
        "Graduating batch of 2027",
        "No active backlogs",
      ],

      skills: [
        "Java",
        "Python",
        "DBMS",
        "Cloud Basics",
        "Communication",
      ],

    },


    Deloitte: {
      logo: "D",
      logoClass: "deloitte-logo",
      company: "Deloitte",
      role: "Technology Consultant Intern",
      location: "Mumbai, India",
      package: "₹9 LPA",
      deadline: "30 Aug 2026",
      type: "Internship",
      duration: "6 Months",

      description:
        "Join Deloitte as a Technology Consultant Intern and gain experience in technology consulting, software solutions, business analysis, and client projects.",

      eligibility: [
        "BE/BTech in IT or Computer Science",
        "Minimum 7.0 CGPA",
        "Graduating batch of 2027",
        "No active backlogs",
      ],

      skills: [
        "Web Development",
        "SQL",
        "Problem Solving",
        "Communication",
        "Teamwork",
      ],

    },

  };
  const resumes = [

  {
    id: "resume-1",
    name: "Renuka_Joshi_Resume.pdf",
    label: "Software Developer Resume",
  },

  {
    id: "resume-2",
    name: "Renuka_Joshi_Web_Developer.pdf",
    label: "Web Developer Resume",
  },

];


  const drive = drives[company];


  if (!drive) {

    return (

      <div className="drive-not-found">

        <h1>
          Drive not found
        </h1>

        <button
          onClick={() =>
            navigate("/student/drives")
          }
        >

          Back to Campus Drives

        </button>

      </div>

    );

  }


  const handleApply = () => {

    alert(
      `Your application for ${drive.role} at ${drive.company} has been submitted successfully!`
    );

  };


  return (

    <main className="drive-details-page">


      {/* Sidebar */}

      <aside className="details-sidebar">


        <div className="dashboard-logo">

          <div className="dashboard-logo-icon">

            <GraduationCap size={25} />

          </div>


          <div>

            <h2>

              CampusConnect
              <span> AI</span>

            </h2>

            <p>

              Student Portal

            </p>

          </div>

        </div>


        <nav className="sidebar-menu">


          <button
            className="sidebar-link"
            onClick={() =>
              navigate("/student-dashboard")
            }
          >

            <LayoutDashboard size={19} />

            Dashboard

          </button>


          <button
            className="sidebar-link active"
            onClick={() =>
              navigate("/student/drives")
            }
          >

            <BriefcaseBusiness size={19} />

            Campus Drives

          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              navigate("/student/applications")
            }
          >

            <FileText size={19} />

            My Applications

          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              navigate("/student/profile")
            }
          >

            <User size={19} />

            My Profile

          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              navigate("/student/notifications")
            }
          >

            <Bell size={19} />

            Notifications

          </button>

        </nav>


        <div className="sidebar-bottom">


          <div className="student-mini-profile">

            <div className="student-avatar">

              RJ

            </div>


            <div>

              <h4>

                Student

              </h4>

              <p>

                IT Department

              </p>

            </div>


            <ChevronDown size={16} />

          </div>


          <button
            className="logout-button"
            onClick={() =>
              navigate("/student-login")
            }
          >

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </aside>


      {/* Main section */}

      <section className="details-main">


        {/* Header */}

        <header className="details-header">


          <div className="header-search">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search companies or roles..."
            />

          </div>


          <div className="header-actions">

          <button
  className="notification-button"
  onClick={() =>
    navigate("/student/notifications")
  }
  title="Notifications"
>

  <Bell size={19} />

  <span></span>

</button>


            <div className="header-avatar">

              RJ

            </div>

          </div>

        </header>


        {/* Content */}

        <div className="details-content">


          <button
            className="back-button"
            onClick={() =>
              navigate("/student/drives")
            }
          >

            <ArrowLeft size={17} />

            Back to Campus Drives

          </button>


          {/* Company card */}

          <section className="company-details-card">


            <div className="company-details-top">


              <div
                className={
                  `details-company-logo ${drive.logoClass}`
                }
              >

                {drive.logo}

              </div>


              <div className="company-title">

                <span className="job-type">

                  {drive.type}

                </span>


                <h1>

                  {drive.role}

                </h1>


                <h2>

                  {drive.company}

                </h2>

              </div>

            </div>


            <div className="details-information">


              <div>

                <MapPin size={18} />

                <span>

                  Location

                  <strong>

                    {drive.location}

                  </strong>

                </span>

              </div>


              <div>

                <IndianRupee size={18} />

                <span>

                  Package

                  <strong>

                    {drive.package}

                  </strong>

                </span>

              </div>


              <div>

                <Clock size={18} />

                <span>

                  Duration

                  <strong>

                    {drive.duration}

                  </strong>

                </span>

              </div>


              <div>

                <CalendarDays size={18} />

                <span>

                  Apply Before

                  <strong>

                    {drive.deadline}

                  </strong>

                </span>

              </div>

            </div>

          </section>


          {/* Main details grid */}

          <section className="details-grid">


            <div className="details-left">


              <article className="details-card">

                <div className="details-card-heading">

                  <Building2 size={20} />

                  <h2>

                    Job Description

                  </h2>

                </div>


                <p>

                  {drive.description}

                </p>

              </article>


              <article className="details-card">

                <div className="details-card-heading">

                  <CheckCircle2 size={20} />

                  <h2>

                    Eligibility Criteria

                  </h2>

                </div>


                <ul className="eligibility-list">

                  {drive.eligibility.map(
                    (item) => (

                      <li key={item}>

                        <CheckCircle2 size={17} />

                        {item}

                      </li>

                    )
                  )}

                </ul>

              </article>


              <article className="details-card">

                <div className="details-card-heading">

                  <BriefcaseBusiness size={20} />

                  <h2>

                    Required Skills

                  </h2>

                </div>


                <div className="skills-list">

                  {drive.skills.map(
                    (skill) => (

                      <span key={skill}>

                        {skill}

                      </span>

                    )
                  )}

                </div>

              </article>

            </div>


            {/* Apply card */}

            <aside className="apply-card">


              <span className="apply-card-tag">

                READY TO APPLY?

              </span>


              <h2>

                Take the next step

              </h2>


              <p>

                Submit your application for this opportunity and begin your recruitment journey.

              </p>


             <button
  className="apply-now-button"
  onClick={() =>
    setShowApplicationForm(true)
  }
>

  Apply Now

  <ArrowRight size={17} />

</button>


              <div className="apply-note">

                <CheckCircle2 size={16} />

                Your profile will be used for this application.

              </div>

            </aside>

          </section>

        </div>

      </section>
      {showApplicationForm && (

  <div className="application-modal-overlay">

    <div className="application-modal">

      <button
        type="button"
        className="modal-close-button"
        onClick={() =>
          setShowApplicationForm(false)
        }
      >

        ×

      </button>


      <div className="application-modal-heading">

        <span>

          APPLICATION

        </span>

        <h2>

          Complete your application

        </h2>

        <p>

          Select the resume you want to submit
          for this opportunity.

        </p>

      </div>


      <div className="resume-selection">

        <label>

          Select Resume

        </label>


        {resumes.map((resume) => (

          <label
            key={resume.id}
            className={
              `resume-option ${
                selectedResume === resume.id
                  ? "selected"
                  : ""
              }`
            }
          >

            <input
              type="radio"
              name="resume"
              value={resume.id}
              checked={
                selectedResume === resume.id
              }
              onChange={() =>
                setSelectedResume(
                  resume.id
                )
              }
            />

            <div className="resume-file-icon">

              📄

            </div>

            <div>

              <h4>

                {resume.label}

              </h4>

              <p>

                {resume.name}

              </p>

            </div>

          </label>

        ))}

      </div>


      <button
        type="button"
        className="upload-resume-button"
      >

        + Upload New Resume

      </button>


      <label className="agreement-row">

        <input
          type="checkbox"
          checked={agreed}
          onChange={(event) =>
            setAgreed(
              event.target.checked
            )
          }
        />

        <span>

          I confirm that the information in my
          selected resume is accurate and I agree
          to submit my application.

        </span>

      </label>


      <button
        type="button"
        className="confirm-application-button"
        disabled={
          !selectedResume || !agreed
        }
        onClick={() => {

          alert(
            "Application submitted successfully!"
          );

          setShowApplicationForm(false);

          navigate(
            "/student/applications"
          );

        }}
      >

        Confirm Application

        <ArrowRight size={17} />

      </button>

    </div>

  </div>

)}

    </main>

  );

};


export default DriveDetails;