import "./App.css";
import SideNavbar from "./Component/SideNavbar";
import WalletAndPortfolioComponent from "./Component/WalletAndPortfolioComponent";

const App = () => {
  return (

         <div className="d-flex flex-row"> 
           <div className="" style={{ width: "250px" }}> 
            <SideNavbar />
           </div> 
           <div className="" style={{ width: "100%", height: "120vh" }}> 
              <WalletAndPortfolioComponent />
           </div> 
        </div>
  );
};

export default App;
