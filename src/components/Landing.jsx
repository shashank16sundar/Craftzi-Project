import React from 'react';
import titleStyles from "../titleStyle.module.css"; 

function Landing() {

  return (
    <div>
        <div className={titleStyles.wrapper}>
            <div className={titleStyles.staticTxt}>We</div>
                <ul className={titleStyles.dynamicTxts}>
                    <li className={titleStyles.liInLanding}><span className={titleStyles.spanClass}>Inspire</span></li>
                    <li className={titleStyles.liInLanding}><span className={titleStyles.spanClass}>Innovate</span></li>
                    <li className={titleStyles.liInLanding}><span className={titleStyles.spanClass}>Contribute</span></li>
                    <li className={titleStyles.liInLanding}><span className={titleStyles.spanClass}>Are Craftzi</span></li>
                </ul>
            </div>
    </div>
  )
}

export default Landing;