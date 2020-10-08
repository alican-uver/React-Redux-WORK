import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ListGroupItem, ListGroup } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";

const CategoryList = (props) => {
  useEffect(() => {
    props.actions.getCategories();
  }, [props.actions]);

  return (
    <>
      <h3>Categorylist</h3>
      <ListGroup>
        {props.categories.map((category) => {
          return (
            <ListGroupItem key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          );
        })}
      </ListGroup>
      <h5>Seçili Kategori:{props.currentCategory} </h5>
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
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
