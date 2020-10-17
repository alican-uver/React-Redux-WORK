import React from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavItem,
  NavLink,
  DropdownItem,
  Badge,
} from "reactstrap";

const CartSummary = (props) => {
  const { cart } = props;

  const renderEmpty = () => {
    return (
      <NavItem>
        <NavLink>Cart is Empty</NavLink>
      </NavItem>
    );
  };

  const renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart
        </DropdownToggle>
        <DropdownMenu right>
          {cart.map((cartItem) => {
            return (
              <DropdownItem key={cartItem.product.id}>
                {cartItem.product.productName}
                <Badge>{cartItem.quantity}</Badge>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  return <>{cart.length ? renderSummary() : renderEmpty()}</>;
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};

export default connect(mapStateToProps)(CartSummary);
