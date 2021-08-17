import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();
const { Provider, Consumer } = Context;

function RedditProvider({ children }) {
  const [ postsBySubreddit, setPostsBySubreddit ] = useState({
    frontend: {},
    reactjs: {},
  });
  const [ selectedSubreddit, setSelectedSubreddit ] = useState('reactjs');
  const [  shouldRefreshSubreddit, setShouldRefreshSubreddit ] = useState(false);
  const [ isFetching, setIsFetching ] = useState(false);

  useEffect(() => {
    const { state } = this;
    const { shouldRefreshSubreddit } = state;
    const selectedSubredditChanged = prevState.selectedSubreddit !== state.selectedSubreddit;

    if (selectedSubredditChanged || shouldRefreshSubreddit) {
      this.fetchPosts();
    }
  })



  return (
    <Context.Provider value={context}>
        {children}
    </Context.Provider>
  );
} 

class RedditProvider extends Component {


  componentDidUpdate(_prevProps, prevState) {
    const { state } = this;
    const { shouldRefreshSubreddit } = state;
    const selectedSubredditChanged = prevState.selectedSubreddit !== state.selectedSubreddit;

    if (selectedSubredditChanged || shouldRefreshSubreddit) {
      this.fetchPosts();
    }
  }

  fetchPosts() {
    if (!this.shouldFetchPosts()) return;

    this.setState({
      shouldRefreshSubreddit: false,
      isFetching: true,
    });

    const { selectedSubreddit } = this.state;
    getPostsBySubreddit(selectedSubreddit)
      .then(this.handleFetchSuccess, this.handleFetchError);
  }

  shouldFetchPosts() {
    const {
      selectedSubreddit,
      postsBySubreddit,
      shouldRefreshSubreddit,
      isFetching,
    } = this.state;
    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  }

  handleFetchSuccess(json) {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    this.setState((state) => {
      const newState = {
        ...state,
        shouldRefreshSubreddit: false,
        isFetching: false,
      };

      newState.postsBySubreddit[state.selectedSubreddit] = {
        items,
        lastUpdated,
      };

      return newState;
    });
  }

  handleFetchError(error) {
    this.setState((state) => {
      const newState = {
        ...state,
        shouldRefreshSubreddit: false,
        isFetching: false,
      };

      newState.postsBySubreddit[state.selectedSubreddit] = {
        error: error.message,
        items: [],
      };

      return newState;
    });
  }

  handleSubredditChange(selectedSubreddit) {
    this.setState({ selectedSubreddit });
  }

  handleRefreshSubreddit() {
    this.setState({ shouldRefreshSubreddit: true });
  }

  render() {
    const { children } = this.props;
    const { selectedSubreddit, postsBySubreddit } = this.state;
    const context = {
      ...this.state,
      selectSubreddit: this.handleSubredditChange,
      fetchPosts: this.fetchPosts,
      refreshSubreddit: this.handleRefreshSubreddit,
      availableSubreddits: Object.keys(postsBySubreddit),
      posts: postsBySubreddit[selectedSubreddit].items,
    };

    return (
  
    );
  }
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Consumer, Context };