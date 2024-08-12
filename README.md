<!--Team Name-->
# Learning Management System by Team VANS

<h1 align="center">
    <a href="https://docs.google.com/spreadsheets/d/1SPtBPZjJfs1aljyR0dSkWJUQrc0ujuTY2ZukZDJz5Ow/edit#gid=1232063613">
    <img src="https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/6C4AA8CB-C873-45FA-9E5F-31E6BA85E311_1_201_a.jpeg"/>
    </a>
    
</h1>


<!--Project Title/Quote-->
<p align="center">
  <i align="center">Transform learning into an engaging journey with our Learning Management System. 🚀</i>
</p>

<!--Project Image with technologies-->

<p align="center">
    <a href="https://docs.google.com/spreadsheets/d/1SPtBPZjJfs1aljyR0dSkWJUQrc0ujuTY2ZukZDJz5Ow/edit#gid=1287233871">
    <img src="https://img.shields.io/badge/Sprint_Chart-Team_VANS-7E30E1">
    </a>
</p>

<h1 align="center">

Tech Stack

<img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" />
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />

</h1>


## Introduction

 Welcome to our `Learning Management System (LMS)` project repository, developed by Team VANS for the CMPE 202 course at San Jose State University.


<details closed>
<summary>
 Features
</summary> <br />
<!-- INSERT FEATURES IMAGES HERE-->  
<p align="center">
    <img width="49%" src="https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/public/StudentView.png" alt="1"/>
    &nbsp;
    <img width="49%" src="https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/public/HomeScreen.png"/>
    <img width="49%" src="https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/public/AddAssignment.png" alt="1"/>
    &nbsp;
    <img width="49%" src="https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/public/FacultyView.png" alt="customize-code"/>
    <img width="49%" src="https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/public/ListSubmissions.png"/>


</p>
    
</details>


## Development

Alternatively, instead of checking the hosted version of the project, This can be run locally. - Please find the below steps:

<details open>
<summary>
Pre-requisites
</summary> <br />

> To be able to start run this project on local env, make sure that you have the following prerequisites installed:

- Node.js
- Java
- Maven
- MySQL
</details>


## Project Design Choices

### Next.js (Frontend Framework)
- **Why Next.js**: We chose Next.js for the website's front-end because it's user-friendly and enhances page loading speed. Its SEO-friendly features also improve our visibility on search engines, ensuring users find us easily.
   
### Spring Boot (Backend Framework)
- **Why Spring Boot**: For the back-end development, we selected Spring Boot due to its simplicity and seamless integration capabilities. It facilitates smooth communication between different parts of our website, ensuring a cohesive user experience.
   
### MySQL (Database)
- **Why MySQL**: To manage our website's data efficiently, such as course information and user registrations, we chose MySQL for its reliability and scalability. It provides a stable foundation for storing and retrieving large amounts of data.
   
### AWS (Cloud Provider)
- **Why AWS**: When it came to hosting our website, we turned to AWS for its robust cloud infrastructure and comprehensive suite of services. AWS ensures our website remains accessible and responsive, even during periods of high traffic.
   
### Auto Scaled EC2 Cluster with Load Balancer (Deployment)
- **Why Auto Scaled EC2 Cluster with Load Balancer**: To maintain optimal performance under varying loads, we implemented an auto-scaled EC2 cluster with a load balancer. This setup automatically adjusts server capacity based on demand, ensuring seamless user experience regardless of traffic fluctuations.

## XP Values

### Communication
We ensured everyone stayed informed by regularly sharing knowledge and updates during team meetings and discussions. This helped us stay aligned and make informed decisions together.

### Simplicity
We focused on implementing only necessary features and used reusable components to keep the project simple and manageable. This approach saved time and effort, making development smoother.

### Respect
Throughout the project, we valued each other's opinions, availability, and timelines, creating a supportive and collaborative environment. This mutual respect allowed us to work efficiently and fostered a sense of trust within the team.

## Architecture Diagram

![image](https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/public/Component_LMS.png)

## Deployment Diagram

![image](https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/public/DeploymentDiagramLMS.png)

## Deliverables and Weekly Scrum Report

> Detailed Sprint task distribution in our [Sprint Chart](https://docs.google.com/spreadsheets/d/1SPtBPZjJfs1aljyR0dSkWJUQrc0ujuTY2ZukZDJz5Ow/edit#gid=1232063613)


> [Team Journal](https://docs.google.com/document/d/1PobRP_-0e5MNLPLzWF5RvtG2FytLsy_D0lys2sY1h7U/edit?usp=sharing)

<details open>
<summary>
Sprint 1 (13 Mar to 26 Mar)
</summary> <br />

- Set up Private GitHub Repository with Git Classroom Invite for Team
- Setup Separate Environments for Testing and Production
- Create UML Diagrams for Project Setup
- Create UI Wireframes Using Figma
- Design responsive UI/UX
- Design Wireframes for Faculty, Students, and Admins
- Design Wireframes for Assignments and Quizzes
- Nextjs Framework Setup with TypeScript
- Spring Boot Setup with Java
- Configure MySQL Database Setup

</details>

<details open>
<summary>
Burndown Chart Sprint 1
</summary> <br />

 <img src="https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/public/Sprint1.png"/></a>

</details>

<details open>
<summary>
Sprint 2 (27 Mar to 10 Apr)
</summary> <br />

- Implement Role-Based Access Controls for Students, Faculty, and Admins
- Set up Mock Database Schema for Users, Courses, Assignments, and Quizzes
- Implement User Authentication System
- Design and Implement Encoded Password Feature
- Develop API endpoints to Create, Retrieve and Update Profile
- Develop Feature for Student Role to View / Edit Profile
- Implement Student Notification Preferences Feature
- Develop API endpoints to Create, Retrieve, Update and Delete courses

</details>

<details open>
<summary>
Burndown Chart Sprint 2
</summary> <br />

 <img src="https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/public/Sprint2.png"/></a>

</details>

<details open>
<summary>
Sprint 3 (11 Apr to 24 Apr)
</summary> <br />

- Develop API endpoints to Assign Courses to Faculty
- Develop API endpoints to List Courses to Students, Faculty and Admins
- Develop API endpoints to List Courses by Term
- Develop API endpoints to Edit Course Details
- Develop API endpoints to Change Professor for a Course in Admin
- Develop API endpoints to Create, Retrieve, Update and Delete Assignments
- Develop Feature for Faculty Role to Add and Manage Assignments
- Develop Feature for Student Role to View Assignments
- Develop Feature for Admin Role to View Assignments
- Develop Feature for Faculty Role to Grade Assignments

</details>

<details open>
<summary>
Burndown Chart Sprint 3
</summary> <br />

 <img src="https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/public/Sprint3.png"/></a>

</details>

<details open>
<summary>
Sprint 4 (25 Apr to 8 May)
</summary> <br />

- Develop API endpoints to Create, Retrieve, Update and Delete Quiz
- Develop Feature for Faculty Role to Add and Manage Quizzes
- Develop Feature for Faculty Role to Grade Quizzes
- Develop Feature for Admin Role to View Quizzes
- Develop API endpoints to Create, Retrieve, Update and Delete Announcements
- Develop Feature for Faculty Role to Add and Manage Announcements
- Develop Feature for Student Role to View Announcements
</details>

<details open>
<summary>
Burndown Chart Sprint 4
</summary> <br />

 <img src="https://raw.githubusercontent.com/veeravivekt/lms-nextjs-frontend/main/public/Sprint4.png"/></a>

</details>


## Team Members

1. ***V***eera Vivek Telagani
2. ***A***lekhya Vaida
3. ***N***ikhath Firdose
4. ***S***oumith Reddy Podduturi 
