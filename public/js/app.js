var app = angular.module('teamlotery', ['firebase'])

app.controller('main', function($scope, $firebaseObject, $firebaseArray){
   // Inicia um array vazio
   $scope.players = []
   $scope.teams = []
   var t = 0
   var j = 0
   var k = 0
   var l = 0
   var m = 0
   var nomes = ''
   $scope.displaySort = {'display': 'none'}
   $scope.teamsVisible = false;
  
   $('#myTxt').on('keyup', function(e) {
     if (e.keyCode === 13) {
        $('#mySubmit').click()
     }
   });

   $('#mySubmit').click(function() {
     console.log("Ok")
     $scope.AddPlayer()
   });

   $scope.AddTeam = function(){
     t = $scope.nTeams
    
     $scope.team = ""
    
     for (var i = 0; i <t; i++) 
     {
       $scope.teams.push([])
     }

     $scope.disableTeam = {'display': 'none'}
   }

   //Função que adicionara um novo player à coleção
   $scope.AddPlayer = function(){
     var p = {
       name: $scope.player
     }

     // Adiciona um player ao array do escopo
     $scope.players.push(p)
     $scope.player = ""
     angular.element("#myTxt").focus()
   }

    $scope.EndPlayer = function(){
     $scope.disableTeam = {'display': 'block'}
     $scope.disableList = {'display': 'none'}
   }

    $scope.GoSort = function(){
     $scope.disableTeam = {'display': 'none'}
     $scope.disableList = {'display': 'none'}
     $scope.displaySort = {'display': 'block'}
   }

   $scope.Sort = function(){
      $scope.teams = []
      $scope.AddTeam()
  
      $scope.disableList = {'display': 'none'}
  
      $scope.teamsVisible = true;
      
      shuffle($scope.players)
       
      for (var i = 0; i < $scope.players.length; i++) 
      {
            if(i < t)
            {
              if (i % t == i) 
              {
                $scope.teams[i].push($scope.players[i])
              }
            }
            else
            {
              if(j < t)
              {
                if (j % t == j)
                {
                  $scope.teams[j].push($scope.players[i])
                  j++
                }
              }
              else
              {
                if(k < t)
                {
                  if (k % t == k)
                  {
                    $scope.teams[k].push($scope.players[i])
                    k++
                  }
                }
                else
                {
                  if(l < t)
                  {
                    if (l % t == l)
                    {
                      $scope.teams[l].push($scope.players[i])
                      l++
                    }
                  }
                  else
                  {
                    if(m < t)
                    {
                      if (m % t == m)
                      {
                        $scope.teams[m].push($scope.players[i])
                        m++
                      }
                    }
                  }
                }
              }
            }
      }
      
      $scope.ableButton = {'visibility': 'visible'} 
      
      j=0
      k=0
      l=0
      m=0

   }

  function shuffle (array) {
  
    var i = 0
    , j = 0
    , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
})