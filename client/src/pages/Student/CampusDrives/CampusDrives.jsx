import {
  GraduationCap,
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  User,
  Bell,
  LogOut,
  Search,
  SlidersHorizontal,
  MapPin,
  IndianRupee,
  CalendarDays,
  Clock,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";


import { useNavigate } from "react-router-dom";

import "./CampusDrives.css";

const CampusDrives = () => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

const [selectedLocation, setSelectedLocation] =
  useState("All Locations");

const [selectedJobType, setSelectedJobType] =
  useState("All Job Types");

  const drives = [
    {
      company: "Google",
      logo: "G",
      logoClass: "google-logo",
      role: "Software Engineer Intern",
      location: "Bangalore, India",
      package: "₹12 LPA",
      deadline: "15 Aug 2026",
      type: "Internship",
    },

    {
      company: "Microsoft",
      logo: "M",
      logoClass: "microsoft-logo",
      role: "Software Development Engineer",
      location: "Hyderabad, India",
      package: "₹14 LPA",
      deadline: "18 Aug 2026",
      type: "Full Time",
    },

    {
      company: "Infosys",
      logo: "I",
      logoClass: "infosys-logo",
      role: "Systems Engineer",
      location: "Pune, India",
      package: "₹6.5 LPA",
      deadline: "22 Aug 2026",
      type: "Full Time",
    },

    {
      company: "Accenture",
      logo: "A",
      logoClass: "accenture-logo",
      role: "Associate Software Engineer",
      location: "Mumbai, India",
      package: "₹6 LPA",
      deadline: "25 Aug 2026",
      type: "Full Time",
    },

    {
      company: "TCS",
      logo: "T",
      logoClass: "tcs-logo",
      role: "Graduate Engineer Trainee",
      location: "Pune, India",
      package: "₹7.2 LPA",
      deadline: "28 Aug 2026",
      type: "Full Time",
    },

    {
      company: "Deloitte",
      logo: "D",
      logoClass: "deloitte-logo",
      role: "Technology Consultant Intern",
      location: "Mumbai, India",
      package: "₹9 LPA",
      deadline: "30 Aug 2026",
      type: "Internship",
    },
  ];

  const filteredDrives = drives.filter(
    (drive) => {

      const searchText =
        searchTerm.toLowerCase();

      const matchesSearch =
        drive.company
          .toLowerCase()
          .includes(searchText) ||

        drive.role
          .toLowerCase()
          .includes(searchText);

      const matchesLocation =
        selectedLocation ===
          "All Locations" ||

        drive.location.includes(
          selectedLocation
        );

      const matchesJobType =
        selectedJobType ===
          "All Job Types" ||

        drive.type ===
          selectedJobType;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesJobType
      );

    }
  );

  

  return (

    <main className="campus-page">

      {/* Sidebar */}

      <aside className="campus-sidebar">

        <div className="dashboard-logo">

          <div className="dashboard-logo-icon">

            <GraduationCap size={25} />

          </div>

          <div>

            <h2>
              CampusConnect <span>AI</span>
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


      {/* Main content */}

      <section className="campus-main">

        {/* Header */}

        <header className="campus-header">

          <div className="header-search">

            <Search size={19} />

            <input
  type="text"
  placeholder="Search companies or roles..."
  value={searchTerm}
  onChange={(event) =>
    setSearchTerm(
      event.target.value
    )
  }
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


        {/* Page content */}

        <div className="campus-content">

          <section className="campus-heading">

            <div>

              <span className="page-tag">

                <BriefcaseBusiness size={13} />

                OPPORTUNITIES

              </span>

              <h1>
                Campus Drives
              </h1>

              <p>
                Explore available opportunities and take the next step in your career.
              </p>

            </div>


            <div className="drive-count">

             <span>
  {filteredDrives.length}
</span>

Active Drives

            </div>

          </section>


          {/* Filters */}

          <section className="drive-filter-card">

            <div className="drive-search">

              <Search size={18} />

             <input
  type="text"
  placeholder="Search by company or job role"
  value={searchTerm}
  onChange={(event) =>
    setSearchTerm(
      event.target.value
    )
  }
/>

            </div>


            <button className="filter-button">

              <SlidersHorizontal size={17} />

              Filters

            </button>


            <select
  value={selectedLocation}
  onChange={(event) =>
    setSelectedLocation(
      event.target.value
    )
  }
>

  <option>
    All Locations
  </option>

  <option>
    Pune
  </option>

  <option>
    Mumbai
  </option>

  <option>
    Bangalore
  </option>

  <option>
    Hyderabad
  </option>

</select>

           <select
  value={selectedJobType}
  onChange={(event) =>
    setSelectedJobType(
      event.target.value
    )
  }
>

  <option>
    All Job Types
  </option>

  <option>
    Internship
  </option>

  <option>
    Full Time
  </option>

</select>
          </section>


          {/* Drive cards */}

          <section className="drives-grid">

        {filteredDrives.map((drive) => (

              <article
                className="drive-card"
                key={drive.company}
              >

                <div className="drive-card-top">

                  <div
                    className={`drive-company-logo ${drive.logoClass}`}
                  >

                    {drive.logo}

                  </div>


                  <span className="job-type">

                    {drive.type}

                  </span>

                </div>


                <h2>

                  {drive.company}

                </h2>


                <h3>

                  {drive.role}

                </h3>


                <div className="drive-information">

                  <div>

                    <MapPin size={15} />

                    {drive.location}

                  </div>


                  <div>

                    <IndianRupee size={15} />

                    {drive.package}

                  </div>


                  <div>

                    <CalendarDays size={15} />

                    Apply by {drive.deadline}

                  </div>

                </div>


                <div className="eligibility-box">

                  <span>

                    Eligibility

                  </span>

                  <p>

                    BE/BTech – IT, Computer Science

                  </p>

                </div>


              <button
  className="view-drive-button"
  onClick={() =>
    navigate(
      `/student/drive/${drive.company}`
    )
  }
>

  View Drive

  <ArrowRight size={17} />

</button>

              </article>

            ))}

          </section>

        </div>

      </section>

    </main>

  );

};

export default CampusDrives;