import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateArticle extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      source: '',
      date: '',
      doi: '',
      practice: '',
      claimed: '',
      evidence: '',
      state: 'not moderated',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      source: this.state.source,
      date: this.state.date,
      doi: this.state.doi,
      practice: this.state.practice,
      claimed: this.state.claimed,
      evidence: this.state.evidence,
      state: this.state.state,
    };

    axios
      .post('api/article/', data)
      .then(res => {
        this.setState({
          title: '',
          author: '',
          source: '',
          date: '',
          doi: '',
          practice: '',
          claimed: '',
          evidence: '',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateArticle!");
      })
  };

  render() {
    return (
      <div className="CreateArticle">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/EvidenceList" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Article</h1>
              <p className="lead text-center">
                  Create new article
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Article'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this source'
                    name='source'
                    className='form-control'
                    value={this.state.source}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='date'
                    name='date'
                    className='form-control'
                    value={this.state.date}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='DOI'
                    name='doi'
                    className='form-control'
                    value={this.state.doi}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Practice'
                    name='practice'
                    className='form-control'
                    value={this.state.practice}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Claimed'
                    name='claimed'
                    className='form-control'
                    value={this.state.claimed}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Evidence'
                    name='evidence'
                    className='form-control'
                    value={this.state.evidence}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateArticle;