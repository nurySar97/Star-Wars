import React from 'react';
import { connect } from 'react-redux';
import { getPlanetsThunkCreator } from '../reducers/planets-reducer';
import Planets from './Planets/Planets';




class PlanetsContainer extends React.Component {
    componentDidMount() {
        this.props.getPlanetsThunkCreator(this.props.currentPage)
    }

    onPageChanged = page => {
        this.props.getPlanetsThunkCreator(page)
    }
    render() {
        return (
            <Planets
                planets={this.props.planets}
                onPageChanged={this.onPageChanged}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        currentPage: state.planetsData.currentPage,
        planets: state.planetsData.planets
    }
}



export default connect(mapStateToProps, { getPlanetsThunkCreator })(PlanetsContainer);