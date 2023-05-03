// 相比https://ttys3.dev/post/hugo-fast-search/, 我修改了很多部分, 目前的逻辑很简单:
// 监听页面事件:
//如果点击了search-btn或者键盘输入了`Alt` + `\n`, 则会跳转到search page.
//如果键盘输入了`Esc`, 则会跳转到homepage
var search_page_relative_url = "/search"
// ==========================================
// The main keyboard event listener running the show
//
document.addEventListener('keydown', function(event) {

    // `Alt` + `/` to show search.
    if (event.altKey && event.which === 191) {
        // Load json search index if first time invoking search
        // Means we don't load json unless searches are going to happen; keep user payload small unless needed
        navToSearchPage(event)
    }

    // Allow ESC (27) to re-navigate to home page
    if (event.keyCode == 27) {
        navToHomePage()
    }
});


document.querySelector("#search-btn").onclick = function(e) {
    e.stopPropagation();
    navToSearchPage()
}


function navToHomePage() {
    window.location.href = "/"
}

function navToSearchPage() {
    window.location.href = search_page_relative_url
    // document.getElementById("fastSearch").style.visibility = "visible" // show search box
    // document.getElementById("searchInput").focus() // put focus in input box so you can just start typing
    // searchVisible = true
}