import React, { Component } from 'react'
import Modal from '../UI/Modal/Modal';

const withErrorHandler = (WrappedComopnent, axios) => {
  return class extends Component {

    constructor(props) {
      super(props);
      this.state = { error: null }

      axios.interceptors.request.use(req => {
        this.setState({ error: null })
        return req
      })
      axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error })

      })
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }
    render() {
      return (
        <>
          <Modal
            modalClosed={this.errorConfirmedHandler}
            show={this.state.error}>
            {this.state.error && this.state.error.message}
          </Modal>
          <WrappedComopnent {...this.props}>
          </WrappedComopnent>
        </>
      )
    }

  }
}

export default withErrorHandler;