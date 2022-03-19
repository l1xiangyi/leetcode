class Settings {

  static instance: Settings;
  public readonly mode = 'dark';

  private constructor() {

  }

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }

    return Settings.instance;
  }
}

// Throws error:
// const settings = new Settings()
const settings = Settings.getInstance();

// JavaScript language feature: object literal + global data
const settings_js = {
  dark: 'true'
}
