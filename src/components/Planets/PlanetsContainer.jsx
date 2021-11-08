import React from 'react';
import { connect } from 'react-redux';
import { getPlanetsThunk } from '../../reducers/planets-reducer';
import Planets from './Planets';
import { motion } from 'framer-motion'

class PlanetsContainer extends React.Component {
    componentDidMount() {
        this.props.getPlanetsThunk(this.props.currentPage)
    }

    onPageChanged = page => {
        this.props.getPlanetsThunk(page)
    }
    render() {
        return (
            <motion.div
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
            >
                <Planets
                    planets={this.props.planets}
                    onPageChanged={this.onPageChanged}
                    totalPlanetCount={this.props.totalPlanetCount}
                    currentPage={this.props.currentPage}
                    isFetching={this.props.isFetching}
                />
            </motion.div>

        )
    }
}

const mapStateToProps = state => {
    return {
        currentPage: state.planetsData.currentPage,
        planets: state.planetsData.planets,
        totalPlanetCount: state.planetsData.totalPlanetCount,
        isFetching: state.planetsData.isFetching
    }
}

export default connect(mapStateToProps, { getPlanetsThunk })(PlanetsContainer);