import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class NewMovie extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: " " },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Username"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("NumberInStock"),
    rate: Joi.number().required().min(0.0).max(10.0).label("Rate"),
  };

  doSubmit = () => {
    // console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>MovieForm</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre", "dropdown")}
          {this.renderInput("numberInStock", "NumberInStock", "number")}
          {this.renderInput("rate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
