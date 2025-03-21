// document.addEventListener("DOMContentLoaded", function() {
//     let noteField = document.getElementById("note");
//     let saveButton = document.getElementById("save");
//     let deleteButton = document.getElementById("delete");


//     // Load saved note
//     chrome.storage.sync.get("note", function(data) {
//         if (data.note) {
//             noteField.value = data.note;
//         }
//     });

//     // Save note on button click
//     saveButton.addEventListener("click", function() {
//         let noteText = noteField.value;
//         chrome.storage.sync.set({ "note": noteText }, function() {
//             alert("Note saved!");
//         });
//     });

//      // Delete note on button click
//      deleteButton.addEventListener("click", function() {
//         chrome.storage.sync.remove("note", function() {
//             noteField.value = ""; // Clear the text area
//             alert("Note deleted!");
//         });
//     });
// });

// document.getElementById('save').addEventListener('click', function() {
//     localStorage.setItem('note1', document.getElementById('note1').value);
//     localStorage.setItem('note2', document.getElementById('note2').value);
//     localStorage.setItem('note3', document.getElementById('note3').value);
//     localStorage.setItem('note4', document.getElementById('note4').value);
// });
// document.getElementById('delete').addEventListener('click', function() {
//     document.getElementById('note1').value = '';
//     document.getElementById('note2').value = '';
//     document.getElementById('note3').value = '';
//     document.getElementById('note4').value = '';
//     localStorage.removeItem('note1');
//     localStorage.removeItem('note2');
//     localStorage.removeItem('note3');
//     localStorage.removeItem('note4');
// });
// window.onload = function() {
//     document.getElementById('note1').value = localStorage.getItem('note1') || '';
//     document.getElementById('note2').value = localStorage.getItem('note2') || '';
//     document.getElementById('note3').value = localStorage.getItem('note3') || '';
//     document.getElementById('note4').value = localStorage.getItem('note4') || '';
// };


document.addEventListener("DOMContentLoaded", function() {
    let notes = ["note1", "note2", "note3", "note4"];
    
    chrome.storage.sync.get(notes, function(data) {
        notes.forEach(id => {
            document.getElementById(id).value = data[id] || "";
        });
    });
    
    document.getElementById("save").addEventListener("click", function() {
        let notesData = {};
        notes.forEach(id => {
            notesData[id] = document.getElementById(id).value;
        });
        chrome.storage.sync.set(notesData, function() {
            alert("Notes saved!");
        });
    });
    
    document.getElementById("delete").addEventListener("click", function() {
        chrome.storage.sync.remove(notes, function() {
            notes.forEach(id => {
                document.getElementById(id).value = "";
            });
            alert("Notes deleted!");
        });
    });
});
