import React,{Component} from 'react';
import { Link } from 'react-router';

export default  class Main extends Component {
  render() {
    return(
      <h1>
        <Link to="/">
          Reduxstagram
        </Link>
        {React.cloneElement(this.props.children, this.props)}
      </h1>
    );
  }
}
