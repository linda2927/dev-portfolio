import React from 'react';
import classes from './SpaceGemRedirect.module.css';

const SpaceGemRedirect = () => {
    const openGameHandler = () => {
        const strWindowFeatures =
            'location=yes,height=800,width=1300,scrollbars=no,status=yes';
        window.open('/SpaceGemWebGL/index.html', '_blank', strWindowFeatures);
    };

    return (
        <div className={classes['space-gem-btn']}>
            <hr />
            <button type={'button'} onClick={openGameHandler}>
                π κ²μνλ¬ κ°κΈ° (PC only) π
            </button>
        </div>
    );
};

export default SpaceGemRedirect;
