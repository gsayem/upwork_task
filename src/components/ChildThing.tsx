import React, { Component }  from 'react';
import PropTypes from 'prop-types'

export default class ChildThing extends Component {
	constructor(props: any) {
		super(props)
		this.state = { isEmptyState: false, itemId: 0, requestDataById: {}, similarData: {} }
    }
}