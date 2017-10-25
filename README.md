# To Get Started:
Download this project or clone it to your computer, and open index.html. you can see Jasmine test cases in the end of index.html


# For This Project:
## I test 4 main aspects of this Project:
1. RSS Feeds.
2. The sidebar menu.
3. Initial Entries that come from external api. **(async)**
4.  New Feed Selection that come. **(async)**

### For the first one:
I test the allFeeds array in app.js and make sure that every item has name and url. **(name and url must be defined and not empty)**

### For the second one:
I tested the sidebar **(in index.html)** and make sure that it is hidden by default and when the hamburger icon clicked, the menu appear and the menu will disappear if you click it again.
**(the class of the menu removed when icon clicked and appear when the menu closed).**

### For the third one:
I tested that the loadFeed() method load at least one entry by checking that the div with feed class has more than 0 entry.

### For the fourth one:
I tested that if you call loadFeed() twice with different parameters, the content will change.

## References:
- https://jasmine.github.io/2.0/introduction.html
- https://stackoverflow.com/questions/16840622/jasmine-checking-addclass-on-click
- http://api.jquery.com/html/
