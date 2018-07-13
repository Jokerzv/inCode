import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { select2 } from "../actions/index";
import data from "../reducers/client2";

const styles_2 = {
  height: "450px",
  "overflow-y": "scroll"
};

const styles_3 = {
  "border-bottom": "1px solid rgba(0,0,0, 0.5)"
};

const styles_4 = {
  color: "#428edd"
};

function searchingFor(term) {
  return function(x) {
    return (
      x.general.firstName.toLowerCase().includes(term.toLowerCase()) || !term
    );
  };
}

class ClientsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      term: ""
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  testing(take) {
    return this.props.select2(take);
  }

  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  showList() {
    const { term, data } = this.state;
    return (
      <div>
        <form class="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            onChange={this.searchHandler}
            value={term}
          />
          <i class="search icon" />
        </form>
        <div style={styles_2}>
          {data.filter(searchingFor(term)).map(client => (
            <div
              class="item user"
              onClick={() => this.testing(client)}
              key={client.general.firstName}
            >
              <table width="100%">
                <tbody>
                  <tr>
                    <td valign="top" width="50px">
                      <img
                        src={client.general.avatar}
                        class="ui tyni rounded image"
                      />
                    </td>
                    <td valign="top">
                      <div>
                        <strong style={styles_4}>
                          {client.general.firstName}
                        </strong>
                        <div class="sub header"> {client.job.title}</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={styles_3} />
            </div>
          ))}
        </div>
      </div>
    );
    /*
    return (
      <div>{data.map(el => <div key={el}>{el.general.firstName}</div>)}</div>
    );
*/
    /*return this.props.clients.map ((client) =>{
      return(
        <li onClick={() => this.props.select (client)}
        key={client.general.firstName}>{client.general.firstName}</li>
      );
    });*/
  }

  render() {
    return <ol>{this.showList()}</ol>;
  }
}

function mapStateToProps(state) {
  return {
    clients: state.clients_connect_json
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ select2: select2 }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientsList);
