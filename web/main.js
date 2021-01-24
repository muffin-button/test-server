function alertBox() {
    alert("foo");
}

// reference: https://medium.com/pareture/simple-local-cors-test-tool-544f108311c5
function corsCheck() {
    console.log("main function");
    console.log("ajax request to the resource which will require cors enabled");
    // reference: https://cors-test.appspot.com/
    $.ajax({
        dataType: "html",
        url: "https://cors-test.appspot.com/test", // should print {"status":"ok"}
        // url: "http://google.com",  // should fail
        success: function(data) {
            console.log("log response on success");
            console.log(data);
            alert(data);
        }
    });
}