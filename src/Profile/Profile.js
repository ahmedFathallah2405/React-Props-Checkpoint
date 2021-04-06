import React, { Children } from 'react'
import PropTypes from 'prop-types';

const Profile = props => {
    return (
        <div>
            <h1> First Name: {props.fullName} </h1>
            <h1>  bio: {props.bio} </h1>
            <h1> profession: {props.profession} </h1>
            <div> {props.children} </div>
            <button onClick={() => props.alertMyInput(`My name is Ahmed Fathallah`)}>Click Me </button>
        </div>
    )
}
//Let's Set a default props
Profile.defaultProps= {
    fullName: "Ahmed Fathallah"
};
//Now let's define a type for a proprety 
Profile.propTypes= {
   fullName: PropTypes.string
};
export default Profile
