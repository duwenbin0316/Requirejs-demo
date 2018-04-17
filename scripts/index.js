require.config({
    baseUrl: "scripts/",
    map: {
        '*': {
            'css': 'lib/css.min'
        }
    },
    paths: {
        "jquery": "lib/jquery-2.1.4.min",
        "main": "main",
        "header": "components/header/header"
    },
    shim: {
        "main": {
            deps: ['jquery', 'css!./main.css']
        },
        "header": {
            deps: ['css!./components/header/header']
        }
    }
})

require(['main'], function(main){
    main.start()
})