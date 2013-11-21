var people = [{ nrCrt: 1, 
			  firstName: "John", 
			  lastName: "Lennon", 
			  age: 24, 
			  dateOfEmployment: "15.04.1940", 
			  department: "Beatles" },
			  
             { nrCrt: 2, 
			  firstName: "Paul", 
			  lastName: "McCartney", 
			  age: 24, 
			  dateOfEmployment: "19.07.1940", 
			  department: "Beatles" },
			  
             { nrCrt: 3, 
			  firstName: "Ringo", 
			  lastName: "Starr", 
			  age: 24, 
			  dateOfEmployment: "25.01.1940", 
			  department: "Beatles" },
			  
             { nrCrt: 4, 
			  firstName: "George", 
			  lastName: "Harrison", 
			  age: 24, 
			  dateOfEmployment: "1.11.1940", 
			  department: "Beatles" }
];

function createPeopleTable(people) {
    var table = document.getElementById("table");
    var tableHead = document.createElement('thead');
    var tableBody = document.createElement('tbody');
    tableBody.setAttribute('id', "tbody");
    var i = 0;
    console.log(people.length);
    while (i < people.length) {
        createRow(people[i], tableBody);
        i++;
    }
    table.appendChild(tableBody);
    document.body.appendChild(table);
}

function createRow(person, tableBody) {
    var row = document.createElement('tr');
    /*sau fara iteratie pe prop din array, ci scris fiecare*/
    for (var prop in person) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(person[prop]));
        row.appendChild(cell);
    }
    tableBody.appendChild(row);
}

/*when the button Add Row is pressed, the new row for editing appears*/
function addRow() {

    var table = document.getElementById("table");

    /*add row to insert new person*/
    var rowCount = table.rows.length;
    var colCount = table.rows[0].cells.length;
    var row = table.insertRow(rowCount);
    var i = 0;
    while (i < colCount) {
        var cell = row.insertCell(i);
        var inputText = document.createElement("input");
        inputText.type = "text";

        cell.appendChild(inputText);
        if (i === colCount - 1) {
            /*create button Save*/
            var div = document.createElement('div');
            var saveButton = document.createElement("input");
            saveButton.setAttribute('value', 'Save');
            saveButton.setAttribute('type', 'button');
            saveButton.setAttribute('onClick', "savePerson()");
            div.appendChild(saveButton);

            /*create button Cancel*/
            var cancelButton = document.createElement("input");
            cancelButton.value = "Cancel";
            cancelButton.setAttribute('type', 'button');
            cancelButton.setAttribute('onClick', 'cancelRow(' + (rowCount) + ')');
            div.appendChild(cancelButton);

            row.appendChild(div);
        }

        i++;
    }
}

/*when the Cancel button is pressed, the new person row is deleted*/
function cancelRow(rowNumber) {
    console.log("ceva");
    document.getElementById("table").deleteRow(rowNumber);
}

/*when the button Save is pressed, the new person row is added to the table*/
function savePerson() {
    var table = document.getElementById("table");
    var tBody = document.getElementById("tbody");
    var rowCount = table.rows.length;
    var colCount = table.rows[0].cells.length;
    //var newPerson = new Person();

    var newPerson = {
        nrCrt: table.rows[rowCount - 1].cells[0].children[0].value,
        firstName: table.rows[rowCount - 1].cells[1].children[0].value,
        lastName: table.rows[rowCount - 1].cells[2].children[0].value,
        age: table.rows[rowCount - 1].cells[3].children[0].value,
        dateOfEmployment: table.rows[rowCount - 1].cells[4].children[0].value,
        department: table.rows[rowCount - 1].cells[5].children[0].value
    }

    array.push(newPerson);

    /*delete the editing row*/
    cancelRow(table.rows.length - 1);

    var tableBody = document.getElementById("tbody");
    createRow(newPerson, tableBody);
    setExtraButtons(tableBody.rows[tableBody.rows.length - 1]);
    table.appendChild(tableBody);
}

function addColumn(tableID) {
    var tblHeadObj = document.getElementById(tableID).tHead;
    for (var h = 0; h < tblHeadObj.rows.length; h++) {
        var newTH = document.createElement('th');
        tblHeadObj.rows[h].appendChild(newTH);
        newTH.innerHTML = "Edit Column";
    }

    var tblBodyObj = document.getElementById(tableID).tBodies[0];
    for (var i = 0; i < tblBodyObj.rows.length; i++) {
        setExtraButtons(tblBodyObj.rows[i]);
    }
}

function setExtraButtons(row) {
    var newCell = row.insertCell(-1);

    /*create button Edit*/
    var editButton = document.createElement("input");
    editButton.setAttribute('value', 'Edit');
    editButton.setAttribute('type', 'button');
    editButton.setAttribute('onClick', "editPerson()");
    newCell.appendChild(editButton);

    /*create button Delete*/
    var deleteButton = document.createElement("input");
    deleteButton.value = "Delete";
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('onClick', 'deletePerson()');
    newCell.appendChild(deleteButton);
}

function deletePerson(rowNumber) {
    alert("struguri");
}

function editPerson() {
    alert("vaca");
}

function createInitialTable() {
	createPeopleTable(people);
	addColumn("table");
}