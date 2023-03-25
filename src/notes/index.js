/*

  // Initialize deferredPrompt for use later to show browser install prompt.
  beforeinstallprompt = (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    this.setState({ showPWAprompt: true }, () => (this.deferredPrompt = e));
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  };
  afterinstallation = () => {
    this.setState({ showPWAprompt: false }, () => (this.deferredPrompt = null));
    console.log("PWA was installed");
  };
  installChange = (evt) => this.setState({ showPWAprompt: !evt.matches });

  checkInstall = (addListers) => {
    if (
      navigator.standalone ||
      window.matchMedia("(display-mode: standalone)").matches ||
      document.referrer.startsWith("android-app://")
    ) {
      console.log("PWA");
      window.alert(
        `wow, thanks for adding us to your homescreen, please re-add ` +
          `if any bugs pop up and email nick@thumbprint.us with any complaints! ` +
          `STAGE: Work-In-Progress Beta (a.k.a. Alpha)`
      );
    } else {
      const ios = () => {
        return (
          [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod"
          ].includes(navigator.platform) ||
          // iPad on iOS 13 detection
          (navigator.userAgent.includes("iOS") && "ontouchend" in document)
        );
      };
      //!/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())
      if (ios()) {
        if (addListers) {
          this.matchMedia = window.matchMedia("(display-mode: standalone)");
          this.matchMedia.addEventListener("change", this.installChange);

          console.log("PWA query");
          window.addEventListener(
            "beforeinstallprompt",
            this.beforeinstallprompt
          );
          window.addEventListener("appinstalled", this.afterinstallation);
          this.resize();
        }
      } else
        this.setState({ showPWAprompt: true }, () =>
          console.log("PWA query on iOS")
        );
    }
  };
*/
/*function run() {
    /**
     * copy this
     * /
    var location, key;
    //console.log(pathname);
    const ROOT = document.getElementById("root");
    //const initialprops = { paths: { "*": null }, l: { state: null }, n: null };
    //const portal = document.getElementById("portal");
    //createRoot(portal).render(<Filament {...initialprops} />);
  
    const ClassHook = (props) => {
      console.log(props); //(CRH) needs to be exported (i.e. "cannot be called inside a callback")
      /*function Modal({ children }) {
        const PORTAL = useRef(portal).current;
        //const iteme = (i = () => !r.current && document.createElement("div")) => i;
        useEffect(() => {
          ROOT.appendChild(PORTAL);
          return () => PORTAL.remove(); //unmount
        }, [PORTAL]);
        return createPortal(children, PORTAL); //CustomReactHook);
      }* / return (
        <App {...props} paths={useParams()} l={useLocation()} n={useNavigate()} />
      );
    };
    // return hoist
    return createRoot(ROOT).render(
      <BrowserRouter>
        <Routes>
          <Route
            //exact
            path="/*"
            //children,render
            element={<ClassHook />} //Initelement
          />
        </Routes>
      </BrowserRouter>
    );
  }
  run();*/
/*export function Element() {
    const ref = useRef(ROOT);
    let loc = useLocation();
    //let navr = useNavigate(); //history
    //let paths = useParams(); //no props in router v6
    //console.log(props);
    location = loc;
    key = loc.key;
    return <Filament ref={ref} />;
  }*/
/*class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.portal = document.createElement("div");
    }
    componentDidMount() {
      portal.appendChild(this.portal);
    }
    componentWillUnmount() {
      portal.removeChild(this.portal);
    }
    render() {
      const { children } = this.props;
      return (props) =>
    }
  }*/

/**
   * 
   * If you don't want to use `routeElement` (as a `class` component user *without type-safe typescript*), try this size
  
  ````
  class App extends React.Component {render(){return <div/>}}
  
  function run() {
    /**
     * copy this
     * /
    var location, key; //not sure what to do with this yet (in migration v5-6
  
    const ROOT = document.getElementById("root");
    //const initialprops = { paths: { "*": null }, l: { state: null }, n: null };
    const portal = document.getElementById("portal");
    //createRoot(portal).render(<Filament {...initialprops} />);
  
    const ClassHook = () => {
      function Modal({ children }) {
        const PORTAL = useRef(portal).current;
        //const iteme = (i = () => !r.current && document.createElement("div")) => i;
        useEffect(() => {
          ROOT.appendChild(PORTAL);
          return () => PORTAL.remove(); //unmount
        }, [PORTAL]);
        return createPortal(children, PORTAL); //CustomReactHook);
      } //(CRH) needs to be exported (i.e. "cannot be called inside a callback")
      return (
        <Modal animate={true}>
          <App paths={useParams()} l={useLocation()} n={useNavigate()} />
        </Modal>
      );
    };
    // return hoist
    return createRoot(ROOT).render(
      <BrowserRouter>
        <TransitionGroup key="1">
          <CSSTransition key="1" timeout={300} classNames={"fade"}>
            <Routes key={key} location={location}>
              <Route
                //exact
                path="/*"
                //children,render
                element={<ClassHook />} //Initelement
              />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    );
  }
  run();
  ````
  createPortal wraps the class `App extends {}` to work inside a custom react `Hook(){}` 🤷🏽‍♂️
  ````
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Commie.dev</title>
    </head>
  
    <body>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <script type="text/babel" src=".././src/init-firebase.js"></script>
      <div id="root"></div>
      <div id="portal"></div>
    </body>
  </html>
  ````
   */

//atomic china has it so trump endorsed, voteapl.com
/*<input
  placeholder="your email"
  style={{ border: "3px solid", borderRadius: "6px" }}
/>
<button style={{ border: "1px solid" }}>team member login</button>*/
/*<div
              style={{
                padding: "10px",
                width: "calc(100% - 20px)",
                color: "rgb(220,230,240)",
                backgroundColor: "rgba(0,0,0,.3)"
              }}
              onClick={() =>
                window.alert(
                  `You are now posting things like username if you proceed. ` +
                    `Your number and phone are under userDatas, a collection ` +
                    `in the NoSQL database only accessible by https:// SSL certification
                ${sites.map(
                  (x, i) => `${x + (i !== sites.length - 1 ? "," : "")} `
                )}` / *+
                    `You can keep sprite to this list on thumbprint.us; ` +
                    `Firebase Database (Firestore) data is encrypted in transit, ` +
                    `it is stored on encrypted disks on the servers, and ` +
                    `may be stored in your browser's cache. ` +
                    `so use it on a private device. ` +
                    `Sim card security depends on your Internet Service Provider's ` +
                    `identification process and some identity theft happens.`* /
                )
              }
            >
              <span role="img" aria-label="hazard icon">
                {" "}
                ️⚠️
              </span>
              You are now posting username if you proceed
              <hr />
              <div
                style={{
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,.8)",
                  padding: "5px 0px"
                }}
              >
                Utilize your number, phone & https:// to access&nbsp;
                {sites.map(
                  (x, i) => `${x + (i !== sites.length - 1 ? "," : "")} `
                )}
                logged-in (cors, phone, NoSQL)
              </div>
              <hr />
              <br />
              Sim card security depends on your Internet Service Provider's
              identification process and some identity theft happens. Before
              adding banking, we will require an email... but please urge our
              Representatives to put out a convict-intranet and
              PII-free-authentication with state-issued-photo-ID
                </div>*/
/**
onChange={(e) => {
  if (e.target.id === "above") {
    this.setState({
      under13: e.target.value
    });
  }
  if (e.target.id === "below") {
    this.setState({
      under13: !e.target.value
    });
  }
}}
 */
