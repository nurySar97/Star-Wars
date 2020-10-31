import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from './Profile';
import { clearResidents, getPlanetProfileThunk, getResidentThunk } from './../../reducers/profile-reducer'
import { compareObjects } from '../../helpers/CompareObjects';




class ProfileContainer extends React['Component'] {
    componentDidMount() {
        let id = this.props.match.params.id
        this.props.getPlanetProfileThunk(id)
        this.props.clearResidents()
    }
    componentDidUpdate(prevProps) {
        if (compareObjects(prevProps.profile, this.props.profile)) {
            let idResidents = this.props.profile.residents.map(a => a.split("/")[5])
            idResidents.forEach(element => {
                this.props.getResidentThunk(element)
            });
        }
    }

    shouldComponentUpdate(nextProps) {
        return (compareObjects(nextProps, this.props)) ? true : false
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
    connect(mapStateToProps, { getPlanetProfileThunk, getResidentThunk, clearResidents }),
    withRouter)(ProfileContainer);