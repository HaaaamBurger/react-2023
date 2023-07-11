import React from 'react';

const Company = ({data}) => {
    const {company} = data;
    return (
        <div>
            <p>Company: {company.name} / CatchPhrase: {company.catchPhrase} / Bs: {company.bs}</p>
        </div>
    );
};

export {
    Company,
};