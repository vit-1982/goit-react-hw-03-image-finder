import React, { Component } from "react";
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => this.setState({ query: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <div className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <label>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
              className={styles.SearchFormInput}
            />
          </label>
          <button type="submit" className={styles.SearchFormButton}></button>
        </form>
      </div>
    );
  }
}
