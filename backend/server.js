// Updated server.js with watermark and bullet points
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

function generateCVHTML(data) {
  // Format responsibilities with bullet points
  const experiencesHTML = data.experiences.map(exp => `
    <div style="margin-bottom: 20px;">
      <h3 style="font-weight: bold; margin-bottom: 5px; color: ${data.templateType === 'blue' ? '#2c3e50' : '#d35400'};">
        ${exp.position.toUpperCase()} | <span style="text-transform: uppercase;">${exp.company}</span>
      </h3>
      <p style="font-style: italic; margin-bottom: 10px; color: #7f8c8d;">${exp.duration}</p>
      <ul style="margin-left: 20px; color: #34495e;">
        ${exp.responsibilities.split('\n').filter(line => line.trim()).map(line => 
          `<li style="margin-bottom: 5px;"><span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: ${data.templateType === 'blue' ? '#3498db' : '#e67e22'}; margin-right: 10px;"></span>${line}</li>`
        ).join('')}
      </ul>
    </div>
  `).join('');

  const primaryColor = data.templateType === 'blue' ? '#2c3e50' : '#e67e22';
  const secondaryColor = data.templateType === 'blue' ? '#3498db' : '#d35400';
  const leftBgColor = data.templateType === 'blue' ? '#2c3e50' : '#f39c12';
  const skillBgColor = data.templateType === 'blue' ? '#3498db' : '#e67e22';

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.fullName} - CV</title>
      <style>
        @page {
          size: A4;
          margin: 0;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          color: #333;
          background-color: #f9f9f9;
          position: relative;
        }
        .cv-container {
          display: flex;
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          position: relative;
        }
        .left-column {
          width: 35%;
          background-color: ${leftBgColor};
          color: white;
          padding: 30px;
        }
        .right-column {
          width: 65%;
          background-color: white;
          padding: 30px;
        }
        .name {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
          color: white;
          text-transform: uppercase;
        }
        .contact-info {
          margin-bottom: 25px;
          font-size: 14px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .section {
          margin-bottom: 25px;
        }
        .section-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          text-transform: uppercase;
          color: ${secondaryColor};
          border-bottom: 2px solid ${secondaryColor};
          padding-bottom: 5px;
        }
        .left-section-title {
          color: white;
          border-bottom: 2px solid ${secondaryColor};
        }
        .software-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-item {
          background-color: ${skillBgColor};
          color: white;
          padding: 5px 10px;
          border-radius: 3px;
          font-size: 12px;
        }
        .education-item {
          margin-bottom: 15px;
        }
        .education-title {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .education-duration {
          font-style: italic;
          color: #ecf0f1;
          font-size: 14px;
        }
        .watermark {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 14px;
          color: #cccccc;
          opacity: 0.5;
          font-style: italic;
        }
        ul {
          list-style-type: none;
          padding-left: 0;
        }
        li {
          display: flex;
          align-items: baseline;
        }
      </style>
    </head>
    <body>
      <div class="cv-container">
        <div class="left-column">
          <div class="name">${data.fullName}</div>
          
          <div class="section">
            <div class="section-title left-section-title">Contact</div>
            <div class="contact-info">
              <div class="contact-item">${data.address}</div>
              <div class="contact-item">${data.phone}</div>
              <div class="contact-item">${data.email}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title left-section-title">Software Skills</div>
            <div class="software-skills">
              ${data.softwareSkills.split(',').map(skill => `
                <div class="skill-item">${skill.trim()}</div>
              `).join('')}
            </div>
          </div>

          <div class="section">
            <div class="section-title left-section-title">Education</div>
            <div class="education-item">
              <div class="education-title">${data.education.split('\n')[0] || ''}</div>
              ${data.education.split('\n').slice(1).map(line => `
                <div class="education-duration">${line}</div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="right-column">
          <div class="section">
            <div class="section-title">Profile</div>
            <p style="color: #34495e;">${data.profile}</p>
          </div>

          <div class="section">
            <div class="section-title">Experience</div>
            ${experiencesHTML}
          </div>
          
          <div class="watermark">transitley.com</div>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Orange template variant
function generateOrangeCVHTML(data) {
  // Format responsibilities with bullet points
  const experiencesHTML = data.experiences.map(exp => `
    <div style="margin-bottom: 20px;">
      <h3 style="font-weight: bold; margin-bottom: 5px; color: #d35400;">
        ${exp.position.toUpperCase()} | <span style="text-transform: uppercase;">${exp.company}</span>
      </h3>
      <p style="font-style: italic; margin-bottom: 10px; color: #7f8c8d;">${exp.duration}</p>
      <ul style="margin-left: 20px; color: #34495e; list-style-type: none; padding-left: 0;">
        ${exp.responsibilities.split('\n').filter(line => line.trim()).map(line => 
          `<li style="margin-bottom: 5px;"><span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: #e67e22; margin-right: 10px;"></span>${line}</li>`
        ).join('')}
      </ul>
    </div>
  `).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.fullName} - CV</title>
      <style>
        @page {
          size: A4;
          margin: 0;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          color: #333;
          background-color: #f9f9f9;
          position: relative;
        }
        .cv-container {
          display: flex;
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          background: linear-gradient(to right, #f39c12 35%, white 35%);
          position: relative;
        }
        .left-column {
          width: 35%;
          color: white;
          padding: 30px;
        }
        .right-column {
          width: 65%;
          padding: 30px;
        }
        .name {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
          color: white;
          text-transform: uppercase;
        }
        .contact-info {
          margin-bottom: 25px;
          font-size: 14px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .section {
          margin-bottom: 25px;
        }
        .section-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          text-transform: uppercase;
          color: #e67e22;
          border-bottom: 2px solid #e67e22;
          padding-bottom: 5px;
        }
        .left-section-title {
          color: white;
          border-bottom: 2px solid #e67e22;
        }
        .software-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-item {
          background-color: #e67e22;
          color: white;
          padding: 5px 10px;
          border-radius: 3px;
          font-size: 12px;
        }
        .education-item {
          margin-bottom: 15px;
        }
        .education-title {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .education-duration {
          font-style: italic;
          color: #ecf0f1;
          font-size: 14px;
        }
        .watermark {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 14px;
          color: #cccccc;
          opacity: 0.5;
          font-style: italic;
        }
        ul {
          list-style-type: none;
          padding-left: 0;
        }
        li {
          display: flex;
          align-items: baseline;
        }
      </style>
    </head>
    <body>
      <div class="cv-container">
        <div class="left-column">
          <div class="name">${data.fullName}</div>
          
          <div class="section">
            <div class="section-title left-section-title">Contact</div>
            <div class="contact-info">
              <div class="contact-item">${data.address}</div>
              <div class="contact-item">${data.phone}</div>
              <div class="contact-item">${data.email}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title left-section-title">Software Skills</div>
            <div class="software-skills">
              ${data.softwareSkills.split(',').map(skill => `
                <div class="skill-item">${skill.trim()}</div>
              `).join('')}
            </div>
          </div>

          <div class="section">
            <div class="section-title left-section-title">Education</div>
            <div class="education-item">
              <div class="education-title">${data.education.split('\n')[0] || ''}</div>
              ${data.education.split('\n').slice(1).map(line => `
                <div class="education-duration">${line}</div>
              `).join('')}
            </div>
          </div>
          <div class="section">
            <div class="section-title">Profile</div>
            <p style="color: #34495e;">${data.profile}</p>
          </div>
        </div>

        <div class="right-column">
          

          <div class="section">
            <div class="section-title">Experience</div>
            ${experiencesHTML}
          </div>
          
          <div class="watermark">transitley.com</div>
        </div>
      </div>
    </body>
    </html>
  `;
}

app.post('/generate-cv', async (req, res) => {
  try {
    const data = req.body;
    const html = data.templateType === 'orange' ? generateOrangeCVHTML(data) : generateCVHTML(data);
    
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    });
    
    await browser.close();
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=CV_${data.fullName.replace(/\s+/g, '_')}.pdf`);
    res.send(pdf);
    
  } catch (error) {
    console.error('Error generating CV:', error);
    res.status(500).send('Error generating CV');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});