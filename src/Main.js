import React from "react";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";
import Cable from "./Dropwire";

class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      //openAbomunista: true,
      //measure: "closedanarchymorals",
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    const { pathname } = this.props;
    clearTimeout(this.starttime);
    this.starttime = setTimeout(() => {
      this.check(pathname);
    }, 500);
  };
  componentDidUpdate = (prevProps) => {
    const { pathname, basic } = this.props;
    if (
      this.props !== prevProps ||
      basic !== prevProps.basic ||
      pathname !== prevProps.pathname
    ) {
      this.check(pathname);
    }
  };
  check = (pathname) => {
    if (["/socialism", "/classes", "/class"].includes(pathname)) {
      window.scroll(0, this.props.socialism.current.offsetTop);
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.starttime);
  };
  render() {
    /*const handleScollImgError = (e) => {
      if (e.message) {
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";*/
    return (
      <div
        onMouseEnter={() => this.setState({ hoveringNatureControl: false })}
        style={{
          fontFamily: "'Comfortaa', cursive",
          border: "1px solid rgb(200,200,200)",
          overflow: "hidden",
          //margin: "5px",
          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative"
        }}
      >
        <div
          style={{
            cursor: "pointer",
            position: "fixed",
            right: "0px",
            bottom: "0px"
          }}
          onClick={() => this.props.setBasic()}
        >
          less
          {/**cardiac problems: Is age not indicative towards death in derivative over blood pressure?
           Was Karl Marx murdered for complaining about social credit?*/}
        </div>
      </div>
    );
  }
}
export default React.forwardRef((props, ref) => {
  //console.log(ref.current);
  return (
    <App
      /*anarchy={ref.current.anarchy}*/
      {...["socialism"].reduce(
        (refs, field) => ({ ...refs, [field]: ref.current[field] }),
        {}
      )}
      {...props}
    />
  );
});
