import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from './Profile';
import { clearResidents, getPlanetProfileThunk } from './../../reducers/profile-reducer'
import { motion } from 'framer-motion';



class ProfileContainer extends React['Component'] {
    componentDidMount() {
        let id = this.props.match.params.id
        this.props.getPlanetProfileThunk(id)
        this.props.clearResidents()
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <motion.div
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
            >
                <Profile 
                    {...this.props.profile} 
                    residentsData={this.props.residentsData}
                    isLoaded={this.props.isLoaded}
                />
            </motion.div>
        )
    }
}


const mapStateToProps = state => {
    return {
        profile: state.profileData.profile,
        residentsData: state.profileData.residents,
        isLoaded: state.profileData.isLoaded
    }
}




export default compose(
    connect(mapStateToProps, { getPlanetProfileThunk, clearResidents }),
    withRouter)(ProfileContainer);