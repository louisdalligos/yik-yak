import superagent from 'superagent'

export default {

  get: (url, params, callback) => {
    superagent
      .get(url)
      .query(params)
      .set('Accept', 'application/json')
      .end( (err, response) => {
        // test HTTP request
        if (err) {
          callback(err, null)
          alert('ERROR: ' + err)
        }

        // test our API request
        const confirmation = response.body.confirmation
        if ( confirmation != 'success' ) {
          callback({message: response.body.message}, null)
          return
        }

        callback(null, response.body)
      })
  },

  post: (url, body, callback) => {
    superagent
      .post(url)
      .send(body)
      .set('Accept', 'application/json')
      .end( (err, response) => {
        // test HTTTP request
        if (err) {
          callback(err, null)
          alert('ERROR: ' + err)
          return
        }

        // test our API request
        const confirmation = response.body.confirmation
        if ( confirmation != 'success' ) {
          callback({message: response.body.message}, null)
          return
        }

        callback(null, response.body)
      })
  },

  put: () => {

  },

  delete: () => {

  }
}
