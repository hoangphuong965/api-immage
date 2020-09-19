import React from "react";
import SearchBar from "./SearchBar";
import LoadMore from "./LoadMore";
import ImageLists from "./ImageLists";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = {
    images: [],
    currentQuery: "",
    searchedQuery: "",
    page: 1,
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term },
    });
    this.setState({ images: response.data.results, searchedQuery: term });
  };

  onLoadMore = async () => {
    this.setState(
      (prevState) => {
        return { page: prevState.page + 1 };
      },
      async () => {
        const response = await unsplash.get(
          `/search/photos?page=${this.state.page}`,
          {
            params: { query: this.state.searchedQuery },
          }
        );
        this.setState({
          images: [...response.data.results],
        });
      }
    );
  };

  onDownload = async () => {
    
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageLists images={this.state.images} />
        <LoadMore onLoad={this.onLoadMore} />
      </div>
    );
  }
}

export default App;
