import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';
import Link from './Link';

const mapStateToProps = (state, props) => {
    return {
        active: props.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: () => dispatch(setVisibilityFilter(props.filter))
    };
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;