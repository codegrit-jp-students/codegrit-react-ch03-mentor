import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';

export default class extends Component {
  state = {
    theme: 'light',
  }

  onSwitchTheme = (theme, e = null) => {
    if (e) e.preventDefault();
    this.setState({ theme })
  }

  render() {
    const { theme } = this.state;
    let instaCardClass = "insta-card";
    if (theme === 'dark') {
      instaCardClass = "insta-card insta-card-dark"
    }
    return (
      <div className="card-wrapper">
        <ThemeSwitcher 
          theme={theme}
          switchTheme={this.onSwitchTheme} />
        <article className={instaCardClass}>
          <Header theme={theme}/>
          <Body theme={theme}/>
        </article>
      </div>
    );
  }
}