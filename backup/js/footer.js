/**
 * @footer.html js
 */
$(document).ready(function () {
});
setTimeout(function () {
    initFooter();
}, 450);

function initFooter() {
    if ($('.footer-link').length > 0) {
        showFooter();
    }
    else {
        setTimeout(function () {
            initFooter();
        } ,400);
    }
}
function showFooter() {
    // var arrCn = {
    //     'link_info': [
    //         {
    //             'name': 'Apollo',
    //             'url': 'http://apollo.auto/'
    //         },
    //         {
    //             'name': 'Wad.Ai',
    //             'url': 'http://wad.ai/'
    //         },
    //         {
    //             'name': 'Baidu Broad',
    //             'url': 'http://ai.baidu.com/broad'
    //         }
    //     ],
    //     'link_title': '友情链接：',
    //     'contact_title': '联系我们：',
    //     'email': 'apollo-scape@baidu.com',
    //     'tiptop': '返回顶部',
    //     'copyright': '@ApolloScape 2020'
    // };

    var arrEn = {
        'link_info': [
            {
                'name': 'Apollo',
                'url': 'http://apollo.auto/'
            },
            {
                'name': 'Wad.Ai',
                'url': 'http://wad.ai/'
            },
            {
                'name': 'Github toolkit',
                'url': 'https://github.com/ApolloScapeAuto/dataset-api'
            }
        ],
        'link_title': 'Links：',
        'contact_title': 'Please submit issue at',
        'email': 'https://github.com/ApolloScapeAuto/dataset-api',
        'tiptop': 'back top',
        'copyright': '@ApolloScape 2021'
    };
    
    var html = '';
    var arr = arrEn;
    // if ($.cookie('use_lang') === 'en') {
    //     var arr = arrEn;
    // } else {
    //     var arr = arrCn;
    // }
    
    html += '<div class="content"><span class="link-name">' + arr.link_title +'</span>';
    $.each(arr.link_info, function (index, ele) {
        html += '<a href="' + ele.url + '">' + ele.name + '</a>';
    });
    html += '<span class="link-name">' + arr.contact_title + '</span><span class="email">' + arr.email + '</span></div>';
    html += '<div class="cb"></div>';
    $('.footer-link').html(html);

    html = '';
    html = '<li id="tip-top" class="tip-item tip-top" style="display: list-item;"><a href="#banner-container">' + arr.tiptop + '</a></li>';
    // + '<li class="tip-item tip-email" style="display: list-item;"><a href="mailto:apollo-scape@baidu.com">联系我们</a></li>';
    $('.tooltip').html(html);

    $('#copyright').html(arr.copyright);
}