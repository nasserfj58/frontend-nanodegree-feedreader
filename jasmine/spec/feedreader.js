
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         var counter;

         beforeEach(function() {
           counter=0;
         });

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('Urls defined',function(){

           allFeeds.forEach(function(item){

             if(item.url)
              counter++;
           });

           expect(counter).toBe(allFeeds.length);

         });


         it('Names defined',function(){

           allFeeds.forEach(function(item){

             if(item.name)
              counter++;
           });

           expect(counter).toBe(allFeeds.length);

         });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden',function(){
           expect($('body').hasClass("menu-hidden")).toBe(true);
         });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes when icon clicke visibility',function(){
            $('.menu-icon-link').click();
             expect($('body').hasClass("menu-hidden")).toBe(false);
          });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

      beforeEach(function(done) {
        setTimeout(function() {

          done();
        }, 3000);
      });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('at least one entry',function(){
           expect($('.feed').has('a').length).not.toBe(0);
         });
   });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      var containerContent = $('.feed');
      beforeEach(function(done) {
        setTimeout(function() {

          done();
        }, 3000);
      });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         it('Content is Changing',function(){
           expect(containerContent.children()).not.toBe($('.feed').children());
         });
   });
}());
