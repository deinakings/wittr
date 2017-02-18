import loadScripts from '../utils/loadScripts';
import TestController from './TestController';

const polyfillsNeeded = [];

if (!('fetch' in self)) polyfillsNeeded.push('/js/polyfills/fetch.js');

loadScripts(polyfillsNeeded, function() {

  const settingsForm = document.querySelector('.settings-form');
  
  settingsForm.addEventListener('change', () => {
    fetch(settingsForm.action, {
      method: settingsForm.method,
      body: new FormData(settingsForm)
    });
  });
  
  if (!self.fetch) {
    document.querySelector('.warning').style.display = 'block';
  }
  
  new TestController(document.querySelector('.tester'));
});