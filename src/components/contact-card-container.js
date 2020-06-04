import React, { Component } from "react";
import axios from "axios";
import ContactCard from "./contact-card";

export default class CardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: "",
          name: "",
          phone: "",
          email: "",
          address: {
            street: "",
            suite: "",
            city: "",
            zipCode: "",
          },
          company: {
            name: "",
          },
        },
      ],
    };
  }
  getUsers = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("response", response);
        const users = response.data;
        return users;
      })
      .then((users) => {
        this.setState({
          users,
        });
      })
      .catch((error) => {
        console.log("error in get", error);
      });
  };

  componentDidMount() {
    this.getUsers();
  }
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <ContactCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
