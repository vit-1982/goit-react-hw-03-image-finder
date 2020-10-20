import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";
import Notification from "../Notification/Notification";
import ImageGallery from "../ImageGallery/ImageGallery";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import imagesApi from "../../services/imagesApi";
import styles from "./App.module.css";

export default class App extends Component {
  state = {
    imageList: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevQuery !== nextQuery) {
      this.fetchImageList();
    }
    if (prevPage !== nextPage) {
      this.scrollToButton();
    }
  }

  closeModal = () => this.setState({ largeImage: null });

  setLargeImageUrl = (url) => this.setState({ largeImage: url });

  scrollToButton = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  fetchImageList = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    imagesApi
      .fetchImageListWithQuery(searchQuery, page)
      .then((imageList) =>
        this.setState((prevState) => ({
          imageList: [...prevState.imageList, ...imageList],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, imageList: [] });
  };

  render() {
    const { imageList, loading, error, largeImage } = this.state;
    // console.log(this.state.page);
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && (
          <Notification message={`Oops, something went wrong: ${error}`} />
        )}
        {imageList.length > 0 && (
          <ImageGallery
            imageList={imageList}
            setLargeImage={this.setLargeImageUrl}
          />
        )}
        {loading && <Spinner />}
        {imageList.length > 0 && !loading && (
          <Button onBtnClick={this.fetchImageList} />
        )}
        {largeImage && (
          <Modal onClose={this.closeModal}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
