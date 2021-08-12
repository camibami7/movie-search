import React from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

import TitleButton from './TitleButton';

const GetRequest = () => {
  const [movies, setMovies] = React.useState();
  const [text, setText] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  const search = event => {
    event.preventDefault();
    setLoading(true);
    axios
      .get(`https://www.omdbapi.com/?s={${text}}&apikey=902755be`)
      .then(response => setMovies(response.data.Search))
      .catch(error => setError(error))
      .finally(() => {
        setTimeout(() => setLoading(false), 2000);
        setError(true);
      });
  };

  const renderMovies = () => {
    return movies?.map(title => <TitleButton title={title} />);
  };


  return (
    <div class="body">
      <div className="card text-center m-3">
        <h5 className="card-header">
          <form onSubmit={search}>
            <input
              class="search_bar"
              type="text"
              placeholder="Search Movies"
              value={text}
              onChange={event => setText(event.target.value)}
            />
            <button class="search_button" type="submit">
              &#x1F50E;
            </button>
          </form>
        </h5>
        {loading ? (
          <div
            style={{
              width: '100%',
              height: '100',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ReactLoading
              type={'bars'}
              color={'#800e10'}
              height={200}
              width={200}
            />
          </div>
        ) : movies ? (
          <div class="card-body">{renderMovies()}</div>
        ) : (
          error && (
            <div class="error-message">
              <br />
              <br />
              No movies match that search, please try again.
              <br />
              <br />
              <br />
            </div>
          )
        )}
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};

export { GetRequest };
