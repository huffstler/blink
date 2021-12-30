import {Component, html} from 'htm/preact';

import SharedFooter from '../components/shared-footer.js';

export default class HomePage extends Component {
  render() {
    document.title = 'Blink';

    return html`
      <div class="home-page">
        <header>
          <h1>Blink</h1>
        </header>

        <${SharedFooter} />
      </div>
    `;
  }
}
