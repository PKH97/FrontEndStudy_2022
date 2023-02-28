import React from "react";
import Movie from "./movies";

class MainPage extends React.Component {
    //초기값
    state = {
        isLoading: true, // 데이터 읽어들이는 상태값
        movies: [], //읽어들인 데이터 저장하는 공간(객체명)
    }

    getMovies = async () => {
        // axios.get('http://yts-proxy.now.sh/list_movies.json');

        const {
            data: {
                data: { movies }
            }
        } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({ movies, isLoading: false }); //데이터서버 연결해제

        // const movies = axios.get('http://yts-proxy.now.sh/list_movies.json');
        /* async 비동기식으로 자료를 처리
        // await 데이터가 로딩이 완료될때까지
        // console.log(movies); //연결된 api자료를 콘솔에 출력
        // 경로확인: data > data > movies */
    }


    //api연결 -> 현재 App이 화면에 보일때 -> 마운트가 될때 실행하는 함수.
    componentDidMount() {
        this.getMovies();
    }

    render() {
        // const isLoading = this.state.isLoading; //-> isLoading: true

        const {isLoading, movies} = this.state; //데이터가 로그인된 값을 객체로
        return (
            <div className="container">
                <div className="header">
                    <ul>
                        <li>홈으로</li>
                        <li>2008</li>
                    </ul>
                </div>
                <div className="movies">
                    {/* { isLoading ? '로딩' : '대기' } */}
                    { isLoading 
                        ? '로딩' 
                        : movies.map((movie) => {
                            return(<Movie 
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                            />);
                        })
                    }
                </div>
            </div>
        )
    }
}

function Main() {
    return(
        <div>
            
        </div>
    );
}

export default Main;