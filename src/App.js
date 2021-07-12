import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DashboardProducts from "./pages/DashboardProducts";
import DashboardSales from "./pages/DashboardSales";
import DashboardSettings from "./pages/DashboardSetting";
import DashboardLogin from "./pages/DashboardLogin";
function App() {
  return (
    <Router>
      <Switch>
        {/* routes related to admin panel */}
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/dashboard/products">
          <DashboardProducts />
        </Route>
        <Route exact path="/dashboard/sales">
          <DashboardSales />
        </Route>
        <Route exact path="/dashboard/settings">
          <DashboardSettings />
        </Route>
        <Route exact path="/dashboard/login">
          <DashboardLogin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
