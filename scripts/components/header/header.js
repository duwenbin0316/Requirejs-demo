define(function() {
    var header = function() {
        this.moduleName = 'header';
    }

    header.prototype = {
        start: function() {
            var navItems = ['nav1', 'nav2', 'nav3', 'nav4']

            // 在header创建导航项
            var ul = $("<ul>").addClass('navList');
            $.each(navItems, function(index, item){
                var li = $("<li>").addClass('navList-item');
                li.text(item);
                ul.append(li);
            })
            $("#header").empty().append(ul);
        }
    }
   
    return new header();
});