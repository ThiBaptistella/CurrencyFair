import React from 'react';

import './modal.css';

const modal = (props) => {
    return (
       
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(-36vh) translateX(25vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Identify verification required</h3>
                    <p>For your security, we ocassionally require you to verify your identify by entering a code sent to your mobile device.</p>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue">CONTINUE</button>
                </div>
            </div>
        
    )
}

export default modal;