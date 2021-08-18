const webdriverio = require('webdriverio');
const iosOptions = require('../../helpers/caps').iosOptions;
const assert = require('chai').assert;

describe('Basic IOS interactions', function () {
  let client;

  beforeEach(async function () {
    client = await webdriverio.remote(iosOptions);
  });

  afterEach(async function () {
    await client.deleteSession();
  });

  it('should change profile', async function() {
    const newSetProfile = {
      username: 'pengZhou',
    }
    // open profile page
    const accountButton = await client.findElement('accessibility id', 'account');
    await client.elementClick(accountButton.ELEMENT);
    const EditButton = await client.findElement('accessibility id', 'Edit');
    await client.elementClick(EditButton.ELEMENT);
    // get input element
    const usernameInput = await client.findElement('accessibility id', 'UsernameInput');
    // clear input
    client.elementClear(usernameInput.ELEMENT);
    // fill input
    client.elementSendKeys(usernameInput.ELEMENT, newSetProfile.username);
    // click done
    const doneButton = await client.findElement('accessibility id', 'Done');
    await client.elementClick(doneButton.ELEMENT);
    // check profile
    const usernameText = await client.findElement('xpath', `//XCUIElementTypeStaticText[@name="${newSetProfile.username}"]`);
    const username = await client.getElementAttribute(usernameText.ELEMENT, 'value');
    assert.equal(username, newSetProfile.username);
  })

  // it('should send keys to inputs', async function () {
  //   const elementId = await client.findElement('accessibility id', 'account');
  //   client.elementSendKeys(elementId.ELEMENT, 'Hello World!');

  //   const elementValue = await client.findElement('accessibility id', 'TextField1');
  //   await client.getElementAttribute(elementValue.ELEMENT, 'value').then((attr) => {
  //     assert.equal(attr, 'Hello World!');
  //   });
  // });

  // it('should click a button that opens an alert', async function () {
  //   const element = await client.findElement('accessibility id', 'show alert');
  //   await client.elementClick(element.ELEMENT);

  //   assert.equal(await client.getAlertText(), 'Cool title\nthis alert is so cool.');
  // });
});
