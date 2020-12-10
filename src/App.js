import React from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      profileName: "",
      imgUrl: "",
      accessToken: ""
    };
  }

  responseGoogle = (response) => {
    console.log(response);
    this.setState({
      profileName:
        response.profileObj.givenName + response.profileObj.familyName,
      imgUrl: response.profileObj.imageUrl,
      accessToken: response.accessToken
    });
  };
  render() {
    return (
      <div>
        {" "}
        <GoogleLogin
          clientId="893688553074-kelbl2kta3koehfd5mhet0tb33ri378d.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={(res) => this.responseGoogle(res)}
          onFailure={(res) => this.responseGoogle(res)}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default App;
