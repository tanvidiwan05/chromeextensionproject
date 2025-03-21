document.addEventListener("DOMContentLoaded", function() {
    let noteField = document.getElementById("note");
    let saveButton = document.getElementById("save");

    // Load saved note
    chrome.storage.sync.get("note", function(data) {
        if (data.note) {
            noteField.value = data.note;
        }
    });

    // Save note on button click
    saveButton.addEventListener("click", function() {
        let noteText = noteField.value;
        chrome.storage.sync.set({ "note": noteText }, function() {
            alert("Note saved!");
        });
    });

     // Delete note on button click
     deleteButton.addEventListener("click", function() {
        chrome.storage.sync.remove("note", function() {
            noteField.value = ""; // Clear the text area
            alert("Note deleted!");
        });
    });
});
