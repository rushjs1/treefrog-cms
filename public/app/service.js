var TREEFROG_SERVICE = (function() {
  var _getGetStartedContent = function() {
    let contentStr = `<h1>Treefrogcms</h1><p>This is the screen where you will create your navigation and page content.</p><p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p><pOnce you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>`;
    return contentStr;
  };
  var _getCreateNavButton = function() {
    let buttonString = `<span class="btn btn-dark main-nav">Create Main Nav</span><span class="btn btn-dark">Create Sub Nav</span>`;
    return buttonString;
  };
  var _getHomeContent = function() {
    let homeContent = ` <h1>Welcome to the Treefrog CMS</h1>
    <p>
      Here you will create your content for your webpages. You won't be able
      to create all page elements but only the content for the page.
    </p>

    <p>
      You must first create the navigation. Once you have the navigation
      created you can add page content and publish the page. You can even
      add sub navigation as well.
    </p>

    <p>
      Your fist step is to click on the Add Navigation link and add your
      first navigation link.
    </p>`;
    return homeContent;
  };

  var _getHomeStartButton = function() {
    let startBtn = `<span class="btn btn-dark get-started">Get Started</span>`;
    return startBtn;
  };
  var _getMainModalContent = function() {
    let showContent = `
    <div class="alert-box-wrapper">
    <div class="alert-box-text-wrapper">
    <h2>Use this box to create navigation links</h2>
    <p>You can create main navigation and sub navigation. To create sub-navigation you will need to first select a main nav and then create the sub nav.</p>
    <p>Use the text box below to enter the name of your main navigation.</p>
    <input placholder="Main Navigation">
    </div>
    <div class="alert-box-btn-wrapper">
    <span class="btn btn-light">Create Sub Nav</span>
    <span class="btn btn-light">Cancel</span>
    </div>
    </div>`;
    return showContent;
  };

  return {
    getGetStartedContent: _getGetStartedContent,
    getCreateNavButtons: _getCreateNavButton,
    getHomeContent: _getHomeContent,
    getHomeStartButton: _getHomeStartButton,
    getMainModalContent: _getMainModalContent
  };
})();
