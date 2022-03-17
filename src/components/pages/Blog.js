import React from "react";
import { useSelector } from "react-redux";
import Course from './Course'
import { selectCourses } from "./courseSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IndCourse from "./IndCourse";
import AddCourse from "./AddCourse";

const Blog = () => {
  const courses = useSelector(selectCourses);

  return (
    <Router>
      <div className="blog">
          <h4 className="text-center"> <Link className="title" to='/blogs'>Blog</Link></h4>
        <Switch>
          <Route path="/blogs" exact>
            <div className="d-flex justify-content-center courses">
              {courses &&
                courses.map((course) => (
                  <Link className="link" to={`/${course.id}`}>
                    <Course data={course} />
                  </Link>
                ))}
            </div>
          </Route>
          <Route path="/addcourse">
            <AddCourse />
          </Route>
          <Route path="/:id">
            <IndCourse />
          </Route>
        </Switch>
        <div className="header d-flex mt-5">
          <h1>Add your own blogs</h1>
          <Link to="/addcourse" className="header__button">
             Add Blog
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default Blog;
