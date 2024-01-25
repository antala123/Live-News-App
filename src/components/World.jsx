import React, { useEffect, useState } from 'react'
import Headline from './Headline'
import Topworld from './Topworld'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const World = (props) => {


    const [livenews, setLivenews] = useState([]);
    const [page, setPage] = useState(1);
    // eslint-disable-next-line
    const [pagesize, setPagesize] = useState(12);
    const [totalResult, setTotalResult] = useState(0);
    const [loading, setLoading] = useState(false);


    const fetchNews = async (pageNo) => {
        props.progress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=da3187585a85486e8298ff7983aff4de&category=${props.cate}&page=${pageNo}&pageSize=${pagesize}`;

        setLoading(true);

        // this.setState({ loading: true });

        let data = await fetch(url);
        let livedata = await data.json();
        props.progress(70);

        setLoading(false);
        setLivenews(livenews.concat(livedata.articles));
        setTotalResult(livedata.totalResults);
        setPage(pageNo);

        // this.setState({

        //     loading: false,


        //     livenews: livenews.concat(livedata.articles),
        //     totalResult: livedata.totalResults,
        //     page: pageNo
        // });
        props.progress(100);
    }

    useEffect(() => {
        fetchNews(1);
    }, []);


    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=da3187585a85486e8298ff7983aff4de&category=${props.cate}&page=${page + 1}&pageSize=${pagesize}`;

        setLoading(true);
        // this.setState({ loading: true });

        let data = await fetch(url);
        let livedata = await data.json();



        setLoading(false);
        setLivenews(livenews.concat(livedata.articles));
        setTotalResult(livedata.totalResults);
        setPage(page + 1);


        // this.setState({

        //     loading: false,


        //     livenews: livenews.concat(livedata.articles),
        //     totalResult: livedata.totalResults,
        //     page: page + 1
        // });

    }

    // handleNext = () => {
    //     let changePage = page + 1;
    //     this.fetchNews(changePage);
    // }

    // handlePre = () => {
    //     let changePage = page - 1;
    //     this.fetchNews(changePage);
    // }



    let i = 0;
    return (

        <>
            <Headline Title={props.Title} mode={props.mode} />

            {loading && <Loading />}


            <InfiniteScroll
                dataLength={livenews.length}
                next={fetchMoreData}
                hasMore={(page) * (pagesize) < (totalResult)}
                loader={<Loading />}
            >

                <div className="container-fluid p-5" style={(props.mode === "light") ? { backgroundColor: "white" } : { backgroundColor: "#04161a" }}>
                    <div className="row">
                        {livenews.map((livesingle, i) => {
                            return <Topworld key={i} img={livesingle.urlToImage} title={livesingle.title} desc={livesingle.description} link={livesingle.url} />
                        })}
                    </div>

                </div>
            </InfiniteScroll>


            {/* <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="btn btn-dark mx-2" style={{ width: "100px" }} disabled={page <= 1} onClick={this.handlePre}> <i className="fa-solid fa-angle-left"></i> Previous</button>
                            <button className="btn btn-dark mx-2" style={{ width: "100px" }} disabled={(page) * (pagesize) > totalResult ? "disabled" : ""} onClick={this.handleNext}>Next <i className="fa-solid fa-angle-right"></i> </button>
                        </div>
                    </div> */}

        </>
    )
}


export default World;