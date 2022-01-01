// Uncomment when debugging and using Preact's DevTools WebExtension.
// import 'preact/debug';

import '@fontsource/inter/latin.css';

import {html, render} from 'htm/preact';
import {Router} from 'preact-router';

import HomePage from './pages/home.js';
import NotFoundPage from './pages/not-found.js';
import ReleasePage from './pages/release.js';

render(
  html`
    <${Router}>
      <${HomePage} path="/" />
      <${ReleasePage} path="/release/:mbid" />
      <${NotFoundPage} default />
    <//>
  `,
  document.body,
);
