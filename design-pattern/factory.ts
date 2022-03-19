class IOSButton { }

class AndroidButton { }

let os = 'ios';

const button1 = os === 'ios' ? new IOSButton(): new AndroidButton();

class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    if (os === 'ios') {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}

const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);
