import "./Features.css";
import {
  Brain,
  Briefcase,
  FileText,
  Bell,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={32} />,
    title: "AI Resume Analysis",
    description:
      "Get instant AI-powered resume insights and improve your chances of selection.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Campus Drive Management",
    description:
      "Recruiters can easily create, manage and monitor hiring drives.",
  },
  {
    icon: <FileText size={32} />,
    title: "Resume Builder",
    description:
      "Build professional resumes with beautiful templates in minutes.",
  },
  {
    icon: <Bell size={32} />,
    title: "Real-Time Notifications",
    description:
      "Receive updates for applications, interviews and placement drives instantly.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Analytics Dashboard",
    description:
      "Visualize placement statistics and recruitment performance effortlessly.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Secure Platform",
    description:
      "Role-based authentication keeps student, recruiter and admin data protected.",
  },
];

const Features = () => {
  return (
    <section className="features">

      <div className="features-header">

        <span>Platform Features</span>

        <h2>Everything You Need for Campus Recruitment</h2>

        <p>
          CampusConnect AI brings students, recruiters and placement officers
          together with one powerful platform.
        </p>

      </div>

      <div className="features-grid">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">

              {feature.icon}

            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Features;