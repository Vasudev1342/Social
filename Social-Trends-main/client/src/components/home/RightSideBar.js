import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/loading.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="mt-3">
            <UserCard user={auth.user} />

            <div className="d-flex justify-content-between align-items-center my-2">
                <h5 className="text-danger">Suggestions for you</h5>
                {
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions">
                    {
                        suggestions.users.map(user => (
                            <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>
                        ))
                    }
                </div>
            }

            <div style={{opacity: 0.5}} className="my-2" >
                <div>
                <br>
            </br>
                    <p><b>ABOUT DEVELOPER :-</b></p>
                    <p><b>Follow Me On instagram : </b>
                    <a href="" target="_blank" rel="noreferrer"
                    style={{wordBreak: 'break-all'}} >
                        <button type="submit" className="btn btn-dark w-100">
                            Instagram
                        </button>
                    </a>
                    </p>
                </div>
                <div>
                    
                    <p><b>Let's connect us on linkedin : </b>
                    <a href="" target="_blank" rel="noreferrer"
                    style={{wordBreak: 'break-all'}} >
                        <button type="submit" className="btn btn-dark w-100">
                            Linkedin
                        </button>
                    </a>
                    </p>
                </div>
                <small className="d-block">
                    Welcome to our Social-Media-Website
                     
                </small>

                <small>
                   &copy; 2025 SOCIAL-TRENDS
                </small>
                {/* https://www.linkedin.com/in/ashish-ujjwal-a9bb03228?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B59qXAbZtQXaKxVjN3YXl0g%3D%3D */}
            </div>
        </div>
    )
}

export default RightSideBar
