
const html = require('bel')

module.exports = function designParameters (state, paramsCallbacktoStream) {
  const status = state.status
  const statusMessage = status.error !== undefined
  ? `Error: ${status.error.message} line: ${status.error.lineno}, filename:${status.error.filename} stack:  ${status.error.stack}` : ''
  const busy = status.busy
  return html`
      <span id='status'>${statusMessage}
        <span id='busy'>${busy ? 'processing, please wait' : ''}</span>
    </span>
  `
}
