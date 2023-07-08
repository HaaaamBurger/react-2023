import React from 'react';

const Launch = (props) => {
    const {launch} = props;
    return (
        <div>
            {launch.launch_year != 2020 ? <div>
                    <h2>{launch.mission_name}</h2>
                    <p>{launch.launch_year}</p>
                    <img src={launch.links.mission_patch_small} alt=""/>
                </div>: null}
        </div>
    );
};

export {
    Launch,
};