import { useState, useRef, useEffect } from 'react'
import Menu from './Menu'
import '../styles/Experiences.css'

function Experiences({onNavigate, visitorName }) {
  const experiences = [
    {
      title: 'QA Engineer',
      timelineDate: 'February 2024 — May 2025',
      companyName: 'Bytedance',
      companyLocation: 'Yogyakarta, Indonesia',
      companyDescription: 'Building upon my previous projects at GoTo Logistics in the field of Warehouse Management System (WMS), I have made several key contributions throughout my career.',
      responsibilities: ["Successfully delivered multiple outbound-related projects within the WMS domain using both manual and automation testing (covering Web, Android Apps, and API), achieving over 90% bug detection rate, ensuring high product quality and reducing post-release issues.", "Led testing projects with a team of manual testers, assisting them in creating test cases, test plans, reporting bugs, conducting bug investigations, and managing daily reporting to ensure smooth test execution.", "Initiated internal training and sharing sessions on Postman, Selenium IDE, Katalon, and HTTP Toolkit to enhance the skillset of manual testers and streamline their testing workflows.", "Collaborated with frontend developers to debug critical issues in Android applications, contributing to fixes that improved app performance by up to 90%.", "Assisted Product Managers and Operational Teams during UAT, preparing test data, cleaning up environments, and triaging reported issues before escalating to developers.", "Collaborated with fellow QA engineers to conduct monthly load testing using Tokopedia's internal Golang-based load test framework, ensuring performance reliability across all modules within the Warehouse Management System (WMS).", "Created end-to-end automation tests for backend systems, specifically for the outbound module in WMS domain, using Bytedance's internal Golang-based testing framework (Tesla-Go).", "Built, migrated, and continuously developed a custom helper tool using Node-RED (Dashboard v2), enabling testers and developers to efficiently generate testdata, process information, and perform manual interactions with Android apps— resulting in up to 95% time efficiency compared to manual workflows.This contribution was recognized with the Bytedance QA Quarterly Award for,significantly improving testing productivity and collaboration across teams.", "Introduced automation frameworks using WebDriverIO and Codecept JS for bothweb and mobile applications in Inbound and Outbound modules within WMSdomain.", "Implemented a new Software Development Life Cycle (SDLC) and Software TestingLife Cycle (STLC), adapting Tokopedia's internal processes to align with Bytedance's engineering standards, resulting in improved workflow consistency and cross-team collaboration."],
      techStack : ["Javascript", "Node JS", "Node-RED", "Postman", "Selenium IDE", "Katalon", "HTTP Toolkit", "Webdriver IO", "Codecept JS", "Appium", "Golang"]
    },
    {
      title: 'Software Engineer - Engineering Productivity',
      timelineDate: 'January 2022 — January 2024',
      companyName: 'Tokopedia',
      companyLocation: 'Yogyakarta, Indonesia',
      companyDescription: 'GoTo Logistics is a logistics company responsible for handling fulfillment and delivery of orders from Tokopedia and other sources to customers. During my time here, I made several key contributions, including:',
      responsibilities: ["Delivered multiple projects in inbound and outbound processes within the WMS domain, utilizing both manual testing and automation-assisted testing methods.","Collaborated closely with Product Managers to conduct UAT sessions and demosfor Operational Teams before deployment to production.","Worked alongside backend and frontend developers to reproduce bugs, createprerequisite data, and assist in debugging processes.","Created frontend automation tests for web interfaces using Katalon Studio.","Developed backend automation tests using Tokopedia’s internal Java-basedtesting framework for the outbound module in WMS (T-rex).","Migrated and developed frontend automation scripts from Katalon to Tokopedia’sinternal Java-Selenium-based framework for all WMS modules (Endurium).","Developed load testing scripts for outbound-related modules within theWMS domain using Tokopedia’s internal Golang-based load testing framework(Hammertime/Hammerflux).","Built a custom helper tool from scratch using Node-RED (Dashboard v1), enablingprivate and team-wide testing support by simplifying test data generation and manual actions."],
      techStack : ["Postman", "JavaScript", "Node Js", "Node-RED", "Katalon", "Java", "Groovy", "Golang"]
    },
    {
      title: 'Engineering Support Specialist',
      timelineDate: 'June 2020 — January 2022',
      companyName: 'Swift Solutions',
      companyLocation: 'Yogyakarta, Indonesia',
      companyDescription: 'At Swift Solutions, I continued my previous role as an Engineering Support Specialist, maintaining the same responsibilities. I was tasked with troubleshooting, reporting issues, and collaborating with engineers to resolve problems effectively.',
      responsibilities: [],
      techStack : []
    },
    {
      title: 'Engineering Support Specialist',
      timelineDate: 'April 2020 — June 2020',
      companyName: 'Sorabel',
      companyLocation: 'Yogyakarta, Indonesia',
      companyDescription: 'As an Engineering Support Specialist, I held several responsibilities:',
      responsibilities: ["Investigated and resolved issues arising from various sources, including system-related errors and human mistakes.","Escalated and coordinated problem resolution with the appropriate engineering teams (Backend/Frontend) to address root causes.","Archived and documented encountered issues on a daily basis, and provided monthly reports to the manager for tracking and analysis.","Created and maintained documentation covering general system workflows and troubleshooting procedures to support operational efficiency."],
      techStack : []
    },
    {
      title: 'Quality Assurance and Trainer (Customer Service)',
      timelineDate: 'January 2019 — March 2020',
      companyName: 'Sorabel',
      companyLocation: 'Yogyakarta, Indonesia',
      companyDescription: 'Sorabel is the rebranded version of Sale Stock. As a Quality Assurance and Trainer in the Customer Service department, I held the same responsibilities as I did previously, focusing on ensuring high service quality and training staff to improve performance.',
      responsibilities: [],
      techStack : []
    },
    {
      title: 'Quality Assurance and Trainer (Customer Service)',
      timelineDate: 'November 2015 — December 2018',
      companyName: 'Sale Stock',
      companyLocation: 'Yogyakarta, Indonesia',
      companyDescription: 'Sale Stock is an online fashion retailer, and as a Quality Assurance and Trainer for Customer Service, I held several responsibilities:',
      responsibilities: ["Managed the Quality Assurance program by monitoring, evaluating, and coaching all divisions in Sorabel, with a primary focus on the Service Department.","Conducted regular evaluations of Customer Service Agents to improve service quality and enhance individual and team performance.","Organized and conducted advanced interviews and assessments for new candidates to ensure high hiring standards.","Led 1-on-1 coaching sessions and group discussions aimed at improving Customer Service performance and overall service excellence."],
      techStack : []
    },
    {
      title: 'Social Media Officer',
      timelineDate: 'July 2015 — November 2015',
      companyName: 'Sale Stock',
      companyLocation: 'Yogyakarta, Indonesia',
      companyDescription: 'Sale Stock is a fashion e-commerce, and as a Social Media Officer, I held several responsibilities:',
      responsibilities: ["Responded to customer inquiries, provided recommendations, and resolved order-related issues through social media platforms such as Facebook, Twitter, and Instagram.",
"Promoted products based on customer interests to enhance engagement and drive sales.",
"Upheld a customer-first approach by consistently delivering service with friendliness, positivity, and a cheerful attitude, in line with the team’s motto: 'Always give the best to customers with a smile and sincerity.'"],
      techStack : []
    }
  ];
  
  return (
    <Menu onNavigate={onNavigate} activePage="experiences" visitorName={visitorName}>
      <div className="experiences-content">
        <div className="experiences-header">
          <h1>Professional Experience</h1>
          <p className="subtitle">My journey in software testing and quality assurance</p>
        </div>
        
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{experience.timelineDate}</div>
              <div className="timeline-content">
                <h3>{experience.title}</h3>
                <h4>{experience.companyName} - {experience.companyLocation}</h4>
                <p>{experience.companyDescription}</p>
                {/* <p>Responsibilities:</p> */}
                <ul className="responsibilities">
                  {
                  experience.responsibilities.length !== 0 ?
                  experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  )) : <p></p>}
                </ul>
                {experience.techStack.length === 0 ? <p></p> : <p>Tech Stack: {(experience.techStack.toString()).replaceAll(',', ', ')}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Menu>
  )
}

export default Experiences