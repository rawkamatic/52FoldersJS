var ui = {
    renderPosts: function (posts) {
        var elements = [];
        for (var i in posts) {
            var title = posts[i].title;
            var lastReply = posts[i].lastReply;
            elements.push(articleTemplate(title, lastReply));
        }

        var target = document.querySelector(".container");
        target.innerHTML = elements.join("");
    },
    renderUsers: function (users) {
        var elements = [];
        for (var i in users) {
            var name = users[i].name;
            var avatar = users[i].avatar;
            elements.push(userTemplate(name, avatar));
        }

        var target = document.querySelector(".sidebar-content");
        target.innerHTML = elements.join("");
    }
};

function articleTemplate(title, lastReply) {
    var template = "<article class ='post'>";
    template += "<h2 class='post-title'>" + title + "</h2>";
    template += "<p class='post-meta'>";
    template += "last reply on " + lastReply + "</p>";
    template += "</article>";

    return template;
}

function userTemplate(name, avatar) {
    var template = "<div class ='active-avatar'>";
    template += "<img width='54' src='http://hugify.me/52Folders/commonAssets/images/" + avatar + "' />";
    template += "<h5 class='post-author'>" + name;
    template += "</h5>";
    template += "</div>";

    return template;
}