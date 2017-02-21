!function() {

   var operation = d3.select('body').append('div').append('h2');

   data = 
      [  
        {  
          "key":"Blackberry Pearl",
          "values":[  
            {"axis":"Push email availability", "value":	8.2	 },
            {"axis":"Email folders synchronization", "value":	8	 },
            {"axis":"Compact", "value":	6.9	 },
            {"axis":"Quality of display", "value":	7.5	 },
            {"axis":"Product image", "value":	5.9	 },
            {"axis":"Segment I", "value":	8.428571429	 },
            {"axis":"High prestige", "value":	7.2	 },
            {"axis":"Software selection", "value":	7	 },
            {"axis":"Ease of use for navigation", "value":	5.5	 },
            {"axis":"Comfortable to call", "value":	7.4	 },
            {"axis":"User friendliness", "value":	6.6	 },
            {"axis":"Brand image", "value":	8.6	 },
            {"axis":"Speed in accessing email", "value":	6.4	 },
            {"axis":"Display size ", "value":	6.5	 },
            {"axis":"Media quality", "value":	6.1	 },
            {"axis":"Segment II", "value":	5.545454545	 },
            {"axis":"CNET Editor’s rating", "value":	7.3	 },
            {"axis":"Instant messaging availability", "value":	7.2	 },
            {"axis":"Ease of use for typing ", "value":	5.7	 },
            {"axis":"Segment III", "value":	5.6	 },
            {"axis":"Camera quality", "value":	5.7	 }
          ]
        },
        {  
          "key":"Nokia 9300",
          "values":[  
            {"axis":"Push email availability", "value":	6.4	 },
            {"axis":"Email folders synchronization", "value":	6.4	 },
            {"axis":"Compact", "value":	4.5	 },
            {"axis":"Quality of display", "value":	5.1	 },
            {"axis":"Product image", "value":	5	 },
            {"axis":"Segment I", "value":	6.19047619	 },
            {"axis":"High prestige", "value":	5.5	 },
            {"axis":"Software selection", "value":	6.3	 },
            {"axis":"Ease of use for navigation", "value":	4.2	 },
            {"axis":"Comfortable to call", "value":	4.2	 },
            {"axis":"User friendliness", "value":	4.1	 },
            {"axis":"Brand image", "value":	6.5	 },
            {"axis":"Speed in accessing email", "value":	6.3	 },
            {"axis":"Display size ", "value":	6.4	 },
            {"axis":"Media quality", "value":	5.9	 },
            {"axis":"Segment II", "value":	7.181818182	 },
            {"axis":"CNET Editor’s rating", "value":	6.3	 },
            {"axis":"Instant messaging availability", "value":	6.7	 },
            {"axis":"Ease of use for typing ", "value":	4.5	 },
            {"axis":"Segment III", "value":	4.36	 },
            {"axis":"Camera quality", "value":	0.5	 }
          ]
        },
        {  
          "key":"Palm Treo",
          "values":[  
            {"axis":"Push email availability", "value":	7.4	 },
            {"axis":"Email folders synchronization", "value":	7.1	 },
            {"axis":"Compact", "value":	5.7	 },
            {"axis":"Quality of display", "value":	6.3	 },
            {"axis":"Product image", "value":	5.4	 },
            {"axis":"Segment I", "value":	7.023809524	 },
            {"axis":"High prestige", "value":	6.9	 },
            {"axis":"Software selection", "value":	6.8	 },
            {"axis":"Ease of use for navigation", "value":	6.5	 },
            {"axis":"Comfortable to call", "value":	6.9	 },
            {"axis":"User friendliness", "value":	7.2	 },
            {"axis":"Brand image", "value":	8.5	 },
            {"axis":"Speed in accessing email", "value":	6.5	 },
            {"axis":"Display size ", "value":	6.5	 },
            {"axis":"Media quality", "value":	7	 },
            {"axis":"Segment II", "value":	4.454545455	 },
            {"axis":"CNET Editor’s rating", "value":	7.7	 },
            {"axis":"Instant messaging availability", "value":	5.1	 },
            {"axis":"Ease of use for typing ", "value":	6.2	 },
            {"axis":"Segment III", "value":	4.32	 },
            {"axis":"Camera quality", "value":	6.2	 }
          ]
        },
        {  
          "key":"Motorola Q",
          "values":[  
            {"axis":"Push email availability", "value":	6.4	 },
            {"axis":"Email folders synchronization", "value":	6.3	 },
            {"axis":"Compact", "value":	6.7	 },
            {"axis":"Quality of display", "value":	7.3	 },
            {"axis":"Product image", "value":	4.9	 },
            {"axis":"Segment I", "value":	7.857142857	 },
            {"axis":"High prestige", "value":	6.8	 },
            {"axis":"Software selection", "value":	6.5	 },
            {"axis":"Ease of use for navigation", "value":	6.1	 },
            {"axis":"Comfortable to call", "value":	6.1	 },
            {"axis":"User friendliness", "value":	7.3	 },
            {"axis":"Brand image", "value":	7.2	 },
            {"axis":"Speed in accessing email", "value":	8	 },
            {"axis":"Display size ", "value":	7.4	 },
            {"axis":"Media quality", "value":	6.9	 },
            {"axis":"Segment II", "value":	3.121212121	 },
            {"axis":"CNET Editor’s rating", "value":	8	 },
            {"axis":"Instant messaging availability", "value":	5.3	 },
            {"axis":"Ease of use for typing ", "value":	7.4	 },
            {"axis":"Segment III", "value":	4.68	 },
            {"axis":"Camera quality", "value":	6.6	 }
          ]
        },
        {  
          "key":"Sidekick3",
          "values":[  
            {"axis":"Push email availability", "value":	4.5	 },
            {"axis":"Email folders synchronization", "value":	1.2	 },
            {"axis":"Compact", "value":	3.6	 },
            {"axis":"Quality of display", "value":	3.8	 },
            {"axis":"Product image", "value":	4	 },
            {"axis":"Segment I", "value":	2.928571429	 },
            {"axis":"High prestige", "value":	1.2	 },
            {"axis":"Software selection", "value":	3	 },
            {"axis":"Ease of use for navigation", "value":	3.6	 },
            {"axis":"Comfortable to call", "value":	3.1	 },
            {"axis":"User friendliness", "value":	4	 },
            {"axis":"Brand image", "value":	3	 },
            {"axis":"Speed in accessing email", "value":	6.2	 },
            {"axis":"Display size ", "value":	7.2	 },
            {"axis":"Media quality", "value":	6.4	 },
            {"axis":"Segment II", "value":	3.424242424	 },
            {"axis":"CNET Editor’s rating", "value":	7.3	 },
            {"axis":"Instant messaging availability", "value":	7.2	 },
            {"axis":"Ease of use for typing ", "value":	6.8	 },
            {"axis":"Segment III", "value":	7.04	 },
            {"axis":"Camera quality", "value":	4.2	 }
          ]
        },
        {  
          "key":"Sony Ericsson",
          "values":[  
            {"axis":"Push email availability", "value":	6	 },
            {"axis":"Email folders synchronization", "value":	6.2	 },
            {"axis":"Compact", "value":	5.1	 },
            {"axis":"Quality of display", "value":	6.2	 },
            {"axis":"Product image", "value":	4.1	 },
            {"axis":"Segment I", "value":	5.380952381	 },
            {"axis":"High prestige", "value":	4	 },
            {"axis":"Software selection", "value":	6.5	 },
            {"axis":"Ease of use for navigation", "value":	6.1	 },
            {"axis":"Comfortable to call", "value":	5.2	 },
            {"axis":"User friendliness", "value":	6	 },
            {"axis":"Brand image", "value":	4.5	 },
            {"axis":"Speed in accessing email", "value":	8.1	 },
            {"axis":"Display size ", "value":	7.3	 },
            {"axis":"Media quality", "value":	7.8	 },
            {"axis":"Segment II", "value":	3.606060606	 },
            {"axis":"CNET Editor’s rating", "value":	7.7	 },
            {"axis":"Instant messaging availability", "value":	1.5	 },
            {"axis":"Ease of use for typing ", "value":	5	 },
            {"axis":"Segment III", "value":	4.36	 },
            {"axis":"Camera quality", "value":	1.3	 }
          ]
        }
      ];

   setTimeout(function() { 
      radarChart.data(data).duration(1000).update();
      radarChart.height(750).width(750).options({'areas': {'dotRadius': 1}}).update();
      radarChart.options({'legend': {display: true}});
      radarChart.colors({'Blackberry Pearl': 'blue',
                         'Palm Treo': 'lightblue',
                         'Motorola Q': 'violet',
                         'Nokia 9300': 'lightgreen',
                         'Sony Ericsson': 'orange',
                         'Sidekick3': 'green'}).update();
   }, 0);
   /*
   setTimeout(function() { 
      var one = radarChart.slice(0, 1);
      radarChart.data(one).update();
   }, 3000);
   */
}();
