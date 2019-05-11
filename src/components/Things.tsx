import React, { Component, Dispatch }  from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchDataIfNeeded}  from '../actions/index'
import ChildThing from './ChildThing';

export default class Things extends Component {
	constructor(props: Readonly<{}>) {
		super(props)
		this.state = { isEmptyState: false, thingsId: "", childData: {} }
    }
	componentDidMount() {		
		fetchDataIfNeeded("");
	  }
	
	  componentDidUpdate() {
		fetchDataIfNeeded("");
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


  function mapStateToProps(state:any) {
	const { selectedData, dataRecived } = state
	const { isFetching, items: data } = dataRecived[selectedData] || { isFetching: true, items: [] }
	return {
	  selectedData,
	  data,
	  isFetching    
	}
  }
  
  connect(mapStateToProps)(Things)