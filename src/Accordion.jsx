import React from 'react'

const Accordion = () => {
    return (
        <div className="accordion">
            <div className="qPanel">
                <button className="trigger"><i class="fa fa-plus"></i></button>
                <h4>Here goes the question</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt iste quis quos voluptatum voluptates deleniti sed repellat similique ab doloribus!</p>
        </div>
    )
}

export default Accordion;