import React, { useState } from "react";

export default function Tofollow({ nonFollowingEmployees, setNonFollowingEmployees, numFollowing }) {
    const [displayCount, setDisplayCount] = useState(5); // Initially display 5 employees

    // Create an object to track the "Following" state for each employee
    // const [followingState, setFollowingState] = useState({});

    const handleShowMore = () => {
        // Increase the number of employees to display
        setDisplayCount(displayCount + 5);
    };

    const handleFollowButton = (employee) => {
        // // Toggle the "Following" state for the clicked employee
        // setFollowingState(prevState => ({
        //     ...prevState,
        //     [employee.handle]: !prevState[employee.handle]
        // }));
        // Remove the clicked employee from the list
        setNonFollowingEmployees((prevEmployees) =>
            prevEmployees.filter((e) => e.handle !== employee.handle)
        );
        numFollowing();
    }


    return (
        <div className="to-follow">
            <h2>Follow Your Co-Workers</h2>

            <ul className="to-follow--employees">
                {nonFollowingEmployees.slice(0, displayCount).map(employee => (
                    <li key={employee.handle}>
                        {employee.handle}
                        <button
                            onClick={() => handleFollowButton(employee)}
                            className="follow-button"
                        >
                            Follow
                        </button>
                    </li>
                ))}
            </ul>

            <button className="show-more-button" onClick={handleShowMore}>
                Show More
            </button>


        </div>
    );
}
