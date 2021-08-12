import React from 'react';

const TitleButton = ({ title }) => {
  const [posterVisible, setPosterVisible] = React.useState(false);
  return (
    <div>
      <button onClick={() => setPosterVisible(!posterVisible)} class="titles">
        {title.Title}
      </button><br/>
      <div>{posterVisible && <img src={title.Poster} />}</div>
      <br />
    </div>
  );
};

export default TitleButton;
