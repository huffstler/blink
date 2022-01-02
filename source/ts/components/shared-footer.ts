import {Component, html} from 'htm/preact';

import ExternalAnchor from './external-anchor.js';

export default class SharedFooter extends Component {
  render() {
    const githubUrl = 'https://github.com/Bauke/blink';
    const versionText = `v${blinkVersion}/${blinkCommitHash}`;
    const versionUrl = `${githubUrl}/tree/${blinkCommitHash}`;

    return html`
      <footer class="shared-footer">
        <${ExternalAnchor} text="GitHub" url=${githubUrl} />
        ${' '}
        <${ExternalAnchor} text=${versionText} url=${versionUrl} />
      </footer>
    `;
  }
}
