Angular Bootstrap Collapse-Nav
=========

Angular Bootstrap Collapse-Nav is a directive for Angular apps with Bootstrap layouts that collapses the navigation in mobile layout when user selects a link.

Usage
---
Simply just add `collapse-on-click` attribute on `.navbar` element.

Example
---
```
<div id="main-navigation" class="navbar navbar-inverse navbar-fixed-top" role="navigation" collapse-on-click>
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Example Project</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#/link1">Link 1</a></li>
            <li><a href="#/link2">Link 2</a></li>
            <li><a href="#/link3">Link 3</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
</div>
```

Author and Licence
---
Crafted by Kacper "kulak" Kula under MIT Licence.
