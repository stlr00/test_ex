import React from "react";
import Form from "./Form";
import Card from "./Card";
import {connect} from "react-redux";

function Container({ads}) {
    return(
        <div className="container mt-3">
            <Form />
            {ads.map(ad => <Card key={ad.id} ad={ad} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ads: state
    }
}

export default connect(mapStateToProps, null) (Container)
