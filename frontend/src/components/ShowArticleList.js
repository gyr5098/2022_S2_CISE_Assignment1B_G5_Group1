import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import BookCard from './BookCard';
  
// const ShowArticleList = () =>
//class ShowArticleList  extends Component
class ShowArticleList  extends Component {
    //this state is used for select articles
    //displayedArticle is used for filter if needed
  
    constructor(props) {
      super(props);
      this.state = {
        articles: [],
        displayedArticles: [],
      };
    }
  
    //this is called, before browser render the page
    componentDidMount() {
      axios
        .get("api/article")
        .then((res) => {
          console.log(res.data);
          this.setState({
            articles: res.data,
          });
        })
        .catch((e) => console.log("No Articles are Found"));
    }

    render() {
        const articles = this.state.articles;
        console.log("PrintBook: " + articles);
        // let articleList;
    
        // if (!articles) {
        //   articleList = "Nothing in database.";
        // } else {
        //   articleList = articles.map((article, k) => (
        //     <Table article={article} key={k} />
        //   ));
        // }
    
        return (
          <div>
            <h2>Select SE Practice to get evidence for the claimed benefits</h2>
            {/* <Dropdown /> */}
            {/* <Styles>
              <Table data={articles} columns={tablecolumns} />
            </Styles> */}
          </div>
        );
      }
    }

export default ShowArticleList;