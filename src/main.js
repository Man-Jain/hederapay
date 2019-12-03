window.onload = function() {
    var widget_link, iframe, i, widget_links;
      widget = document.getElementById('hedera-widget');
      iframe = document.createElement('iframe');
      iframe.setAttribute('src', widget.href);
      iframe.setAttribute('width', '350');
      iframe.setAttribute('height', '480');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('scrolling', 'no');
      widget.parentNode.replaceChild(iframe, widget);
}