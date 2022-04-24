/**
 * @jest-environment jsdom
 */

import Popover from '../Popover';

describe('Popover shows and disappears', () => {
  document.body.innerHTML = `<section>
    <div class="container">
      <h2 class="container-title">Sample Element</h2>
      <button class="popover-button">Click to toggle popover</button>
    </div>
  </section>`;

  const button = document.querySelector('.popover-button');
  const parent = document.querySelector('.container');
  const title = 'Popover Title';
  const text = 'Popover text';
  const popover = new Popover(parent, title, text);

  button.addEventListener('click', () => {
    popover.init();
  });

  test('Popover shows after clicking button first time', () => {
    button.click();

    expect(document.body.querySelector('.popover')).toBeTruthy();
    expect(document.querySelector('.popover-header')).toBeTruthy();
    expect(document.querySelector('.popover-header').textContent).toBe(title);
    expect(document.querySelector('.popover-message')).toBeTruthy();
    expect(document.querySelector('.popover-message').textContent).toBe(text);
  });

  test('Popover disappears after clicking the button second time', () => {
    button.click();

    expect(document.body.querySelector('.popover')).toBeFalsy();
    expect(document.querySelector('.popover-header')).toBeFalsy();
    expect(document.querySelector('.popover-message')).toBeFalsy();
  });

  test('Popover shows after clicking the button third time', () => {
    button.click();

    expect(document.body.querySelector('.popover')).toBeTruthy();
    expect(document.querySelector('.popover-header')).toBeTruthy();
    expect(document.querySelector('.popover-header').textContent).toBe(title);
    expect(document.querySelector('.popover-message')).toBeTruthy();
    expect(document.querySelector('.popover-message').textContent).toBe(text);
  });
});
