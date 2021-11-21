const buildManager = ({ name, id, email, officeNumber }) => `
<div class="card">
        <div class="card-title">
          <div>${name}</div>
          <div>Manager</div>
        </div>
        <div class="card-info-container">
          <div class="contacts">ID:${id}</div>
          <div class="contacts">Email:${email}</div>
          <div class="contacts">Office:${officeNumber}</div>
        </div>
      </div>`;

const buildEngineer = ({ name, id, email, github }) => `
<div class="card">
        <div class="card-title">
          <div>${name}</div>
          <div>Engineer</div>
        </div>
        <div class="card-info-container">
          <div class="contacts">ID:${id}</div>
          <div class="contacts">Email:${email}</div>
          <div class="contacts">GitHub Username:${github}</div>
        </div>
      </div>`;

const buildIntern = ({ name, id, email, school }) => `
<div class="card">
        <div class="card-title">
          <div>${name}</div>
          <div>Intern</div>
        </div>
        <div class="card-info-container">
          <div class="contacts">ID:${id}</div>
          <div class="contacts">Email:${email}</div>
          <div class="contacts">School:${school}</div>
        </div>
      </div>`;

const buildPage = (array) => {
  // build entire page
  // split array into different classes
  // build cards for each class
  //  put it all together
  // return html
};

module.exports = buildPage;
