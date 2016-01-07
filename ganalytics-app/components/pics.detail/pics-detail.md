#object
- see  overview page for now

##
2. Get the pics detail page working 
        - first with one 
            - need to use the stateParams service 


1. added pics-detail route to app.js 
    - includes 
    -- url pics-detail/:picId 
    -- and controller for now - with the $stateParams argument to get access to url data*
    -- jq* how do get the inidvidual data for the page 
        - ie title of pic; description;
        - looking at the phone detail controller in phonecat
        - service using ngResource module 
        NOTES of understanding so far 
            - resource module - is a form of http service
            - using phonecat as the basis to use it
              they do 2 things with it 
              - there file structure set up
                app
                   - phones
                    - phone-name-1.json
                    - phone-name-2.json
                    - phone-name-3.json
                    - phone-name-4.json  (more detailed data - one big object  )
                    -...
                    - phones.json   (array of objects - not all the data ) 
            1. query returns list
                    -they define query method/property* (as a get method) to use phones.json as the url parameter
                    - so it returns phones array*
                    - and in that controller they a) store it in phones var, b) they set orderProp to reference the age prop
            2.  
                    
         jq's good example 
            - array and json phones.json vs phone-name-1.json 
            - files json but phones is wrapped in array brackets
             
             - * see above
             - if did not install bower.json init in the beginning what is the eadies way to add them as dependencies 
             - json file has to be the same as the id value
            
               
                   ##Action: Get the phone detail working for 3 phones 
                        - create pics directory 
                        - 3 phones with title and pic  - but the rest leave the same or the way it is - I think you can with out a problem 
                        - finish the service without query
                        - jq* think always just start with one item. 
                         - the controller is not regesitering 
                         - the link wasn't working either 
                            - problem: seems you need to hace the parameter in scope - like any variable
                                - id added to the current service(array that I am using)
                                - and {{pic.picsId}} adding the current scope ng-repeat prefix and url works
                         
                         - break notes - can not get the parmeter to register with confid - or the routering
                            - NEXT found sample app 
                            https://github.com/angular-ui/ui-router/tree/master/sample/app
                            https://github.com/angular/angular-phonecat/blob/master/app/partials/phone-list.html
                            https://github.com/angular/angular-phonecat/blob/master/app/partials/phone-list.html
                            https://github.com/angular/angular-phonecat/blob/master/app/partials/phone-list.html
                            https://scotch.io/tutorials/3-simple-tips-for-using-ui-router
                            
                         - Results
                            got it to work - but can not get it to work with the child route patter. 
                              state parent.child
                              - it will not load the template 
                              - It works without 
                              - this should work for what I need for this simple app 
                              - lower on the totem pole for now - 
                         
                            
                 