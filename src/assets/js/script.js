    // SideNav Initialization
    var container = document.querySelector('.custom-scrollbar');
    var ps = new PerfectScrollbar(container, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });

    // TinyMCE Initialization
    tinymce.init({ selector:'#post_content', menubar: false, height : "294" });
