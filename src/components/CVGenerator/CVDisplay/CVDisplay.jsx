import "./CVDisplay.css";

function CVDisplay({
  name,
  email,
  contactNumber,
  school,
  dateOfStudy,
  course,
  companyName,
  positionTitle,
  responsibilities,
  jobDate,
}) {
  return (
    <div className="cv-display">
      <section className="cv-display__section">
        <h3>{name}</h3>
        <div className="cv-display__div">
          <p>
            email: <span>{email}</span>
          </p>
          <p>
            Contact #: <span>{contactNumber}</span>
          </p>
        </div>
      </section>
      <hr />
      <section className="cv-display__section">
        <h4>Educational Background</h4>
        <div className="cv-display__div">
          <p>
            School: <span>{school}</span>
          </p>
          <p>
            Date of Study: <span>{dateOfStudy}</span>
          </p>
          <p>
            Course: <span>{course}</span>
          </p>
        </div>
      </section>
      <hr />
      <section className="cv-display__section">
        <h4>Practical Experience</h4>
        <div className="cv-display__div">
          <p>
            Company Name: <span>{companyName}</span>
          </p>
          <p>
            Position Title: <span>{positionTitle}</span>
          </p>
          <p>
            Responsibilities: <span>{responsibilities}</span>
          </p>
          <p>
            Job Date: <span>{jobDate}</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default CVDisplay;
