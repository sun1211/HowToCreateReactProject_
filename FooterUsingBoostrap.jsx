//Import react
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div class="m-5 pt-3 border border-primary border-left-0 border-right-0 border-bottom-0">
        <div class="row">

          <div class="col-md-5">
            <div class="row" id="EmailSupport">
              <p>
                Email Support:
                          <a href="https://mail.google.com/" class="text-primary">support@eosgui.com </a>
                <br />
                EOS is free & open source:
                          <a href="https://github.com/" class="text-primary"> GitHub</a>
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="row" id="Donations">
              <p>
                Donations are alway appreciated!
                  <br />
                EOSAccount: 123esogui123.
                <br />
                <p class="text-center">© 2018 EOSgui, Inc </p>
              </p>


            </div>
          </div>

          <div class="col-md-3">
            <img class="m-1" height="30" width="30" href="https://facebook.com/" src="../image/facebook.svg"></img>
            <img class="m-1" height="30" width="30" href="https://youtube.com/" src="../image/youtube.svg"></img>
            <img class="m-1" height="30" width="30" href="https://twitter.com/" src="../image/twitter.svg"></img>
            <img class="m-1" height="30" width="30" href="https://github.com/" src="../image/github.svg"></img>
            <img class="m-1" height="70" width="70" href="https://eosgui.com/" src="../image/eos.svg"></img>
          </div>

        </div>

      </div>
    )
  }
}

// export our Footer component.
export default Footer;