import { useState } from "react";
import Header from "./Header";
import { courses } from "./data";
import Course from "./Course";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
