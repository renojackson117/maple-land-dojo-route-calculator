function js_set_canvas_size(canvas_id,w,h)
{
    var el = document.getElementById(canvas_id);
    el.style.width = w + "px";
    el.style.height = h + "px";
}