import { useState,useEffect } from "react";

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
  Mail,
  Phone,
  MapPin,
  Building2,
  CalendarDays,
  Pencil,
  Save,
  X,
  CheckCircle2,
  FileUp,
} from "lucide-react";

import {
  useNavigate
} from "react-router-dom";

import "./StudentProfile.css";


const StudentProfile = () => {

  const navigate =
    useNavigate();

  const [
    isEditing,
    setIsEditing
  ] = useState(false);
  const [
  profilePhoto,
  setProfilePhoto
] = useState(
  localStorage.getItem(
    "studentProfilePhoto"
  ) || ""
);


const [
  resumeName,
  setResumeName
] = useState(
  localStorage.getItem(
    "studentResumeName"
  ) || ""
);


  const [
    profile,
    setProfile
  ] = useState({

    fullName:
      "Renuka Joshi",

    email:
      "renuka@college.edu",

    phone:
      "+91 98765 43210",

    college:
      "D. Y. Patil College of Engineering",

    department:
      "Information Technology",

    year:
      "Final Year",

    location:
      "Pune, Maharashtra",

    skills:
      "React.js, JavaScript, HTML, CSS, Node.js",

  });


  const handleChange = (
    event
  ) => {

    setProfile({

      ...profile,

      [
        event.target.name
      ]:
        event.target.value,

    });

  };


  const handleSave = () => {

    localStorage.setItem(

      "studentProfile",

      JSON.stringify(
        profile
      )

    );

    setIsEditing(
      false
    );

    alert(
      "Profile updated successfully!"
    );

  };
  const handleProfilePhotoChange = (
  event
) => {

  const selectedPhoto =
    event.target.files[0];

  if (!selectedPhoto) {
    return;
  }

  if (
    !selectedPhoto.type.startsWith(
      "image/"
    )
  ) {

    alert(
      "Please select an image file."
    );

    return;
  }

  const reader =
    new FileReader();

  reader.onload = () => {

    const imageData =
      reader.result;

    setProfilePhoto(
      imageData
    );

    localStorage.setItem(

      "studentProfilePhoto",

      imageData

    );

  };

  reader.readAsDataURL(
    selectedPhoto
  );

};
const handleResumeUpload = (
  event
) => {

  const selectedResume =
    event.target.files[0];

  if (!selectedResume) {
    return;
  }

  const isPDF =
    selectedResume.type ===
    "application/pdf";

  if (!isPDF) {

    alert(
      "Please upload only a PDF resume."
    );

    return;
  }

  setResumeName(
    selectedResume.name
  );

  localStorage.setItem(

    "studentResumeName",

    selectedResume.name

  );

  alert(
    "Resume uploaded successfully!"
  );

};


  return (

    <main className="profile-page">


      {/* Sidebar */}

      <aside className="profile-sidebar">


        <div className="dashboard-logo">

          <div className="dashboard-logo-icon">

            <GraduationCap
              size={25}
            />

          </div>


          <div>

            <h2>

              CampusConnect

              <span>
                AI
              </span>

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
              navigate(
                "/student-dashboard"
              )
            }
          >

            <LayoutDashboard
              size={19}
            />

            Dashboard

          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              navigate(
                "/student/drives"
              )
            }
          >

            <BriefcaseBusiness
              size={19}
            />

            Campus Drives

          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              navigate(
                "/student/applications"
              )
            }
          >

            <FileText
              size={19}
            />

            My Applications

          </button>


          <button
            className="sidebar-link active"
          >

            <User
              size={19}
            />

            My Profile

          </button>


          <button
            className="sidebar-link"
            onClick={() =>
              navigate(
                "/student/notifications"
              )
            }
          >

            <Bell
              size={19}
            />

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

                Renuka Joshi

              </h4>


              <p>

                IT Department

              </p>

            </div>


            <ChevronDown
              size={16}
            />

          </div>


          <button
            className="logout-button"
            onClick={() =>
              navigate(
                "/student-login"
              )
            }
          >

            <LogOut
              size={18}
            />

            Logout

          </button>

        </div>

      </aside>


      {/* Main page */}

      <section className="profile-main">


        {/* Header */}

        <header className="profile-header">


          <div className="header-search">

            <Search
              size={19}
            />

            <input
              type="text"
              placeholder="Search opportunities..."
            />

          </div>


          <div className="header-actions">


            <button
              className="notification-button"
              onClick={() =>
                navigate(
                  "/student/notifications"
                )
              }
            >

              <Bell
                size={19}
              />

              <span></span>

            </button>


            <div className="header-avatar">

              RJ

            </div>

          </div>

        </header>


        {/* Content */}

        <div className="profile-content">


          <section className="profile-page-heading">


            <div>


              <span className="profile-tag">

                <User
                  size={13}
                />

                STUDENT PROFILE

              </span>


              <h1>

                My Profile

              </h1>


              <p>

                Keep your information updated
                to improve your placement opportunities.

              </p>

            </div>


            {!isEditing ? (

              <button
                className="edit-profile-button"
                onClick={() =>
                  setIsEditing(
                    true
                  )
                }
              >

                <Pencil
                  size={17}
                />

                Edit Profile

              </button>

            ) : (

              <div className="profile-action-buttons">


                <button
                  className="cancel-profile-button"
                  onClick={() =>
                    setIsEditing(
                      false
                    )
                  }
                >

                  <X
                    size={17}
                  />

                  Cancel

                </button>


                <button
                  className="save-profile-button"
                  onClick={
                    handleSave
                  }
                >

                  <Save
                    size={17}
                  />

                  Save Changes

                </button>

              </div>

            )}

          </section>


          {/* Profile top card */}

          <section className="profile-overview-card">


           <div className="profile-photo-wrapper">

  <div className="profile-avatar-large">

    {profilePhoto ? (

      <img
        src={profilePhoto}
        alt="Student profile"
      />

    ) : (

      profile.fullName
        .split(" ")
        .map(
          (name) =>
            name[0]
        )
        .slice(0, 2)
        .join("")
        .toUpperCase()

    )}

  </div>


  <label
    className="change-photo-button"
  >

    <Pencil
      size={13}
    />

    <input
      type="file"
      accept="image/*"
      onChange={
        handleProfilePhotoChange
      }
    />

  </label>

</div>


            <div className="profile-main-information">


              <h2>

                {profile.fullName}

              </h2>


              <p>

                {profile.department}
                {" • "}
                {profile.year}

              </p>


              <span>

                <CheckCircle2
                  size={15}
                />

                Profile verified

              </span>

            </div>


            <div className="profile-completion">


              <p>

                Profile Completion

              </p>


              <h3>

                85%

              </h3>


              <div className="profile-progress">

                <div></div>

              </div>

            </div>

          </section>


          {/* Information cards */}

          <section className="profile-details-grid">


            <article className="profile-information-card">


              <div className="profile-card-heading">

                <div>

                  <Mail
                    size={19}
                  />

                </div>


                <h2>

                  Personal Information

                </h2>

              </div>


              <div className="profile-fields">


                <div className="profile-field">

                  <label>

                    Full Name

                  </label>


                  {isEditing ? (

                    <input
                      type="text"
                      name="fullName"
                      value={
                        profile.fullName
                      }
                      onChange={
                        handleChange
                      }
                    />

                  ) : (

                    <p>

                      {profile.fullName}

                    </p>

                  )}

                </div>


                <div className="profile-field">

                  <label>

                    College Email

                  </label>


                  {isEditing ? (

                    <input
                      type="email"
                      name="email"
                      value={
                        profile.email
                      }
                      onChange={
                        handleChange
                      }
                    />

                  ) : (

                    <p>

                      {profile.email}

                    </p>

                  )}

                </div>


                <div className="profile-field">

                  <label>

                    Phone Number

                  </label>


                  {isEditing ? (

                    <input
                      type="tel"
                      name="phone"
                      value={
                        profile.phone
                      }
                      onChange={
                        handleChange
                      }
                    />

                  ) : (

                    <p>

                      {profile.phone}

                    </p>

                  )}

                </div>


                <div className="profile-field">

                  <label>

                    Location

                  </label>


                  {isEditing ? (

                    <input
                      type="text"
                      name="location"
                      value={
                        profile.location
                      }
                      onChange={
                        handleChange
                      }
                    />

                  ) : (

                    <p>

                      {profile.location}

                    </p>

                  )}

                </div>

              </div>

            </article>


            <article className="profile-information-card">


              <div className="profile-card-heading">

                <div>

                  <GraduationCap
                    size={19}
                  />

                </div>


                <h2>

                  Academic Information

                </h2>

              </div>


              <div className="profile-fields">


                <div className="profile-field">

                  <label>

                    College

                  </label>


                  {isEditing ? (

                    <input
                      type="text"
                      name="college"
                      value={
                        profile.college
                      }
                      onChange={
                        handleChange
                      }
                    />

                  ) : (

                    <p>

                      {profile.college}

                    </p>

                  )}

                </div>


                <div className="profile-field">

                  <label>

                    Department

                  </label>


                  {isEditing ? (

                    <input
                      type="text"
                      name="department"
                      value={
                        profile.department
                      }
                      onChange={
                        handleChange
                      }
                    />

                  ) : (

                    <p>

                      {profile.department}

                    </p>

                  )}

                </div>


                <div className="profile-field">

                  <label>

                    Current Year

                  </label>


                  {isEditing ? (

                    <select
                      name="year"
                      value={
                        profile.year
                      }
                      onChange={
                        handleChange
                      }
                    >

                      <option>

                        First Year

                      </option>

                      <option>

                        Second Year

                      </option>

                      <option>

                        Third Year

                      </option>

                      <option>

                        Final Year

                      </option>

                    </select>

                  ) : (

                    <p>

                      {profile.year}

                    </p>

                  )}

                </div>


                <div className="profile-field">

                  <label>

                    Skills

                  </label>


                  {isEditing ? (

                    <textarea
                      name="skills"
                      value={
                        profile.skills
                      }
                      onChange={
                        handleChange
                      }
                    />

                  ) : (

                    <p>

                      {profile.skills}

                    </p>

                  )}

                </div>

              </div>

            </article>

          </section>


          {/* Resume */}

          <section className="profile-resume-card">


            <div className="resume-icon">

              <FileUp
                size={22}
              />

            </div>


            <div>

              <h2>

                Resume

              </h2>


              <p>

                Upload your latest resume
                to apply for campus drives.

              </p>
              {resumeName && (

  <span className="uploaded-resume-name">

    ✓ {resumeName}

  </span>

)}

            </div>


           <label
  className="resume-upload-button"
>

  <FileUp
    size={17}
  />

  {resumeName
    ? "Change Resume"
    : "Upload Resume"
  }


  <input
    type="file"
    accept=".pdf,application/pdf"
    onChange={
      handleResumeUpload
    }
  />

</label>

          </section>


        </div>

      </section>

    </main>

  );

};


export default StudentProfile;