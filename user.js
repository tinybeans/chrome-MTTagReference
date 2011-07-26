(function($){
    $('a.taggedlink').each(function(){
        var tag_name = $(this).text();
        var w = $(this).width();
        var input = [
            '<input class="copy_tag_name" value="' + tag_name + '" style="width: ' + w + 'px;" />',
            '<input class="copy_tag_name" value="' + tag_name.replace(/^MT/,'mt:') + '" style="width: ' + w + 'px;" />',
            '<input class="copy_tag_name" value="' + tag_name.replace(/^MT/,'') + '" style="width: ' + w + 'px;" />'
        ];
        $(this).parent().append('<br />' + input.join(''));
    });
    $('h1.tag-name').each(function(){
        var tag_name = $(this).text();
        var input = [
            '<input class="copy_tag_name" value="' + tag_name.replace(/^MT/,'mt:') + '" />',
            '<input class="copy_tag_name" value="' + tag_name.replace(/^MT/,'') + '" />'
        ];
        $(this).append('<br />' + input.join('<br />'));
    });

    // Insert Quick filter
    var quick_seach_form = [
        '<div class="widget search" id="reference-quick-search">',
            '<h2>タグフィルタ</h2>',
            '<form>',
                '<fieldset>',
                    '<legend>タグフィルタ</legend>',
                    '<input type="text" id="reference-quick-search-field" class="searchform">',
                '</fieldset>',
            '</form>',
        '</div>'
    ];
    $('div.menu').prepend(quick_seach_form.join(''));
    $('#reference-quick-search-field').focus().keydown(function(e){
        var keycode = e.which || e.keyCode;
        if (keycode != 13) return;
        $('h1.pageTitle')
            .nextAll(':lt(5)').hide()
                .nextAll().children('h2').hide();
        var text = $(this).val();
        $('a.taggedlink').each(function(){
            var tag_name = $(this).text();
            if (tag_name.indexOf(text) == -1) {
                $(this).parent().hide();
            } else {
                $(this).parent().show();
            }
        });
        return false;
    });

})(jQuery);