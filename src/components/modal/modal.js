import React from 'react';

import './modal.css';

const modal = (props) => {
    return (
       
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(50%) translateX(50%)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Identify verification required</h3>
                    <p>For your security, we ocassionally require you to verify your identify by entering a code sent to your mobile device.</p>
            
                </div>
                <div className="modal-body">
                    
                        {props.children}
                
                </div>
                <div className="modal-footer">
                    <button className="btn-continue">Verify Indentify</button>
                    <button className="btn-cancel" onClick={props.close}>Back</button>
                    <a className="access" href="/">I can't access this mobile device</a>
                </div>
            </div>
        
    )
}

export default modal;