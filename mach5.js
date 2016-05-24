var myMap=new Map;
var result=[], count=[0,0,0,0,0,0,0,0,0],count1=[0,0,0];;
var c=["Canada","Netherlands","United Kingdom","United States","Australia","Germany","France","Spain",
      "South Africa","Denmark","Sweden","Norway","Switzerland","Portugal","Greece","Italy","Belgium","Croatia","Albania"];

var fs = require("fs"),
readline = require('readline'),
rl = readline.createInterface({
  input: fs.createReadStream('FoodFacts.csv')});

  rl.on('line', (line) => {
    //rl.pause();
    var obj = {};
    var headers=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    //console.log(headers);
    //console.log(headers[33]+"   ("+headers[33].length+"  size of val "+headers[116].length);
  //  for(var i=0;i<headers.length;i++)
  //  {
    //  console.log(headers[i]+"->"+i);
    //var headers=lines[0].split(",");
    // console.log(headers[33]+"   ->>"+headers[116]+"   ->>"+headers[102]);
    //console.log((typeof headers[33])+"   ->>"+headers[116]+"   ->>"+headers[102]);
    //if(headers[33]=="countries_en" ||headers[33]=="Canada" || headers[33]=="Netherlands" ||
    //    headers[33]=="United Kingdom" || headers[33]=="United States" || headers[33]=="Australia" ||
    //    headers[33]=="Germany" || headers[33]=="France" || headers[33]=="Spain" || headers[33]=="South Africa")
  //  {
        //console.log("inside first if->"+myMap.has(headers[33]));
        //console.log("counrty->"+headers[33]+"   salt->"+headers[116]+"   sugar->"+headers[102]);
        //if(k>0)
        //{
        //obj["country"] = headers[33];
        //obj["saltPlusSugar"] = parseInt(headers[116])+parseInt(headers[102]);
        //result.push(obj);
        //}
        //k++;
        headers[116]=(parseInt(headers[116])==null || isNaN(parseInt(headers[116])))?0:parseInt(headers[116]);
      //  console.log(typeof headers[116]+"  "+headers[116]);
        headers[102]=(parseInt(headers[102])==null || isNaN(parseInt(headers[102])))?0:parseInt(headers[102]);
      //  console.log(typeof headers[102]+"  "+ headers[102]);

      headers[101]=(parseInt(headers[101])==null || isNaN(parseInt(headers[101])))?0:parseInt(headers[101]);
      headers[86]=(parseInt(headers[86])==null || isNaN(parseInt(headers[86])))?0:parseInt(headers[86]);
      headers[65]=(parseInt(headers[65])==null || isNaN(parseInt(headers[65])))?0:parseInt(headers[65]);

        if(headers[33]==c[0])
          count[0]= count[0]+headers[116]+headers[102];
        else if(headers[33]==c[1])
          count[1]= count[1]+headers[116]+headers[102];
        else if(headers[33]==c[2])
          count[2]= count[2]+headers[116]+headers[102];
        else if(headers[33]==c[3])
          count[3]= count[3]+headers[116]+headers[102];
        else if(headers[33]==c[4])
          count[4]= count[4]+headers[116]+headers[102];
        else if(headers[33]==c[5])
          count[5]= count[5]+headers[116]+headers[102];
        else if(headers[33]==c[6])
          count[6]= count[6]+headers[116]+headers[102];
        else if(headers[33]==c[7])
          count[7]= count[6]+headers[116]+headers[102];
        else if(headers[33]==c[8])
          count[8]= count[8]+headers[116]+headers[102];

        if(headers[33]==c[2] || headers[33]==c[9] || headers[33]==c[10] || headers[33]==c[11])
          count1[0]=count1[0]+headers[101]+headers[86]+headers[65];
        else if(headers[33]==c[6] || headers[33]==c[16] || headers[33]==c[5] || headers[33]==c[12] || headers[33]==c[1])
          count1[1]=count1[1]+headers[101]+headers[86]+headers[65];
        else if(headers[33]==c[13] || headers[33]==c[14] || headers[33]==c[15] || headers[33]==c[17] || headers[33]==c[18] || headers[33]==c[7])
          count1[2]=count1[2]+headers[101]+headers[86]+headers[65];
    //  }

        //console.log(count);
        //}

        //rl.close();
        //console.log(JSON.stringify(obj));
   });// end of rl on function
  rl.on('close',function(){

    console.log('Readline closed');
    console.log(count);

    var objArray = [];
    for (var i = 0; i < 9; i++) {
        objArray[i] = {};

        //var key = ar[0][k];
        objArray[i]["countries"] = c[i];
        objArray[i]["saltPlusSugar"] = count[i];

        }

        var outputFilename1 = 'countriesSaltAndSugar.json';

    fs.writeFile(outputFilename1, JSON.stringify(objArray, null, 4), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + outputFilename1);
      }
      console.log(JSON.stringify(objArray));
      objArray = [];
      var regions=["northern","central","southern"];
      for (var i = 0; i < 3; i++) {
          objArray[i] = {};

          //var key = ar[0][k];
          objArray[i]["regions"] = regions[i];
          objArray[i]["fatProteinCarbohydate"] = count1[i];

          }


           });

      outputFilename1 = 'regionalConsumption.json';
      fs.writeFile(outputFilename1, JSON.stringify(objArray, null, 4), function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("JSON saved to " + outputFilename1);
        }
        console.log(JSON.stringify(objArray));

    });
});
    //console.log(JSON.stringify(objArray));

  rl.on('pause', () => {
  console.log('Readline paused.');
  //console.log(result);
});
console.log("DONEEEEEE");
