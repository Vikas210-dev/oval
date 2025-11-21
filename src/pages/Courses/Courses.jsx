import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import "./Courses.css";
import homeIcon from "../../assets/icons/home.svg";
import bookIcon from "../../assets/icons/book.svg";
import searchIcon from "../../assets/icons/search 1.svg";
import profileIcon from "../../assets/icons/profile.svg";
import menuIcon from "../../assets/icons/menu 1.svg";
import siteLogo from "../../assets/logo.svg";
import cartIcon from "../../assets/icons/cart.svg";
import backArrow from "../../assets/back_arrow.svg";
import clockIcon from "../../assets/icons/clock.svg";
import courseVideo from "../../assets/video/video.mp4";
import verifiedIcon from "../../assets/icons/tick_icon.svg";
import oval from "../../assets/images/oval.png";

// Course data with different video IDs and content
const coursesData = {
   1: {
  title: 'Excel in French',
    subtitle: 'Course about Learning Excel in French',
     videoId: '822984570',
    lessonName: "Excel Fundamentals",
    vimeoSrc:
      "https://player.vimeo.com/video/822984570?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,lessons:  [
    { id: 1, name: "Introduction to Microsoft Excel", videoId: "822983570", duration: "4:25" },
    { id: 2, name: "What is DATA?", videoId: "822991805", duration: "2:55" },
    { id: 3, name: "Working with Rows, Columns, and Cells...", videoId: "822985639", duration: "8:39" },
    { id: 4, name: "Using Formatting Options & Shortcut keys", videoId: "822991965", duration: "4:3" },
    { id: 5, name: "Learn to create Number, Date, Text Series", videoId: "822984865", duration: "4:44" },
    { id: 6, name: "How to use Cut, Copy and Paste Options", videoId: "822985068", duration: "6:38" },
    { id: 7, name: "Create a sample Sales Report", videoId: "822986533", duration: "8:2" },
    { id: 8, name: "How to apply Conditional Formatting", videoId: "822983979", duration: "5:23" },
    { id: 9, name: "Apply Data Filters & Sorting on DATA", videoId: "822984204", duration: "4:32" },
    { id: 10, name: "Learn to apply Data Validation in Excel", videoId: "822984117", duration: "5:55" },
    { id: 11, name: "Learn to Import External Data in Excel", videoId: "822985049", duration: "3:12" },
    { id: 12, name: "Create Summary tables using Pivot Table", videoId: "822982087", duration: "8:43" },
    { id: 13, name: "Trace Formulas, Evaluate Formulas, Errors Handling", videoId: "822982864", duration: "11:15" },
    { id: 14, name: "Learn to use String Functions in Excel", videoId: "822984953", duration: "5:32" },
    { id: 15, name: "Learn Date and Time formulas", videoId: "822992234", duration: "4:18" },
    { id: 16, name: "How to use If Condition to Analyze Data", videoId: "822985256", duration: "8:48" },
    { id: 17, name: "Using SUMIF, COUNTIF & AVERAGEIF Formulas", videoId: "822983471", duration: "10:43" },
    { id: 18, name: "Learn to use Vlookup and Hlookup functions", videoId: "822983673", duration: "5:16" },
    { id: 19, name: "Working with Data Ranges & Fixed Cells", videoId: "822986289", duration: "5:31" },
    { id: 20, name: "How to use Index and Match formulas to Lookup values", videoId: "822992458", duration: "4:38" },
    { id: 21, name: "How to use multiple formulas together in Excel", videoId: "822992652", duration: "5:11" },
    { id: 22, name: "Learn to Analyze Data using Charts", videoId: "822984435", duration: "6:29" },
    { id: 23, name: "Automate your work with Macros", videoId: "822992836", duration: "5:43" },
    { id: 24, name: "How to create Hyperlinks between the sheets", videoId: "822997282", duration: "3:51" },
    { id: 25, name: "Analyze your Data using Sparkline Charts", videoId: "822983880", duration: "2:56" },
    { id: 26, name: "Introduction to VBA Programming", videoId: "822983132", duration: "6:59" },
    { id: 27, name: "Create a Calculator using VBA", videoId: "822984668", duration: "13:15" },
    { id: 28, name: "How to define a Variable in VBA Programming", videoId: "822986077", duration: "7:1" },
    { id: 29, name: "Learn to use IF Condition in VBA", videoId: "822982714", duration: "6:25" },
    { id: 30, name: "IF Condition in VBA - Example No.2", videoId: "822985408", duration: "8:26" },
    { id: 31, name: "Learn to use Looping to handle repetitive jobs", videoId: "822982371", duration: "9:29" },
    { id: 32, name: "Calculate Odd & Even using the For Loop", videoId: "822983218", duration: "7:40" },
    { id: 33, name: "How to use While Loop to Read Form Values", videoId: "822993023", duration: "8:48" },
    { id: 34, name: "Learn to create Functions in VBA", videoId: "822993167", duration: "6:35" },
    { id: 35, name: "Create Forms in Microsoft Excel", videoId: "822993285", duration: "6:15" },
    { id: 36, name: "Learn to create custom functions in a Module", videoId: "822983799", duration: "3:20" },
    { id: 37, name: "Apply functions on Data Range in Excel", videoId: "822985548", duration: "3:29" },
    { id: 38, name: "Read & Write DATA to an external file using VBA", videoId: "822986398", duration: "10:5" },
    { id: 39, name: "What is Data Analytics, Type of Data Analytics", videoId: "822982526", duration: "7:4" },
    { id: 40, name: "Analyse Data using Pareto Chart", videoId: "822983321", duration: "6:33" },
    { id: 41, name: "How to calculate correlation on DATA", videoId: "822986189", duration: "5:21" },
    { id: 42, name: "Analyze the Data using the Linear Regression", videoId: "822993443", duration: "6:52" },
    { id: 43, name: "How to do Forecasting of DATA in Excel", videoId: "822993604", duration: "5:50" },
    { id: 44, name: "How to perform Cause & Effect Analysis using...", videoId: "822996683", duration: "6:48" },
    { id: 45, name: "How to find Root Cause using Why-Why Analysis", videoId: "822993793", duration: "7:52" },
    { id: 46, name: "What is SWOT Analysis and How to use it", videoId: "822984320", duration: "5:33" }
  ]
},
   2: {
       title: 'Microsoft Access in French',
        subtitle: 'Course about Learning Microsoft Access in French',
        videoId: '827518045',
    lessonName: "Microsoft Access Fundamentals",
    vimeoSrc:
      "https://player.vimeo.com/video/827518045?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,lessons: [
    { id: 1, name: "Introduction to Microsoft Access", videoId: "827518045", duration: "10:51" },
    { id: 2, name: "Import and link External Files", videoId: "827518107", duration: "8:27" },
    { id: 3, name: "How to use Inner join, Left join & Right join", videoId: "827518213", duration: "11:37" },
    { id: 4, name: "Apply conditions using select query", videoId: "827518305", duration: "7:03" },
    { id: 5, name: "Apply conditions using select query - part-II", videoId: "827518392", duration: "9:01" },
    { id: 6, name: "How to use Make Table & Crosstab Query", videoId: "827518475", duration: "4:58" },
    { id: 7, name: "Use of multiple Select Queries & Maketable...", videoId: "827518524", duration: "5:21" },
    { id: 8, name: "Update DATA in a Table", videoId: "827518578", duration: "4:17" },
    { id: 9, name: "How to make buckets using IF Condition", videoId: "827518629", duration: "6:45" },
    { id: 10, name: "Use of Append & Delete Query", videoId: "827518691", duration: "3:02" },
    { id: 11, name: "How to create Macros to Automate your work", videoId: "827518820", duration: "14:17" },
    { id: 12, name: "How to create function to RUN Queries in MS-Access", videoId: "827518739", duration: "8:22" },
    { id: 13, name: "How to use SQL Statements in MS-Access", videoId: "827890146", duration: "8:25" },
    { id: 14, name: "How to user Insert Query to save Form Values", videoId: "827518913", duration: "9:13" },
    { id: 15, name: "How to use Data Access Objects to read data...", videoId: "827518999", duration: "11:08" },
    { id: 16, name: "How to use Batch files to Compile and Move files", videoId: "827519099", duration: "6:10" },
    { id: 17, name: "How to download DATA from FTP using Batch Files", videoId: "827519171", duration: "3:26" },
    { id: 18, name: "How to UnZip files using Batch Files", videoId: "827519219", duration: "2:21" },
    { id: 19, name: "How to design Scheduler to Automate your work", videoId: "827874447", duration: "9:12" },
    { id: 20, name: "How to Read Files & Folders and Compile", videoId: "827519251", duration: "7:35" },
    { id: 21, name: "How to create Sort Unique values and Export them...", videoId: "827517909", duration: "3:52" },
    { id: 22, name: "How to send Email from VBA...", videoId: "827874392", duration: "6:41" },
    { id: 23, name: "How to apply formatting in Excel...", videoId: "827517974", duration: "7:53" }
  ]},
   3: {
     title: 'PowerBI in French',
        subtitle: 'Course about Learning PowerBI in French',
        
        videoId: '844144537',
    lessonName: "PowerBI Fundamentals",
    vimeoSrc:
      "https://player.vimeo.com/video/844144537?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,lessons: [
    { id: 1, name: "PowerBI Master Class - Introduction to the course", videoId: "844144537", duration: "4:21" },
    { id: 2, name: "Download and Install Power BI", videoId: "844144662", duration: "6:49" },
    { id: 3, name: "Different Datasets for Analysis in Power BI", videoId: "844143687", duration: "6:34" },
    { id: 4, name: "Import Multiple CSV Files, Import Folder", videoId: "844145042", duration: "3:02" },
    { id: 5, name: "Learn to analyze Data from an online website", videoId: "844143610", duration: "5:40" },
    { id: 6, name: "Download and Install MySQL Server", videoId: "844145149", duration: "4:52" },
    { id: 7, name: "Connect to MySQL Server Database", videoId: "844144270", duration: "6:51" },
    { id: 8, name: "Create and Format Column Chart using...", videoId: "844143902", duration: "7:11" },
    { id: 9, name: "Drill down and visualize Data in Power BI", videoId: "844144852", duration: "4:30" },
    { id: 10, name: "Create Data Hierarchy Manually", videoId: "844560597", duration: "2:15" },
    { id: 11, name: "How to apply Conditional Formatting", videoId: "844145420", duration: "5:50" },
    { id: 12, name: "Learn to Create a Calculated Field in...", videoId: "844144088", duration: "4:56" },
    { id: 13, name: "Analyze Small Multiples of Data using Stacked Chart", videoId: "844143437", duration: "2:55" },
    { id: 14, name: "How to Group Data in Power BI", videoId: "844560426", duration: "3:27" },
    { id: 15, name: "Learn to Create Bins of Data in Power BI", videoId: "844144583", duration: "3:43" },
    { id: 16, name: "Create Buckets using IF Condition", videoId: "844145212", duration: "4:43" },
    { id: 17, name: "Create a Measure Field based on a Condition", videoId: "844144713", duration: "4:38" },
    { id: 18, name: "Apply Find with IF Condition and Create a...", videoId: "844144373", duration: "5:05" },
    { id: 19, name: "Learn Data Relationships in Power BI", videoId: "844144735", duration: "7:37" },
    { id: 20, name: "Run Python Programming in Power BI", videoId: "844144194", duration: "5:04" },
    { id: 21, name: "Export Data in CSV, Excel and Powerpoint", videoId: "844144038", duration: "3:10" }
  ]},
   4: {
     title: 'Python in French',
        subtitle: 'Course about Learning Python in French',
        videoId: '850162199',
    lessonName: "Python Fundamentals",
    vimeoSrc:
      "https://player.vimeo.com/video/850162199?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,lessons: [
    { id: 1, name: "Introduction to Python Programming Course", videoId: "850162199", duration: "6:58" },
    { id: 2, name: "Creating variables and assigning values", videoId: "850160135", duration: "5:12" },
    { id: 3, name: "Understanding Mutable & Immutable Objects", videoId: "850159277", duration: "7:29" },
    { id: 4, name: "Understanding Python Tuples in detail", videoId: "850159417", duration: "6:48" },
    { id: 5, name: "Understanding Python Lists in detail", videoId: "850158972", duration: "7:48" },
    { id: 6, name: "Dictionary and Sets Collection Types", videoId: "850160388", duration: "8:26" },
    { id: 7, name: "How to use Interactive Input in Python", videoId: "850161803", duration: "4:23" },
    { id: 8, name: "Built in Modules and Functions in Python", videoId: "850160561", duration: "8:02" },
    { id: 9, name: "Python Classes and Objects", videoId: "850159889", duration: "7:03" },
    { id: 10, name: "Using Initializer with Python Class", videoId: "850160072", duration: "4:06" },
    { id: 11, name: "Inheriting Classes in Python", videoId: "850161853", duration: "6:55" },
    { id: 12, name: "Working with Datetime Module", videoId: "850160473", duration: "6:49" },
    { id: 13, name: "Python Conditions and If Statements", videoId: "850162013", duration: "8:23" },
    { id: 14, name: "Working with Python JSON Package", videoId: "850159349", duration: "7:17" },
    { id: 15, name: "Reading and Writing JSON File", videoId: "850158487", duration: "6:05" },
    { id: 16, name: "Exception Handling in Python", videoId: "850160932", duration: "5:19" },
    { id: 17, name: "String Formatting in Python", videoId: "850159991", duration: "5:51" },
    { id: 18, name: "Python libraries for Data Science", videoId: "850158756", duration: "3:49" },
    { id: 19, name: "How to Install Libraries using PIP", videoId: "850158910", duration: "3:50" },
    { id: 20, name: "Introduction to NumPy in Python", videoId: "850158692", duration: "5:49" },
    { id: 21, name: "Multi-dimentional Arrays in Python", videoId: "850162107", duration: "7:26" },
    { id: 22, name: "NumPy Array Copy vs View", videoId: "850166684", duration: "4:00" },
    { id: 23, name: "Random Numbers and Arrays in NumPy", videoId: "850158335", duration: "6:52" },
    { id: 24, name: "What is Data Distribution?", videoId: "850159643", duration: "4:02" },
    { id: 25, name: "Random Distribution in Python", videoId: "850160302", duration: "4:16" },
    { id: 26, name: "Random Permutations of Elements", videoId: "850159513", duration: "5:21" },
    { id: 27, name: "Basics of Data Visualization", videoId: "850161019", duration: "6:37" },
    { id: 28, name: "Histogram, Regular & Relative Frequency...", videoId: "850161722", duration: "3:39" },
    { id: 29, name: "Create Histogram and Visualize using Matplotlib", videoId: "850159755", duration: "4:49" },
    { id: 30, name: "Understand is Density Curve Distribution", videoId: "850158614", duration: "4:31" },
    { id: 31, name: "What is Bell Curve, Mean and Standard Deviation", videoId: "850158263", duration: "4:10" },
    { id: 32, name: "Visualize DATA Distributions with Seaborn", videoId: "850160751", duration: "4:35" },
    { id: 33, name: "Generate a Random Normal Distribution", videoId: "850160198", duration: "3:08" },
    { id: 34, name: "Binomial Distribution with Coin Example", videoId: "850159060", duration: "5:15" },
    { id: 35, name: "Binomial Real World Applications", videoId: "850158181", duration: "6:00" },
    { id: 36, name: "Uniform Distribution in Pyton", videoId: "850159822", duration: "3:00" },
    { id: 37, name: "Create Bar Chart - Reading DATA from...", videoId: "850161937", duration: "4:40" },
    { id: 38, name: "Formatting Bar Chart using Matplotlib", videoId: "850159591", duration: "3:42" },
    { id: 39, name: "Visualize Data using a Line Chart", videoId: "850160250", duration: "5:21" },
    { id: 40, name: "Creating Pie Chart in Python", videoId: "850158836", duration: "5:41" },
    { id: 41, name: "Creating Scatterplot in Python", videoId: "850160858", duration: "4:41" },
    { id: 42, name: "Data Frames using Pandas Library", videoId: "850158420", duration: "3:20" },
    { id: 43, name: "Understanding Pareto Chart with Examples", videoId: "850159689", duration: "4:52" },
    { id: 44, name: "Create Pareto Chart using Data Frames", videoId: "850159160", duration: "7:27" },
    { id: 45, name: "Installing MySQL Server on your computer", videoId: "850161109", duration: "5:18" },
    { id: 46, name: "Using Select Query on Existing Tables", videoId: "850161197", duration: "9:03" },
    { id: 47, name: "Creating a Database & Tables in MySQL", videoId: "850161537", duration: "6:34" },
    { id: 48, name: "Inserting and Removing Data in a Table", videoId: "850161329", duration: "3:45" },
    { id: 49, name: "Connect MySQL with Python using Driver", videoId: "850161410", duration: "7:22" },
    { id: 50, name: "Fetch MySQL Data and create a Graph", videoId: "850161657", duration: "3:51" }
  ] 
},
   5: {
    title: 'Tableau in French',
       subtitle: 'Course about Learning Tableau in French',
       videoId: '833282671',
    lessonName: "Tableau Fundamentals",
    vimeoSrc:
      "https://player.vimeo.com/video/833282671?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,lessons: [
    { id: 1, name: "Introduction to Tableau, How Tableau Works", videoId: "833282671", duration: "6:20" },
    { id: 2, name: "Download and Install Tableau", videoId: "833283075", duration: "2:53" },
    { id: 3, name: "Understanding the Tableau Interface", videoId: "833282363", duration: "5:42" },
    { id: 4, name: "How to connect to a Data Source", videoId: "833282241", duration: "5:01" },
    { id: 5, name: "Applying SQL Queries on DATA", videoId: "833282098", duration: "5:15" },
    { id: 6, name: "Data Types in Tableau, Conversion of DataTypes", videoId: "833282032", duration: "3:48" },
    { id: 7, name: "Sorting, Relationships and Column Renaming", videoId: "833282447", duration: "5:49" },
    { id: 8, name: "Creating DATA Hierarchy using Tableau Dashboard", videoId: "833283324", duration: "6:55" },
    { id: 9, name: "Create Calculated Fields and Bins in Tableau", videoId: "833282996", duration: "8:17" },
    { id: 10, name: "How to use Grouping in Tableau", videoId: "833282747", duration: "6:50" },
    { id: 11, name: "Discrete and Continous Data using Line Graph", videoId: "833282613", duration: "3:47" },
    { id: 12, name: "Discrete and Continous Data - Part-II", videoId: "833283244", duration: "5:00" },
    { id: 13, name: "Create Parameters and Sets in Tableau", videoId: "833282534", duration: "4:33" },
    { id: 14, name: "Combining the Fields in Tableau", videoId: "833282202", duration: "2:53" },
    { id: 15, name: "Analyze your Data using Tooltip in Tableau", videoId: "833282298", duration: "3:13" },
    { id: 16, name: "Analyze your Data using Detail Squarebox", videoId: "833282831", duration: "2:49" },
    { id: 17, name: "Applying Number Functions in Tableau", videoId: "833283130", duration: "4:34" },
    { id: 18, name: "Applying String Functions in Tableau", videoId: "833282913", duration: "5:34" },
    { id: 19, name: "Applying Date Functions in Tableau", videoId: "833282154", duration: "3:38" },
    { id: 20, name: "Applying Conditional Formatting on DATA", videoId: "833283188", duration: "5:50" },
    { id: 21, name: "Exporting Data from Tableau", videoId: "833283401", duration: "4:21" }
  ]},
  6: {
    title: 'Web Designing (HTML,PHP)',
    subtitle: 'Course about Learning Web Designing (HTML, PHP)',
    videoId: '456976628',
    lessonName: "HTML & PHP Fundamentals",
    vimeoSrc:
      "https://player.vimeo.com/video/456976628?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to the course", videoId: "456976628", duration: "2:33" },
      { id: 2, name: "Understanding more about Web-Designing", videoId: "456976696", duration: "3:41" },
      { id: 3, name: "Create your first Webpage", videoId: "457229305", duration: "6:07" },
      { id: 4, name: "Apply CSS to the Elements", videoId: "457245904", duration: "6:58" },
      { id: 5, name: "How to align the elements in a webpage", videoId: "457419969", duration: "6:16" },
      { id: 6, name: "How to add a DIV element in a webpage", videoId: "457411602", duration: "5:18" },
      { id: 7, name: "How to create a Table to align elements", videoId: "458542880", duration: "5:24" },
      { id: 8, name: "Creating Hyperlinks to navigate between ....", videoId: "458542901", duration: "5:41" },
      { id: 9, name: "Starting with Bootstrap CDN", videoId: "458582967", duration: "4:05" },
      { id: 10, name: "Create first webpage using Bootstrap", videoId: "459337547", duration: "5:41" },
      { id: 11, name: "Responsive GRID with Bootstrap", videoId: "459374014", duration: "3:01" },
      { id: 12, name: "Overview of Bootstrap Components", videoId: "460454960", duration: "4:48" },
      { id: 13, name: "Adding Form in a Webpage", videoId: "460454892", duration: "5:43" },
      { id: 14, name: "Add validation using JavaScript", videoId: "460527141", duration: "5:38" },
      { id: 15, name: "Adding Validations using JavaScript - II", videoId: "460844122", duration: "5:28" },
      { id: 16, name: "Installing a Web-Server to convert PC into ....", videoId: "460903595", duration: "6:19" },
      { id: 17, name: "Create your first Database in MySQL", videoId: "461275672", duration: "5:16" },
      { id: 18, name: "Understanding MySQL Queries", videoId: "462978439", duration: "6:40" },
      { id: 19, name: "Create your first PHP Page to Read Values", videoId: "462978317", duration: "10:16" },
      { id: 20, name: "Use PHP with HTML and CSS", videoId: "464517149", duration: "4:49" },
      { id: 21, name: "Connect MySQL Database and Fetch ....", videoId: "464701812", duration: "9:09" },
      { id: 22, name: "Connect MySQL and Insert Values using a Form", videoId: "464976288", duration: "5:09" },
      { id: 23, name: "Create User Form and Validate a user with PHP", videoId: "465692678", duration: "7:31" },
      { id: 24, name: "Read DATA in the background using AJAX", videoId: "465691861", duration: "8:14" },
      { id: 25, name: "Create a Search Box using AJAX", videoId: "466467816", duration: "10:42" },
      { id: 26, name: "Download and Modify Bootstrap Themes", videoId: "467102962", duration: "10:05" },
      { id: 27, name: "Create subscribe to Newsletter Form", videoId: "467104387", duration: "9:48" },
      { id: 28, name: "Learn to Host your website for FREE", videoId: "469664538", duration: "10:43" },
      { id: 29, name: "Add Contact us Emailer in the website", videoId: "492769542", duration: "15:26" }
    ]
  },
  7: {
    title: 'Digital Marketing',
    subtitle: 'Course about Learning Digital Marketing',
    videoId: '495108312',
    lessonName: "Digital Marketing Basics",
    vimeoSrc:
      "https://player.vimeo.com/video/495108312?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Start learning Digital Marketing", videoId: "495108312", duration: "2:36" },
      { id: 2, name: "Introduction to Digital Marketing", videoId: "463875171", duration: "10:58" },
      { id: 3, name: "Defining your Business Digitally", videoId: "465752976", duration: "5:28" },
      { id: 4, name: "Design professional content for your business", videoId: "466491305", duration: "5:55" },
      { id: 5, name: "How to use Royalty Free Images", videoId: "466558892", duration: "2:56" },
      { id: 6, name: "Learn to create professional Videos", videoId: "466561771", duration: "16:21" },
      { id: 7, name: "How to create a Screen Recording Video", videoId: "471415527", duration: "5:13" },
      { id: 8, name: "Customer Engagement through Digital Channels", videoId: "472106212", duration: "5:46" },
      { id: 9, name: "Lead Generation with Popup to capture...", videoId: "471417326", duration: "15:03" },
      { id: 10, name: "Learn about Bulk Email Marketing", videoId: "471714062", duration: "12:23" },
      { id: 11, name: "Learn to create a Blog using Blogger.com", videoId: "473334323", duration: "12:15" },
      { id: 12, name: "Track user clicks on Website using ...", videoId: "470581598", duration: "5:01" },
      { id: 13, name: "How to add Social Media Links to your Website", videoId: "470555507", duration: "7:51" },
      { id: 14, name: "Learn to add Google Analytics to your Website", videoId: "493365940", duration: "6:11" },
      { id: 15, name: "Learn to use Google Analytics to analyse ....", videoId: "493365866", duration: "5:34" },
      { id: 16, name: "Understand Google Ads in Digital Marketing", videoId: "470936747", duration: "9:28" },
      { id: 17, name: "Create an Advertisement using Google Ads", videoId: "474167301", duration: "8:37" },
      { id: 18, name: "Create an Advertisement using Google Ads", videoId: "474652939", duration: "6:34" },
      { id: 19, name: "How to use Keyword Planner in Google Ads", videoId: "487125348", duration: "7:37" },
      { id: 20, name: "Lead Generation through Google Search", videoId: "487577653", duration: "10:06" },
      { id: 21, name: "Importance of Backlinks in Digital Marketing", videoId: "478922141", duration: "5:08" },
      { id: 22, name: "Generate and Configure SiteMap.XML for ....", videoId: "488081712", duration: "5:19" },
      { id: 23, name: "Understand the concepts of Video Marketing", videoId: "488081780", duration: "5:01" },
      { id: 24, name: "Create a YouTube Channel and Upload Videos", videoId: "488125999", duration: "12:18" },
      { id: 25, name: "Learn to Monetize your YouTube Channel", videoId: "488798081", duration: "6:53" },
      { id: 26, name: "How to Embed a Video in your Website / Blog", videoId: "488798025", duration: "3:27" },
      { id: 27, name: "Digital Marketing with Facebook", videoId: "488797961", duration: "5:47" },
      { id: 28, name: "Learn to create Facebook Business Page", videoId: "488929799", duration: "7:19" },
      { id: 29, name: "Connect Instagram and WhatsAPP Business", videoId: "488930445", duration: "5:41" },
      { id: 30, name: "Create Advertisements using FB Ads Manager", videoId: "488930149", duration: "11:40" },
      { id: 31, name: "Learn to create Lead Ads & Conversion Ads", videoId: "488929923", duration: "9:48" },
      { id: 32, name: "Importance of Using Hashtags", videoId: "489830562", duration: "2:58" },
      { id: 33, name: "Digital Marketing with LinkedIn", videoId: "489830740", duration: "3:46" },
      { id: 34, name: "Create a LinkedIn Company Page", videoId: "489830587", duration: "8:44" },
      { id: 35, name: "Learn to use LinkedIn Campaign Manager", videoId: "489830373", duration: "6:46" },
      { id: 36, name: "Learn Affiliate Marketing to Earn Money", videoId: "489830240", duration: "8:04" },
      { id: 37, name: "Learn Influencer Marketing", videoId: "489830891", duration: "5:34" }
    ]
  },
  8: {
    title: 'Excel ',
    subtitle: 'Course about Learning Excel',
    videoId: '485421306',
    lessonName: "Excel Fundamentals",
    vimeoSrc:
      "https://player.vimeo.com/video/485421306?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to Microsoft Excel", videoId: "485421306", duration: "4:25" },
      { id: 2, name: "What is DATA?", videoId: "485428088", duration: "2:55" },
      { id: 3, name: "Working with Rows, Columns, and Cells in Excel", videoId: "485487739", duration: "8:39" },
      { id: 4, name: "Using Formatting Options & Shortcut keys", videoId: "485499388", duration: "4:03" },
      { id: 5, name: "Learn to create Number, Date, Text Series", videoId: "485512148", duration: "4:44" },
      { id: 6, name: "How to use Cut, Copy and Paste Options", videoId: "485825053", duration: "6:38" },
      { id: 7, name: "Create a sample Sales Report", videoId: "485830223", duration: "8:02" },
      { id: 8, name: "How to apply Conditional Formatting", videoId: "485834422", duration: "5:23" },
      { id: 9, name: "Apply Data Filters & Sorting on DATA", videoId: "485838011", duration: "4:32" },
      { id: 10, name: "Learn to apply Data Validation in Excel", videoId: "485842790", duration: "5:55" },
      { id: 11, name: "Learn to Import External Data in Excel", videoId: "485905683", duration: "3:12" },
      { id: 12, name: "Create Summary tables using Pivot Table", videoId: "485913543", duration: "8:43" },
      { id: 13, name: "Trace Formulas, Evaluate Formulas, Errors Handling", videoId: "485927702", duration: "11:15" },
      { id: 14, name: "Learn to use String Functions in Excel", videoId: "485935413", duration: "5:32" },
      { id: 15, name: "Learn Date and Time formulas", videoId: "485943503", duration: "4:18" },
      { id: 16, name: "How to use If Condition to Analyze Data", videoId: "485953451", duration: "8:48" },
      { id: 17, name: "Using SUMIF, COUNTIF & AVERAGEIF Formulas", videoId: "485965674", duration: "10:43" },
      { id: 18, name: "Learn to use VLookup and Hlookup functions", videoId: "485973848", duration: "5:16" },
      { id: 19, name: "Working with Data Ranges & Fixed Cells", videoId: "486284765", duration: "5:31" },
      { id: 20, name: "How to use Index and Match formulas to Lookup Data", videoId: "486288273", duration: "4:38" },
      { id: 21, name: "How to use multiple formulas together in Excel", videoId: "486294315", duration: "5:11" },
      { id: 22, name: "Learn to Analyze Data using Charts", videoId: "486306488", duration: "6:29" },
      { id: 23, name: "Automate your work with Macros", videoId: "486347618", duration: "5:43" },
      { id: 24, name: "How to create Hyperlinks between the sheets", videoId: "486353281", duration: "3:51" },
      { id: 25, name: "Analyze your Data using Sparkline Charts", videoId: "486357957", duration: "2:56" },
      { id: 26, name: "Introduction to VBA Programming", videoId: "486365032", duration: "6:59" },
      { id: 27, name: "Create a Calculator using VBA", videoId: "486375415", duration: "13:15" },
      { id: 28, name: "How to define a Variable in VBA Programming", videoId: "486388378", duration: "7:01" },
      { id: 29, name: "Learn to use IF Condition in VBA", videoId: "486396206", duration: "6:25" },
      { id: 30, name: "IF Condition in VBA - Example No.2", videoId: "486403903", duration: "8:26" },
      { id: 31, name: "Learn to use Looping to handle repetitive jobs", videoId: "486702227", duration: "9:29" },
      { id: 32, name: "Calculate Odd & Even using the For Loop", videoId: "486708044", duration: "7:40" },
      { id: 33, name: "How to use While Loop to Read Form Values", videoId: "486726133", duration: "8:48" },
      { id: 34, name: "Learn to create Functions in VBA", videoId: "486722466", duration: "6:35" },
      { id: 35, name: "Create Forms in Microsoft Excel", videoId: "486803318", duration: "6:15" },
      { id: 36, name: "Learn to create custom functions in a Module", videoId: "486824680", duration: "3:20" },
      { id: 37, name: "Apply functions on Data Range in Excel", videoId: "486828411", duration: "3:29" },
      { id: 38, name: "Read & Write DATA to an external file using VBA", videoId: "486838768", duration: "10:05" },
      { id: 39, name: "What is Data Analytics, Type of Data Analytics", videoId: "486847110", duration: "7:04" },
      { id: 40, name: "Analyse Data using Pareto Chart", videoId: "486854791", duration: "6:33" },
      { id: 41, name: "How to calculate correlation on DATA", videoId: "486867097", duration: "5:21" },
      { id: 42, name: "Analyze the data using the Linear Regression", videoId: "486874840", duration: "6:52" },
      { id: 43, name: "How to do Forecasting of DATA in Excel", videoId: "486891115", duration: "5:50" },
      { id: 44, name: "How to perform Cause & Effect Analysis using Excel", videoId: "486903510", duration: "6:48" },
      { id: 45, name: "How to find Root Cause using Why-Why Analysis", videoId: "486912536", duration: "7:52" },
      { id: 46, name: "What is SWOT Analysis and How to use it", videoId: "486919115", duration: "5:33" }
    ]
  },
  9: {
    title: 'Access',
    subtitle: 'Course about Learning Access',
    videoId: '487149845',
    lessonName: "Microsoft Access Basics",
    vimeoSrc:
      "https://player.vimeo.com/video/487149845?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Microsoft Access Introduction", videoId: "487149845", duration: "10:51" },
      { id: 2, name: "How to import and link external files", videoId: "487156261", duration: "8:27" },
      { id: 3, name: "How to use Inner join, Left join & Right join", videoId: "487168481", duration: "11:37" },
      { id: 4, name: "How to apply conditions using Select Query", videoId: "487178041", duration: "7:03" },
      { id: 5, name: "How to apply conditions using Select Query", videoId: "487185585", duration: "9:01" },
      { id: 6, name: "How to use Maketable & Crosstab Query", videoId: "487190224", duration: "4:58" },
      { id: 7, name: "How to use multiple Select Queries & Make table", videoId: "487196640", duration: "5:21" },
      { id: 8, name: "How to use Update DATA in a Table", videoId: "487207066", duration: "4:17" },
      { id: 9, name: "How to make buckets using IF Condition", videoId: "487213121", duration: "6:45" },
      { id: 10, name: "How to use Append & Delete Query", videoId: "487216810", duration: "3:02" },
      { id: 11, name: "How to create Macros to Automate your work", videoId: "487230630", duration: "14:17" },
      { id: 12, name: "How to create function to RUN Queries in Macro", videoId: "487239855", duration: "8:22" },
      { id: 13, name: "How to use SQL Statements in MS-Access", videoId: "487249067", duration: "8:25" },
      { id: 14, name: "How to use Insert Query to save Form Values", videoId: "487269934", duration: "9:13" },
      { id: 15, name: "How to use Data Access Objects to read data", videoId: "487280264", duration: "11:08" },
      { id: 16, name: "How to use Batch files to Compile and Move data", videoId: "487315549", duration: "6:10" },
      { id: 17, name: "How to download DATA from FTP using Batch Files", videoId: "487319998", duration: "3:26" },
      { id: 18, name: "How to UnZip files using Batch Files", videoId: "487323327", duration: "2:21" },
      { id: 19, name: "How to design Scheduler to Automate your work", videoId: "487331524", duration: "9:12" },
      { id: 20, name: "How to Read Files & Folders and Compile data", videoId: "487558118", duration: "7:35" },
      { id: 21, name: "How to create Sort Unique values and Export", videoId: "487564702", duration: "3:52" },
      { id: 22, name: "How to send Email from VBA using Outlook", videoId: "487567253", duration: "6:41" },
      { id: 23, name: "How to apply formatting in Excel Files using VBA", videoId: "487572248", duration: "7:53" }
    ]
  },
  10: {
    title: 'Web Designing (Wordpress)',
    subtitle: 'Course about Learning Web-designing Wordpress',
    videoId: '490166994',
    lessonName: "WordPress Fundamentals",
    vimeoSrc:
      "https://player.vimeo.com/video/490166994?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to the Wordpress course", videoId: "490166994", duration: "11:59" },
      { id: 2, name: "Create your first Wordpress page", videoId: "490166909", duration: "6:34" },
      { id: 3, name: "Understanding Wordpress Pages & Posts", videoId: "494113227", duration: "10:14" },
      { id: 4, name: "Learn about various Wordpress Plugins", videoId: "494113534", duration: "4:09" },
      { id: 5, name: "How to customize your Wordpress Website", videoId: "494113668", duration: "8:26" },
      { id: 6, name: "Learn to add Custom CSS in WP Website", videoId: "494113847", duration: "5:37" },
      { id: 7, name: "Add ContactMe Form in your Website", videoId: "494113993", duration: "8:52" },
      { id: 8, name: "Create Registration / Login pages using Ultimate....", videoId: "494114224", duration: "6:45" },
      { id: 9, name: "Add a Popup to display content in a Website", videoId: "494114368", duration: "5:20" },
      { id: 10, name: "Add DATA Tables using Table Press", videoId: "494112945", duration: "6:09" },
      { id: 11, name: "Add Social Media and Share buttons in Website", videoId: "494451632", duration: "2:59" },
      { id: 12, name: "Add professional Image Slider in Webpage", videoId: "494451455", duration: "6:07" },
      { id: 13, name: "Learn to add your Business Location MAP on Website", videoId: "494451323", duration: "1:36" },
      { id: 14, name: "Learn to add Google Analytics in Webpage", videoId: "494623828", duration: "6:11" },
      { id: 15, name: "Learn to use Google Analytics to analyse the...", videoId: "494623787", duration: "5:34" },
      { id: 16, name: "Add Search Engine Optimization (SEO) to your...", videoId: "494451204", duration: "5:17" },
      { id: 17, name: "Create an Ecommerce website using.....", videoId: "494450967", duration: "10:00" },
      { id: 18, name: "Setup payment gateway in WooCommerce", videoId: "494450813", duration: "7:06" },
      { id: 19, name: "How to use SMS API for Order Confirmation", videoId: "494450649", duration: "5:02" },
      { id: 20, name: "How to take Website backup using Updraft...", videoId: "494450599", duration: "1:49" },
      { id: 21, name: "Learn to add an external PHP Page", videoId: "494623754", duration: "8:42" },
      { id: 22, name: "Learn to create MySQL Database", videoId: "494623729", duration: "5:52" },
      { id: 23, name: "Learn MySQL Database and Queries", videoId: "494623886", duration: "6:40" },
      { id: 24, name: "Connect MySQL Database and Fetch...", videoId: "494623938", duration: "11:09" },
      { id: 25, name: "Learn to host your Website for FREE", videoId: "494632022", duration: "8:37" }
    ]
  },
  11: {
    title: 'Presentation Skills',
    subtitle: 'Course about Learning Presentation Skills',
    videoId: '468564213',
    lessonName: "Presentation Techniques",
    vimeoSrc:
      "https://player.vimeo.com/video/468564213?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to the course", videoId: "468564213", duration: "4:48" },
      { id: 2, name: "Golden Rules for a Professional Presentation", videoId: "493296984", duration: "6:27" },
      { id: 3, name: "Understand the Flow of Presentation", videoId: "493296549", duration: "6:32" },
      { id: 4, name: "Create a Sample Sales Presentation", videoId: "493299427", duration: "4:39" },
      { id: 5, name: "Create a Sample Sales Presentation (Contd.)", videoId: "493298838", duration: "15:07" },
      { id: 6, name: "How to add animation to Slides and Elements", videoId: "493299558", duration: "8:05" },
      { id: 7, name: "Learn to add hyperlinks to your Presentation", videoId: "493295385", duration: "4:43" },
      { id: 8, name: "Where to find Free PowerPoint Templates", videoId: "493297263", duration: "3:39" },
      { id: 9, name: "How to capture Minutes of Meeting", videoId: "493298526", duration: "1:28" },
      { id: 10, name: "Learn to create a Video Presentation", videoId: "493298617", duration: "7:32" },
      { id: 11, name: "Create a professional presentation Online", videoId: "493299558", duration: "6:53" },
      { id: 12, name: "Add Route Cause Analysis to your presentation", videoId: "493298809", duration: "2:17" },
      { id: 13, name: "How to add online and offline Videos in...", videoId: "493297178", duration: "2:28" },
      { id: 14, name: "Where to find and download Royalty....", videoId: "493299290", duration: "2:56" },
      { id: 15, name: "Learn to create professional Videos....", videoId: "493298025", duration: "16:22" },
      { id: 16, name: "How to create a Screen Recording Video", videoId: "493299719", duration: "4:39" }
    ]
  },
  12: {
    title: 'Android',
    subtitle: 'Course about Learning Android',
    videoId: '566065887',
    lessonName: "Android Development Basics",
    vimeoSrc:
      "https://player.vimeo.com/video/566065887?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "How to install Android Studio", videoId: "566065887", duration: "4:49" },
      { id: 2, name: "Understand Android Architecture", videoId: "566066058", duration: "7:48" },
      { id: 3, name: "Understand Android Components", videoId: "566066252", duration: "6:58" },
      { id: 4, name: "Make First Android Application - Setup AVC", videoId: "566066409", duration: "7:37" },
      { id: 5, name: "Android layout design - Part-I", videoId: "566066617", duration: "5:37" },
      { id: 6, name: "Android layout design - Part-II", videoId: "566066732", duration: "8:51" },
      { id: 7, name: "Android layout design - Part-III", videoId: "566066891", duration: "10:44" },
      { id: 8, name: "Understanding Classes in Android - Part-I", videoId: "569708865", duration: "8:19" },
      { id: 9, name: "Understanding Classes in Android - Part-II", videoId: "569708980", duration: "9:01" },
      { id: 10, name: "Understanding Classes in Android - Part-III", videoId: "569709124", duration: "5:32" },
      { id: 11, name: "Display \"Hello World\" using Logs", videoId: "569709213", duration: "7:15" },
      { id: 12, name: "Working with \"User Login\" Application", videoId: "569709318", duration: "7:12" },
      { id: 13, name: "Apply background Image and Color", videoId: "569709422", duration: "5:27" },
      { id: 14, name: "Apply and Change Images in Image View", videoId: "569709514", duration: "4:29" },
      { id: 15, name: "Create a Calculator Application", videoId: "569709567", duration: "13:11" },
      { id: 16, name: "Add Animations in Application", videoId: "569708739", duration: "7:41" },
      { id: 17, name: "Create Views dynamically using Loops & Arrays", videoId: "569775326", duration: "13:14" },
      { id: 18, name: "How to add Video Controls in an Application", videoId: "570613181", duration: "5:39" },
      { id: 19, name: "How to add Audio Controls in an Application", videoId: "570613245", duration: "6:37" },
      { id: 20, name: "How to use Action Listeners instead...", videoId: "570613304", duration: "5:35" },
      { id: 21, name: "How to use Seek BarView with Image View", videoId: "570613360", duration: "5:29" },
      { id: 22, name: "Use Strings.XML to change APP Language", videoId: "573394965", duration: "5:24" },
      { id: 23, name: "How to add List View in an Application", videoId: "573395062", duration: "4:36" },
      { id: 24, name: "Creating Table Application with ListView & Arrays", videoId: "573395192", duration: "4:48" },
      { id: 25, name: "Using Count Down Timer in Application", videoId: "573395346", duration: "5:31" },
      { id: 26, name: "Count Down Timer with Grid Layout Images", videoId: "573395490", duration: "2:55" },
      { id: 27, name: "How to navigate between multiple Activities", videoId: "573395682", duration: "7:28" },
      { id: 28, name: "How to call System Applications using Intent", videoId: "573395846", duration: "6:27" },
      { id: 29, name: "How to create ActionBar Menu", videoId: "573395943", duration: "4:45" },
      { id: 30, name: "How to create Alert Dialog Box", videoId: "573396010", duration: "3:33" },
      { id: 31, name: "Exception Handling in Application", videoId: "573396153", duration: "5:46" },
      { id: 32, name: "Working with AsyncTask Class", videoId: "573396384", duration: "12:12" },
      { id: 33, name: "How to read a JSON file using JSON Array", videoId: "573394892", duration: "6:22" },
      { id: 34, name: "How to use APIs -- Create News Application", videoId: "573406599", duration: "12:31" },
      { id: 35, name: "How to use Google Maps APIs in your Application", videoId: "573406745", duration: "6:48" },
      { id: 36, name: "Google Maps API -- Fetch User's current location", videoId: "573407360", duration: "6:28" },
      { id: 37, name: "How to Store DATA permanently -- Using...", videoId: "573409923", duration: "2:53" },
      { id: 38, name: "How to Store DATA permanently -- Using...", videoId: "573416914", duration: "7:22" },
      { id: 39, name: "Saving and displaying Notes - Using SQLite", videoId: "573426515", duration: "10:21" },
      { id: 40, name: "How to use Web-Views to display HTML content", videoId: "573429410", duration: "3:32" },
      { id: 41, name: "How to send Local Notifications", videoId: "573433247", duration: "3:48" },
      { id: 42, name: "How to make APK file and publish it on Play Store", videoId: "573434592", duration: "5:46" }
    ]
  },
  13: {
    title: 'Python',
    subtitle: 'Course about Learning Python',
    videoId: '574519074',
    lessonName: "Python Programming Basics",
    vimeoSrc:
      "https://player.vimeo.com/video/574519074?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to the Course", videoId: "574519074", duration: "6:58" },
      { id: 2, name: "Creating variables and assigning values", videoId: "574816532", duration: "5:12" },
      { id: 3, name: "Understanding Mutable & Immutable Objects", videoId: "575767567", duration: "7:29" },
      { id: 4, name: "Understanding Python Tuples in detail", videoId: "575767477", duration: "6:48" },
      { id: 5, name: "Understanding Python Lists in detail", videoId: "576138463", duration: "7:48" },
      { id: 6, name: "Dictionary and Sets Collection Types", videoId: "576152884", duration: "8:26" },
      { id: 7, name: "How to use Interactive Input in Python", videoId: "576417869", duration: "4:23" },
      { id: 8, name: "Built in Modules and Functions in Python", videoId: "576419110", duration: "8:02" },
      { id: 9, name: "Python Classes and Objects", videoId: "576745728", duration: "7:03" },
      { id: 10, name: "Using Initializer with Python Class", videoId: "577134750", duration: "4:06" },
      { id: 11, name: "Inheriting Classes in Python", videoId: "577134641", duration: "6:55" },
      { id: 12, name: "Working with Datetime Module", videoId: "577549023", duration: "6:49" },
      { id: 13, name: "Python Conditions and If Statements", videoId: "578837790", duration: "8:23" },
      { id: 14, name: "Working with Python JSON Package", videoId: "578837731", duration: "7:17" },
      { id: 15, name: "Reading and Writing JSON File", videoId: "578837687", duration: "6:05" },
      { id: 16, name: "Exception Handling in Python", videoId: "578837617", duration: "5:19" },
      { id: 17, name: "String Formatting in Python", videoId: "578837574", duration: "5:51" },
      { id: 18, name: "Python libraries for Data Science", videoId: "578837530", duration: "3:49" },
      { id: 19, name: "How to Install Libraries using PIP", videoId: "578837477", duration: "3:50" },
      { id: 20, name: "Introduction to NumPy in Python", videoId: "578850848", duration: "5:49" },
      { id: 21, name: "Multi-dimentional Arrays in Python", videoId: "581147160", duration: "7:26" },
      { id: 22, name: "NumPy Array Copy vs View", videoId: "581147075", duration: "4:00" },
      { id: 23, name: "Random Numbers and Arrays in NumPy", videoId: "581146990", duration: "6:52" },
      { id: 24, name: "What is Data Distribution?", videoId: "581146922", duration: "4:02" },
      { id: 25, name: "Random Distribution in Python", videoId: "581205668", duration: "4:16" },
      { id: 26, name: "Random Permutations of Elements", videoId: "581239907", duration: "5:21" },
      { id: 27, name: "Basics of Data Visualization", videoId: "581486269", duration: "6:37" },
      { id: 28, name: "Histogram, Regular & Relative Frequency...", videoId: "581486190", duration: "3:39" },
      { id: 29, name: "Create Histogram and Visualize using Matplotlib", videoId: "581487240", duration: "4:49" },
      { id: 30, name: "Understand is Density Curve Distribution", videoId: "580675335", duration: "4:31" },
      { id: 31, name: "What is Bell Curve, Mean and Standard Deviation", videoId: "584888182", duration: "4:10" },
      { id: 32, name: "Visualize DATA Distributions with Seaborn", videoId: "584245966", duration: "4:35" },
      { id: 33, name: "Generate a Random Normal Distribution", videoId: "584245643", duration: "3:08" },
      { id: 34, name: "Binomial Distribution with Coin Example", videoId: "584246421", duration: "5:15" },
      { id: 35, name: "Binomial Real World Applications", videoId: "584245400", duration: "6:00" },
      { id: 36, name: "Uniform Distribution in Pyton", videoId: "584245200", duration: "3:00" },
      { id: 37, name: "Create Bar Chart - Reading DATA from a CSV", videoId: "584244961", duration: "4:40" },
      { id: 38, name: "Formatting Bar Chart using Matplotlib", videoId: "584244831", duration: "3:42" },
      { id: 39, name: "Visualize Data using a Line Chart", videoId: "584244663", duration: "5:21" },
      { id: 40, name: "Creating Pie Chart in Python", videoId: "584244552", duration: "5:41" },
      { id: 41, name: "Creating Scatterplot in Python", videoId: "584874534", duration: "4:41" },
      { id: 42, name: "Data Frames using Pandas Library", videoId: "584874455", duration: "3:20" },
      { id: 43, name: "Understanding Pareto Chart with Examples", videoId: "584882536", duration: "4:52" },
      { id: 44, name: "Create Pareto Chart using Data Frames", videoId: "584483459", duration: "7:27" },
      { id: 45, name: "Installing MySQL Server on your computer", videoId: "584853199", duration: "5:18" },
      { id: 46, name: "Using Select Query on Existing Tables", videoId: "584853313", duration: "9:03" },
      { id: 47, name: "Creating a Database & Tables in MySQL", videoId: "584847462", duration: "6:34" },
      { id: 48, name: "Inserting and Removing Data in a Table", videoId: "584847343", duration: "3:45" },
      { id: 49, name: "Connect MySQL with Python using Driver", videoId: "584847197", duration: "7:22" },
      { id: 50, name: "Fetch MySQL Data and create a Graph", videoId: "584847127", duration: "3:51" }
    ]
  },
  14: {
    title: 'Tableau',
    subtitle: 'Course about Learning Tableau',
    videoId: '586725732',
    lessonName: "Tableau Data Visualization",
    vimeoSrc:
      "https://player.vimeo.com/video/586725732?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to Tableau, How Tableau Works", videoId: "586725732", duration: "6:20" },
      { id: 2, name: "Download and Install Tableau", videoId: "588324987", duration: "2:53" },
      { id: 3, name: "Understanding the Tableau Interface", videoId: "588325553", duration: "5:42" },
      { id: 4, name: "How to connect to a Data Source", videoId: "588325447", duration: "5:01" },
      { id: 5, name: "Applying SQL Queries on DATA", videoId: "588325338", duration: "5:15" },
      { id: 6, name: "Data Types in Tableau, Conversion of DataTypes", videoId: "588325247", duration: "3:48" },
      { id: 7, name: "Sorting, Relationships and Column Renaming", videoId: "588325665", duration: "5:49" },
      { id: 8, name: "Creating DATA Hierarchy using Tableau Dashboard", videoId: "588325080", duration: "6:55" },
      { id: 9, name: "Create Calculated Fields and Bins in Tableau", videoId: "588697874", duration: "8:17" },
      { id: 10, name: "How to use Grouping in Tableau", videoId: "591055115", duration: "6:50" },
      { id: 11, name: "Discrete and Continous Data using Line Graph", videoId: "591054944", duration: "3:47" },
      { id: 12, name: "Discrete and Continous Data - Part-II", videoId: "591054652", duration: "5:00" },
      { id: 13, name: "Create Parameters and Sets in Tableau", videoId: "591054277", duration: "4:33" },
      { id: 14, name: "Combining the Fields in Tableau", videoId: "591053957", duration: "2:53" },
      { id: 15, name: "Analyze your Data using Tooltip in Tableau", videoId: "591053697", duration: "3:13" },
      { id: 16, name: "Analyze your Data using Detail Squarebox", videoId: "591053538", duration: "2:49" },
      { id: 17, name: "Applying Number Functions in Tableau", videoId: "591053323", duration: "4:34" },
      { id: 18, name: "Applying String Functions in Tableau", videoId: "591053059", duration: "5:34" },
      { id: 19, name: "Applying Date Functions in Tableau", videoId: "591052849", duration: "3:38" },
      { id: 20, name: "Applying Conditional Formatting on DATA", videoId: "591055983", duration: "5:50" },
      { id: 21, name: "Exporting Data from Tableau", videoId: "591069148", duration: "4:21" }
    ]
  },
  15: {
    title: 'Power BI',
    subtitle: 'Course about Learning Power BI',
    videoId: '591622308',
    lessonName: "Power BI Dashboard Creation",
    vimeoSrc:
      "https://player.vimeo.com/video/591622308?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "PowerBI Master Class - Introduction to the course", videoId: "591622308", duration: "4:21" },
      { id: 2, name: "Download and Install Power BI", videoId: "597743281", duration: "6:49" },
      { id: 3, name: "Different Datasets for Analysis in Power BI", videoId: "597744493", duration: "6:34" },
      { id: 4, name: "Import Multiple CSV Files, Import Folder", videoId: "597743510", duration: "3:02" },
      { id: 5, name: "Learn to analyze Data from an online website", videoId: "597744426", duration: "5:40" },
      { id: 6, name: "Download and Install MySQL Server", videoId: "597744379", duration: "4:52" },
      { id: 7, name: "Connect to MySQL Server Database", videoId: "597744206", duration: "6:51" },
      { id: 8, name: "Create and Format Column Chart using...", videoId: "597744032", duration: "7:11" },
      { id: 9, name: "Drill down and visualize Data in Power BI", videoId: "597743946", duration: "4:30" },
      { id: 10, name: "Create Data Hierarchy Manually", videoId: "597743474", duration: "2:15" },
      { id: 11, name: "How to apply Conditional Formatting", videoId: "597743761", duration: "5:50" },
      { id: 12, name: "Learn to Create a Calculated Field in...", videoId: "597743668", duration: "4:56" },
      { id: 13, name: "Analyze Small Multiples of Data using Stacked Chart", videoId: "597743435", duration: "2:55" },
      { id: 14, name: "How to Group Data in Power BI", videoId: "599580256", duration: "3:27" },
      { id: 15, name: "Learn to Create Bins of Data in Power BI", videoId: "599579967", duration: "3:43" },
      { id: 16, name: "Create Buckets using IF Condition", videoId: "599579587", duration: "4:43" },
      { id: 17, name: "Create a Measure Field based on a Condition", videoId: "599579492", duration: "4:38" },
      { id: 18, name: "Apply Find with IF Condition and Create a...", videoId: "599579029", duration: "5:05" },
      { id: 19, name: "Learn Data Relationships in Power BI", videoId: "599578691", duration: "7:37" },
      { id: 20, name: "Run Python Programming in Power BI", videoId: "600108888", duration: "5:04" },
      { id: 21, name: "Export Data in CSV, Excel and Powerpoint", videoId: "600108602", duration: "3:10" }
    ]
  },
  16: {
    title: 'MySQL Server',
    subtitle: 'Course about Learning MySQL Server',
    videoId: '603795531',
    lessonName: "MySQL Database Fundamentals",
    vimeoSrc:
      "https://player.vimeo.com/video/603795531?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to MySQL Server", videoId: "603795531", duration: "2:56" },
      { id: 2, name: "Installing MySQL Server on your PC", videoId: "605431258", duration: "4:47" },
      { id: 3, name: "What is Relational Database Management...", videoId: "605431187", duration: "4:33" },
      { id: 4, name: "Reviewing Relationships in the Schema using...", videoId: "605431009", duration: "6:17" },
      { id: 5, name: "Understanding different types of Relationships", videoId: "609745971", duration: "6:13" },
      { id: 6, name: "Design a new EER Diagram using Workbench", videoId: "609746085", duration: "9:03" },
      { id: 7, name: "How to use SELECT SQL Statement", videoId: "609746510", duration: "5:08" },
      { id: 8, name: "Apply Mathematical Functions in SQL...", videoId: "609746705", duration: "6:54" },
      { id: 9, name: "How to use Where Clause with SQL Statement", videoId: "609747061", duration: "6:39" },
      { id: 10, name: "Learn to use Group By and Order By", videoId: "609747415", duration: "6:23" },
      { id: 11, name: "Using LIKE Operator with AND, OR, NOT", videoId: "609865436", duration: "6:48" },
      { id: 12, name: "Using IN and Between Operators with SQL", videoId: "613590587", duration: "5:01" },
      { id: 13, name: "Create a New Database and Table using Wizard", videoId: "612389622", duration: "6:15" },
      { id: 14, name: "Learn to Create a Table and Insert Data using SQL", videoId: "612389400", duration: "7:19" },
      { id: 15, name: "Create a New Table based on Select SQL Statement", videoId: "612389200", duration: "4:26" },
      { id: 16, name: "How to fetch Top N or Bottom N rows from a...", videoId: "612388798", duration: "4:51" },
      { id: 17, name: "Working with String Functions in SQL", videoId: "612388273", duration: "7:12" },
      { id: 18, name: "Working with Date and Time Functions in SQL", videoId: "613586978", duration: "5:47" },
      { id: 19, name: "Alter Table, Delete and Update DATA using SQL", videoId: "613587309", duration: "4:50" },
      { id: 20, name: "Joining Tables with INNER JOIN using SQL", videoId: "613582175", duration: "3:22" },
      { id: 21, name: "Learn to use LEFT and RIGHT JOIN using SQL", videoId: "613581839", duration: "6:41" },
      { id: 22, name: "How to use CROSS and SELF JOIN using SQL", videoId: "613581686", duration: "1:22" },
      { id: 23, name: "Use UNION operator is used to Combine Data", videoId: "613581475", duration: "2:32" },
      { id: 24, name: "Learn to Create VIEWS in Workbench", videoId: "613581079", duration: "3:28" },
      { id: 25, name: "Creating Buckets on DATA using SQL", videoId: "613586247", duration: "4:06" }
    ]
  },
  17: {
    title: 'Adobe Photoshop',
    subtitle: 'Course about Learning Adobe Photoshop',
    videoId: '627351298',
    lessonName: "Photoshop Design Basics",
    vimeoSrc:
      "https://player.vimeo.com/video/627351298?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to the course", videoId: "627351298", duration: "5:14" },
      { id: 2, name: "Understanding Image Sizes & Resolutions", videoId: "629087881", duration: "5:47" },
      { id: 3, name: "Working with Layers in Photoshop", videoId: "629087761", duration: "5:39" },
      { id: 4, name: "Cropping Image in Photoshop", videoId: "629087595", duration: "6:04" },
      { id: 5, name: "Resize & Transform the Shapes", videoId: "637083531", duration: "5:10" },
      { id: 6, name: "Using Rulers and Guides & create custom shapes", videoId: "637083619", duration: "5:19" },
      { id: 7, name: "Create New Shape using Rectangles", videoId: "637083729", duration: "6:25" },
      { id: 8, name: "Using PEN and Anchor Tools for custom shapes", videoId: "637083888", duration: "9:07" },
      { id: 9, name: "How to use Gradient Tool in Photoshop", videoId: "637084059", duration: "4:01" },
      { id: 10, name: "Creating shapes from Images", videoId: "639078559", duration: "2:51" },
      { id: 11, name: "Using different types of Transform", videoId: "639078677", duration: "4:52" },
      { id: 12, name: "Creating Background and Drag Transform", videoId: "639078798", duration: "5:53" },
      { id: 13, name: "Creating a Sales Banner with Custom Background", videoId: "639078947", duration: "6:19" },
      { id: 14, name: "Create Layer Style with Text Emboss Effect", videoId: "639079089", duration: "5:37" },
      { id: 15, name: "Create a Clipping Mask with an Image", videoId: "639080255", duration: "2:05" },
      { id: 16, name: "How to create Text based on Path", videoId: "639080221", duration: "3:07" },
      { id: 17, name: "Gold Effect on Text using Photoshop", videoId: "639079334", duration: "3:10" },
      { id: 18, name: "Water Effect on Text using Photoshop", videoId: "639079433", duration: "4:30" },
      { id: 19, name: "Glass Effect on Text using Photoshop", videoId: "639079549", duration: "3:19" },
      { id: 20, name: "Shine Effect on Text using Photoshop", videoId: "639079623", duration: "4:08" },
      { id: 21, name: "Glow Effect on Text using Photoshop", videoId: "639529752", duration: "5:42" },
      { id: 22, name: "Use Text as Shapes to add effects", videoId: "639530498", duration: "4:55" },
      { id: 23, name: "Heal Images using Healing and Patch Tool", videoId: "639079768", duration: "2:25" },
      { id: 24, name: "Remove or Move from Background Image", videoId: "639079866", duration: "2:52" },
      { id: 25, name: "Image Enhancement in Photoshop", videoId: "639079984", duration: "4:40" }
    ]
  },
  18: {
    title: 'JavaScript',
    subtitle: 'Course about Learning JavaScript',
    videoId: '648548828',
    lessonName: "JavaScript Programming Fundamentals",
    vimeoSrc:
      "https://player.vimeo.com/video/648548828?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to the JavaScript course", videoId: "648548828", duration: "6:04" },
      { id: 2, name: "JavaScript Engine and Code Editor", videoId: "654390128", duration: "4:29" },
      { id: 3, name: "Write First HTML Program in VS Code", videoId: "654390249", duration: "6:56" },
      { id: 4, name: "Adding Script Tags and Comments in Code", videoId: "654390428", duration: "3:18" },
      { id: 5, name: "Creating Heading Element and Reading Data", videoId: "654390542", duration: "7:22" },
      { id: 6, name: "Read HTML Elements by their Name", videoId: "654390784", duration: "4:37" },
      { id: 7, name: "Modifying Font Style of Elements using Functions", videoId: "654390973", duration: "8:07" },
      { id: 8, name: "Create Functions with Parameters & Arguments", videoId: "654391199", duration: "7:51" },
      { id: 9, name: "Learn about Variable and Logical Operators", videoId: "654391490", duration: "12:20" },
      { id: 10, name: "Logical Operators with IF Condition", videoId: "654391774", duration: "4:26" },
      { id: 11, name: "Basic rules for Naming Variables in JavaScript", videoId: "654391930", duration: "5:42" },
      { id: 12, name: "Using parseInt function for Type Casting", videoId: "654392096", duration: "6:39" },
      { id: 13, name: "Declare Const for storing read only values", videoId: "654392370", duration: "3:42" },
      { id: 14, name: "Learn to create JavaScript Objects", videoId: "654392530", duration: "11:00" },
      { id: 15, name: "Different Types of Functions in JavaScript", videoId: "654392908", duration: "5:40" },
      { id: 16, name: "Most Used String Functions in JavaScript", videoId: "654393393", duration: "7:27" },
      { id: 17, name: "Using different types of Events in JavaScript", videoId: "654393086", duration: "3:52" },
      { id: 18, name: "Using Key Press Event with Textbox", videoId: "654393207", duration: "5:55" },
      { id: 19, name: "How to create Arrays in JavaScript", videoId: "654393808", duration: "6:14" },
      { id: 20, name: "Various Methods used in Arrays", videoId: "654394110", duration: "6:52" },
      { id: 21, name: "Understanding Iteration using Loops in JavaScript", videoId: "656998733", duration: "8:05" },
      { id: 22, name: "Reading Array Elements using For Loop", videoId: "656999061", duration: "3:55" },
      { id: 23, name: "While and Do-While Loop in JavaScript", videoId: "656999214", duration: "3:18" },
      { id: 24, name: "Break and Continue Statements", videoId: "656999341", duration: "3:33" },
      { id: 25, name: "Using Switch-Case and Break Statements", videoId: "656999479", duration: "3:45" },
      { id: 26, name: "Switch-Case Statements with Date Function", videoId: "656999652", duration: "4:09" },
      { id: 27, name: "Message, Alert and PopUp Boxes in JavaScript", videoId: "656999804", duration: "4:03" },
      { id: 28, name: "Using Window Prompt Box in JavaScript", videoId: "656999955", duration: "5:15" },
      { id: 29, name: "Exception Handling in JavaScript", videoId: "658901674", duration: "7:13" },
      { id: 30, name: "Saving JavaScript in External File", videoId: "658901797", duration: "8:58" },
      { id: 31, name: "Date and Time Function in JavaScript", videoId: "658901963", duration: "7:37" },
      { id: 32, name: "Creating and Managing Cookies in JavaScript", videoId: "658902122", duration: "10:06" },
      { id: 33, name: "Using Asynchronous JavaScript And XML", videoId: "660931078", duration: "4:06" },
      { id: 34, name: "Validating Login using AJAX and PHP", videoId: "660931198", duration: "10:18" },
      { id: 35, name: "Read XML and display as Table in JavaScript", videoId: "660931476", duration: "9:48" },
      { id: 36, name: "Using Async Function to Read JSON", videoId: "660931815", duration: "7:03" },
      { id: 37, name: "Learn to Read Web Geolocation API", videoId: "660932098", duration: "5:42" },
      { id: 38, name: "Learn to use Web Storage API in JavaScript", videoId: "660932320", duration: "3:05" },
      { id: 39, name: "How to use Window Location in JavaScript", videoId: "660932459", duration: "4:35" },
      { id: 40, name: "Using Timing Events in JavaScript", videoId: "660932608", duration: "3:32" }
    ]
  },
  19: {
    title: 'Cloud Computing & Git',
    subtitle: 'Course about Learning Cloud Computing & Git',
    videoId: '805436391',
    lessonName: "Cloud Computing & Git Basics",
    vimeoSrc:
      "https://player.vimeo.com/video/805436391?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to Cloud Computing", videoId: "805436391", duration: "5:56" },
      { id: 2, name: "Cloud Computing Architecture", videoId: "805436309", duration: "5:19" },
      { id: 3, name: "Cloud Computing Delivery Models", videoId: "805436195", duration: "6:54" },
      { id: 4, name: "Virtualization in Cloud Computing", videoId: "805436129", duration: "5:42" },
      { id: 5, name: "Creating an AWS Account", videoId: "805436048", duration: "2:12" },
      { id: 6, name: "AWS Cloud Overview", videoId: "805435948", duration: "7:9" },
      { id: 7, name: "Console and Services in AWS", videoId: "805435828", duration: "3:39" },
      { id: 8, name: "IAM Introduction: Users, Groups, Policies", videoId: "805435405", duration: "3:40" },
      { id: 9, name: "IAM Users & Groups Hands On", videoId: "805435717", duration: "6:20" },
      { id: 10, name: "IAM Policies and Inheritance", videoId: "805435647", duration: "3:1" },
      { id: 11, name: "Applying Inline ReadOnly Policy", videoId: "805435539", duration: "3:0" },
      { id: 12, name: "Configuring Multifactor Authentication", videoId: "805435461", duration: "3:47" },
      { id: 13, name: "Installing AWS CLI on Windows", videoId: "805435356", duration: "2:5" },
      { id: 14, name: "AWS CLI Secret Keys Configuration", videoId: "805435241", duration: "4:25" },
      { id: 15, name: "Using AWS Cloud Shell", videoId: "805435156", duration: "3:13" },
      { id: 16, name: "Understanding IAM Roles in AWS", videoId: "805435074", duration: "3:33" },
      { id: 17, name: "Billing and Budget in AWS", videoId: "805434975", duration: "4:17" },
      { id: 18, name: "Understanding EC2 Basics", videoId: "805434879", duration: "6:21" },
      { id: 19, name: "Create an EC2 Instance with User Data", videoId: "805434729", duration: "9:18" },
      { id: 20, name: "Security Groups & Ports Overview", videoId: "805434651", duration: "5:28" },
      { id: 21, name: "Security Groups Hands On", videoId: "805434562", duration: "3:5" },
      { id: 22, name: "SSH Login to EC2 Instance Overview", videoId: "805434489", duration: "3:29" },
      { id: 23, name: "EC2 Instance Login using Browser", videoId: "805434427", duration: "2:35" },
      { id: 24, name: "E2 Instance with IAM Roles Demo", videoId: "805434336", duration: "2:42" },
      { id: 25, name: "EBS Overview", videoId: "805434276", duration: "6:12" },
      { id: 26, name: "EBS Hands On", videoId: "805434185", duration: "3:24" },
      { id: 27, name: "EBS Snapshots Hands On", videoId: "805434086", duration: "4:37" },
      { id: 28, name: "AMI Overview and Hands On", videoId: "805433952", duration: "5:51" },
      { id: 29, name: "EC2 Image Builder Overview", videoId: "805433886", duration: "3:13" },
      { id: 30, name: "EC2 Image Builder Hands On", videoId: "805433629", duration: "14:55" },
      { id: 31, name: "Amazon Elastic File System Overview", videoId: "805433566", duration: "3:48" },
      { id: 32, name: "High Availability, Scalability, Elasticity", videoId: "805433334", duration: "6:51" },
      { id: 33, name: "Elastic Load Balancing(ELB) Overview", videoId: "805433488", duration: "7:30" },
      { id: 34, name: "Application Load Balancer (ALB) Hands On", videoId: "805432768", duration: "9:8" },
      { id: 35, name: "Auto Scaling Groups (ASG)", videoId: "805432392", duration: "9:34" },
      { id: 36, name: "Amazon S3 Overview", videoId: "805432958", duration: "4:25" },
      { id: 37, name: "Amazon S3 Hand On", videoId: "805433063", duration: "4:29" },
      { id: 38, name: "Amazon S3 Security Policy on Objects", videoId: "805433188", duration: "3:33" },
      { id: 39, name: "Host a Webpage in Amazon S3", videoId: "805432701", duration: "2:2" },
      { id: 40, name: "Bucket Versioning in Amazon S3", videoId: "805432585", duration: "3:54" },
      { id: 41, name: "Replication of Files in Amazon S3", videoId: "805432284", duration: "4:56" },
      { id: 42, name: "Amazon Relational Database (RDS)", videoId: "805432110", duration: "10:37" },
      { id: 43, name: "Database Caching and DynamoDB Overview", videoId: "805432052", duration: "4:54" },
      { id: 44, name: "Amazon DynamoDB Hands On", videoId: "805431933", duration: "5:2" },
      { id: 45, name: "AWS CloudFormation Overview", videoId: "805431764", duration: "5:4" },
      { id: 46, name: "AWS CloudFormation Hands On", videoId: "805436485", duration: "9:51" },
      { id: 47, name: "Introduction to Git and Github", videoId: "805436782", duration: "7:37" },
      { id: 48, name: "Understanding Github and Competitors", videoId: "805436866", duration: "4:45" },
      { id: 49, name: "Creating Github Account and UI Overview", videoId: "805436938", duration: "7:24" },
      { id: 50, name: "Create a New Repository in GitHub", videoId: "805437108", duration: "3:32" },
      { id: 51, name: "Git Commandline and GitHub Desktop", videoId: "805437174", duration: "3:58" },
      { id: 52, name: "Branches Overview in GitHub", videoId: "805437253", duration: "4:10" },
      { id: 53, name: "Create Branch and Commit Changes", videoId: "805437295", duration: "4:50" },
      { id: 54, name: "Create and Merge Pull Request", videoId: "805436938", duration: "5:10" },
      { id: 55, name: "Clone and Comit using Visual Studio Code", videoId: "805437474", duration: "4:41" },
      { id: 56, name: "Other GitHub features using Visual Studio Code", videoId: "805436938", duration: "5:56" }
    ]
  },
  20: {
    title: 'Machine Learning',
    subtitle: 'Course about Learning Machine Learning',
    videoId: '854338568',
    lessonName: "Machine Learning Fundamentals",
    vimeoSrc:
      "https://player.vimeo.com/video/854338568?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to Machine and Artificial Learning", videoId: "854338568", duration: "8:35" },
      { id: 2, name: "Understanding Machine Learning", videoId: "854322130", duration: "6:15" },
      { id: 3, name: "Learn Machine Learning Models", videoId: "854321600", duration: "5:29" },
      { id: 4, name: "Configure TensorFlow and Keras", videoId: "854338658", duration: "6:45" },
      { id: 5, name: "Install Jupyter Notebook using Anaconda", videoId: "854322425", duration: "4:45" },
      { id: 6, name: "Download Game Dataset from Kaggle", videoId: "854322297", duration: "8:11" },
      { id: 7, name: "Work on Online Music Store Dataset", videoId: "854321972", duration: "12:31" },
      { id: 8, name: "Measure Accuracy of ML Model", videoId: "854321871", duration: "6:36" },
      { id: 9, name: "Save Model with DecisionTreeClassifier", videoId: "854321825", duration: "3:58" },
      { id: 10, name: "Export Model in Visual Format", videoId: "854321738", duration: "6:56" },
      { id: 11, name: "Linear Regression using StatsModel", videoId: "854321711", duration: "2:53" },
      { id: 12, name: "Simple Linear Regression Model", videoId: "854321681", duration: "5:43" },
      { id: 13, name: "Difference between Correlation and...", videoId: "854321654", duration: "2:5" },
      { id: 14, name: "Linear Regression Geometrical....", videoId: "854321632", duration: "2:2" },
      { id: 15, name: "Linear Regression Analysis with GPA and SAT", videoId: "854321490", duration: "8:19" },
      { id: 16, name: "Stats Table Summary in Regression Table", videoId: "854321439", duration: "3:40" },
      { id: 17, name: "Analysis of Variance - SSE", videoId: "854321408", duration: "3:32" },
      { id: 18, name: "Analysis of Variance - SSR and SST", videoId: "854320982", duration: "3:49" },
      { id: 19, name: "Ordinary Least Squares Regression", videoId: "854321375", duration: "3:28" },
      { id: 20, name: "Understanding the R-Squared", videoId: "854321313", duration: "5:33" },
      { id: 21, name: "Multiple Linear Regression Model", videoId: "854321267", duration: "2:56" },
      { id: 22, name: "Adjusted R-Squared Explained", videoId: "854321130", duration: "6:58" },
      { id: 23, name: "Scikit-Learn Vs StatsModel", videoId: "854321104", duration: "2:47" },
      { id: 24, name: "Working with Scikit-Learn", videoId: "854321050", duration: "4:25" },
      { id: 25, name: "Split the Training and Testing Data", videoId: "854321014", duration: "4:38" },
      { id: 26, name: "Train and Predict Model using KNN", videoId: "854320919", duration: "4:43" },
      { id: 27, name: "Simple Linear Regression with Sklearn - Part 1", videoId: "854320836", duration: "6:44" },
      { id: 28, name: "Simple Linear Regression with Sklearn - Part 2", videoId: "854320772", duration: "3:26" },
      { id: 29, name: "Dataset Cleaning in Machine Learning - Part 1", videoId: "854320667", duration: "5:56" },
      { id: 30, name: "Dataset Cleaning in Machine Learning - Part 2", videoId: "854320524", duration: "7:36" },
      { id: 31, name: "Transformation of Variables for Linear...", videoId: "854320465", duration: "3:24" },
      { id: 32, name: "Logistic Regression with Example", videoId: "854320403", duration: "7:0" },
      { id: 33, name: "Introduction to Cluster Analysis", videoId: "854320357", duration: "4:4" },
      { id: 34, name: "Examples of Clustering", videoId: "854320283", duration: "4:41" },
      { id: 35, name: "Math Concepts in Clustering", videoId: "854320233", duration: "3:31" },
      { id: 36, name: "K-Means Clustering Explained", videoId: "854320186", duration: "3:45" },
      { id: 37, name: "Hands on Example of K-Means", videoId: "854320051", duration: "8:17" },
      { id: 38, name: "Categorical Data in Cluster Analysis", videoId: "854319956", duration: "3:11" },
      { id: 39, name: "Elbow Method to Choose the Number of Clusters", videoId: "854319919", duration: "3:56" },
      { id: 40, name: "Elbow Method Practical Example", videoId: "854319854", duration: "4:0" }
    ]
  },
  21: {
    title: 'Data Automation (ETL)',
    subtitle: 'Course about Learning Data Automation (ETL)',
    videoId: '901832444',
    lessonName: "ETL & Data Automation",
    vimeoSrc:
      "https://player.vimeo.com/video/901832444?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Introduction to Data Automation Course", videoId: "901832444", duration: "7:58" },
      { id: 2, name: "Different Stages of Development", videoId: "901837909", duration: "6:29" },
      { id: 3, name: "Data Extraction from GitHub", videoId: "901836152", duration: "8:12" },
      { id: 4, name: "Data Extraction from FTP", videoId: "901830429", duration: "5:26" },
      { id: 5, name: "Data Extraction from AWS S3 Bucket", videoId: "901837622", duration: "7:0" },
      { id: 6, name: "Directly read data from S3 Bucket", videoId: "901837363", duration: "3:53" },
      { id: 7, name: "Read data in Chunk from S3 Bucket", videoId: "901833714", duration: "3:52" },
      { id: 8, name: "Data Warehouse and Tables", videoId: "901838417", duration: "8:23" },
      { id: 9, name: "Data Cleaning Objectives and Cycle", videoId: "901837122", duration: "4:48" },
      { id: 10, name: "Pandas functions to explore Dataset", videoId: "901834964", duration: "4:1" },
      { id: 11, name: "Loc and ILOC functions to filter dataset", videoId: "901832169", duration: "5:11" },
      { id: 12, name: "Data Summary and Renaming", videoId: "901836756", duration: "5:0" },
      { id: 13, name: "Working with Null Values in Dataset", videoId: "901837488", duration: "6:1" },
      { id: 14, name: "Describe Dataset and manage Null", videoId: "901836606", duration: "4:48" },
      { id: 15, name: "Dropping Blank Values from Dataset", videoId: "901830130", duration: "5:28" },
      { id: 16, name: "Fill missing values with a Test Statistic", videoId: "901830921", duration: "2:38" },
      { id: 17, name: "Fill missing values with SimpleImputer", videoId: "901830233", duration: "6:46" },
      { id: 18, name: "Visualize Missing Values Graphically", videoId: "901830689", duration: "6:40" },
      { id: 19, name: "Sorting and Removing Duplicate Records", videoId: "901835743", duration: "6:37" },
      { id: 20, name: "Remove Duplicates using Pandas", videoId: "901838204", duration: "3:43" },
      { id: 21, name: "Binning and Bucketing on Dataset", videoId: "901831785", duration: "4:8" },
      { id: 22, name: "Create Bins using Google Trends Dataset", videoId: "901837268", duration: "5:3" },
      { id: 23, name: "Find Outliers in Data and Handle them", videoId: "901835981", duration: "5:15" },
      { id: 24, name: "Visualize Outliers and Handle them", videoId: "901832803", duration: "8:28" },
      { id: 25, name: "Dropping the Outliers from Dataset", videoId: "901838848", duration: "4:57" },
      { id: 26, name: "Identify and Cleaning Numeric Values", videoId: "901835219", duration: "5:16" },
      { id: 27, name: "Check and fix incorrect Email Address", videoId: "901835075", duration: "5:39" },
      { id: 28, name: "Understanding Data Modeling", videoId: "901833425", duration: "4:10" },
      { id: 29, name: "Entities and Attributes and Relationship", videoId: "901831976", duration: "6:25" },
      { id: 30, name: "Install and Configure MySQL Workbench", videoId: "901838043", duration: "4:32" },
      { id: 31, name: "Understanding Pipeline Flow", videoId: "901830348", duration: "3:21" },
      { id: 32, name: "ER Diagram using Reverse Engineering", videoId: "901831308", duration: "8:36" },
      { id: 33, name: "Exporting DataFrame to MySQL Database", videoId: "901831102", duration: "5:28" },
      { id: 34, name: "Tracking ETL through Logging", videoId: "901837198", duration: "3:56" },
      { id: 35, name: "Adding LOGGING to ETL through Python", videoId: "901834095", duration: "7:2" },
      { id: 36, name: "Understanding and Installing Apache Airflow", videoId: "901837780", duration: "8:43" },
      { id: 37, name: "Understanding the concept of DAGS", videoId: "901836393", duration: "7:40" },
      { id: 38, name: "Role of OPERATORS in Airflow DAGS", videoId: "901830564", duration: "7:58" },
      { id: 39, name: "Create your first DAG with four tasks", videoId: "901838253", duration: "8:28" },
      { id: 40, name: "Final Output in Airflow and ETL Strategy", videoId: "901835423", duration: "8:28" }
    ]
  },
  22: {
    title: 'Business Email Writing',
    subtitle: 'Course about Learning Business Email Writing',
    videoId: '640666933',
    lessonName: "Professional Email Writing",
    vimeoSrc:
      "https://player.vimeo.com/video/640666933?title=0&byline=0&portrait=0&badge=0",
    isVimeoOnly: true,
    lessons: [
      { id: 1, name: "Basics of Professional Email Writing", videoId: "640666933", duration: "5:37" },
      { id: 2, name: "Best practices for effective email Subject Line", videoId: "645932514", duration: "7:24" },
      { id: 3, name: "Understanding different types of Email Greetings", videoId: "645932631", duration: "5:44" },
      { id: 4, name: "Etiquette Rules for Professional Emails", videoId: "645932710", duration: "5:17" },
      { id: 5, name: "The Best Font Styles and Size for Email", videoId: "645932806", duration: "4:19" },
      { id: 6, name: "Formal vs Informal Emails & Important Rules", videoId: "645932421", duration: "6:52" },
      { id: 7, name: "Learn to write professional Referral...", videoId: "646009352", duration: "3:42" },
      { id: 8, name: "Learn to write Promotional Emails", videoId: "647307574", duration: "3:52" },
      { id: 9, name: "Learn to design Welcome Emails", videoId: "647307682", duration: "2:51" },
      { id: 10, name: "How to design Announcement Emails", videoId: "647307749", duration: "2:30" },
      { id: 11, name: "Write Resume & Cover letter Email", videoId: "647307825", duration: "2:51" },
      { id: 12, name: "Learn to write a Business Proposal Email", videoId: "647307927", duration: "7:41" },
      { id: 13, name: "Business Proposal Email - Example No.2", videoId: "647308039", duration: "1:39" },
      { id: 14, name: "Client Thank You Email Writing", videoId: "647308115", duration: "3:17" },
      { id: 15, name: "Business Meeting Request Email", videoId: "647307505", duration: "4:30" }
    ]
  },
};

export default function Courses() {
  const wrapperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("course");
  const [playing, setPlaying] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const navigate = useNavigate();
  const { courseId } = useParams();

  // Get course data based on courseId, default to course 1 if no ID provided
  const currentCourse = coursesData[courseId] || coursesData[1];
  const YT_ID = currentVideoId || currentCourse.videoId;
  const VIMEO_SRC = currentVideoId
    ? `https://player.vimeo.com/video/${currentVideoId}?title=0&byline=0&portrait=0&badge=0`
    : currentCourse.vimeoSrc;

  const playVideo = (videoId) => {
    setCurrentVideoId(videoId);
    setPlaying(true);
  };

  const playVimeoVideo = (videoId) => {
    const vimeoUrl = `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&badge=0`;
    setCurrentVideoId(videoId);
    setPlaying(true);
    // Update the VIMEO_SRC for the current playing video
    currentCourse.currentVimeoSrc = vimeoUrl;
  };

  return (
    <MainLayout>
      <div className="courses-container" ref={wrapperRef}>
        <div
          className="courses-page"
          style={{ transform: "scale(var(--scale,1))" }}
        >
          {/* top small row: menu and profile/logo */}
          <div className="header-top">
            <img src={menuIcon} alt="menu" className="menu-icon" />
          </div>
          <div className="logo-badge" aria-hidden>
            <img src={oval} alt="logo" />
          </div>

          {/* positioned rectangle with back arrow (left) and Buy Now (right) */}
          <header className="top-rectangle courses-header-bar">
            <div className="header-left">
              <button
                className="back-btn"
                aria-label="back"
                onClick={() => navigate("/courses/active-courses")}
              >
                <img src={backArrow} alt="back" />
              </button>
            </div>
            <div className="header-center" />
            <div className="header-right">
              <button className="buy-pill courses-buy-btn">
                <span>Buy Now</span>
                <img src={cartIcon} alt="cart" />
              </button>
            </div>
          </header>

          <main className="course-hero">
            <div className="title-row-figma">
              <h1 className="hero-video-title-figma">{currentCourse.title}</h1>
            </div>

            <div className="video-card video-card-figma">
              {playing ? (
                // For course 1, show only Vimeo; for others, show YouTube
                currentCourse.isVimeoOnly ? (
                  <iframe
                    src={VIMEO_SRC}
                    title="PY56318795"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "28px",
                      pointerEvents: "auto",
                      zIndex: 1,
                    }}
                  />
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&fs=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    sandbox="allow-same-origin allow-scripts allow-presentation allow-forms"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "28px",
                      pointerEvents: "auto",
                      zIndex: 1,
                    }}
                  />
                )
              ) : (
                <div
                  className="video-preview"
                  role="button"
                  aria-label="Play video"
                  onClick={() => setPlaying(true)}
                >
                  {/* Optional: add a poster image if available */}
                  <button
                    className="play-btn-figma"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlaying(true);
                    }}
                    aria-label="Play"
                  >
                    <div className="play-triangle-figma" />
                  </button>
                </div>
              )}
            </div>

            {/* Details card */}
            <div className="details-card card">
              <div className="details-inner">
                <p className="details-sub">{currentCourse.subtitle}</p>
                <div className="divider" />

                <div className="lesson-row">
                  <div className="lesson-left">
                    <div className="lesson-name">
                      {currentCourse.lessonName}
                    </div>
                  </div>
                  <div className="time-pill">
                    <img src={clockIcon} alt="time" className="time-icon" />
                    20:43
                  </div>
                </div>

                <div className="progress-wrap">
                  <div className="progress-head">
                    <div className="progress-label">Course Progress</div>
                    <div className="progress-count">3/5 lessons</div>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" />
                  </div>
                </div>

                <button className="mark-btn">Mark as Complete</button>
              </div>
            </div>

            {/* Content card */}
            <div className="content-card card">
              <div className="content-inner">
                <h4>Course Content</h4>
                <div className="line" />
                <ul>
                  {currentCourse.lessons ? (
                    currentCourse.lessons.map((lesson, index) => (
                      <button
                        key={lesson.id}
                        className="lesson-name lesson-button"
                        onClick={() => playVimeoVideo(lesson.videoId)}
                      >
                        <li>
                          <div className="left">
                            <div className="num">{String(index + 1).padStart(2, '0')}</div>
                            <div className="lesson-text">
                              {lesson.name}
                              {/* <div className="lesson-time">{lesson.duration}</div> */}
                            </div>
                          </div>
                          {/* <div className="check">
                            <img src={verifiedIcon} alt="verifiedIcon" />
                          </div> */}
                        </li>
                      </button>
                    ))
                  ) : (
                    // Fallback for courses without lesson data
                    <>
                      <button
                        className="lesson-name lesson-button"
                        onClick={() => playVideo("7S_tz1z_5bA")}
                      >
                        <li>
                          <div className="left">
                            <div className="num">01</div>
                            <div>
                              Lesson-1
                            </div>
                          </div>
                        </li>
                      </button>
                      <button
                        className="lesson-name lesson-button"
                        onClick={() => playVideo("ok-plXXHlWw")}
                      >
                        <li>
                          <div className="left">
                            <div className="num">02</div>
                            <div>
                              Lesson-2
                            </div>
                          </div>
                        </li>
                      </button>
                      <button
                        className="lesson-name lesson-button"
                        onClick={() => playVideo("7S_tz1z_5bA")}
                      >
                        <li>
                          <div className="left">
                            <div className="num">03</div>
                            <div>
                              Lesson-3
                            </div>
                          </div>
                        </li>
                      </button>
                      <button
                        className="lesson-name lesson-button"
                        onClick={() => playVideo("7S_tz1z_5bA")}
                      >
                        <li>
                          <div className="left">
                            <div className="num">04</div>
                            <div>
                              Lesson-4
                            </div>
                          </div>
                        </li>
                      </button>
                      <button
                        className="lesson-name lesson-button"
                        onClick={() => playVideo("7S_tz1z_5bA")}
                      >
                        <li>
                          <div className="left">
                            <div className="num">05</div>
                            <div>
                              Lesson-5
                            </div>
                          </div>
                        </li>
                      </button>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
}
