import {html, Component} from 'htm/preact';

type Props = {
  extra?: Record<string, string>;
  text: string;
  url: string;
};

export default class ExternalAnchor extends Component<Props> {
  render() {
    const {extra, text, url} = this.props;

    return html`
      <a href="${url}" target="_blank" rel="noopener noreferrer" ...${extra}>
        ${text}
      </a>
    `;
  }
}
