import React, {useState} from "react";

const BotFilter = (props) => {
  const {bot} = props;

  const [absentThreshold, setAbsentThreshold] = useState(100);

  const handleChange = (event) => {
    // event.preventDefault();
  }

  return (
    <div>
      <h1>This is the filter controller, lets get filtering</h1>

      <select name="robot-class-dropdown" onChange={handleChange}>
        <option value="assult">assult</option>
        <option value="defender">defender</option>
        <option value="support">support</option>
      </select>
    </div>
  );
}

export default BotFilter;
