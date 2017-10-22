
$(function() {

        describe('RSS Feeds', function() {
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



    describe('The menu', function() {

           it('is hidden',function(){
           // if the body has the menu hidden class then the menu is hidden by default
           expect($('body').hasClass("menu-hidden")).toBe(true);
         });

          it('changes when icon clicke visibility',function(){
            // if the link that has the menu-icon-link class clicked then the body will not have the menu hidden class
            $('.menu-icon-link').click();
            // check if body not  have menu-hidden class
             expect($('body').hasClass("menu-hidden")).not.toBe(true);
          });
    });

      describe('Initial Entries', function() {

      beforeEach(function(done) {
        //set time out becuase the test below test asynchronous method
        setTimeout(function() {
          //will whait until async is done
          done();
        }, 3000);
      });

      it('at least one entry',function(){
           //check if div that has feed class have any link (linls>0)
           expect($('.feed').has('a').length).not.toBe(0);
      });
   });

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
          it('Content is Changing',function(){
               //check it the container before loadFeed() has the same elements after load feed
            expect(containerContent.children()).not.toBe($('.feed').children());
         });
   });
}());
