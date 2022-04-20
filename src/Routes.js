import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import BdmRoute from "./auth/helper/BdmRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Customers from "./admin/Custoers";
import BDMUsers from "./admin/BDMUsers";
import AddROCBranch from "./admin/AddROCBranch";
import BranchDashboard from "./user/BranchDashboard";
import BranchRoute from "./auth/helper/BranchRoutes";
import BDMDashboard from "./user/BDMDashbaord";
import ItrHome from "./user/BranchDashboardComponents/ItrHome";
import ApplyItr from "./user/ITRform/ApplyItr";
import ItrSubForms from "./user/ITRform/ItrSubFroms";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute path="/admin/customers" exact component={Customers} />
        <AdminRoute path="/admin/addrocbranch" exact component={AddROCBranch} />
        <AdminRoute path="/admin/bdmusers" exact component={BDMUsers} />

        <BranchRoute
          path="/branch/dashboard"
          exact
          component={BranchDashboard}
        />
        <BranchRoute path="/branch/itrhome" exact component={ItrHome} />
        <BranchRoute path="/branch/applyitr" exact component={ApplyItr} />
        <BranchRoute path="/branch/applyitr/itrsubforms" exact component={ItrSubForms} />
        <BdmRoute path="/bdm/dashboard" exact component={BDMDashboard} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
