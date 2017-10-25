
$(function() {

    describe('RSS Feeds', function(){

        it('are defined', function() {

            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('Urls defined',function(){

           allFeeds.forEach(function(item){

            //check if there is url
             expect(item.url).toBeDefined();
             //check if the url is not empty
             expect(item.url).not.toEqual("");
           });
         });

         it('Names defined',function(){

           allFeeds.forEach(function(item){

               //check if there is name
                expect(item.name).toBeDefined();
                //check if the name is not empty
                expect(item.name).not.toEqual("");
           });
         });
    });

    describe('The menu', function(){

          it('hidden by defualt',function(){

            // check if body have menu-hidden class by defualt
             expect($('body').hasClass("menu-hidden")).toBe(true);
          });

          it('is showing and hidding when clicked twise',function(){
            // if the link that has the menu-icon-link class clicked, then the body will not have the menu hidden class
            $('.menu-icon-link').click();
            // check if body not have menu-hidden class after link is clicked
             expect($('body').hasClass("menu-hidden")).not.toBe(true);

             // if the link that has the menu-icon-link class clicked clicked then the body will have the menu hidden clas
            $('.menu-icon-link').click();

          // check if the body has the menu hidden class after the second click on the link
          expect($('body').hasClass("menu-hidden")).toBe(true);

        });
    });

    describe('Initial Entries', function(){

      beforeEach(function(done){
        //load the fedd in index 0 and pass the done callback
        loadFeed(0,done);
      });

      it('at least one entry',function(){
           //check if div with class feed has any child with entry class
           expect($('.feed  .entry').length >= 1).toBe(true);
      });
   });

    describe('New Feed Selection', function(){

        var udacityFeeds;
        var cssTricksFeeds;

        beforeEach(function(done){
            // load udacityFeeds (index 0)
            loadFeed(0,function(){

              //set udacity feed
              udacityFeeds = $('.feed').html();
              //load cssTricksFeeds (index 1)
              loadFeed(1,function(){
                // make sure firs and second calss is done is done
                done();
              });
            });
          });

          it('Content is Changing',function(){

            /*
            To make sure the second loadFeed() call is executed
            I set the value of cssTricksFeeds inside the it callback function,
            becuse if I set cssTricksFeeds in beforeEach inside the loadFeed(0,function(){});
            it will be the same value as the udacityFeeds, and if I set it inside loadFeed(1,function(){})
            the jasmin time out error will be thrown and test case will fail
          */
            cssTricksFeeds = $('.feed').html();

            //check it the html of the first feed will have the same elements as the second feed
            expect(udacityFeeds).not.toEqual(cssTricksFeeds);

         });
   });
}());
