import React, { Component } from "react";
import { connect } from "react-redux";

const styles = {
  "margin-top": "50px"
};

const styles_3 = {
  "border-bottom": "1px solid rgba(0,0,0, 0.5)"
};

class Details extends Component {
  render() {
    if (!this.props.client) {
      return <p style={styles}>Please, select user...</p>;
    }
    return (
      <div style={styles}>
        <div class="ui unstackable items">
          <div class="item">
            <div class="image">
              <img src={this.props.client.general.avatar} />
            </div>
            <div class="content">
              <a class="header">
                {this.props.client.general.firstName}{" "}
                {this.props.client.general.lastName}
              </a>
              <div class="meta">
                <span>{this.props.client.job.title}</span>
                <div>{this.props.client.job.company}</div>
              </div>
              <div style={styles_3} />
              <div class="description">
                <p>Email: {this.props.client.contact.email}</p>
                <p>Phone: {this.props.client.contact.phone}</p>
              </div>
              <div class="extra">
                Country:{this.props.client.address.country}
                {", City: "} {this.props.client.address.city}
                {", Street: "}
                {this.props.client.address.street}
                {", zipCode: "} {this.props.client.address.zipCode}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    client: state.active
  };
}

export default connect(mapStateToProps)(Details);
