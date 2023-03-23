import React from 'react';

const Loader = ({width, height}: any) => {
    const style = {
        '--bs-spinner-width': width,
        '--bs-spinner-height': height,
        color: '#6666CC'
    }

    return (
        <div className="loader text-center">
            <div style={style} className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    );
};

export default Loader;
