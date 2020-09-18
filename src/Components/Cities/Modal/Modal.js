import React, { Component } from "react";
import axios from "axios";

//CSS
import "./Modal.css";

export default class ExampleApp extends Component {
  state = {
    showModal: false,
    city: "",
    Merci: "",
    type: "submit",
    disabled: false,
  };

  handleOpenModal = setTimeout(() => {
    this.setState({ showModal: true });
  }, 1000);

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const cities = {
      city: this.state.city,
    };
    axios
      .post(`https://voyagesid.firebaseio.com/city.json`, cities)
      .then((res) => {
        console.log(res);
        this.setState({ Merci: "Merci", type: "hidden", disabled: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div
        style={{ marginTop: "-1vh", display: "flex", justifyContent: "center" }}
      >
        <button
          onClick={this.handleOpenModal}
          style={{ visibility: "hidden" }}
        ></button>
        {this.state.showModal ? (
          <div
            className="Back"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              position: "fixed",
              top: "25vh",
              width: "55vw",
              height: "60vh",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "black",
                display: "flex",
                justifyContent: "center",
                fontFamily: "Lobster",
              }}
            >
              Quelle est votre destination préférée?
            </h2>
            <h4 class="card-header--title" style={{position: "absolute", top: "10px", left: "5px" }}>Voyages ID</h4>
            <form
              onSubmit={this.handleSubmit}
              className="form"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                style={{ marginBottom: "1vh" }}
                value={this.state.value}
                onChange={this.handleChange}
                className="options"
                type="text"
                placeholder="ville"
              />
              {this.state.city ? (
                <input
                  type={this.state.type}
                  value="Envoyer"
                  disabled={this.state.disabled}
                  style={{
                    color: "black",
                    backgroundColor: "#0077ff",
                    height: "5vh",
                    borderRadius: "2vw",
                    opacity: "0.9",
                    marginTop: "1vh",
                    textAlign: "center",
                  }}
                />
              ) : (
                <input
                  type={this.state.type}
                  value="Envoyer"
                  disabled={!this.state.disabled}
                  style={{
                    color: "black",
                    opacity: "0.9",
                    backgroundColor: "white",
                    height: "5vh",
                    borderRadius: "1vw",
                    marginTop: "1vh",
                    textAlign: "center",
                  }}
                />
              )}
            </form>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                fontFamily: "Lobster",
                fontSize: "8vw",
                marginTop: "2vw",
              }}
            >
              {this.state.Merci ? <p style={{fontFamily: "Lobster",color:"white"}}>Merci</p> : null}
            </p>
            <button
              onClick={this.handleCloseModal}
              style={{ position: "absolute", top: "10px", right: "10px" }}
            >
              X
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
