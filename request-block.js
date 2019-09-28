
const Http = new XMLHttpRequest();
// server url
const url = 'https://event-maps-api.herokuapp.com/organizations/';
// body data
var data;

// xhr.open(form.method, form.action, true);

(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.make_post_request = function( organization_name ) {
        console.log('Hello from javascript block');
        Http.open("POST", url, true);
        Http.setRequestHeader("Content-Type", "application/json");
        data= {'name': organization_name};
        // data= {'p_id': organization_name, '' };

        Http.send( JSON.stringify( data ) );
        // Code that gets executed when the block is run
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'make organization with name: %s', 'make_post_request'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});