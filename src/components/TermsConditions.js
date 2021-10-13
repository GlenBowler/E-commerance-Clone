import React from 'react'
import './TermsConditions.css'
import {Link} from "react-router-dom";

function TermsConditions() {
    return (
        <div className="terms_home">
            <Link to ='/'>
        <img className="login_img"src='mylogo.png'/>
            </Link>
        
        <div className="TermsConditions_container">
           <h2>Website Terms and Conditions</h2>
            <h3>Agreement to Terms</h3>
            <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and eZone , concerning your access to and use of the eZone.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).<br/><br/>
            You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.<br/><br/>
            Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. <br/><br/>
            We will alert you about any changes by updating the “Last updated” date of these Terms and Conditions, and you waive any right to receive specific notice of each such change. <br/><br/>
            It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your continued use of the Site after the date such revised Terms and Conditions are posted. <br/><br/>
            The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. <br/><br/>
            Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. <br/><br/>
            These terms and conditions were created using Termly.<br/><br/>
            Option 1: The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to register for the Site. <br/><br/>
            Option 2: [The Site is intended for users who are at least 13 years of age.] All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms and Conditions prior to you using the Site. <br/><br/>
            </p>
        </div>
    </div>
    )
}

export default TermsConditions
