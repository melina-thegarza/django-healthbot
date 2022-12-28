import React, {Component} from 'react';

class HealthLink extends Component {
    
    render() {
        const link = this.props.step.metadata.link || '';
        const label = this.props.step.metadata.label || '';
        return (
            <a href={link}>
                {label}
            </a>
        );
    }
}

export default HealthLink;