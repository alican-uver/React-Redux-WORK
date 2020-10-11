import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ListGroupItem, ListGroup } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";

const CategoryList = (props) => {
  useEffect(() => {
    props.actions.getCategories();
  }, [props.actions]);

  const selectCategory = category => {
    props.actions.changeCategory(category);
    props.actions.getProducts(category.id)
  } 

  return (
    <>
      <h3>Categorylist</h3>
      <ListGroup>
        {props.categories.map((category) => {
          return (
            <ListGroupItem
              key={category.id}
              onClick={() => selectCategory(category)}
              style={{ cursor: "pointer" }}
              active = {category.id === props.currentCategory.id}
            >
              {category.categoryName}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </>
  );
};

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
