import React from 'react'

const AmountBox = ({ title, bgColor, amount }) => {
    return (
        <div className="col-md-4 col-4">
            <div className="card">
                <div className={`card-header bg-${bgColor} text-white`}>
                    {title}
                </div>
                <div className="card-body">
                    {amount}
                </div>
            </div>
        </div>
    )
}

export default AmountBox;

