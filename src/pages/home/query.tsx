export const fetchMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2I4MzcyYTUwMzRmMTAwMzA5OGM0MmMyMDA0N2ZjNCIsInN1YiI6IjY1YjUzNjQ2NGYzM2FkMDEzMTBiYTQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GaGOql3_7LGBvGviuj2yHcOCv__yxMwgsXhaOKu1dR0',
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status} - ${response.statusText})`);
      }
  
      const data = await response.json();
      console.log(data); // Log the actual JSON data
      return data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error; // Rethrow the error to be caught by the query library
    }
  };
  
  export const fetchTVShows = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2I4MzcyYTUwMzRmMTAwMzA5OGM0MmMyMDA0N2ZjNCIsInN1YiI6IjY1YjUzNjQ2NGYzM2FkMDEzMTBiYTQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GaGOql3_7LGBvGviuj2yHcOCv__yxMwgsXhaOKu1dR0',
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status} - ${response.statusText})`);
      }
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching TV shows:', error);
      throw error; // Rethrow the error to be caught by the query library
    }
  };
  