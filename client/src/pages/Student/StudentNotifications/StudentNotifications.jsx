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
  CheckCircle2,
  Clock3,
  Building2,
  UserRound,
  CalendarClock,
} from "lucide-react";
import { useState } from "react";
import {
  useNavigate,
} from "react-router-dom";

import "./StudentNotifications.css";


const StudentNotifications = () => {

  const navigate =
    useNavigate();
    const [notifications, setNotifications] =
  useState([

    {
      id: 1,
      title: "Application Submitted",
      message:
        "Your application for Google – Software Engineer Intern has been submitted successfully.",
      time: "10 minutes ago",
      type: "application",
      isRead: false,
    },

    {
      id: 2,
      title: "Application Under Review",
      message:
        "Your application for Microsoft – Software Development Engineer is now under review.",
      time: "2 hours ago",
      type: "review",
      isRead: false,
    },

    {
      id: 3,
      title: "New Campus Drive",
      message:
        "Deloitte has opened applications for the Technology Consultant Intern role.",
      time: "Yesterday",
      type: "drive",
      isRead: false,
    },

    {
      id: 4,
      title: "Profile Update Reminder",
      message:
        "Complete your student profile to improve your visibility to recruiters.",
      time: "2 days ago",
      type: "profile",
      isRead: true,
    },

    {
      id: 5,
      title: "Application Deadline",
      message:
        "The application deadline for the TCS Graduate Engineer Trainee role is approaching.",
      time: "3 days ago",
      type: "deadline",
      isRead: true,
    },

  ]);
  const markAsRead = (id) => {

  setNotifications(
    notifications.map(
      (notification) =>

        notification.id === id

          ? {
              ...notification,
              isRead: true,
            }

          : notification

    )
  );

};


const markAllAsRead = () => {

  setNotifications(

    notifications.map(
      (notification) => ({
        ...notification,
        isRead: true,
      })
    )

  );

};
const unreadCount =
  notifications.filter(
    (notification) =>
      !notification.isRead
  ).length;


  return (

    <main className="notifications-page">

      {/* =====================
          SIDEBAR
      ===================== */}

      <aside className="notifications-sidebar">

        <div className="dashboard-logo">

          <div className="dashboard-logo-icon">

            <GraduationCap
              size={25}
            />

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
            className="sidebar-link"
            onClick={() =>
              navigate(
                "/student/profile"
              )
            }
          >

            <User
              size={19}
            />

            My Profile

          </button>


          <button
            className="sidebar-link active"
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

                Student

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


      {/* =====================
          MAIN AREA
      ===================== */}

      <section className="notifications-main">

        {/* HEADER */}

        <header className="notifications-header">

          <div className="header-search">

            <Search
              size={19}
            />

            <input
              type="text"
              placeholder="Search notifications..."
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


        {/* PAGE CONTENT */}

        <div className="notifications-content">

          <span className="page-tag">

            <Bell
              size={13}
            />

            UPDATES

          </span>


          <h1>

            Notifications

          </h1>


          <p>

            Stay updated with your
            campus drives, applications,
            and placement activities.

          </p>

<section className="notifications-card">

  <div className="notifications-card-header">

    <div>

      <h2>

        Recent Updates

      </h2>

      <p>

        You have
        {" "}
        <strong>

          {unreadCount}

        </strong>
        {" "}
        unread notifications

      </p>

    </div>


    <button
      className="mark-all-button"
      onClick={markAllAsRead}
    >

      <CheckCircle2
        size={17}
      />

      Mark all as read

    </button>

  </div>


  <div className="notifications-list">

    {notifications.map(
      (notification) => (

        <article

          key={notification.id}

          className={`
            notification-item
            ${
              notification.isRead
                ? "read"
                : "unread"
            }
          `}

        >

          <div
            className={`
              notification-icon
              ${notification.type}
            `}
          >

            {notification.type ===
              "application" && (

              <CheckCircle2
                size={20}
              />

            )}


            {notification.type ===
              "review" && (

              <Clock3
                size={20}
              />

            )}


            {notification.type ===
              "drive" && (

              <Building2
                size={20}
              />

            )}


            {notification.type ===
              "profile" && (

              <UserRound
                size={20}
              />

            )}


            {notification.type ===
              "deadline" && (

              <CalendarClock
                size={20}
              />

            )}

          </div>


          <div className="notification-details">

            <div className="notification-title-row">

              <h3>

                {notification.title}

              </h3>


              {!notification.isRead && (

                <span className="unread-dot">

                </span>

              )}

            </div>


            <p>

              {notification.message}

            </p>


            <span className="notification-time">

              {notification.time}

            </span>

          </div>


          {!notification.isRead && (

            <button

              className="mark-read-button"

              onClick={() =>
                markAsRead(
                  notification.id
                )
              }

            >

              Mark as read

            </button>

          )}

        </article>

      )
    )}

  </div>

</section>

        </div>

      </section>

    </main>

  );

};


export default StudentNotifications;