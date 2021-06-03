import React, {useState} from 'react';

const Accordion = (props) => {

    const [show, setshow] = useState(false);

    return (
        <div className="accordion" key={props.data.id}>
            <div className="qPanel">
                <button className="trigger" onClick = {() => setshow(!show)}>{ (show === false) ? <i className="fa fa-plus"></i> : <i class="fa fa-minus"></i>}</button>
                <h4>{props.data.question}</h4>
            </div>
            {
                (show === true) ? <p>{props.data.answer}</p> : ""
            }
            
        </div>
    )
}

export default Accordion;