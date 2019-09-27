import React, {useState} from "react";

const BotFilter = (props) => {
  const {bot} = props;

  const [absentThreshold, setAbsentThreshold] = useState(100);

  const handleChange = (event) => {
    // event.preventDefault();
  }

  return (
    <div className="column sixteen wide">
      <form>
        <select name="robot-class-dropdown">
          <option value="assult">assult</option>
          <option value="defender">defender</option>
          <option value="support">support</option>
        </select>
      </form>
    </div>
  );
}

export default BotFilter;
