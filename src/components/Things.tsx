import React, { Component }  from 'react';
import PropTypes from 'prop-types'

export default class Things extends Component {
	constructor(props: Readonly<{}>) {
		super(props)
		this.state = { isEmptyState: false, thingsId: "", childData: {} }
    }

    render() {
		return (
			<div className="item-component">
				
					<div className="item-list-container">
						<div className="form-item-group-title">
							<span>LISTING</span>
						</div>
						<div className="form-item-group">
							

						</div>
					</div>
				
			</div>
		)
	}
}

// Things.prototype = {
// 	dispatch: PropTypes.func.isRequired
// }