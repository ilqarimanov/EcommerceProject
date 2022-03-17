import React, { useState } from "react";
import { setCourses } from "./courseSlice";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const AddCourse = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState("");
  const dispatch = useDispatch();
  const addCourse = (e) => {
    if (
      name !== "" &&
      desc1 !== "" &&
      desc2 !== "" &&
      price !== 0 &&
      rating !== ""
    ) {
      e.preventDefault();

      dispatch(
        setCourses({
          id: uuidv4(),
          name: name,
          description1: desc1,
          description2: desc2,
          price: price,
          rating: rating,
        })
      );
      history.push("/blogs");
    } else {
      alert("Error");
    }
  };

  return (
    <div className="add__course">
      <input
        placeholder="Name of Product"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Short description of Product"
        value={desc1}
        onChange={(e) => setDesc1(e.target.value)}
      />
      <input
      placeholder="Long description of Product"
      value={desc2}
      onChange={(e) => setDesc2(e.target.value)}
    />
      <input
        placeholder="$$$ Price of the product"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Popularity of the product (From 0 to 5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={(e) => addCourse(e)}>Add Blog</button>
    </div>
  );
};

export default AddCourse;
