# FisherMap PH Website Application

> This is a Special Problem Topic of John Rommel B. Octavo


### Installation:

1. Make sure to install necessary modules and package in Next.js. On the main directory run this command: $ `npm install`
2. The server must be started first before running the app. [This is the server repository](https://github.com/jirrroooo/FisherMapPH-Website-and-Server).
3. On the main directory, add the .env file to specify the API_URL. 
4. To run the Next.js app run this command: $ `next start`


### Mobile App Sample Credential:

#### Super Administrator

Email Address: `superadmin@gmail.com`

Password: `superadmin` 


#### Administrator for CALABARZON Region

Email Address: `admin@gmail.com`

Password: `adminadmin` 


## Details:


The website application is built using Next.js. This is a React framework for building fast, user-friendly, and scalable web applications. The key highlight of Next.js lies in Server-Side Rendering (SSR) and Static Site Generation (SSG) features.

FisherMap PH was built using Next.js to maximize its routing advantage and optimize its performance. Considering that the website application uses a map feature, Next.js is a good choice to simplify the development.

The styling of the website uses the React Bootstrap 5 library. The map feature, on the other hand, was implemented using the OpenStreetMap. Moreover, state management in the application was handled by Zustand.

Below shows the homepage of the website for a super administrator account. The statistics for pending fisherfolk accounts, pending administrator accounts, list of alerts, and distress call logs were shown. On the administrator account, only the statistics for the fisherfolk accounts are shown on the homepage.

 
![Homepage of the Website](/src/3.png "Homepage of the Website")


The side navigation is shown whenever the administrator clicks the icon in the upper left corner. Below shows the side navigation on the website.

 
![Side Navigation on the Website](/src/4.png "Side Navigation on the Website")


The picture below shows the fisherfolk account applications page. This lists all the unverified fisherfolk accounts. Administrators can view the fisherfolk account applications.

 
![Manage Fisherfolk Accounts Application Page](/src/5.png "Manage Fisherfolk Accounts Application Page")

The picture below shows the list of administrator accounts. Super administrators can view, suspend, or configure the accounts of administrators.


![Manage Administrator Accounts Page](/src/6.png "Manage Administrator Accounts Page")


The interface for the manage alerts page is shown below. Administrators can view, edit, and delete alerts.


![Manage Alerts Page](/src/7.png "Manage Alerts Page")

Below shows the urgent distress call logs page interface. 


![Manage Distress Call Logs Page](/src/8.png "Manage Distress Call Logs Page")


The sea map feature is shown below. It is subdivided into three tabs: fisherfolk, alerts, and reports. The fisherfolk option shows the location of all fisherfolk on the map. Likewise, the alert and reports options show their location on the map.


![View Sea Map Page](/src/9.png "View Sea Map Page")

