
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
           counter = 0;
         });

        it('are defined', function() {

            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);

        });


         it('Urls defined',function(){

           allFeeds.forEach(function(item){
            //if there is url, increase the counter
             if(item.url)
              counter++;
           });
           // all elements have url if the counte === array.length
           expect(counter).toBe(allFeeds.length);

         });


         it('Names defined',function(){

           allFeeds.forEach(function(item){
               //if there is name, increase the counter
             if(item.name)
              counter++;
           });
           // all elements have name if the counte === array.length
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
           // if the body has the menu hidden class then the menu is hidden by default
           expect($('body').hasClass("menu-hidden")).toBe(true);
         });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes when icon clicke visibility',function(){
            // if the link that has the menu-icon-link class clicked then the body will not have the menu hidden class
            $('.menu-icon-link').click();
            // check if body not  have menu-hidden class
             expect($('body').hasClass("menu-hidden")).not.toBe(true);
          });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

      beforeEach(function(done) {
        //set time out becuase the test below test asynchronous method
        setTimeout(function() {
          //will whait until async is done
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
           //check if div that has feed class have any link (linls>0)
           expect($('.feed').has('a').length).not.toBe(0);
         });
   });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      //container before loadFeed();
      var containerContent = $('.feed');

      beforeEach(function(done) {
        //set time out becuase the test below test asynchronous method
        setTimeout(function() {
        //will whait until async is done
          done();
        }, 3000);
      });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         it('Content is Changing',function(){
           //check it the container before loadFeed() has the same elements after load feed
           expect(containerContent.children()).not.toBe($('.feed').children());
         });
   });
}());
