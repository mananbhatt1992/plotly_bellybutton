const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));



    d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

    d3.json(url).then(spaceXResults =>
        console.log(spaceXResults[0].location.latitude));


        d3.json(url).then(function(data) {
            console.log(data);
        
            var lats = data.map(x => x.location.latitude);
            var longs = data.map(x => x.location.longitude);
            console.log(lats);
            console.log(longs);
        });



        d3.json("samples.json").then(function(data){
            console.log(data);
        });


        d3.json("samples.json").then(function(data){
            wfreq = data.metadata.map(person => person.wfreq);
            console.log(wfreq);
        });


        d3.json("samples.json").then(function(data){
            wfreq = data.metadata.map(person =>
        person.wfreq).sort((a,b) => b - a);
            console.log(wfreq);
        });


        d3.json("samples.json").then(function(data){
            wfreq = data.metadata.map(person =>
        person.wfreq).sort((a,b) => b - a);
            filteredWfreq = wfreq.filter(element => element !=
        null);
            console.log(filteredWfreq);
        });


        d3.json("samples.json").then(function(data){
            firstPerson = data.metadata[0];
            Object.entries(firstPerson).forEach(([key, value]) =>
              {console.log(key + ': ' + value);});
        });