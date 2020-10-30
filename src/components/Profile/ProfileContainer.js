import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from './Profile';
import { getPlanetProfileThunk } from './../../reducers/profile-reducer'




class ProfileContainer extends React['Component'] {
    componentDidMount() {
        let id = this.props.match.params.id
        this.props.getPlanetProfileThunk(id)
    }
    render() {
        return (
            <Profile {...this.props.profile} />
        )
    }
}


const mapStateToProps = state => {
    return {
        profile: state.profileData.profile
    }
}




export default compose(
    connect(mapStateToProps, { getPlanetProfileThunk }),
    withRouter)(ProfileContainer);