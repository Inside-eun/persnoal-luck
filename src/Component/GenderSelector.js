import React from "react";

const GenderSelector = ({ gender, setGender }) => {
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <label htmlFor="gender">성별</label>
      <select id="gender" name="gender" onChange={handleGenderChange}>
        <option value="" disabled selected>
          선택
        </option>
        <option value="female">여성</option>
        <option value="male">남성</option>
      </select>
    </div>
  );
};

export default GenderSelector;
