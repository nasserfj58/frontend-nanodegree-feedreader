
$(function() {
      function Feed(name,url){
        name = this.name;
        url = this.url;
      }
        describe('RSS Feeds', function() {
       

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



    describe('The menu', function() {



          it('changes when icon clicke visibility',function(){
            // if the link that has the menu-icon-link class clicked then the body will not have the menu hidden class
            $('.menu-icon-link').click();
            // check if body not  have menu-hidden class
             expect($('body').hasClass("menu-hidden")).not.toBe(true);
          });

          it('is hidden when click',function(){
            // if the link that has the menu-icon-link class clicked clicked then the body will have the menu hidden clas
            $('.menu-icon-link').click();
          // if the body has the menu hidden class then the menu is hidden by default
          expect($('body').hasClass("menu-hidden")).toBe(true);
        });
    });
    //last two issues
      describe('Initial Entries', function() {

      beforeEach(function(done) {
        //will whait until async is done
        loadFeed(0,done());
          

      });

      it('at least one entry',function(){

           //check if div that has feed class have any link (linls>0)
           expect($('.feed  .entry').length >= 1).toBe(true);
      });
   });

    describe('New Feed Selection', function() {
          //container before loadFeed();
          var containerContent;
          var containerContent2;

          beforeEach(function(done) {
            
              
            //will whait until async is done
              loadFeed(0,done());
            
          //set to feed div after first call
          containerContent = $('.feed').children();

          //will whait until async is done
          loadFeed(1, done());
           
         
          //set to feed div after second call
         containerContent2 = $('.feed').children();

          });
          it('Content is Changing',function(){
               //check it the container before loadFeed() has the same elements after load feed
            expect(containerContent).not.toBe(containerContent2);
         });
   });
}());
