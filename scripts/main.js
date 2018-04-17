/**
 * 定义一个main模块
 */
define(function() {
    var main = function() {
        this.moduleName = 'main'
    }
    
    main.prototype = {
        start: function() {
            // 渲染页面布局
            this.renderLayout();

            // 调用header的start，渲染header内容
            require(['header'], function(header){
                header.start();
            })
        },

        renderLayout: function() {
            var left = $("<div>").addClass('sider left').prop('id', 'sider');

            var right = $("<div>").addClass('right');
            var header = $("<div>").prop('id', 'header');
            var content = $("<div>").prop('id', 'content');
            var footer = $("<div>").prop('id', 'footer');
            right.append(header, content, footer);

            $("#main").append(left, right);
        }
    }

    return new main();
});