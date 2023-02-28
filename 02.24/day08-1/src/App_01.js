import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  //초기값 선언
  state = {
    isLoding: true, //로딩상태를 기본적으로 참
    moving: [], //api 배열요소를 저장하는 공간
  }

  getMovies = async () => {
    const { data: { 
      data: { movies }
    } } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(data);
    this.setState({ movies, isLoding: false }); // api연결해제
  }

  componentDidMount() {
    this.getMovies(); //현재 APP컴포넌트 실행되면 현재 함수내에 getMovies()를 실행
  }

  render() {
    const { isLoding, movies } = this.state; //현재 함수의 초기값을 확인
    
    return (
      <div>
        {/* {isLoading ? '로딩' : '대기'} */}
        { 
          isLoding
          ? '로딩' 
          : movies.map((movie) => {
            console.log(movie);
            return(
              <movie />
            );
          })
        }
      </div>
    );
  }
}

export default App;
