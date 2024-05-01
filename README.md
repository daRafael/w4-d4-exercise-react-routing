# React Routing

## Routing - Intro

### v1 - Starter Code

Changes since last lecture:

- students objects with addtional data
- students array change into a separate js file
- Student List and Cards inside components folder
- Remove of Create and Delete items funtions

### v2 - Add uuid & react-router-dom

1. npm i uuid
2. Replace current student ids by ids generated with uuid
3. npm install react-router-dom
4. Import BrowserRouter in main.jsx
5. Wrap the App component with the BrowserRouter component in main.jsx

### v3 - Add Navbar Component

1. Create a Navbar.jsx inside /components
2. Create a Navbar.css and import it to the Component

```
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  position: fixed;
  width: 100%;
}

nav ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 40px;
}

nav ul a {
  position: relative;
}

nav ul a::before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #646cff;
  transition: all 0.3s ease-in-out;
}

nav ul a::hover::before {
  background-color: #535bf2;
}

nav ul a.active::before {
  width: 100%;
}
```

### v4 - Create Pages & Routes

1. Create a Homepage.jsx

```
    <div>
        <h1>Hi Ironhackers</h1>
        <h5>This is our amazing students list app with routing</h5>
    </div>
```

2. Create a Listing.jsx and place the code you find in your App.jsx below the Navbar in that file's return
3. Change the studentsdata import from the App.jsx to the Listing.jsx and adjust the other imports (component and package) in both the App.jsx and the Listing.jsx
4. Create two routes in your App.jsx:
   1. Home
   2. Students List

### v5 - Add a 404 Page & Route

1. Create an ErrorPage.jsx file
2. As image in that page use: https://www.dpmarketingcommunications.com/wp-content/uploads/2016/11/404-Page-Featured-Image.png
3. Handle the return to the homepage
4. Add the Route to the App.jsx file

## Routing - Advanced

### v6 - Create a Single Student Page & Route

1. Create a SingleStudent.jsx file
2. import and use the useParams from react-router-dom in that file
3. Add the route to each student in the App.jsx

### v7 - Link Students List with the Single Pages & usage of Navigate form react-router-dom

1. Add Link as a wrapper in the StudentCard.jsx file
2. In your SingleStudent.jsx filter the correct student based on the params provided
3. Create a dynamic profile page using each students info

   1. Replace what's inside the return with:

   ```
   <div className="profile-wrapper">
       <div className="profile card">
         <img
           src={student.img}
           alt={`${student.name} profile picture`}
           width={300}
           height="auto"
           style={{ borderRadius: "50%" }}
         />
         <h2>{student.name}</h2>
         <p>{student.age} anos</p>
         <p>{student.bootcamp}</p>
       </div>
     </div>
   ```

   2. Create a SingleStudent.css file a put the following inside:

   ```
    .profile-wrapper {
      min-height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .profile {
      background-color: #1a1a1a;
      border-radius: 20px;
    }
   ```

4. If no student is found navigate to the list

### v8 - URL Query Params
