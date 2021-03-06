angular.module('VitApp')
       .factory('Auth', function(){
          var user;

          return{
              setUser : function(aUser){
                  user = aUser;
              },
              getUser: function() {
                return user
              },
              isLoggedIn : function(){
                  return(user)? user : false;
              },
              logout: function() {
                user = undefined;
              }
            }
        })
