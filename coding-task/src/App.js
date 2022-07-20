import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import RepoList from './Component/RepoList';
import Loading from './Component/Loading'
import Repo from './Component/Repo';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      repo: [],
      error: '',
      page: 1,
      loading: true
    }
  }

  componentDidMount () {
    this.loadRepo() 
    window.addEventListener('scroll', this.handleLoadMore)
  }

    loadRepo = () => {
      const { page, repo } = this.state

      const DATE_7_DAYS_BEFORE = moment().subtract(7, 'days').format('YYYY-MM-DD')


      axios.get(
        ` https://api.github.com/search/repositories?q=created:>${DATE_7_DAYS_BEFORE}&sort=stars&order=desc&page=${page} `
      )

        .then(resp => {
          this.setState({
            repo: [...repo, ...resp.data.items], 
            loading: false
          })
        })

        .catch((error) => {
          this.setState({
            error: error,
            loding: false
          })
        })
    }

    handleLoadMore = () => {
      const { loading } = this.state

      if (window.pageYOffset + window.innerHeight >= window.innerHeight && !loading) {
        this.loadData()
      }
    }

    loadData = () => {
      const { page } = this.state

      this.setState((prevState) => ({
        page: prevState.page + page,
        loading: true
      }))
      this.loadRepo()
    }

    render () {
      const { repo } = this.state

      return (
        <div>
          <RepoList repo={repo} />
          <Loading />
        </div>
      )
    }
}

export default App