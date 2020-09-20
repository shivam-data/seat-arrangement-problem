function addrow(i) {
    var table = document.getElementById('seating-table');
    var row = table.insertRow();

    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)
    var cell7 = row.insertCell(6)
    var cell8 = row.insertCell(7)
    var cell9 = row.insertCell(8)
    var cell10 = row.insertCell(9)
    var cell11 = row.insertCell(10)


    thisrow = i+1
    cell1.innerText = thisrow;
    cell2.innerHTML = "<label class='toggle-button'><input type='checkbox' name='lock' value='a"+thisrow+"' /><i class='fa fa-lock'></i> </label>";
    cell3.innerHTML = "<label class='toggle-button'><input type='checkbox' name='lock' value='b"+thisrow+"' /><i class='fa fa-lock'></i> </label>";
    cell4.innerHTML = "<label class='toggle-button'><input type='checkbox' name='lock' value='c"+thisrow+"' /><i class='fa fa-lock'></i> </label>";
    cell5.innerHTML = "<label class='toggle-button'><input type='checkbox' name='lock' value='d"+thisrow+"' /><i class='fa fa-lock'></i> </label>";
    cell6.innerHTML = "<label class='toggle-button'><input type='checkbox' name='lock' value='e"+thisrow+"' /><i class='fa fa-lock'></i> </label>";
    cell7.innerHTML = "<label class='toggle-button'><input type='checkbox' name='lock' value='f"+thisrow+"' /><i class='fa fa-lock'></i> </label>";
    cell8.innerHTML = "<label class='toggle-button'><input type='checkbox' name='lock' value='g"+thisrow+"' /><i class='fa fa-lock'></i> </label>";
    cell9.innerHTML = "<label class='toggle-button'><input type='checkbox' name='lock' value='h"+thisrow+"' /><i class='fa fa-lock'></i> </label>";
    cell10.innerHTML = "<label class='toggle-button'><input type='checkbox' name='lock' value='i"+thisrow+"' /><i class='fa fa-lock'></i> </label>";
    cell11.innerHTML = "<label class='toggle-button'><input type='checkbox' name='lock' value='j"+thisrow+"' /><i class='fa fa-lock'></i> </label>";
    
}

function addrowform(rows){
    for(i=0;i<rows;i++){
        addrow(i)
    }
}


document.querySelector('#seat-form').addEventListener('submit',(e) => {
    e.preventDefault()
    var rows = document.querySelector('#input-row').value
    addrowform(rows)
})


document.querySelector('#seat-form-text').addEventListener('submit',(e)=>{
    e.preventDefault()
    var rows = document.getElementById('text-input-row').value
    var blockedSeats = document.getElementById('text-blockedinput-row').value.split(',')
    const seats = ['a','b','c','d','e','f','g','h','i','j']

    const blockedSeatjson = {}
    blockedSeats.forEach(seat => {
        blockedSeatjson[seat] = 1
    })

    let families = 0


    for(let i = 1 ; i<=rows; i++){

        let empty = 0

         for(let j = 0 ; j < 2 ; j++){

            if( !(blockedSeatjson[seats[j] + i] || blockedSeatjson[seats[j+1] + i]) ){
                empty += 1
                break
            }
         }

        for(let j = 3 ; j < 6 ; ){
            if( !(blockedSeatjson[seats[j] + i] || blockedSeatjson[seats[j+1] + i]) ){
                empty += 1

                if(j==3){
                    j += 2
                    continue
                }

                if(j==4){
                    break
                }
            }

            j++
         }

         for(let j = 7 ; j < 9 ; j++ ){
            if
        ( !(blockedSeatjson[seats[j] + i] || blockedSeatjson[seats[j+1] + i]) ){
                empty += 1
                break
            }
         }

        families += Math.floor(empty/2)
    }
    console.log('family count',families)
    document.getElementById('text-result').innerText = "Number of Families: " + families


})


document.getElementById('find-families').addEventListener('click',()=>{
    var checkboxes = document.getElementsByName('lock');
    var checkboxesChecked = [];

    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
           checkboxesChecked.push(checkboxes[i].value);
        }
     }
    findfamilies(checkboxesChecked)
})


function findfamilies(checkboxesChecked){

    var rows = document.getElementById('input-row').value
    const blockedSeats = checkboxesChecked
    const seats = ['a','b','c','d','e','f','g','h','i','j']

    const blockedjson = {}
    blockedSeats.forEach(seat => {
        blockedjson[seat] = 1
    })

    let famililies = 0


    for(let i = 1 ; i<=rows; i++){

        let empty = 0

         for(let j = 0 ; j < 2 ; j++){           

            if( !(blockedjson[seats[j] + i] || blockedjson[seats[j+1] + i]) ){
                empty += 1
                break
            }
         }

        for(let j = 3 ; j < 6 ; ){           
            if( !(blockedjson[seats[j] + i] || blockedjson[seats[j+1] + i]) ){
                empty += 1

                if(j==3){
                    j += 1
                    continue
                }

                if(j==4){
                    break
                }
            }

            j++
         }

         for(let j = 7 ; j < 9 ; j++ ){           
            if
        ( !(blockedjson[seats[j] + i] || blockedjson[seats[j+1] + i]) ){
                empty += 1
                break
            }
         }
         
        famililies += Math.floor(empty/2)
    }
    console.log('family count',famililies)
    document.getElementById('find-families').innerText = "Number of Families: " + famililies
}