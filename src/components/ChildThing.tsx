import React, { Component }  from 'react';
import PropTypes from 'prop-types'

export default class ChildThing extends Component {
	constructor(props: any) {
		super(props)
		this.state = { isEmptyState: false, 
			itemId: "", requestDataById: {} }
		}
		
		render() {
			return (
				<div className="item-component">				
						<div className="item-list-container">
							<div className="form-item-group-title">
								<span>Child Items</span>
							</div>
							<div className="form-item-group">
								
	
							</div>
						</div>
					
				</div>
			)
		}
}