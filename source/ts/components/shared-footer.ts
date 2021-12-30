import {Component, html} from 'htm/preact';

import ExternalAnchor from './external-anchor.js';

export default class SharedFooter extends Component {
  render() {
    return html`
      <footer class="shared-footer">
        <${ExternalAnchor} text="GitHub" url="https://github.com/Bauke/blink" />
        <span> v${blinkVersion} (${blinkCommitHash})</span>
      </footer>
    `;
  }
}
